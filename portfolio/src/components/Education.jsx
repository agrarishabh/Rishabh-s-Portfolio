import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    name: "ABV-IIITM Gwalior",
    image: "/images/iiitm.png",
    website: "https://iiitm.ac.in/",
    duration: "2023–2028",
    details: "B.Tech + M.Tech in Information Technology (IT)",
    extra: "Grade: 8.08/10",
  },
  {
    name: "Dr Rizvi Learners Academy",
    image: "/images/rla.png",
    website: "https://www.rlajnp.co.in/",
    duration: "2022 – Class XII (CBSE)",
    details: "Stream: PCM",
    extra: "Percentage Scored: 93.2%",
  },
  {
    name: "Dr Rizvi Learners Academy",
    image: "/images/rla.png",
    website: "https://www.rlajnp.co.in/",
    duration: "2020 – Class X (CBSE)",
    details: "",
    extra: "Percentage Scored: 91.6%",
  },
  {
    name: "Physics Wallah",
    image: "/images/pw.png",
    website: "https://www.pw.live/",
    duration: "2022–2023",
    details: "JEE Mains 2023: 98.6%ile, Rank: 15,932",
    extra: "JEE Advanced 2023: Rank: 16,234",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Education = () => {
  return (
    <section id="education" className="pt-20 pb-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <motion.h2 
        className="text-5xl text-center font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Check <span className="text-cyan-400">Education</span>
      </motion.h2>

      <div className="grid gap-6 mt-10">
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            className="bg-cyan-500/5 p-6 rounded-xl shadow-xl backdrop-blur-sm border border-cyan-400/10 hover:scale-[1.02] transition-all flex flex-col md:flex-row items-start gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={cardVariants}
          >
            <a href={edu.website} target="_blank" rel="noopener noreferrer">
              <img src={edu.image} alt={edu.name} className="w-16 h-16 object-contain hover:scale-110 transition-all" />
            </a>
            <div>
              <p className="text-xl font-semibold text-[#d9d9d9]">{edu.name}</p>
              <p className="text-sm text-[#aaa]">{edu.duration}</p>
              <p className="mt-1">{edu.details}</p>
              <p className="text-sm mt-1">{edu.extra}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
