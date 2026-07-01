import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const contactLinks = [
  {
    icon: <Mail size={28} />,
    label: 'Email',
    value: 'agraharirishabh40204@gmail.com',
    href: 'mailto:agraharirishabh40204@gmail.com',
    color: 'from-red-500/10 to-transparent',
    border: 'border-red-500/20',
    iconColor: 'text-red-400',
  },
  {
    icon: <Phone size={28} />,
    label: 'Phone',
    value: '+91 63898 41527',
    href: 'tel:+916389841527',
    color: 'from-green-500/10 to-transparent',
    border: 'border-green-500/20',
    iconColor: 'text-green-400',
  },
  {
    icon: <Linkedin size={28} />,
    label: 'LinkedIn',
    value: 'rishabh-agrahari-99b821284',
    href: 'https://www.linkedin.com/in/rishabh-agrahari-99b821284/',
    color: 'from-blue-500/10 to-transparent',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: <Github size={28} />,
    label: 'GitHub',
    value: 'github.com/agrarishabh',
    href: 'https://github.com/agrarishabh',
    color: 'from-purple-500/10 to-transparent',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: <Instagram size={28} />,
    label: 'Instagram',
    value: '@agrarishabh',
    href: 'https://www.instagram.com/agrarishabh/',
    color: 'from-pink-500/10 to-transparent',
    border: 'border-pink-500/20',
    iconColor: 'text-pink-400',
  },
  {
    icon: <MapPin size={28} />,
    label: 'Location',
    value: 'Jaunpur, Uttar Pradesh',
    href: null,
    color: 'from-cyan-500/10 to-transparent',
    border: 'border-cyan-500/20',
    iconColor: 'text-cyan-400',
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-20 pb-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <motion.h2
        className="text-5xl text-center font-bold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact <span className="text-cyan-400">Me</span>
      </motion.h2>

      <motion.p
        className="text-[#aaa] text-center max-w-xl mx-auto mt-6 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Got an opportunity, a project, or just want to say hi? I'm always open — reach out!
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {contactLinks.map((item, i) => {
          const Wrapper = item.href ? motion.a : motion.div;
          const wrapperProps = item.href
            ? { href: item.href, target: '_blank', rel: 'noreferrer' }
            : {};

          return (
            <Wrapper
              key={i}
              {...wrapperProps}
              className={`flex items-center gap-4 bg-gradient-to-br ${item.color} border ${item.border} p-5 rounded-xl transition-all ${item.href ? 'cursor-pointer' : 'cursor-default'} group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={item.href ? { scale: 1.04, y: -3 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={`${item.iconColor} shrink-0 transition-transform group-hover:scale-110`}>
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[#666] uppercase tracking-wider mb-0.5">
                  {item.label}
                </p>
                <p className="text-[#d9d9d9] font-medium text-sm truncate">
                  {item.value}
                </p>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
