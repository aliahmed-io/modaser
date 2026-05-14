import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSoundManager } from "./SoundManager";
import { Mail, MailOpen, Heart } from "lucide-react";

const LETTERS = [
  { id: 1, text: "كل لحظة معاكي بتسعدني، ربنا يخليكي ليا يا أغلى حد في حياتي ❤️" },
  { id: 2, text: "ضحكتك بتنور الدنيا كلها، خليكي دايماً مبسوطة ✨" },
  { id: 3, text: "أنتِ مش بس حبيبتي، أنتِ سندي وكل دنيتي 🌸" },
  { id: 4, text: "وعدي ليكي هفضل جنبك في كل خطوة بتخطيها 😍" },
];

export const LetterBasket = () => {
  const [opened, setOpened] = useState<number[]>([]);
  const [activeLetter, setActiveLetter] = useState<number | null>(null);
  const { playPop, playReveal } = useSoundManager();

  const handleOpen = (id: number) => {
    if (!opened.includes(id)) {
      setOpened([...opened, id]);
    }
    setActiveLetter(id);
    playPop();
    setTimeout(playReveal, 200);
  };

  return (
    <section className="relative z-20 px-4 py-20 max-w-5xl mx-auto w-full">
      <motion.h3 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-6xl font-black text-center mb-12 drop-shadow-xl text-white"
      >
        رسايل من القلب 💌
      </motion.h3>

      <p className="text-center text-white/70 mb-16 text-lg md:text-xl">
        اختاري جواب واقرأي اللي جواه..
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-items-center">
        {LETTERS.map((letter, i) => {
          const isOpened = opened.includes(letter.id);
          return (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotate: isOpened ? 0 : [0, -2, 2, 0], y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleOpen(letter.id)}
              className={`group relative cursor-pointer w-40 h-28 md:w-56 md:h-36 rounded-xl transition-all duration-700 shadow-2xl ${
                isOpened 
                  ? "bg-white/5 border border-white/10" 
                  : "bg-[#e5e5e5] border border-black/10 overflow-hidden"
              }`}
            >
              {!isOpened && (
                <>
                  {/* Top Flap */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-[#d4d4d4] clip-path-flap z-10 origin-top transition-transform duration-700 group-hover:rotate-x-30" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
                  {/* Body Lines */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />
                  {/* Wax Seal / Heart */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-red-700">
                      <Heart size={16} fill="white" className="text-white" />
                    </div>
                  </div>
                </>
              )}
              
              {isOpened ? (
                <div className="flex flex-col items-center justify-center h-full gap-2 opacity-60">
                  <MailOpen size={32} className="text-white" />
                  <span className="text-xs text-white/40 font-display">مفتوح</span>
                </div>
              ) : (
                <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                  <span className="text-black/40 font-display text-sm font-bold uppercase tracking-widest">Open Me</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {activeLetter !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setActiveLetter(null)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 100, rotate: -5 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="bg-[#fdfbf7] p-8 md:p-12 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e5e5e5 31px, #e5e5e5 32px)',
                backgroundPosition: '0 1.5rem',
              }}
            >
              <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-red-500/20" />
              
              <h4 className="font-display text-2xl md:text-3xl font-black text-black mb-8 text-center mt-4">
                حبيبتي..
              </h4>
              <p className="text-xl md:text-2xl text-black/80 text-center leading-relaxed font-light mt-4 mb-8">
                {LETTERS.find((l) => l.id === activeLetter)?.text}
              </p>
              
              <button 
                onClick={() => setActiveLetter(null)}
                className="mx-auto block mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold transition-colors"
              >
                إغلاق
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
