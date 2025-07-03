import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            className="bg-black text-center px-6 py-10 text-[#d9d9d9] mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left max-w-5xl mx-auto gap-8">
                {/* Left: Intro */}
                <div className="flex flex-col items-center md:items-start">
                    <img src="/images/rishabh.png" alt="Logo" className="w-14 mb-2 hover:rotate-6 transition-transform" />
                    <p className="text-[#aaa] text-sm leading-relaxed">
                        Hi! I'm Rishabh Agrahari from Jaunpur, UP. <br />
                        Full-stack web developer passionate about <span className="text-cyan-400">tech & innovation</span>.
                    </p>
                </div>

                {/* Right: Contact Info */}
                <div className="text-left">
                    <h3 className="mb-2 text-lg font-semibold text-cyan-400">Contact</h3>
                    <p className="flex items-center gap-2 text-[#ccc]">
                        <Phone size={18} /> +91-6389841527
                    </p>
                    <p className="flex items-center gap-2 text-[#ccc]">
                        <Mail size={18} /> agraharirishabh40204@gmail.com
                    </p>
                    <p className="flex items-center gap-2 text-[#ccc]">
                        <MapPin size={18} /> Jaunpur, Uttar Pradesh
                    </p>
                </div>
            </div>

            {/* Gradient Divider */}
            <hr className="my-6 mx-auto w-4/5 h-0.5 bg-gradient-to-r from-cyan-400 via-white/20 to-cyan-400 border-none" />

            {/* Copyright */}
            <p className="text-sm text-[#aaa]">&copy; 2025 Rishabh Agrahari. All rights reserved.</p>

            {/* Socials */}
            <motion.div
                className="flex justify-center gap-6 mt-4 text-cyan-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
            >
                <motion.a
                    href="mailto:agraharirishabh40204@gmail.com"
                    aria-label="Email"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Mail className="w-6 h-6" />
                </motion.a>

                <motion.a
                    href="https://www.linkedin.com/in/rishabh-agrahari-99b821284/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Linkedin className="w-6 h-6" />
                </motion.a>

                <motion.a
                    href="https://github.com/agrarishabh"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Github className="w-6 h-6" />
                </motion.a>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;
