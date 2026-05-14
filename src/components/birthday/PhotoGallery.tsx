import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ALL_ASSETS } from "@/config/assets";
import { useBirthdayStore } from "@/features/core/store/useBirthdayStore";
import { useIsMobile } from "@/hooks/use-mobile";

export const PhotoGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [photoRatios, setPhotoRatios] = useState<Record<string, number>>({});
  const [supportsTilt, setSupportsTilt] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const isMobile = useIsMobile();
  const { config, getAnimationPacing } = useBirthdayStore();
  const { relationship } = config;

  const animationPacing = getAnimationPacing();
  const reducedMotion = isReducedMotion || isMobile;
  const transitionDuration = reducedMotion ? 0.9 : animationPacing === 'fast' ? 0.8 : animationPacing === 'slow' ? 1.5 : 1.2;
  const autoAdvanceDelay = animationPacing === 'fast' ? 4500 : animationPacing === 'slow' ? 8500 : 6000;

  const photos = useMemo(() => {
    return ALL_ASSETS.map((asset, i) => ({
      ...asset,
      key: `asset-${i}`,
      fallback: "" 
    }));
  }, []);

  // Custom Cursor Tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleImageLoad = (key: string, e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalWidth && naturalHeight) {
      setPhotoRatios((prev) => ({ ...prev, [key]: naturalWidth / naturalHeight }));
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setSupportsTilt(window.matchMedia('(pointer:fine)').matches && window.innerWidth >= 768);
    setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (lightbox !== null) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % photos.length);
    }, autoAdvanceDelay);
    return () => clearInterval(interval);
  }, [lightbox, photos.length, autoAdvanceDelay]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightbox(null);
      }
      if (lightbox !== null) {
        if (event.key === 'ArrowRight') {
          setActiveIndex((prev) => (prev + 1) % photos.length);
        }
        if (event.key === 'ArrowLeft') {
          setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox, photos.length]);

  if (photos.length === 0) return null;

  return (
    <>
      <section className="relative z-20 px-4 py-20 max-w-4xl mx-auto overflow-hidden">
        <motion.h3 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-center mb-16 bg-gradient-to-b from-white via-white/80 to-white/20 bg-clip-text text-transparent drop-shadow-2xl"
        >
          ذكرياتنا 📸
        </motion.h3>

        <motion.div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`relative group ${isMobile ? '' : 'cursor-none'}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: transitionDuration, ease: [0.22, 1, 0.36, 1] }}
              style={{ aspectRatio: photoRatios[photos[activeIndex].key] ?? 16 / 9 }}
              className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.8)] border border-white/10 max-h-[50vh] md:max-h-[60vh] w-full"
              onClick={() => setLightbox(activeIndex)}
            >
              {photos[activeIndex].type === 'video' ? (
                <video
                  src={photos[activeIndex].src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000"
                />
              ) : (
                <img
                  src={photos[activeIndex].src}
                  alt={photos[activeIndex].caption}
                  onLoad={(e) => handleImageLoad(photos[activeIndex].key, e)}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-12 left-0 right-0 text-center px-12">
                <motion.p 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="font-display text-2xl md:text-4xl text-white font-black italic tracking-tighter drop-shadow-2xl"
                >
                  {photos[activeIndex].caption}
                </motion.p>
              </div>

              {/* Custom 3D Cursor */}
              <motion.div 
                style={{ x, y }}
                className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white font-black tracking-widest text-xs">
                  عرض كبير
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Controls */}
          <div className="absolute inset-0 flex items-center justify-between px-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <button 
              onClick={(e) => { e.stopPropagation(); setActiveIndex((activeIndex - 1 + photos.length) % photos.length); }}
              className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white text-4xl hover:bg-primary transition-all shadow-2xl"
            >
              ‹
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setActiveIndex((activeIndex + 1) % photos.length); }}
              className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white text-4xl hover:bg-primary transition-all shadow-2xl"
            >
              ›
            </button>
          </div>
        </motion.div>

        {/* Cinematic Thumbnails */}
        <div className="flex justify-center mt-20 gap-4 md:gap-8 flex-wrap">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              onClick={() => setActiveIndex(i)}
              whileHover={!isMobile ? { scale: 1.15, y: -10, rotate: i % 2 === 0 ? 2 : -2 } : undefined}
              whileTap={{ scale: 0.9 }}
              className={`relative cursor-pointer rounded-xl md:rounded-2xl overflow-hidden w-16 h-16 md:w-28 md:h-28 border-2 transition-all duration-700 ${i === activeIndex ? "border-primary scale-110 shadow-[0_10px_30px_rgba(var(--color-primary-rgb),0.4)]" : "border-transparent opacity-30 hover:opacity-100"}`}
            >
              {photo.type === 'video' ? (
                <video src={photo.src} className="w-full h-full object-cover" muted playsInline />
              ) : (
                <img src={photo.src} className="w-full h-full object-cover" />
              )}
              {i === activeIndex && (
                <motion.div 
                  layoutId="active-thumb-glow"
                  className="absolute inset-0 bg-primary/10 pointer-events-none"
                />
              )}
              {photo.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="text-white text-2xl">▶</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-md md:backdrop-blur-3xl p-4 md:p-8"
            onClick={() => setLightbox(null)}
          >
            <motion.div 
              initial={{ scale: 0.7, opacity: 0, rotateX: 20 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 1.3, opacity: 0, filter: "blur(20px)" }}
              className="relative max-w-7xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {photos[lightbox].type === 'video' ? (
                <video
                  src={photos[lightbox].src}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] object-contain rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_100px_200px_-50px_rgba(0,0,0,1)] border border-white/10"
                />
              ) : (
                <img
                  src={photos[lightbox].src}
                  alt={photos[lightbox].caption}
                  className="w-full max-h-[80vh] object-contain rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_100px_200px_-50px_rgba(0,0,0,1)] border border-white/10"
                />
              )}
              <div className="text-center mt-8 md:mt-12">
                <p className="font-display text-2xl md:text-6xl text-white font-black italic tracking-tighter drop-shadow-2xl">
                  {photos[lightbox].caption}
                </p>
              </div>
              <button 
                onClick={() => setLightbox(null)}
                className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white text-xl md:text-3xl transition-all shadow-2xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
