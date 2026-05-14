import { useState } from "react";
import { useSoundManager } from "./SoundManager";

interface SplashScreenProps {
  onStart: () => void;
}

export const SplashScreen = ({ onStart }: SplashScreenProps) => {
  const [tapped, setTapped] = useState(false);
  const { startMusic } = useSoundManager();

  const handleTap = () => {
    setTapped(true);
    startMusic();
    setTimeout(onStart, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer transition-all duration-1000 ${tapped ? "opacity-0 scale-110 blur-md" : "opacity-100 scale-100"}`}
      style={{
        background: "linear-gradient(135deg, #1a0508 0%, #000000 100%)",
      }}
      onClick={handleTap}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="z-10 flex flex-col items-center">
        <h2 className="font-display text-4xl md:text-6xl text-white/90 drop-shadow-2xl mb-6 text-center px-4 leading-relaxed tracking-wider font-light">
          هناك شيء خاص بانتظارك...
        </h2>
        
        <div className="w-16 h-[1px] bg-white/20 mb-10"></div>

        <div className="animate-pulse-slow z-10 border border-white/10 px-10 py-4 rounded-full bg-black/40 backdrop-blur-md hover:bg-white/5 transition-colors">
          <p className="text-white/60 text-sm md:text-base tracking-[0.2em] font-light">
            اضغطي للدخول
          </p>
        </div>
      </div>

      {/* Elegant minimalist particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: 1 + Math.random() * 2,
              height: 1 + Math.random() * 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px rgba(255,255,255,0.2)",
              animation: `float-particle ${6 + Math.random() * 6}s ease-in-out ${Math.random() * 2}s infinite alternate`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
