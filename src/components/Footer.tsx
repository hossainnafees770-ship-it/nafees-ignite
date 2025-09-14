import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaRocket } from 'react-icons/fa';
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

  const achievements = [
    "IEEE Award Winner",
    "Research Author",
    "Team Leader",
    "Innovation Expert"
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 gradient-primary rounded-2xl mr-4 shadow-secondary">
                  <FaRocket className="text-white text-2xl" />
                </div>
                <h3 className="font-display text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                  Khandakar Nafees Hossain
                </h3>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-md">
                Software Engineer & Innovator passionate about AI, sustainable technology, 
                and creating solutions that make a real difference. Currently pursuing B.Tech IT 
                at IEM Kolkata and conducting cutting-edge research in EV technology.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 gradient-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground font-medium">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-card rounded-xl shadow-secondary hover:shadow-primary transition-all duration-300 text-muted-foreground hover:text-primary border border-border/50 hover:border-primary/20"
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
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-display text-xl font-bold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 gradient-primary mr-0 group-hover:mr-3 transition-all duration-300"></span>
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
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-display text-xl font-bold text-foreground mb-6">Contact Info</h4>
              <div className="space-y-4 text-muted-foreground">
                <div className="group">
                  <p className="text-sm font-semibold text-foreground mb-1">Location</p>
                  <p className="text-sm group-hover:text-primary transition-colors leading-relaxed">
                    Howrah, West Bengal, India
                  </p>
                </div>
                <div className="group">
                  <p className="text-sm font-semibold text-foreground mb-1">Phone</p>
                  <a 
                    href="tel:+919564289091" 
                    className="text-sm hover:text-primary transition-colors block"
                  >
                    +91 9564289091
                  </a>
                </div>
                <div className="group">
                  <p className="text-sm font-semibold text-foreground mb-1">Email</p>
                  <a 
                    href="mailto:hossainnafees587@gmail.com" 
                    className="text-sm hover:text-primary transition-colors block"
                  >
                    hossainnafees587@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm flex items-center">
              © 2024 Khandakar Nafees Hossain. Crafted with 
              <FaHeart className="text-red-500 mx-2 animate-pulse" /> 
              and cutting-edge technology
            </p>
            <div className="flex items-center space-x-6 text-xs text-muted-foreground">
              <span className="flex items-center">
                <div className="w-2 h-2 gradient-primary rounded-full mr-2"></div>
                React & TypeScript
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 gradient-secondary rounded-full mr-2"></div>
                Tailwind CSS
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 gradient-primary rounded-full mr-2"></div>
                Framer Motion
              </span>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-muted-foreground text-xs">
              Optimized for Performance • SEO Ready • Deployed on Vercel
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;