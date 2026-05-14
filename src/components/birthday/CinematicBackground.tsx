import React from 'react';
import { motion } from 'framer-motion';

export const CinematicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
      {/* Dynamic Mesh Gradients */}
      <motion.div
        animate={{
          x: [0, 50, -25, 0],
          y: [0, -50, 25, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[10%] -left-[10%] w-[80%] h-[80%] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #8a0000 0%, transparent 70%)' }}
      />
      
      <motion.div
        animate={{
          x: [0, -40, 60, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] rounded-full opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #4a0000 0%, transparent 70%)' }}
      />

      {/* High-Visibility 2D Texture Layer */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 z-[1] bg-repeat bg-center opacity-15"
        style={{ 
          backgroundImage: `url('/audio/texture-removebg-preview.png')`,
          backgroundSize: '800px',
        }}
      />

      {/* Code-Based Floating "Stardust" Animation */}
      <div className="absolute inset-0 z-[2]">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: Math.random() * 0.8,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: ["-10%", "10%"],
              x: ["-5%", "5%"],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
            className="absolute w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          />
        ))}
      </div>

      {/* Subtle Noise/Grain Overlay */}
      <div 
        className="absolute inset-0 z-[3] opacity-[0.08] mix-blend-screen pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
    </div>
  );
};
