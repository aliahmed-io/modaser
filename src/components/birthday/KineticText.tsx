import { motion, Variants } from "framer-motion";
import { useMemo, memo } from "react";

type AnimationType = 
  | "wave" | "stagger" | "pop" | "slide" | "fade" 
  | "zoom-in" | "float" | "pop-out" | "typewriter-burst" | "stagger-up";

interface KineticTextProps {
  text: string;
  animation?: AnimationType;
  delay?: number; // delay between characters in ms
  className?: string;
}

const charVariants: Record<AnimationType, Variants> = {
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
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },
  float: {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: [10, -5, 0] },
  },
  "pop-out": {
    hidden: { opacity: 0, scale: 1.5 },
    visible: { opacity: 1, scale: 1 },
  },
  "typewriter-burst": {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(5px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  "stagger-up": {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
};

export const KineticText = memo(({
  text,
  animation = "wave",
  delay = 60,
  className,
}: KineticTextProps) => {
  const isArabic = /[\u0600-\u06FF]/.test(text);
  
  // For Arabic, we split by words instead of characters to preserve shaping and direction
  const items = useMemo(() => {
    if (isArabic) {
      return text.split(/(\s+)/); // Keep spaces as separate items
    }
    return Array.from(text);
  }, [text, isArabic]);

  const variants = charVariants[animation];

  return (
    <span className={className} aria-label={text} dir={isArabic ? "rtl" : "ltr"} style={{ display: "inline-block" }}>
      {items.map((item, i) => (
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
          style={{ 
            display: "inline-block",
            whiteSpace: "pre"
          }}
        >
          {item}
        </motion.span>
      ))}
    </span>
  );
});
