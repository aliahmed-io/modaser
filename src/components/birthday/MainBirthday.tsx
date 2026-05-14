/**
 * 🌸 BIRTHDAY BLOOM - CINEMATIC ENGINE v2.1
 * -----------------------------------------
 * Developed & Authored by: NABORAJ SARKAR
 * Brand: NS GAMMiNG / NABORAJ SARKAR
 * GitHub: https://github.com/naborajs
 * 
 * This source code is the property of Naboraj Sarkar.
 * Licensed under MIT for community use, but original authorship must be preserved.
 */

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { PhotoGallery } from "./PhotoGallery";
import { HeartProgression } from "./HeartProgression";
import { useSoundManager } from "./SoundManager";
import { CakeCutting } from "./CakeCutting";
import { BirthdayQuiz } from "./BirthdayQuiz";
import { FinalSurprise } from "./FinalSurprise";
import { VideoGallery } from "./VideoGallery";
import { LetterBasket } from "./LetterBasket";
import { PromisesTree } from "./PromisesTree";
import { useBirthdayStore } from "@/features/core/store/useBirthdayStore";
import { getHighlySpecificLetter } from "@/features/core/store/SuperPersonalizedLogic";
import { Car, Music, Code, Gamepad2, Palmtree, Camera, Pizza, Dumbbell, Rocket, Heart } from "lucide-react";

const interestIcons: Record<string, React.ElementType> = {
  car: Car,
  music: Music,
  coding: Code,
  gaming: Gamepad2,
  nature: Palmtree,
  travel: Camera,
  food: Pizza,
  sport: Dumbbell,
  space: Rocket
};


