import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section
      id="experience"
      className="pt-20 pb-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <motion.h2
        className="text-5xl text-center font-bold"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        View <span className="text-cyan-400">Experience</span>
      </motion.h2>

      <motion.p
        className="section-desc text-[#aaa] mt-6 mb-10 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        I worked as a Web Development Intern at Qveto Technologies, where I contributed to building modern, responsive web applications using the MERN stack. I gained hands-on experience in real-world frontend and backend development, which sharpened my problem-solving skills, deepened my understanding of scalable application design, and strengthened my ability to collaborate within a fast-paced engineering team.
      </motion.p>

      <motion.div
        className="experience-card bg-cyan-500/5 backdrop-blur-sm p-6 rounded-xl shadow-xl w-full max-w-3xl mx-auto border border-cyan-400/10 transition-all hover:scale-[1.015]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-[#d9d9d9]">Web Developer</h3>
        <p className="flex items-center gap-2 mt-2 text-[#ccc]">
          <motion.img
            src="/images/qveto.png"
            alt="Qveto Logo"
            className="w-6 h-6 object-contain hover:scale-110 transition-transform"
            whileHover={{ rotate: 6 }}
          />
          <a
            href="https://qveto.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-semibold hover:underline"
          >
            Qveto Technologies
          </a>
          <span className="text-sm">– June 2025–August 2025</span>
        </p>

        <ul className="list-disc list-inside mt-4 space-y-2 text-[#bbb]">
          <li> Designed and optimized a debounced search bar with query-parameter support, improving perfor
mance and UX.</li>
          <li> Worked on MERN stack development, contributing to APIs, database integration, and debug
ging.</li>
          <li> Improved responsive UI components and collaborated on production-level code.</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Experience;
