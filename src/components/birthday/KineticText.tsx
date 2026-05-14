import { motion } from "framer-motion";
import { useMemo } from "react";

type AnimationType = "wave" | "stagger" | "pop" | "slide" | "fade";

interface KineticTextProps {
  text: string;
  animation?: AnimationType;
  delay?: number; // delay between characters in ms
  className?: string;
}

const charVariants: Record<AnimationType, { hidden: object; visible: object }> = {
  wave: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  stagger: {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  },
  pop: {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  },
  slide: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export const KineticText = ({
  text,
  animation = "wave",
  delay = 60,
  className,
}: KineticTextProps) => {
  const chars = useMemo(() => Array.from(text), [text]);
  const variants = charVariants[animation];

  return (
    <span className={className} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.4,
            delay: (i * delay) / 1000,
            ease: "easeOut",
          }}
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};
