import React from "react";
import Transition from "../Transition";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, MapPin, Cake, User } from 'lucide-react'; // Icons for details
import RevealScale from "../components/RevealScale";
import RevealSlideX from "../components/RevealSlideX";
import RevealSlideXn from "../components/RevealSlideXn";

import aboutmeImg from "../assets/aboutmepic.png"; // Your image import

const ACCENT_COLOR = '#606C38'; // Olive Green accent color

const About = () => {

    const personalDetails = [
        { icon: Calendar, label: "Age", value: "21 years old" },
        { icon: Cake, label: "Birthday", value: "September 29, 2004" },
        { icon: MapPin, label: "Address", value: "Rizal, Santiago City, Isabela" },
    ];

    const currentStatus = [
        { icon: GraduationCap, label: "Education", value: "BSIT - 4th Year (OJT)" },
        { icon: Briefcase, label: "Internship", value: "Brain Network Japan, Isabela" },
    ];

    return (
        <>
            <div className="min-h-screen bg-[#f2e8cf] flex flex-col items-start py-10 px-6 font-arial text-gray-900">
                
                <RevealScale>
                    <div className="text-left items-start mb-12">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#606C38] font-extrabold tracking-tighter">
                            About Me
                        </h1>
                        <p className="text-black text-lg mt-4 max-w-2xl mx-auto pt-4">
                            A dedicated IT student focused on professional development and real-world application of web technologies.
                        </p>
                    </div>
                </RevealScale>

                {/* --- MAIN CONTENT LAYOUT (Image + Text) --- */}
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center px-4 p-4">
                    
                    {/* LEFT COLUMN (COLUMNS 5/12): Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                        className="md:col-span-5 flex justify-center"
                    >
                        <div className="relative p-2 rounded-3xl shadow-2xl">
                            {/* Image with border and dynamic sizing */}
                            <img 
                                src={aboutmeImg} 
                                alt="Sherwin Adonis Vizcarra II Profile" 
                                className="w-full h-auto max-w-sm rounded-2xl object-cover border-4 border-[#606C38]" 
                            />
                            {/* Decorative accent element */}
                            <div className="absolute -bottom-4 -right-4 p-3 border-2 border-white rounded-full bg-[#606C38] shadow-lg">
                                <User className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN (COLUMNS 7/12): Details and Facts */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="md:col-span-7 space-y-8 rounded-2xl p-8 border-2 border-[#386641] shadow-lg"
                    >
                        
                        {/* 1. Professional Summary */}
                        <div>
                            <h2 className="text-3xl text-[#606C38] font-bold">Who I Am</h2>
                            <div className="space-y-3 text-base text-gray-800 mt-3">
                                <p>
                                    My name is <span className="font-medium">Sherwin Adonis M. Vizcarra II</span>. I am currently navigating the final stage of my IT education, focused on gaining practical skills and contributing meaningfully to technology projects.
                                </p>
                                <p>
                                    I am a <span className="font-medium">4th-year Bachelor of Science in Information Technology (BSIT) student</span>, deeply engaged in my <span className="font-medium">On-the-Job Training (OJT)</span>, aiming to transition into a full-time role upon graduation.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-t border-gray-200 pt-6">

                            {/* 2. Current Status */}
                            <div>
                                <h3 className="text-lg text-gray-800 font-semibold mb-4">Current Status</h3>
                                <div className="space-y-4">
                                    {currentStatus.map((item, index) => (
                                        <RevealSlideX key={index}>
                                            <div className="flex items-start gap-4">
                                                <item.icon className="w-6 h-6 text-[#606C38] mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase font-medium">{item.label}</p>
                                                    <p className="text-sm font-semibold text-gray-800">{item.value}</p>
                                                </div>
                                            </div>
                                        </RevealSlideX>
                                    ))}
                                </div>
                            </div>
                            
                            {/* 3. Personal Facts */}
                            <div>
                                <h3 className="text-lg text-gray-800 font-semibold mb-4">Personal Facts</h3>
                                <div className="space-y-4">
                                    {personalDetails.map((detail, index) => (
                                        <RevealSlideXn key={index}>
                                            <div className="flex items-start gap-4">
                                                <detail.icon className="w-6 h-6 text-[#606C38] mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase font-medium">{detail.label}</p>
                                                    <p className="text-sm font-semibold text-gray-800">{detail.value}</p>
                                                </div>
                                            </div>
                                        </RevealSlideXn>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Transition(About);