export const MainBirthday = () => {
  const [visible, setVisible] = useState(false);
  const [heroRevealed, setHeroRevealed] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const [emojis, setEmojis] = useState<{ id: number; emoji: string; x: number }[]>([]);
  const [cakeClicks, setCakeClicks] = useState(0);
  const [megaSurprise, setMegaSurprise] = useState(false);
  const giftTimerRef = useRef<number | null>(null);
  
  const { playReveal, playPop, playBoom, playWhoosh, setBgVolume } = useSoundManager();

  // Dynamic Store
  const { config, getMood } = useBirthdayStore();
  const { name, age, customMessage, relationship, favoriteColor, gender, senderName } = config;
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !isMobile && !reduceMotion;
  const mood = getMood();
  const letterSignoff = senderName ? `\n\nWith love,\n${senderName}` : '';
  const primaryColor = favoriteColor || '#FF6B6B';

  const specialCode = useMemo(() => {
    const template = relationship === 'partner' ? 'LOVE' : relationship === 'friend' ? 'LEGEND' : 'HOME';
    const interestMap = [
      { key: 'car', code: 'RIDE' },
      { key: 'music', code: 'BEATS' },
      { key: 'coding', code: 'CODE' },
      { key: 'gaming', code: 'PLAY' },
      { key: 'travel', code: 'TRIP' },
      { key: 'food', code: 'FEAST' },
      { key: 'art', code: 'ART' },
      { key: 'space', code: 'STAR' },
      { key: 'nature', code: 'BLOOM' },
    ];
    const matchedInterest = config.interests?.map((interest) => interest.toLowerCase().trim()).find((interest) =>
      interestMap.some((item) => interest.includes(item.key))
    );
    const interestTag = matchedInterest
      ? interestMap.find((item) => matchedInterest.includes(item.key))?.code
      : 'SPARK';
    return `${template}-${interestTag}-${String(new Date().getFullYear()).slice(-2)}`;
  }, [relationship, config.interests]);

  // Magnetic Effect for Buttons
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!shouldAnimate) return;
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 25;
    const moveY = (clientY - window.innerHeight / 2) / 25;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  useEffect(() => {
    return () => {
      if (giftTimerRef.current) window.clearTimeout(giftTimerRef.current);
    };
  }, []);

  useEffect(() => {
    setBgVolume(0.4);
    setTimeout(() => setVisible(true), 100);
    setTimeout(() => { setHeroRevealed(true); playBoom(); }, 600);
    setTimeout(() => { setShowName(true); playReveal(); }, 1200);
    setTimeout(() => setShowEmojis(true), 1800);
    setTimeout(() => { playBoom(); }, 2000);
  }, [playReveal, playBoom, setBgVolume]);

  const addEmoji = () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(50);
    playPop();
    
    // Base emojis based on relationship
    let emojiList = relationship === 'partner' 
      ? ["💖", "💕", "💍", "💘", "💋", "🌹", "✨", "💫"] 
      : relationship === 'friend' 
        ? ["🎉", "😎", "🍻", "🍕", "⭐", "🔥", "🎈", "🥳"] 
        : ["🎉", "🥳", "💖", "⭐", "🎈", "🎊", "🎁", "🎂", "✨", "💫"];

    // Interest-based mapping
    const interestEmojis: Record<string, string[]> = {
      car: ["🚗", "🏎️", "🏎", "🏎️", "⚙️", "🏁"],
      music: ["🎵", "🎶", "🎸", "🎹", "🎧", "🎤"],
      art: ["🎨", "🖌️", "🖼️", "✨", "🌈"],
      coding: ["💻", "⌨️", "🚀", "⚡", "👾"],
      gaming: ["🎮", "🕹️", "👾", "🎯", "🎲"],
      nature: ["🌿", "🌸", "🦋", "🍄", "🌙", "⭐"],
      travel: ["✈️", "🗺️", "🏔️", "🏝️", "🗼", "🗽"],
      food: ["🍕", "🍔", "🍣", "🍦", "🍩", "🧁"],
      sport: ["⚽", "🏀", "🎾", "⛳", "🏆", "🏃"],
      space: ["🚀", "🪐", "🛸", "☄️", "🌌", "👽"]
    };

    // Inject interest emojis if any match
    if (config.interests && config.interests.length > 0) {
      config.interests.forEach(interest => {
        const lowerInterest = interest.toLowerCase().trim();
        if (interestEmojis[lowerInterest]) {
          emojiList = [...emojiList, ...interestEmojis[lowerInterest]];
        }
      });
    }

    const newEmoji = {
      id: Date.now(),
      emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
      x: 20 + Math.random() * 60,
    };
    setEmojis((prev) => [...prev, newEmoji]);
    setTimeout(() => setEmojis((prev) => prev.filter((e) => e.id !== newEmoji.id)), 2000);
  };

  const scrollToCake = () => {
    const element = document.getElementById('cake-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCakeClick = () => {
    addEmoji();
    const newCount = cakeClicks + 1;
    setCakeClicks(newCount);
    
    // Easter Egg: Mega Surprise
    if (newCount === 7) {
      setMegaSurprise(true);
      playBoom();
      playReveal();
      if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate([100, 50, 100, 50, 300]);
      setTimeout(() => setMegaSurprise(false), 3000);
      setCakeClicks(0);
    }
  };



  const activeInterests = useMemo(() => {
    return (config.interests || []).map(i => i.toLowerCase().trim()).filter(i => interestIcons[i]);
  }, [config.interests]);



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: "blur(10px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSection = (
    <motion.section 
      key="hero"
      variants={containerVariants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      <motion.div 
        style={{ x: springX, y: springY }}
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <div className="w-[150%] h-[150%] bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_70%)] opacity-[0.05]" />
      </motion.div>

      <motion.div variants={itemVariants} className="mb-6 relative z-10">
        <div className="flex justify-center mb-8"><HeartProgression stage={4} /></div>
        <motion.div 
          whileHover={shouldAnimate ? { scale: 1.2, rotate: relationship === 'friend' ? [0, -10, 10, 0] : [0, -5, 5, 0] } : undefined}
          whileTap={{ scale: 0.9 }}
          className={`text-8xl md:text-[10rem] mb-6 cursor-pointer ${isMobile ? 'drop-shadow-lg' : 'drop-shadow-[0_0_50px_var(--color-primary)]'}`} 
          onClick={handleCakeClick}
        >
          🎂
        </motion.div>
        {cakeClicks > 0 && cakeClicks < 7 && (
          <p className="text-primary font-bold animate-pulse">اضغطي 🎂 {7 - cakeClicks} مرات كمان!</p>
        )}
      </motion.div>

      <motion.h1 variants={itemVariants} className="font-display text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-black mb-4 break-words leading-tight px-2">
        <span className="bg-gradient-to-r from-[var(--color-primary)] via-[hsl(45,100%,75%)] to-[hsl(200,80%,70%)] bg-clip-text text-transparent animate-gradient-shift drop-shadow-[0_4px_30px_rgba(255,255,255,0.3)]">
          {age ? `عيد ميلاد سعيد الـ ${age}` : "عيد ميلاد سعيد"}
        </span>
      </motion.h1>

      <motion.h2 variants={itemVariants} className="font-display text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black text-foreground animate-glow-pulse mb-10 break-words leading-none px-2">
        <span className="animate-in fade-in duration-1000 delay-1000">يا {name}!</span>
      </motion.h2>
    </motion.section>
  );

  const messageSection = (
    <section key="message" className="relative z-20 flex flex-col items-center justify-center h-screen px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full p-8 md:p-16 backdrop-blur-md md:backdrop-blur-3xl border relative overflow-hidden"
        style={{
          background: `linear-gradient(165deg, rgba(30,30,30,0.9), rgba(10,10,10,0.98))`,
          borderColor: `${primaryColor}40`,
          boxShadow: `0 30px 100px -30px ${primaryColor}30`,
          borderRadius: 'var(--card-radius, 2rem)',
        }}
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl">✨</div>
        <div className="text-5xl text-center mb-6 animate-bounce">💌</div>
        <h3 className="font-display text-3xl md:text-5xl font-black text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {relationship === 'partner' ? "من أعماق قلبي" : relationship === 'friend' ? "رسالة أسطورية" : "رسالة خاصة"}
        </h3>
        <div className="space-y-6 text-center text-xl md:text-2xl text-foreground/90 leading-relaxed">
          <p className="font-display font-black text-2xl md:text-4xl" style={{ color: primaryColor }}>عزيزتي {name}،</p>
          {customMessage ? (
            <p className="italic font-light text-2xl md:text-4xl leading-tight">"{customMessage}"</p>
          ) : (
            <div className="space-y-4">
              <p>{mood === 'romantic' ? "حياتي منورة بوجودك فيها، النهاردة بنحتفل بأجمل وأحن روح عرفتها." : mood === 'energetic' ? "أنت مش بتكبر، أنت بتحلو! الأساطير بس اللي بيستحقوا يوم عظيم زي ده!" : "يوم كله فرح وامتنان عشان بنحتفل بيك. أنت بتنور حياتنا كلها."}</p>
              <p className="text-lg md:text-xl text-foreground/60">يا رب السنة دي تكون أجمل وأحلى سنة في حياتك كلها. ✨</p>
            </div>
          )}
          <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-white/5 transition-transform duration-500 hover:scale-[1.01] max-h-[40vh] overflow-y-auto scrollbar-hide shadow-inner">
            <div dir="rtl" className="text-right text-base md:text-lg lg:text-xl leading-relaxed whitespace-pre-line font-light text-foreground/90">
              {config.letterOverride
                ? `${config.letterOverride}${letterSignoff}`
                : `${getHighlySpecificLetter(name, relationship, gender, config.interests)}${letterSignoff}`}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );

  const cakeSection = (
    <section key="cake" className="relative z-20 flex items-center justify-center min-h-screen px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="text-center w-full max-w-4xl"
      >
        <h3 className="font-display text-4xl sm:text-6xl md:text-7xl font-black mb-6 drop-shadow-xl" style={{ color: primaryColor }}>
          وقت تقطيع التورتة! 🎂
        </h3>
        <p className="text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          جاهزة لأحلى لحظة؟ يلا نعمل شوية سحر! ✨
        </p>
        <div className="flex items-center justify-center">
          <CakeCutting />
        </div>
      </motion.div>
    </section>
  );

  const slides = [
    heroSection,
    <div key="photo" className="flex items-center justify-center min-h-screen"><PhotoGallery /></div>,
    messageSection,
    <div key="letter" className="flex items-center justify-center min-h-screen"><LetterBasket /></div>,
    <div key="promises" className="flex items-center justify-center min-h-screen"><PromisesTree /></div>,
    <div key="quiz" className="flex items-center justify-center min-h-screen"><BirthdayQuiz /></div>,
    ...(config.showVideoSection && config.videos && config.videos.length > 0 ? [<div key="video" className="flex items-center justify-center min-h-screen"><VideoGallery /></div>] : []),
    ...(config.showCakeSection ? [cakeSection] : []),
    <div key="final" className="flex items-center justify-center min-h-screen"><FinalSurprise /></div>
  ];

  return (
    <div
      onMouseMove={shouldAnimate ? handleMouseMove : undefined}
      className={`fixed inset-0 overflow-hidden bg-background ${visible ? "opacity-100" : "opacity-0"} ${megaSurprise ? "animate-screen-shake" : ""}`}
    >
      {/* Mega Surprise Overlay */}
      {megaSurprise && (
        <div className="fixed inset-0 z-[100] bg-white/20 backdrop-blur-sm pointer-events-none animate-flash flex items-center justify-center">
          <h1 className="text-6xl md:text-9xl font-black text-white drop-shadow-2xl animate-bounce">مفاجأة كبرى! 🎊</h1>
        </div>
      )}

      <AnimatePresence>
        {emojis.map((e) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, y: 100, x: `${e.x}%` }}
            animate={{ opacity: 1, y: -600, rotate: 360 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="fixed z-50 text-5xl pointer-events-none"
          >
            {e.emoji}
          </motion.div>
        ))}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 overflow-y-auto overflow-x-hidden pb-24"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between pointer-events-none">
        <div className="flex gap-2 pointer-events-auto">
          {currentSlide > 0 && (
            <button
              onClick={() => setCurrentSlide(s => s - 1)}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold transition-all border border-white/20"
            >
              السابق
            </button>
          )}
        </div>
        
        <div className="flex gap-1">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-primary w-6' : 'bg-white/30'}`}
            />
          ))}
        </div>

        <div className="flex gap-2 pointer-events-auto">
          {currentSlide < slides.length - 1 && (
            <button
              onClick={() => setCurrentSlide(s => s + 1)}
              className="px-8 py-3 rounded-full bg-primary hover:bg-primary/80 text-white font-bold transition-all shadow-lg shadow-primary/30 animate-pulse"
            >
              التالي
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
