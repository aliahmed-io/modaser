import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Sparkles, Heart } from "lucide-react";
import { useSoundManager } from "./SoundManager";

const PROMISES = [
  { id: 1, text: "أوعدك أفضل جنبك في كل لحظة، في الحلوة والمرة.", x: 25, y: 40, delay: 0 },
  { id: 2, text: "أوعدك أحافظ على ضحكتك اللي بتنور دنيتي.", x: 50, y: 20, delay: 0.2 },
  { id: 3, text: "أوعدك إني هفضل فخور بيكي وبكل خطوة بتخطيها.", x: 75, y: 35, delay: 0.4 },
  { id: 4, text: "أوعدك إننا هنبني مع بعض أجمل ذكريات في السنين الجاية.", x: 40, y: 55, delay: 0.6 },
  { id: 5, text: "أوعدك إني هطلب إيدك من والدك في أقرب فرصة ممكنة إن شاء الله.", x: 60, y: 55, delay: 0.8 },
];

export const PromisesTree = () => {
  const [activePromise, setActivePromise] = useState<number | null>(null);
  const [opened, setOpened] = useState<number[]>([]);
  const { playPop, playReveal } = useSoundManager();

  const handleLeafClick = (id: number) => {
    if (!opened.includes(id)) {
      setOpened([...opened, id]);
    }
    setActivePromise(id);
    playPop();
    setTimeout(playReveal, 200);
  };

  return (
    <section className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(120,40%,20%)]/20 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center z-20 mb-16"
      >
        <h3 className="font-display text-5xl md:text-7xl font-black mb-6 flex items-center justify-center gap-4 text-white drop-shadow-2xl">
          شجرة الوعود <Sparkles className="text-yellow-400" size={40} />
        </h3>
        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light">
          اضغطي على الأوراق المضيئة عشان تشوفي وعودي ليكي للسنين الجاية..
        </p>
      </motion.div>

      {/* Abstract Tree Container */}
      <div className="relative w-full max-w-[400px] h-[400px] md:h-[500px] z-10 flex justify-center items-end">
        {/* Abstract Trunk (SVG) */}
        <svg viewBox="0 0 100 200" className="absolute bottom-0 w-32 md:w-48 h-auto opacity-40">
          <path d="M 40,200 Q 40,100 20,50 Q 50,120 50,200" fill="none" stroke="#8B5A2B" strokeWidth="4" />
          <path d="M 60,200 Q 60,100 80,40 Q 50,120 50,200" fill="none" stroke="#8B5A2B" strokeWidth="4" />
          <path d="M 50,200 L 50,60" fill="none" stroke="#8B5A2B" strokeWidth="6" />
        </svg>

        {/* Leaves */}
        {PROMISES.map((promise) => {
          const isOpened = opened.includes(promise.id);
          return (
            <motion.div
              key={promise.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: promise.delay, duration: 0.8, type: "spring" }}
              className="absolute cursor-pointer group"
              style={{
                left: `${promise.x}%`,
                top: `${promise.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => handleLeafClick(promise.id)}
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ 
                  duration: 4 + Math.random() * 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full transition-all duration-500 shadow-[0_0_30px_rgba(34,197,94,0.3)] ${
                  isOpened ? 'bg-green-500/20 border border-green-400/30' : 'bg-gradient-to-br from-green-400 to-emerald-600 border border-white/20'
                }`}
              >
                {/* Glow effect */}
                {!isOpened && (
                  <div className="absolute inset-0 bg-green-400 blur-md opacity-40 rounded-full animate-pulse" />
                )}
                
                {promise.id === 5 ? (
                  <Heart 
                    size={32} 
                    className={`relative z-10 transition-colors duration-300 ${isOpened ? 'text-red-300' : 'text-white'}`} 
                    fill={isOpened ? "none" : "currentColor"}
                  />
                ) : (
                  <Leaf 
                    size={32} 
                    className={`relative z-10 transition-colors duration-300 ${isOpened ? 'text-green-300' : 'text-white'}`} 
                    fill={isOpened ? "none" : "currentColor"}
                  />
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Promise Modal Overlay */}
      <AnimatePresence>
        {activePromise !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setActivePromise(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-b from-[hsl(120,30%,15%)] to-[hsl(120,40%,5%)] p-8 md:p-16 rounded-[3rem] shadow-[0_0_100px_rgba(34,197,94,0.3)] border border-green-500/30 max-w-2xl w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -top-20 -right-20 text-green-500/10 rotate-45">
                <Leaf size={200} fill="currentColor" />
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-8 border border-green-400/30">
                  {activePromise === 5 ? (
                    <Heart className="text-red-400" size={40} fill="currentColor" />
                  ) : (
                    <Leaf className="text-green-400" size={40} />
                  )}
                </div>
                
                <h4 className="font-display text-2xl md:text-3xl font-black text-green-300 mb-6">
                  وعدي ليكي..
                </h4>
                
                <p className="text-2xl md:text-4xl text-white leading-relaxed font-bold">
                  {PROMISES.find((p) => p.id === activePromise)?.text}
                </p>
                
                <button 
                  onClick={() => setActivePromise(null)}
                  className="mt-12 px-10 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold transition-all shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                >
                  حفظ الوعد 💚
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
