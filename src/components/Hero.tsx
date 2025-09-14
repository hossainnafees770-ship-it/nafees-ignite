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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <img
              src={profileImage}
              alt="Khandakar Nafees Hossain"
              className="w-48 h-48 md:w-52 md:h-52 rounded-full mx-auto object-cover hero-glow transition-all duration-300 hover:animate-glow-pulse"
            />
            <div className="absolute inset-0 rounded-full hero-gradient opacity-20 animate-glow-pulse"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-glow"
        >
          <span className="hero-gradient bg-clip-text text-transparent">
            Khandakar Nafees Hossain
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 italic"
        >
          Software Engineer & Innovator
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          B.Tech IT Student at IEM Kolkata | IEEE Award Winner | AI & EV Technology Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl text-muted-foreground hover:text-primary transition-colors card-glow rounded-full p-3"
              aria-label={social.label}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;