import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface Gradient {
  id: number;
  delay: number;
  color1: string;
  color2: string;
}

export const AnimatedGradient = () => {
  const isMobile = useIsMobile();

  // Skip entirely on mobile — conic-gradient + blur(80px) + rotate is the worst GPU combo
  if (isMobile) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 30%, rgba(153,27,27,0.18) 0%, transparent 60%), " +
              "radial-gradient(ellipse at 80% 80%, rgba(185,28,28,0.12) 0%, transparent 60%)",
          }}
        />
      </div>
    );
  }

  const gradients: Gradient[] = [
    { id: 1, delay: 0, color1: "rgba(153, 27, 27, 0.18)", color2: "rgba(185, 28, 28, 0.08)" },
    { id: 2, delay: 1, color1: "rgba(127, 29, 29, 0.12)", color2: "rgba(220, 38, 38, 0.05)" },
    { id: 3, delay: 2, color1: "rgba(180, 83, 9, 0.08)",  color2: "rgba(120, 53, 15, 0.04)" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {gradients.map((gradient) => (
        <motion.div
          key={gradient.id}
          className="absolute inset-0"
          style={{
            background: `conic-gradient(${gradient.color1}, ${gradient.color2})`,
            filter: "blur(60px)",
          }}
          animate={{ rotate: [0, 360], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 25, delay: gradient.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
};
