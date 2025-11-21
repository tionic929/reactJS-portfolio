import React, { useRef, useState } from "react";
import Transition from "../Transition";
import { Mail, Phone, Send } from 'lucide-react'; 
import {
    SiInstagram,
    SiGithub,
    SiFacebook 
} from '@icons-pack/react-simple-icons';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import RevealScale from "../components/RevealScale"; // Used for Header
// Assuming you have a standard Reveal component for general text

// --- CONSTANTS ---
const SERVICE_ID = 'service_pmhd57g';
const TEMPLATE_ID = 'template_nhq4q4i';
const PUBLIC_KEY = '8Z-lORWarNfad8lac';
const ACCENT_COLOR = '#606C38'; // Olive Green

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState(null); // 'success', 'error', or null
    const [isSending, setIsSending] = useState(false);

    const contacts = [
        {
            icon: Mail,
            alt: "Email",
            caption: "sherwin7222@gmail.com",
            link: "mailto:sherwin7222@gmail.com",
        },
        {
            icon: Phone,
            alt: "Phone",
            caption: "+63 961 377 6720",
            link: "tel:+639613776720",
        },
    ];

    const socialLinks = [
        { href: "https://www.facebook.com/tionlc", icon: SiFacebook, color: "text-blue-500", label: "Facebook" },
        { href: "https://github.com/tionic929/", icon: SiGithub, color: "text-gray-300", label: "GitHub" },
        { href: "https://instagram.com/tionlc", icon: SiInstagram, color: "text-pink-500", label: "Instagram" },
    ];

    const handleSendMessage = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus(null);

        emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            formRef.current,
            PUBLIC_KEY
        ).then(() => {
            setStatus('success');
            formRef.current.reset();
        }).catch(() => {
            setStatus('error');
        }).finally(() => {
            setIsSending(false);
        });
    };

    return (
        <>
            <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center font-sans">
                
                {/* Header Section */}
                <RevealScale className="text-center ">
                    <h1 className="text-4xl md:text-8xl text-gray-50 font-extrabold tracking-tighter">
                        Let's Connect
                    </h1>
                    <p className="text-gray-400 text-xl mt-4 max-w-lg mx-auto border-t border-gray-700 pt-4 pb-10">
                        I'm currently open for new projects and collaborations. Send a message, and I'll get back to you!
                    </p>
                </RevealScale>

                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
                    
                    {/* LEFT CARD: Contact Info & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="bg-gray-800 rounded-3xl p-10 border border-gray-700 shadow-2xl shadow-black/30 h-full flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-4xl text-gray-50 font-bold mb-8">Contact Details</h2>
                            
                            {/* Contact Details */}
                            <div className="space-y-6 mb-12">
                                {contacts.map((contact, index) => {
                                    const IconComponent = contact.icon;
                                    return (
                                        <a 
                                            key={index} 
                                            href={contact.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 group hover:text-gray-50 transition"
                                        >
                                            <div className="p-3 bg-[#606C38] rounded-xl group-hover:bg-green-600 transition duration-300">
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-lg text-gray-400 group-hover:text-gray-100 font-medium transition duration-300">{contact.alt}</p>
                                                <p className="text-xl font-semibold text-white">{contact.caption}</p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="border-t border-gray-700 pt-6">
                            <p className="text-gray-400 text-base mb-4 font-semibold">Connect Globally</p>
                            <div className="flex gap-6">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a 
                                            key={index}
                                            href={social.href} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="transition duration-300 hover:scale-125 hover:rotate-2"
                                        >
                                            <IconComponent className={`w-8 h-8 ${social.color}`} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT CARD: Message Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="bg-gray-800 rounded-3xl p-10 border border-gray-700 shadow-2xl shadow-black/30"
                    >
                        <h2 className="text-4xl text-gray-50 font-bold mb-8">Send a Message</h2>
                        
                        <form ref={formRef} onSubmit={handleSendMessage} className="space-y-6">

                            {/* Status Alert */}
                            {status === 'success' && (
                                <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-300 font-medium">
                                    Message sent successfully! Thanks for reaching out.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-300 font-medium">
                                    Failed to send message. Please double-check your fields or contact me directly.
                                </div>
                            )}
                            
                            {/* Input Fields */}
                            {['user_name', 'user_email'].map((name) => (
                                <input
                                    key={name}
                                    type={name.includes('email') ? 'email' : 'text'}
                                    name={name}
                                    placeholder={name === 'user_name' ? 'Your Name' : 'Your Email'}
                                    required
                                    className="w-full px-5 py-3 text-gray-100 placeholder-gray-500 bg-gray-700 border border-gray-600 rounded-xl
                                               focus:ring-2 focus:ring-[#606C38] focus:border-[#606C38] transition duration-200"
                                />
                            ))}

                            {/* Message Field */}
                            <textarea
                                name="user_message"
                                placeholder="Your Message"
                                rows="6"
                                required
                                className="w-full px-5 py-3 text-gray-100 placeholder-gray-500 bg-gray-700 border border-gray-600 rounded-xl resize-none
                                           focus:ring-2 focus:ring-[#606C38] focus:border-[#606C38] transition duration-200"
                            ></textarea>

                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSending}
                                className={`w-full text-white font-bold py-3 rounded-xl transition duration-300 flex items-center justify-center space-x-2
                                            ${isSending ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#606C38] hover:bg-green-700'}`}
                            >
                                {isSending ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Transition(Contact);