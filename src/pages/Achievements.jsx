import React from "react";
import Transition from "../Transition";
import { motion } from "framer-motion";

import Reveal from "../components/reveal.jsx";
import RevealSlideX from "../components/RevealSlideX.jsx";
import RevealSlideXn from "../components/RevealSlideXn.jsx";
import RevealScale from "../components/RevealScale.jsx";

import SacmaticImg from "../assets/sacmaticcapstonepaper.jpg";
import sacmaticdashboard from "../assets/sacmaticdashboard.png";
import simplecrud from "../assets/simplecrud.png";
import idsys from "../assets/idsys.png";
import pythonremovebg from "../assets/pythonremovebg.png";
import reactnative from "../assets/reactnative.png";

// import idformsys from "../assets/idformsys.png";

const Achievements = () => {
  // Animation variants remain the same
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // New data structure for the image grid section for better maintainability
  const projects = [
    {
      src: sacmaticdashboard,
      alt: "Dashboard of Sacmatic System",
      caption: "SACMATIC Monitoring System",
      animation: RevealSlideX,
    },
    {
      src: idsys,
      alt: "ID Management System",
      caption: "ID Management System (Sample)",
      animation: RevealScale,
    },
    {
      src: simplecrud,
      alt: "CRUD Application",
      caption: "Simple CRUD Application",
      animation: RevealSlideXn,
    },
    {
      src: pythonremovebg,
      alt: "Python Background Remover",
      caption: "Python Background Remover using RemBG and",
      animation: RevealScale,
    },
    {
      src: SacmaticImg,
      alt: "SACMATIC Capstone Paper Cover",
      caption: "REST API Laravel and ReactJS",
      animation: RevealSlideX,
    },
    {
      src: reactnative,
      alt: "React Native Mobile App",
      caption: "OJT Documentation Mobile App using React Native",
      animation: RevealSlideXn,
    },
  ];

  return (
    <>
      {/* 🚀 Hero Title Section (Improved readability with max-width and center alignment) */}
      <motion.div
        className="min-h-screen flex justify-center items-center px-8 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 0.05, 0.36, 1] }}
      >
        <div className="text-center max-w-4xl"> {/* Center text and limit width */}
          <Reveal>
            
            <motion.h1
              className="text-gray-800 font-extrabold text-[4rem] sm:text-[6rem] lg:text-[7rem] mb-4 leading-tight flex flex-wrap justify-center" // Adjusted size for better responsiveness
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
                {"ACHIEVEMENTS".split("").map((char, i) => (
                  <motion.span key={i} variants={word} className="inline-block"> {/* use inline-block for wrap control */}
                    {char}
                  </motion.span>
                ))}
            </motion.h1>
            <p className="text-gray-900 text-2xl font-medium tracking-wider">2025</p>
          </Reveal>
        </div>
      </motion.div>

      <hr className="border-gray-200" />

      {/* 🔬 SACMATIC CAPSTONE SECTION (Improved max-width and padding) */}
      <div className="py-20 bg-gray-50 flex items-center"> {/* Changed background to slightly off-white */}
        <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"> {/* Increased max-width and gap */}

          {/* LEFT COLUMN — TEXT */}
          <div className="flex flex-col justify-center order-2 md:order-1"> {/* Order change for mobile */}
            <Reveal>
              <h2 className="text-gray-800 font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
                SACMATIC Capstone
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-gray-700 text-xl leading-relaxed"> {/* Slightly larger text */}
                Completed a <span className="font-medium">comprehensive capstone paper and web system</span> on
                "SACDECO Tilapia Fingerling Hatchery". This project involved
                developing a system to <span className="font-medium">streamline the monitoring of sensor data</span>,
                significantly improving efficiency for Hatchery Workers.
              </p>
            </Reveal>
          </div>

          {/* RIGHT COLUMN — IMAGE */}
          <div className="order-1 md:order-2">
            <Reveal delay={0.25}>
                <img
                  src={SacmaticImg}
                  alt="SACMATIC Capstone Paper Cover"
                  className="rounded-xl shadow-2xl object-cover w-full max-w-lg transition-transform hover:scale-[1.02] duration-300" // Added more pronounced shadow and hover effect
                />
            </Reveal>
          </div>

        </div>
      </div>

      <hr className="border-gray-200" />
      
      {/* 🖼️ PROJECT SCREENS SECTION (The main fix) */}
      <div className="py-24 h-[110vh] bg-white">
        <div className="max-w-7xl w-full mx-auto px-6">
          
          <Reveal delay={0}>
            <h2 className="text-gray-800 font-bold text-4xl sm:text-5xl text-center mb-16">
              Project Highlights
            </h2>
          </Reveal>

          {/* New Responsive Grid Layout for Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project, index) => {
              const AnimationComponent = project.animation;
              const delay = 0.2 + index * 0.15; // Stagger the animation delay

              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <AnimationComponent delay={delay}>
                    <div className="bg-gray-100 p-4 rounded-xl shadow-lg border-2 border-gray-200"> {/* Container for image with border/padding */}
                      <img
                        src={project.src}
                        alt={project.alt}
                        className="rounded-lg object-cover w-full h-auto aspect-video border border-gray-300" // Added aspect ratio for uniform height
                      />
                    </div>
                  </AnimationComponent>
                  <Reveal delay={delay + 0.1}> {/* Caption fade-in */}
                    <p className="mt-4 text-gray-700 font-semibold text-lg max-w-[90%] mx-auto">
                      {project.caption}
                    </p>
                  </Reveal>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Transition(Achievements);