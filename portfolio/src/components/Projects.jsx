import React from 'react';
import { Github, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const projectsData = [
  {
    name: 'TrafficAI',
    tagline: 'Automated Traffic Violation Detection System',
    bullets: [
      'Built an end-to-end CV system detecting 7 types of traffic violations with license-plate OCR, processing each image in ~3s on CPU.',
      'Custom-trained YOLOv8 models on 10,000+ annotated images achieving ~0.91 mAP@0.5 (93% precision, 89% recall).',
      'Delivered a FastAPI REST API + Streamlit dashboard; Dockerized and deployed live on Hugging Face Spaces.',
    ],
    techNames: ['Python', 'YOLOv8', 'OpenCV', 'FastAPI', 'Streamlit', 'Docker'],
    time: 'June 2026',
    image: '/images/trafficAI.png',
    live: 'https://huggingface.co/spaces/agrarishabh/TrafficAI',
    github: 'https://github.com/agrarishabh/TrafficAI',
  },
  {
    name: 'CollabBoard',
    tagline: 'Full-Stack Real-Time Collaboration Platform',
    bullets: [
      'Engineered a workspace platform with Next.js frontend and Express.js backend for project management, Kanban boards, and rich-text document editing.',
      'Implemented live multi-user sync using WebSockets, Socket.IO, and CRDTs powering real-time chat and concurrent editing.',
      'Architected scalable DB using Prisma ORM + PostgreSQL with granular RBAC. Dockerized and deployed on Vercel + Render.',
    ],
    techNames: ['Next.js', 'React', 'Express.js', 'Socket.IO', 'PostgreSQL', 'Docker'],
    time: 'May 2026',
    image: '/images/collabboard.png',
    live: 'https://collabboard-web-five.vercel.app/',
    github: 'https://github.com/agrarishabh/CollabBoard',
  },
  {
    name: 'IECR',
    tagline: 'Indian Entertainment & Community Reviews',
    bullets: [
      'Architected a full-stack entertainment platform with real-time chat, friend requests, and live notifications using Socket.io.',
      'Secured with Clerk authentication and RBAC; integrated TMDB API serving 275+ movies and 39+ web series with posters, trailers, and watchlist.',
      'Hardened backend with Zod validation, centralized error handling, structured logging (Pino), and a Vitest unit test suite.',
    ],
    techNames: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Clerk'],
    time: 'June 2025',
    image: '/images/iecr.png',
    live: 'https://iecr.vercel.app/',
    github: 'https://github.com/agrarishabh/IECR',
  },
  {
    name: 'TEM',
    tagline: 'Track Every Moment – Task Tracker with Analytics',
    bullets: [
      'Built a full-stack task tracker with a 7-day analytics dashboard to visualize productivity trends over time.',
      'Implemented task categorization, priority tagging, and completion tracking with a responsive MERN stack architecture.',
    ],
    techNames: ['React', 'Tailwind', 'Node.js', 'MongoDB', 'Express.js'],
    time: 'May 2025',
    image: '/images/tem.png',
    live: 'https://tem-33ck.vercel.app/',
    github: 'https://github.com/agrarishabh/TEM',
  },
];

const Projects = () => {
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
        className="text-[#aaa] text-center max-w-2xl mx-auto mt-6 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Real projects, real impact — from AI-powered systems to full-stack platforms.
      </motion.p>

      {/* Projects Grid — 2 columns on desktop */}
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((proj, i) => (
          <motion.div
            key={proj.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={400} className="h-full">
              <div className="bg-cyan-500/5 backdrop-blur-md border border-cyan-400/10 rounded-xl overflow-hidden hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.07)] transition-all flex flex-col h-full">
                {/* Project Image */}
            <a
              href={proj.live !== '#' ? proj.live : proj.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={proj.image}
                alt={proj.name}
                className="w-full h-48 object-cover hover:opacity-90 transition"
              />
            </a>

            {/* Card Body */}
            <div className="p-5 flex flex-col gap-2 flex-1">
              {/* Header row */}
              <div className="flex justify-between items-start">
                <div>
                  <a
                    href={proj.live !== '#' ? proj.live : proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-cyan-400 hover:underline"
                  >
                    {proj.name}
                  </a>
                  <p className="text-[#777] text-xs mt-0.5">{proj.tagline}</p>
                </div>
                <div className="flex gap-3 shrink-0 ml-2 mt-1">
                  {proj.live !== '#' && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:scale-110 transition"
                      title="Live Demo"
                    >
                      <Rocket size={20} />
                    </a>
                  )}
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:scale-110 transition"
                    title="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-2 space-y-1.5">
                {proj.bullets.map((b, idx) => (
                  <li key={idx} className="text-[#bbb] text-sm flex gap-2">
                    <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-3">
                {proj.techNames.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-xs text-[#555] mt-1">
                <strong className="text-[#666]">Built:</strong> {proj.time}
              </p>
              </div>
            </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
