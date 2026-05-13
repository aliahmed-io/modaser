import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export const ShootingStars = ({ count = 10 }) => {
  const isMobile = useIsMobile();

  const stars: Star[] = useMemo(
    () =>
      Array.from({ length: isMobile ? 0 : count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 1.5,
      })),
    [isMobile, count]
  );

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            x: [0, 200],
            y: [0, -200],
            opacity: [1, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <div
            className="w-1 h-1 bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              boxShadow: "0 0 8px #fff, 0 0 16px #fff",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
