import { motion } from "framer-motion";

const Transition = (OgComponent) => {
  return () => (
    <>
      {/* Current page */}

      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-[#606C38] pointer-events-none z-[9999]"
        initial={{ scaleY: 1, transformOrigin: "top" }}   // enter: fully covers
        animate={{ scaleY: 0, transformOrigin: "top" }}   // animate downwards to reveal
        exit={{ scaleY: 1, transformOrigin: "top" }}       // exit: cover page again
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <OgComponent />
    </>
  );
};

export default Transition;
