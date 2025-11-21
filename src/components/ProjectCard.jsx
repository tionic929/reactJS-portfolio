// components/ProjectCard.jsx (FIXED and Simplified)
import React from "react";
import { motion } from "framer-motion";

// 🛑 IMPORTANT: Removed 'animation' and 'delay' props. 
// They are now handled by the parent component (ScrollReveal).
const ProjectCard = ({ src, alt, caption }) => {
  return (
    // Removed the wrapping <div> and ScrollReveal is now the parent
    // The 'group' class remains here for the hover effect
    <div className="flex flex-col items-center text-center group"> 
      
      {/* The motion.div container */}
      <motion.div 
        className="bg-white p-2 rounded-xl shadow-md border border-gray-100 w-full aspect-video transition-all duration-300 group-hover:shadow-xl group-hover:border-gray-300" 
        whileHover={{ y: -15, transition: { duration: 0.1, ease:"easeInOut" } }}
      >
        <img
          src={src}
          alt={alt}
          className="rounded-lg object-cover w-full h-full border border-gray-200" 
        />
      </motion.div>
      
      {/* The caption no longer needs a Framer Motion wrapper or delay logic
          as it's now wrapped by the parent ScrollReveal component. */}
      <p 
        className="mt-6 text-gray-800 font-medium text-lg max-w-[90%] mx-auto transition-colors duration-300 group-hover:text-black"
      >
        {caption}
      </p>
    </div>
  );
};

export default ProjectCard;