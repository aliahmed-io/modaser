import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SplashScreen } from "@/components/birthday/SplashScreen";
import { CinematicIntro } from "@/components/birthday/CinematicIntro";
import { MainBirthday } from "@/components/birthday/MainBirthday";
import { useBirthdayStore } from "@/features/core/store/useBirthdayStore";
import { useDynamicTheme } from "@/features/core/theme/useDynamicTheme";
import { useIsMobile } from "@/hooks/use-mobile";

type Phase = "splash" | "intro" | "main";

const Index = () => {
  const [phase, setPhase] = useState<Phase>("splash");
  const isMobile = useIsMobile();
  useDynamicTheme();

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "hsl(345, 50%, 5%)" }}
    >
      {/* Static 2D background — single SVG layer, zero runtime cost */}
      <svg
        className="pointer-events-none fixed inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Radial vignette */}
          <radialGradient id="bg-vignette" cx="50%" cy="50%" r="75%">
            <stop offset="0%" stopColor="hsl(348,83%,47%)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="hsl(345,50%,5%)" stopOpacity="0" />
          </radialGradient>

          {/* Subtle diagonal line texture */}
          <pattern id="lines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="hsl(348,83%,47%)" strokeWidth="0.4" strokeOpacity="0.07" />
          </pattern>
        </defs>

        {/* Line texture layer */}
        <rect width="100%" height="100%" fill="url(#lines)" />

        {/* Radial glow at center */}
        <rect width="100%" height="100%" fill="url(#bg-vignette)" />

        {/* Decorative corner roses — pure 2D, static */}
        <g opacity="0.12" fill="none" stroke="hsl(348,83%,47%)" strokeWidth="1">
          {/* Top-left */}
          <circle cx="0" cy="0" r="120" />
          <circle cx="0" cy="0" r="80" />
          <circle cx="0" cy="0" r="40" />
          {/* Bottom-right */}
          <circle cx="100%" cy="100%" r="160" />
          <circle cx="100%" cy="100%" r="110" />
          <circle cx="100%" cy="100%" r="60" />
        </g>

        {/* Horizontal divider line — top */}
        <line x1="10%" y1="1" x2="90%" y2="1" stroke="hsl(348,83%,47%)" strokeWidth="0.5" strokeOpacity="0.15" />
        {/* Horizontal divider line — bottom */}
        <line x1="10%" y1="99.9%" x2="90%" y2="99.9%" stroke="hsl(348,83%,47%)" strokeWidth="0.5" strokeOpacity="0.15" />
      </svg>

      {/* Vignette overlay */}
      <div className="vignette" />

      {/* Skip button */}
      {phase !== "main" && (
        <button
          onClick={() => setPhase("main")}
          className="fixed bottom-6 right-6 z-50 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl rounded-full text-white/40 hover:text-white/90 text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-2xl"
        >
          تخطي المقدمة ⏭
        </button>
      )}

      <AnimatePresence mode="wait">
        {phase === "splash" && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: isMobile ? 1 : 1.03 }}
            transition={{ duration: 0.6 }}
          >
            <SplashScreen onStart={() => setPhase("intro")} />
          </motion.div>
        )}

        {phase === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CinematicIntro onComplete={() => setPhase("main")} />
          </motion.div>
        )}

        {phase === "main" && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <MainBirthday />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
