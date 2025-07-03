import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const skillData = [
  { name: "C", type: "language", icon: "/images/C.png" },
  { name: "C++", type: "language", icon: "/images/C++.png" },
  { name: "JavaScript", type: "language", icon: "/images/javascript.png" },
  { name: "Python", type: "language", icon: "/images/python.png" },
  { name: "HTML", type: "language", icon: "/images/html.webp" },
  { name: "CSS", type: "language", icon: "/images/css.png" },
  { name: "MySQL", type: "database", icon: "/images/mysql.png" },
  { name: "ReactJS", type: "framework", icon: "/images/react.png" },
  { name: "NodeJS", type: "framework", icon: "/images/nodejs.png" },
  { name: "ExpressJS", type: "framework", icon: "/images/express.png" },
  { name: "MongoDB", type: "database", icon: "/images/mongodb.png" },
  { name: "Bootstrap", type: "framework", icon: "/images/bootstrap.png" },
  { name: "Tailwind", type: "framework", icon: "/images/tailwind.png" },
  { name: "Git", type: "tool", icon: "/images/git.png" },
  { name: "GitHub", type: "tool", icon: "/images/github.png" },
  { name: "Canva", type: "tool", icon: "/images/canva.webp" },
  { name: "Figma", type: "tool", icon: "/images/figma.png" },
  { name: "Clerk", type: "tool", icon: "/images/clerk.png" },
  { name: "Vercel", type: "tool", icon: "/images/vercel.png" },
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

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Languages', value: 'language' },
    { label: 'Frameworks', value: 'framework' },
    { label: 'Databases', value: 'database' },
    { label: 'Tools', value: 'tool' },
  ];

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
        className="section-desc text-[#aaa] mt-8 mb-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        I’m a passionate full-stack developer with strong problem-solving skills and hands-on experience in the MERN Stack—MongoDB,
        Express.js, React.js, and Node.js. I build responsive, scalable web apps using modern tools like Tailwind CSS, Bootstrap,
        and Git. With a solid foundation in DSA, I approach challenges analytically and efficiently. I’ve also worked with MySQL,
        Figma, and Vercel, and I'm actively exploring emerging fields like AI/ML to broaden my tech horizon.
      </motion.p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {filters.map(btn => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value)}
            className={`px-4 py-2 rounded-full border-2 ${
              filter === btn.value
                ? 'bg-cyan-400 text-black border-cyan-400'
                : 'border-cyan-400 text-cyan-400'
            } hover:bg-cyan-500/10 transition-all duration-300`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Skill Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-cyan-500/5 border-2 border-transparent hover:border-cyan-400 p-4 rounded-lg text-center transition-all hover:scale-105 hover:shadow-lg cursor-pointer"
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 mx-auto mb-2" />
            <div className="text-[#d9d9d9]">{skill.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
