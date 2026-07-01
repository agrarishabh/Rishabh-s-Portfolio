import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { Phone, Mail, Linkedin, Github } from "lucide-react";

const socialLinks = [
  { icon: <Phone className="w-5 h-5" />, href: "tel:+916389841527", label: "Phone" },
  { icon: <Mail className="w-5 h-5" />, href: "mailto:agraharirishabh40204@gmail.com", label: "Email" },
  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/rishabh-agrahari-99b821284/", label: "LinkedIn" },
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/agrarishabh", label: "GitHub" },
];

const Home = () => {
  return (
    <section
      id="home"
      className="section pt-[150px] px-4 md:px-12 lg:px-24 text-center md:text-left max-w-7xl mx-auto"
    >
      {/* NOTE: Background video is rendered in App.jsx — not duplicated here */}

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Text Section */}
        <motion.div
          className="flex-1 min-w-[300px] text-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-[#d9d9d9] leading-tight">
            Hey, I'm <br />
            <span className="text-5xl md:text-6xl drop-shadow block mt-1">
              Rishabh <span className="text-cyan-400">Agrahari</span>
            </span>
          </h1>

          <p className="text-xl mt-2 font-semibold text-cyan-400 h-10">
            <Typewriter
              words={[
                "Full Stack Developer",
                "MERN Stack Developer",
                "Competitive Programmer",
                "Problem Solving Enthusiast",
                "Software Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <p className="desc mt-4 text-[#bbb]">
            B.Tech + M.Tech student at IIIT Gwalior. I build production-grade
            full-stack web apps and AI/ML systems. 800+ DSA problems solved —
            turning ideas into clean, scalable code.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <motion.a
              href="/Rishabh_s_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="inline-block px-6 py-2 border-2 border-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition-all font-medium"
            >
              Download CV
            </motion.a>

            <Link to="contact" smooth={true} duration={600} offset={-100}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 bg-cyan-400 text-black font-semibold rounded hover:bg-cyan-300 transition-all cursor-pointer"
              >
                Hire Me
              </motion.button>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-cyan-400">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.2, y: -2 }}
                className="transition"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          className="profile-wrapper relative w-[300px] h-[300px] rounded-full"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-pulseShadow opacity-70 z-10" />
          {/* Profile photo */}
          <img
            src="/images/profile.jpg"
            className="w-full h-full object-cover rounded-full shadow-xl"
            alt="Rishabh Agrahari"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
