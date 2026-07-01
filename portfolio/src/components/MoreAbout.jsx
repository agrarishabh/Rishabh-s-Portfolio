import React from "react";
import { motion } from "framer-motion";
import {
  Music,
  Film,
  Camera,
  Plane,
  Instagram,
  Users,
  Star,
  Medal,
  Dumbbell,
  Activity,
  Video,
} from "lucide-react";

const MoreAbout = () => {
  return (
    <section
      id="about"
      className="pt-20 pb-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <motion.h2
        className="text-5xl text-center font-bold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        More <span className="text-cyan-400">About Me</span>
      </motion.h2>

      <motion.p
        className="text-[#aaa] text-center max-w-3xl mx-auto mt-6 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Beyond code — I enjoy competitive programming, music, sports, and exploring
        new places. I'm always looking for ways to grow and experience life fully.
      </motion.p>

      {/* ── Hobbies & Interests ── */}
      <motion.h3
        className="text-2xl font-semibold text-[#d9d9d9] mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Hobbies &amp; <span className="text-cyan-400">Interests</span>
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {/* Music & Dance */}
        <motion.div
          className="bg-cyan-500/5 border border-cyan-400/10 p-5 rounded-xl hover:border-cyan-400/30 transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Music className="text-cyan-400 shrink-0" />
            <h3 className="text-lg font-semibold">Music &amp; Dance</h3>
          </div>
          <p className="text-[#bbb] text-sm">
            I love vibing to Indian songs and dancing freely. Music is therapy,
            and dancing helps me relax and recharge.
          </p>
        </motion.div>

        {/* Movies & Web Series */}
        <motion.div
          className="bg-cyan-500/5 border border-cyan-400/10 p-5 rounded-xl hover:border-cyan-400/30 transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Film className="text-cyan-400 shrink-0" />
            <h3 className="text-lg font-semibold">Movies &amp; Web Series</h3>
          </div>
          <p className="text-[#bbb] text-sm">
            A huge fan of Indian cinema — I love watching Bollywood movies and
            bingeing on thrilling web series during breaks.
          </p>
        </motion.div>

        {/* Sports */}
        <motion.div
          className="bg-cyan-500/5 border border-cyan-400/10 p-5 rounded-xl hover:border-cyan-400/30 transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Activity className="text-cyan-400 shrink-0" />
            <h3 className="text-lg font-semibold">Sports that I Love</h3>
          </div>
          <p className="text-[#bbb] text-sm">
            I enjoy Carrom, Chess, Table Tennis, and Badminton. Sports help keep
            my mind and body sharp — and I've even competed at national-level in Carrom!
          </p>
        </motion.div>

        {/* Travel */}
        <motion.div
          className="bg-cyan-500/5 border border-cyan-400/10 p-5 rounded-xl hover:border-cyan-400/30 transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Plane className="text-cyan-400 shrink-0" />
            <h3 className="text-lg font-semibold">Travel</h3>
          </div>
          <p className="text-[#bbb] text-sm">
            I love traveling to new places and exploring cultures. Every journey
            adds something beautiful to my story.
          </p>
        </motion.div>

        {/* Content Creation */}
        <motion.div
          className="bg-cyan-500/5 border border-cyan-400/10 p-5 rounded-xl hover:border-cyan-400/30 transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Video className="text-cyan-400 shrink-0" />
            <h3 className="text-lg font-semibold">Content Creation</h3>
          </div>
          <p className="text-[#bbb] text-sm">
            I love expressing creativity through video editing and photography. Check out my work on{" "}
            <a
              href="https://www.instagram.com/agrarishabh/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline inline-flex items-center gap-1"
            >
              Instagram <Instagram size={14} />
            </a>
            .
          </p>
        </motion.div>

        {/* Gym & Fitness */}
        <motion.div
          className="bg-cyan-500/5 border border-cyan-400/10 p-5 rounded-xl hover:border-cyan-400/30 transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Dumbbell className="text-cyan-400 shrink-0" />
            <h3 className="text-lg font-semibold">Gym & Fitness</h3>
          </div>
          <p className="text-[#bbb] text-sm">
            I hit the gym regularly to stay fit, build discipline, and push my physical limits. It is a core part of my daily routine.
          </p>
        </motion.div>
      </div>

      {/* ── Leadership & Extracurriculars ── */}
      <motion.h3
        className="text-2xl font-semibold text-[#d9d9d9] mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Leadership &amp; <span className="text-cyan-400">Extracurriculars</span>
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          {
            icon: <Users className="text-cyan-400 shrink-0" size={20} />,
            title: "Batch Representative",
            org: "ABV-IIITM Gwalior",
            desc: "Coordinated academic and extracurricular communications between students and administration for the 2023 batch.",
          },
          {
            icon: <Star className="text-cyan-400 shrink-0" size={20} />,
            title: "Calling Team Member",
            org: "Aurora'24 Cultural Fest",
            desc: "Managed outreach and coordination for one of IIITM's largest annual cultural events.",
          },
          {
            icon: <Medal className="text-cyan-400 shrink-0" size={20} />,
            title: "Bronze Medalist & Coordinator",
            org: "Inter-IIIT Carrom — Twaran'25 & '26",
            desc: "Managed tournament scheduling for Twaran'25; secured national 3rd place finish at Twaran'26.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-cyan-500/5 border border-cyan-400/10 p-5 rounded-xl hover:border-cyan-400/30 transition-all flex gap-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mt-0.5">{item.icon}</div>
            <div>
              <p className="font-semibold text-[#d9d9d9]">{item.title}</p>
              <p className="text-xs text-cyan-400 mt-0.5 mb-1">{item.org}</p>
              <p className="text-sm text-[#bbb]">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MoreAbout;
