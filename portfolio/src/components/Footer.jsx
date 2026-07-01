import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
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
            {/* Logo & Tagline */}
            <div className="flex flex-col items-center mb-6">
                <img
                    src="/images/rishabh.png"
                    alt="Logo"
                    className="w-14 mb-3 hover:rotate-6 transition-transform"
                />
                <p className="text-[#aaa] text-sm">
                    Aspiring SDE &amp; Full-stack developer passionate about{' '}
                    <span className="text-cyan-400">tech &amp; innovation</span>.
                </p>
            </div>

            {/* Gradient Divider */}
            <hr className="my-4 mx-auto w-4/5 h-0.5 bg-gradient-to-r from-cyan-400 via-white/20 to-cyan-400 border-none" />

            {/* Socials */}
            <motion.div
                className="flex justify-center gap-6 my-4 text-cyan-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
            >
                <motion.a
                    href="tel:+916389841527"
                    aria-label="Phone"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Phone className="w-6 h-6" />
                </motion.a>

                <motion.a
                    href="mailto:agraharirishabh40204@gmail.com"
                    aria-label="Email"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Mail className="w-6 h-6" />
                </motion.a>

                <motion.a
                    href="https://www.linkedin.com/in/rishabh-agrahari-99b821284/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Linkedin className="w-6 h-6" />
                </motion.a>

                <motion.a
                    href="https://github.com/agrarishabh"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Github className="w-6 h-6" />
                </motion.a>
            </motion.div>

            {/* Copyright */}
            <p className="text-sm text-[#555]">&copy; 2026 Rishabh Agrahari. All rights reserved.</p>
        </motion.footer>
    );
};

export default Footer;
