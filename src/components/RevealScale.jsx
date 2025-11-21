import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function RevealScale({
    children,
    // Define the transition states as variants
    enter = { opacity: 1, scale: 1 },
    exit = { opacity: 0, scale: 0.5 },
    
    duration = 0.9,
    once = false,        // if true -> animate only first time (like AOS). false -> animate every enter/leave
    rootMargin = "-10% 0px -10% 0px" // controls when element is considered "in view"
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
            transition={{ duration, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}