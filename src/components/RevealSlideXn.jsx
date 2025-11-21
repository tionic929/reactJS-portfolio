// src/components/RevealSlideX.jsx (or whichever Reveal component is causing the error)

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const RevealSlideX = ({ children, delay = 0.2 }) => {
    // 1. Initialize Animation Controls
    const controls = useAnimation();
    
    // 2. Define Ref and InView status
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 }); // Detect when 50% visible

    // 3. Use useEffect to start animation only when component is mounted AND visible
    useEffect(() => {
        if (isInView) {
            // ✅ This is the correct place to call controls.start()
            controls.start("visible");
        }
    }, [controls, isInView]); // Dependency array ensures it only runs when view status changes

    return (
        <motion.div
            ref={ref} // Attach the ref to the element
            variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: delay } },
            }}
            initial="hidden"
            animate={controls} // Use the controls
        >
            {children}
        </motion.div>
    );
};

export default RevealSlideX;