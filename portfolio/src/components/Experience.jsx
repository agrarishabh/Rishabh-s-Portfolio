import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const techStack = [
    'React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS',
  ];

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
        My <span className="text-cyan-400">Experience</span>
      </motion.h2>

      <motion.p
        className="section-desc text-[#aaa] mt-6 mb-10 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Interned at Qveto Technologies as a Web Developer, contributing to
        production MERN stack applications — from optimized search features
        to responsive UI components.
      </motion.p>

      <motion.div
        className="experience-card bg-cyan-500/5 backdrop-blur-sm p-6 rounded-xl shadow-xl w-full max-w-3xl mx-auto border border-cyan-400/10 hover:border-cyan-400/30 transition-all hover:scale-[1.015]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h3 className="text-xl font-semibold text-[#d9d9d9]">Web Developer Intern</h3>
          <span className="text-sm text-[#888] bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
            June 2025 – August 2025
          </span>
        </div>

        <p className="flex items-center gap-2 mt-3 text-[#ccc]">
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
        </p>

        {/* Bullet Points */}
        <ul className="list-none mt-4 space-y-2 text-[#bbb]">
          <li className="flex gap-2">
            <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
            Designed and optimized a debounced search bar with query-parameter support, improving performance and UX.
          </li>
          <li className="flex gap-2">
            <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
            Worked on MERN stack development — contributed to APIs, database integration, and debugging production issues.
          </li>
          <li className="flex gap-2">
            <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
            Improved responsive UI components and collaborated on production-level code reviews.
          </li>
        </ul>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {techStack.map((t, idx) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
