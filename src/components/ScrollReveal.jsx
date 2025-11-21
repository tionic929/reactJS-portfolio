// components/ScrollReveal.jsx (Reference from previous turn)
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollReveal({
  children,
  startOffset = 50, 
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ 
    target: ref,
    offset: ["start end", "end start"], 
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0, 0.8, 1],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.2],
    [startOffset, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="will-change-transform will-change-opacity" 
    >
      {children}
    </motion.div>
  );
}