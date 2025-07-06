import React from "react";
import { Phone, Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = ({ onVideoLoaded }) => {
  return (
    <section
      id="home"
      className="section pt-[150px] px-4 md:px-12 lg:px-24 text-center md:text-left max-w-7xl mx-auto"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        id="bg-video"
        className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
        onCanPlayThrough={onVideoLoaded} // ✅ This notifies App.jsx
      >
        <source src="/videos/galaxy.mp4" type="video/mp4" />
      </video>

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
                "Competitive Coder",
                "Problem Solving Enthusiast",
                "MERN Stack Developer",
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
            A 3rd year undergrad who is a passionate full-stack web developer and
            competitive programmer from IIIT Gwalior. With strong problem-solving
            skills and hands-on experience in the MERN stack, I love building
            intuitive and scalable web applications. I'm always eager to learn
            new technologies and currently exploring AI/ML, Data Science to
            expand my horizons in tech.
          </p>

          <motion.a
            href="/Rishabh_Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="cv-button inline-block px-6 py-2 border-2 border-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition-all mt-6"
          >
            Download CV
          </motion.a>

          <div className="socials flex gap-4 mt-6 text-cyan-400">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                href: "tel:+916389841527",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                href: "mailto:agraharirishabh40204@gmail.com",
              },
              {
                icon: <Linkedin className="w-6 h-6" />,
                href: "https://www.linkedin.com/in/rishabh-agrahari-99b821284/",
              },
              {
                icon: <Github className="w-6 h-6" />,
                href: "https://github.com/agrarishabh",
              },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, color: "#00e0ff" }}
                className="transition"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          className="profile-wrapper group relative w-[300px] h-[300px] rounded-full overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/profile.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-full transition-opacity duration-500 group-hover:opacity-0"
            alt="Profile"
          />
          <div className="absolute inset-0 border-4 border-cyan-400 rounded-full animate-pulse blur-sm opacity-40" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
