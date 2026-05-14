import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBirthdayStore } from "@/features/core/store/useBirthdayStore";
import { useSoundManager } from "@/components/birthday/SoundManager";
import { useConfetti } from "@/components/birthday/Confetti";
import { Trophy, Star, Heart, Flame, Sparkles } from "lucide-react";

interface Question {
  q: string;
  options: string[];
  correct: number;
  reason: string;
}

export const BirthdayQuiz = () => {
  const { config } = useBirthdayStore();
  const { playPop, playReveal, playBoom } = useSoundManager();
  const { fireCannon, fireStars } = useConfetti();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const questions: Question[] = useMemo(() => {
    const base: Question[] = [
      {
        q: `اسم دلعي ايه؟`,
        options: ["مودي", "حمودي", "حبيبي", "ميدو"],
        correct: 1,
        reason: `طبعاً حمودي! أحلى اسم من أحلى بنت.`
      },
      {
        q: `أول يوم قابلتك؟`,
        options: ["10/9", "13/9", "15/9", "20/9"],
        correct: 1,
        reason: `13/9... اليوم اللي حياتي اتغيرت فيه.`
      },
      {
        q: `أول درس شفتك فيه؟`,
        options: ["درس العربي", "درس الرياضة", "درس الإنجليزي", "؟"],
        correct: 3,
        reason: `مهما كان الدرس، انتي اللي خطفتي عيني! 😅`
      },
      {
        q: `مين أم عيالي؟`,
        options: ["أم ليلى", "رندا", "رورو", "كل ما سبق"],
        correct: 0,
        reason: `أم ليلى طبعاً، ربنا يخليكي ليا يا رب.`
      }
    ];

    return base;
  }, []);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === questions[currentIdx].correct) {
      setScore(s => s + 1);
      playPop();
    } else {
      // Small vibrate or sound
    }

    setTimeout(() => {
      if (currentIdx < questions.length - 1) {
        setCurrentIdx(c => c + 1);
        setSelected(null);
        playReveal();
      } else {
        setShowResult(true);
        playBoom();
        fireCannon();
      }
    }, 1500);
  };

  return (
    <section className="relative z-20 px-4 py-32 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl w-full backdrop-blur-3xl border-2 border-white/10 rounded-[2.5rem] md:rounded-[4rem] p-4 md:p-20 text-center overflow-hidden relative shadow-[0_0_150px_-30px_rgba(var(--color-primary-rgb),0.3)] flex flex-col justify-center items-center"
        style={{ background: 'rgba(10,10,10,0.95)', boxShadow: `0 50px 200px -50px ${config.favoriteColor || '#ff0080'}40` }}
      >
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full" />
        
        {!showResult ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              className="space-y-8"
            >
              <div className="flex justify-center gap-2 mb-4">
                {questions.map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full transition-all duration-500 ${i === currentIdx ? 'w-8 bg-primary' : i < currentIdx ? 'bg-primary/40' : 'bg-white/10'}`} />
                ))}
              </div>
              
              <h3 className="font-display text-2xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 md:mb-12 tracking-tighter">
                {questions[currentIdx].q}
              </h3>

              <div className="grid grid-cols-2 gap-3 md:gap-10 w-full max-w-5xl mx-auto">
                {questions[currentIdx].options.map((opt, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.05, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSelect(i)}
                    className={`w-full min-h-[80px] md:min-h-[160px] flex items-center justify-center p-3 md:p-10 rounded-2xl md:rounded-[2rem] text-lg md:text-4xl lg:text-5xl font-black transition-all duration-500 border-2 shadow-2xl ${
                      selected === i 
                        ? i === questions[currentIdx].correct ? 'bg-green-500/30 border-green-500 text-green-400' : 'bg-red-500/30 border-red-500 text-red-400'
                        : selected !== null && i === questions[currentIdx].correct ? 'bg-green-500/30 border-green-500 text-green-400' : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {opt}
                  </motion.button>
                ))}
              </div>

              {selected !== null && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="text-primary/80 italic text-lg"
                >
                  {questions[currentIdx].reason}
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-10 py-10"
          >
            <div className="flex justify-center">
              <div className="relative">
                <Trophy size={120} className="text-yellow-400 drop-shadow-[0_0_50px_rgba(250,204,21,0.6)]" />
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -inset-6 border-4 border-dashed border-yellow-400/20 rounded-full" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="font-display text-5xl md:text-7xl font-black">نتيجة أسطورية!</h2>
              <p className="text-2xl md:text-4xl text-foreground/80 font-light">
                إنتي جبتي <span className="text-primary font-black">{score}/{questions.length}</span> في اختبار {config.name}!
              </p>
            </div>
            
            <div className="flex justify-center gap-8 text-primary">
              <Star className="animate-pulse" size={32} />
              <Heart className="animate-bounce" size={32} />
              <Flame className="animate-pulse" size={32} />
              <Sparkles className="animate-bounce" size={32} />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setCurrentIdx(0);
                setScore(0);
                setShowResult(false);
                setSelected(null);
                fireStars();
              }}
              className="px-10 py-4 bg-primary text-white rounded-full font-black tracking-widest uppercase text-sm shadow-2xl shadow-primary/30"
            >
              العب تاني 🔄
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
