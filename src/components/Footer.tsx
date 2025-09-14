import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/nafeeshossain', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/nafeeshossain', label: 'LinkedIn' },
    { icon: SiLeetcode, href: 'https://leetcode.com/nafeeshossain', label: 'LeetCode' },
    { icon: FaEnvelope, href: 'mailto:hossainnafees587@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold hero-gradient bg-clip-text text-transparent mb-4">
                Khandakar Nafees Hossain
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Software Engineer & Innovator passionate about AI, sustainable technology, 
                and creating solutions that make a difference. Currently pursuing B.Tech IT 
                at IEM Kolkata and conducting research in EV technology.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Howrah, West Bengal, India</p>
                <a 
                  href="tel:+919564289091" 
                  className="block hover:text-primary transition-colors"
                >
                  +91 9564289091
                </a>
                <a 
                  href="mailto:hossainnafees587@gmail.com" 
                  className="block hover:text-primary transition-colors"
                >
                  hossainnafees587@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border mt-8 pt-8 text-center"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center">
            © 2024 Khandakar Nafees Hossain. Made with 
            <FaHeart className="text-red-500 mx-1" /> 
            using React & Tailwind CSS
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Deployed on Vercel • Optimized for Performance & SEO
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;