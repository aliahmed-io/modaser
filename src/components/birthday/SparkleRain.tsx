import { motion } from "framer-motion";
import { useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Sparkle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  driftX: number; // pre-computed, never changes
}

export const SparkleRain = ({ intensity = 20 }) => {
  const isMobile = useIsMobile();

  // Pre-compute everything in useMemo — never call Math.random() inside animate
  const sparkles: Sparkle[] = useMemo(
    () =>
      Array.from({ length: isMobile ? 0 : intensity }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        size: 2 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.4,
        driftX: (Math.random() - 0.5) * 80,
      })),
    [intensity, isMobile]
  );

  if (isMobile || sparkles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.left}%`,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: "#ffffff",
            boxShadow: "0 0 6px #ffffff",
            top: "-10px",
          }}
          animate={{
            y: [0, 1200],
            opacity: [sparkle.opacity, 0],
            x: [0, sparkle.driftX],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};
