import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HouseIcon, TrophyIcon, PhoneCallIcon, InfoIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <HouseIcon /> },
    { name: "Achievements", path: "/achievements", icon: <TrophyIcon /> },
    { name: "Contact", path: "/contact", icon: <PhoneCallIcon /> },
    { name: "About", path: "/about", icon: <InfoIcon /> },
  ];

  // find the active index
  const activeIndex = navItems.findIndex((item) => item.path === location.pathname);

  // function to compute scale based on distance from active
  const getScale = (index) => {
    const distance = Math.abs(index - activeIndex);
    if (distance === 0) return 1.5;        // active
    if (distance === 1) return 1.2;        // neighbors
    return 1.0;                             // farthest
  };

  return (
    <motion.nav
      className="fixed bottom-0 left-0 z-50 w-[auto] border rounded-full m-4 bg-[#606C38] text-gray-800 shadow-lg"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center px-6 space-x-6">
        {navItems.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.div
              key={item.name}
              className="relative group"
              animate={{ scale: getScale(index) }}
              whileHover={{ scale: getScale(index) + 0.1 }} // slightly bigger on hover
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <Link
                to={item.path}
                className={`px-4 rounded-md transition-opacity ${
                  isActive
                    ? "text-white opacity-100"
                    : "text-white opacity-60 hover:opacity-80"
                }`}
              >
                {item.icon}
              </Link>

              {/* Tooltip */}
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 px-3 py-2 bg-[#283618] border text-white text-xs rounded-md opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.nav>
  );
}
