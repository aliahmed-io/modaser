import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMemo } from "react";

interface Orb {
  id: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
  initialX: number;
  initialY: number;
}

export const FloatingOrbs = ({ count = 8 }) => {
  const isMobile = useIsMobile();
  const orbCount = isMobile ? 2 : count;

  const orbs: Orb[] = useMemo(
    () =>
      Array.from({ length: orbCount }, (_, i) => ({
        id: i,
        color: ["#FF1493", "#00FFFF", "#FFD700", "#FF69B4", "#4ECDC4"][i % 5],
        size: isMobile ? 60 : 40 + Math.random() * 60,
        duration: isMobile ? 12 : 8 + Math.random() * 6,
        delay: Math.random() * 2,
        initialX: isMobile ? (i === 0 ? 5 : 65) : Math.random() * 80 + 10,
        initialY: isMobile ? (i === 0 ? 10 : 60) : Math.random() * 80 + 10,
      })),
    [orbCount, isMobile]
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full ${isMobile ? "blur-2xl" : "blur-3xl"}`}
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle at 30% 30%, ${orb.color}88, ${orb.color}22)`,
            left: `${orb.initialX}%`,
            top: `${orb.initialY}%`,
          }}
          animate={
            isMobile
              ? { opacity: [0.2, 0.4, 0.2] }
              : {
                  x: [0, Math.sin(orb.id) * 200, 0],
                  y: [0, Math.cos(orb.id) * 200, 0],
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }
          }
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
