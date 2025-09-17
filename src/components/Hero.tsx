import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/nafeeshossain', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/nafeeshossain', label: 'LinkedIn' },
    { icon: SiLeetcode, href: 'https://leetcode.com/nafeeshossain', label: 'LeetCode' },
    { icon: FaEnvelope, href: 'mailto:hossainnafees587@gmail.com', label: 'Email' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-accent opacity-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 gradient-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 gradient-primary rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img
              src={profileImage}
              alt="Nafees Hossain"
              className="relative w-56 h-56 md:w-64 md:h-64 rounded-full mx-auto object-cover shadow-accent border-4 border-white/20 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-primary bg-clip-text text-transparent">
              Nafees
            </span>
            <br />
            <span className="text-foreground">Hossain</span>
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 font-light">
            IT Student
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-card rounded-2xl shadow-secondary hover:shadow-primary transition-all duration-300 text-muted-foreground hover:text-primary border border-border/50 hover:border-primary/20"
              aria-label={social.label}
            >
              <social.icon className="text-2xl" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted-foreground"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;