import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Star, Zap, Award, Medal } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const stats = [
  {
    value: "800+",
    label: "Problems Solved",
    icon: <Code className="text-cyan-400" size={26} />,
    sub: "LeetCode & Codeforces",
  },
  {
    value: "4",
    label: "Projects Built",
    icon: <Zap className="text-cyan-400" size={26} />,
    sub: "Full-stack & AI/ML",
  },
  {
    value: "8.26",
    label: "CGPA",
    icon: <Star className="text-cyan-400" size={26} />,
    sub: "ABV-IIITM Gwalior",
  },
  {
    value: "1241",
    label: "CF Peak Rating",
    icon: <Trophy className="text-cyan-400" size={26} />,
    sub: "Pupil Rank on Codeforces",
  },
];

const achievements = [
  {
    icon: <Trophy size={20} />,
    title: "Amazon HackOn 6.0",
    desc: "Shortlisted in Top 300 teams nationally",
    color: "from-cyan-400/10 to-transparent",
    border: "border-cyan-400/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: <Trophy size={20} />,
    title: "Flipkart Gridlock 2.0",
    desc: "Secured Top 1600 teams nationwide",
    color: "from-cyan-400/10 to-transparent",
    border: "border-cyan-400/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: <Award size={20} />,
    title: "JEE Mains & Advanced 2023",
    desc: "JEE Mains: 98.6 percentile | JEE Advanced AIR: ~16,000",
    color: "from-cyan-400/10 to-transparent",
    border: "border-cyan-400/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: <Medal size={20} />,
    title: "Inter-IIIT Carrom — Twaran'26",
    desc: "Bronze Medalist (National 3rd place finish)",
    color: "from-cyan-400/10 to-transparent",
    border: "border-cyan-400/20",
    iconColor: "text-cyan-400",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="pt-20 pb-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <motion.h2
        className="text-5xl text-center font-bold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Achievements &amp; <span className="text-cyan-400">Stats</span>
      </motion.h2>

      <motion.p
        className="text-[#aaa] text-center max-w-2xl mx-auto mt-6 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Numbers that tell my story — from competitive programming to national-level hackathons.
      </motion.p>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.05} transitionSpeed={400} className="h-full">
              <div className="bg-cyan-500/5 backdrop-blur-md border border-cyan-400/10 p-6 rounded-xl text-center hover:border-cyan-400/40 transition-all cursor-default h-full flex flex-col justify-center items-center">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-cyan-400 font-semibold mt-1 text-sm">
                  {stat.label}
                </div>
                <div className="text-[#666] text-xs mt-1">{stat.sub}</div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Achievement Chips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.02} transitionSpeed={400}>
              <div className={`flex items-start gap-4 bg-gradient-to-r ${ach.color} backdrop-blur-md border ${ach.border} p-5 rounded-xl transition-all`}>
                <div className={`${ach.iconColor} mt-0.5 shrink-0`}>{ach.icon}</div>
                <div>
                  <div className="font-semibold text-[#d9d9d9]">{ach.title}</div>
                  <div className="text-sm text-[#888] mt-0.5">{ach.desc}</div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Competitive Programming Profiles */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <a
          href="https://leetcode.com/u/Rishabh_63/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all font-medium text-sm"
        >
          <span>&#9650;</span> LeetCode Profile
        </a>
        <a
          href="https://codeforces.com/profile/Rishabh_6389"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all font-medium text-sm"
        >
          <span>&#9670;</span> Codeforces Profile
        </a>
        <a
          href="https://www.codechef.com/users/when_rish_code"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all font-medium text-sm"
        >
          <span>&#9679;</span> CodeChef Profile
        </a>
      </motion.div>
    </section>
  );
};

export default Achievements;
