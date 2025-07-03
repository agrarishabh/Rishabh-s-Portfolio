import React from 'react';
import { Github, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      name: 'IECR',
      desc: 'Indian Entertainment Content Recommendation (IMDb 7+, 20k+ votes)',
      techIcons: ['react.png', 'tailwind.png', 'express.png', 'mongodb.png','nodejs.png', 'clerk.png'],
      time: 'June 2025',
      image: '/images/iecr.png',
      live: 'https://iecr.vercel.app/',
      github: 'https://github.com/agrarishabh/IECR',
    },
    {
      name: 'TEM',
      desc: 'Track Every Moment – a task tracker with 7-day analytics',
      techIcons: ['react.png', 'tailwind.png', 'nodejs.png', 'mongodb.png', 'express.png'],
      time: 'May 2025',
      image: '/images/tem.png',
      live: 'https://tem-33ck.vercel.app/',
      github: 'https://github.com/agrarishabh/TEM',
    },
  ];

  return (
    <section
      id="projects"
      className="section pt-20 pb-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <motion.h2
        className="text-5xl text-center font-bold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Featured <span className="text-cyan-400">Projects</span>
      </motion.h2>

      <motion.p
        className="text-[#aaa] text-center max-w-3xl mx-auto mt-6 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        I've built impactful full-stack projects like IECR, a movie recommendation platform using IMDb data, and TEM, a productivity tracker with insightful analytics. These projects showcase my skills in the MERN stack, problem-solving, and turning ideas into responsive, user-friendly web applications.
      </motion.p>

      <div className="grid gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-cyan-500/5 rounded-lg overflow-hidden p-4 transition-all hover:shadow-xl hover:scale-[1.02]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <a href={proj.live} target="_blank" rel="noopener noreferrer">
              <img
                src={proj.image}
                alt={proj.name}
                className="rounded-lg mb-4 object-cover w-full hover:opacity-90 transition"
              />
            </a>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-cyan-400 hover:underline"
                >
                  {proj.name}
                </a>
                <div className="flex gap-3">
                  <a href={proj.live} target="_blank" rel="noreferrer" className="text-cyan-400 hover:scale-110 transition">
                    <Rocket size={22} />
                  </a>
                  <a href={proj.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:scale-110 transition">
                    <Github size={22} />
                  </a>
                </div>
              </div>

              <p className="text-[#bbb]">{proj.desc}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {proj.techIcons.map((icon, idx) => (
                  <img
                    key={idx}
                    src={`/images/${icon}`}
                    alt={icon.split('.')[0]}
                    title={icon.split('.')[0]}
                    className="w-6 h-6 object-contain"
                  />
                ))}
              </div>

              <p className="text-sm text-[#888] mt-2"><strong>Built:</strong> {proj.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
