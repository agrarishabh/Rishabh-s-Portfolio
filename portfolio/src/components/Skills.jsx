import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const skillData = [
  // Languages
  { name: "C",           type: "language", icon: "/images/C.png" },
  { name: "C++",         type: "language", icon: "/images/C++.png" },
  { name: "JavaScript",  type: "language", icon: "/images/javascript.png" },
  { name: "TypeScript",  type: "language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Python",      type: "language", icon: "/images/python.png" },
  { name: "HTML",        type: "language", icon: "/images/html.webp" },
  { name: "CSS",         type: "language", icon: "/images/css.png" },

  // Frameworks & Libraries
  { name: "ReactJS",     type: "framework", icon: "/images/react.png" },
  { name: "Next.js",     type: "framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "NodeJS",      type: "framework", icon: "/images/nodejs.png" },
  { name: "ExpressJS",   type: "framework", icon: "/images/express.png" },
  { name: "Tailwind",    type: "framework", icon: "/images/tailwind.png" },
  { name: "Bootstrap",   type: "framework", icon: "/images/bootstrap.png" },
  { name: "Socket.IO",   type: "framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" },

  // Databases
  { name: "MongoDB",     type: "database", icon: "/images/mongodb.png" },
  { name: "PostgreSQL",  type: "database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL",       type: "database", icon: "/images/mysql.png" },
  { name: "SQLite",      type: "database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },

  // Tools & Platforms
  { name: "Git",         type: "tool", icon: "/images/git.png" },
  { name: "GitHub",      type: "tool", icon: "/images/github.png" },
  { name: "Docker",      type: "tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Prisma",      type: "tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "Postman",     type: "tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Figma",       type: "tool", icon: "/images/figma.png" },
  { name: "Vercel",      type: "tool", icon: "/images/vercel.png" },

  // AI / ML
  { name: "FastAPI",     type: "aiml", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Streamlit",   type: "aiml", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" },
  { name: "OpenCV",      type: "aiml", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
];

const filters = [
  { label: 'All',        value: 'all' },
  { label: 'Languages',  value: 'language' },
  { label: 'Frameworks', value: 'framework' },
  { label: 'Databases',  value: 'database' },
  { label: 'Tools',      value: 'tool' },
  { label: 'AI / ML',   value: 'aiml' },
];

const Skills = () => {
  const [filter, setFilter] = useState('all');
  const [filteredSkills, setFilteredSkills] = useState(skillData);

  useEffect(() => {
    setFilteredSkills(
      filter === 'all'
        ? skillData
        : skillData.filter(skill => skill.type === filter)
    );
  }, [filter]);

  return (
    <section
      id="skills"
      className="pt-20 pb-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <motion.h2
        className="text-5xl text-center font-bold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My <span className="text-cyan-400">Skills</span>
      </motion.h2>

      <motion.p
        className="section-desc text-[#aaa] mt-8 mb-6 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        MERN stack at my core. Expanding into Next.js, TypeScript, Docker,
        PostgreSQL, and AI/ML tools — always building, always learning.
      </motion.p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {filters.map(btn => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value)}
            className={`px-4 py-2 rounded-full border-2 text-sm ${
              filter === btn.value
                ? 'bg-cyan-400 text-black border-cyan-400 font-semibold'
                : 'border-cyan-400 text-cyan-400'
            } hover:bg-cyan-500/10 transition-all duration-300`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Skill Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.07 }}
        viewport={{ once: true }}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name + index}
            className="bg-cyan-500/5 border-2 border-transparent hover:border-cyan-400 p-4 rounded-xl text-center transition-all cursor-pointer"
            whileHover={{ scale: 1.08, y: -4 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 mx-auto mb-2 object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="text-[#d9d9d9] text-sm font-medium">{skill.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
