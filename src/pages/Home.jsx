import React, { Component, useState } from "react";
import profileImg from '../assets/profile.jpg';
import { Typewriter } from "react-simple-typewriter";
import {
SiReact,
SiTailwindcss,
SiInstagram,
SiGithub,
SiFacebook 
} from '@icons-pack/react-simple-icons';
import { motion, AnimatePresence } from "framer-motion";
import Transition from "../Transition";

const Home = () => {
    const [show, setShow] = useState(false);
    
    return(
        <>
        <div className="card min-h-screen flex flex-col justify-center gap-6 h-64 bg-gradient-to-r from-white from-1/2 to-green-200 to-1/2">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl w-full mx-auto">
                <div className="cols col-1">
                    
                <motion.div
                    whileHover={{ scale: 1.1, color: "#4ade80" }}
                    onClick={() => navigate("/projects")}
                    className="cursor-pointer transition-colors"
                    >
                    Projects
                </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100}}
                        animate={{ opacity: 1, x: 0}}
                        transition={{ duration: 0.8}}
                    >
                    <h1 className="text-5xl text-[#606C38] font-bold">Welcome to my Portfolio!</h1>
                    </motion.div>
                    <h1 className="text-2xl text-left font-bold bg-gradient-to-r from-[#283618] via-[#606C38] to-[#BC6C25] bg-clip-text text-transparent animate-gradient-x">
                        <Typewriter
                            className="text-2xl text-left font-bold text-gray-800"
                            words={[
                                'my name is Sherwin Adonis M. Vizcarra - II',
                                'I am a Fullstack Developer',
                                '3D Modelling Artist',
                                'a Tech Enthusiast',
                                'and a Video Editor'
                            ]}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={70}
                            delaySpeed={1000}
                        />
                    </h1>

                    <div className="inline-flex gap-5 py-6">
                        <a href="https://www.facebook.com/tionlc" target="_blank" rel="noopener">
                            <SiFacebook className="w-8 h-8"/>
                        </a>
                        <a href="https://github.com/tionic929/" target="_blank" rel="noopener">
                            <SiGithub className="w-8 h-8 text-gray-800"/>
                        </a>
                        <a href="https://instagram.com/tionlc" target="_blank" rel="noopener">
                            <SiInstagram className="w-8 h-8 text-pink-600"/>
                        </a>
                    </div>
                </div>
                <div className="flex cols col-2">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-0 text-white rounded-full"
                        >
                    <img src={profileImg} alt="profile image" className="w-[310px] h-[310px] rounded-full border-4 border-[#606C38] shadow-2xl" />
                    </motion.button>
                </div>
            </div>
            <a href=""></a>
            <a href=""></a>
        </div>
        </>
    )
}

export default Transition(Home);