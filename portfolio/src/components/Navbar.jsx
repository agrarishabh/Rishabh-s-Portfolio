import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["home", "skills", "projects", "education", "experience","more"];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 z-50 ${
        scrolled ? "shadow-lg" : ""
      } backdrop-blur-md bg-black/80 text-[#d9d9d9] transition-shadow duration-300`}
    >
      <nav className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <img
          src="/images/rishabh.png"
          alt="Logo"
          className="w-[90px] ml-4 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        {/* Hamburger */}
        <div
          className="text-3xl text-cyan-400 md:hidden cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                activeClass="text-cyan-400 border-cyan-400"
                className="relative group px-3 py-2 rounded-md border-2 border-transparent hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center gap-4 bg-black/90 py-4 px-6 mx-4 rounded-lg shadow-lg"
          >
            {navLinks.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-100}
                  activeClass="text-cyan-400"
                  className="block px-4 py-2 rounded hover:bg-cyan-400/20 hover:text-cyan-400 transition-all"
                  onClick={() => setShowMenu(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
