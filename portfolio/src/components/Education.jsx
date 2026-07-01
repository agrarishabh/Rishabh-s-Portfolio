import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    name: "ABV-IIITM Gwalior",
    image: "/images/iiitm.png",
    website: "https://iiitm.ac.in/",
    duration: "Aug 2023 – Apr 2028",
    details: "B.Tech + M.Tech in Information Technology (IT)",
    extra: "CGPA: 8.26 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "OOP",
      "Machine Learning",
    ],
  },
  {
    name: "Physics Wallah",
    image: "/images/pw.png",
    website: "https://www.pw.live/",
    duration: "2022 – 2023",
    details: "JEE Preparation",
    extra: "JEE Mains: 98.6 percentile | JEE Advanced AIR: ~16,000",
    coursework: [],
  },
  {
    name: "Dr Rizvi Learners Academy",
    image: "/images/rla.png",
    website: "https://www.rlajnp.co.in/",
    duration: "Apr 2021 – Mar 2022",
    details: "CBSE Class XII — Stream: PCM",
    extra: "Percentage: 93.2%",
    coursework: [],
  },
  {
    name: "Dr Rizvi Learners Academy",
    image: "/images/rla.png",
    website: "https://www.rlajnp.co.in/",
    duration: "Apr 2019 – Mar 2020",
    details: "CBSE Class X",
    extra: "Percentage: 91.6%",
    coursework: [],
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
        My <span className="text-cyan-400">Education</span>
      </motion.h2>

      <div className="grid gap-6 mt-10">
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            className="bg-cyan-500/5 p-6 rounded-xl shadow-xl backdrop-blur-sm border border-cyan-400/10 hover:border-cyan-400/30 hover:scale-[1.015] transition-all flex flex-col md:flex-row items-start gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={cardVariants}
          >
            <a href={edu.website} target="_blank" rel="noopener noreferrer" className="shrink-0">
              <img
                src={edu.image}
                alt={edu.name}
                className="w-16 h-16 object-contain hover:scale-110 transition-all"
              />
            </a>
            <div className="flex-1">
              <p className="text-xl font-semibold text-[#d9d9d9]">{edu.name}</p>
              <p className="text-sm text-[#888] mt-0.5">{edu.duration}</p>
              {edu.details && <p className="mt-1 text-[#ccc]">{edu.details}</p>}
              <p className="text-sm mt-1 text-cyan-400 font-medium">{edu.extra}</p>

              {/* Relevant Coursework Pills */}
              {edu.coursework.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs text-[#666] mb-2 uppercase tracking-wider">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-full bg-cyan-400/8 text-[#aaa] border border-cyan-400/15"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
