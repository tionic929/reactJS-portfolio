import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Reveal({
  children,
  enter = { opacity: 1, y: 0 },
  exit = { opacity: 0, y: -30 },
  duration = 0.6,
  once = false,
  rootMargin = "0% 0px -10% 0px"
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const hasEntered = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let mounted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!mounted) return;

        if (entry.isIntersecting) {
          controls.start(enter).catch(() => {});
          if (once) hasEntered.current = true;
        } else {
          if (!once || !hasEntered.current) {
            controls.start(exit).catch(() => {});
          }
        }
      },
      { root: null, rootMargin }
    );

    observer.observe(node);

    return () => {
      mounted = false;
      try {
        observer.unobserve(node);
      } catch (e) {}
      if (observer.disconnect) observer.disconnect();
    };
  }, [controls, enter, exit, once, rootMargin]);

  return (
    <motion.div
      ref={ref}
      initial={exit}
      animate={controls}
      transition={{ duration, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
