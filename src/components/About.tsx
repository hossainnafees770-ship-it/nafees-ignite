import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGraduationCap, FaAward } from 'react-icons/fa';
import aboutBg from '../assets/about-bg.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - About Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold hero-gradient bg-clip-text text-transparent">
              About Me
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate B.Tech Information Technology student at the Institute of Engineering 
              and Management, Kolkata, currently in my 3rd year with an SGPA of 8.4. As a Junior 
              Researcher at IIFR Lab, I work on cutting-edge V2V charging platforms and innovative 
              EV technologies.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary">Education & Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <FaGraduationCap className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">B.Tech Information Technology</p>
                    <p className="text-sm text-muted-foreground">IEM Kolkata (2023-2027) • SGPA: 8.4</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaAward className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">IEEE Smart Village Award Winner</p>
                    <p className="text-sm text-muted-foreground">$2,217 funding • Top 5 National Teams</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaGraduationCap className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Higher Secondary Education</p>
                    <p className="text-sm text-muted-foreground">Bagnan High School • 84.14% (12th) • 82.2% (10th)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Howrah, West Bengal</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-secondary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+91 9564289091</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:col-span-2">
                  <FaEnvelope className="text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">hossainnafees587@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Background Image */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg card-glow">
              <img
                src={aboutBg}
                alt="Nafees Hossain professional photo"
                className="w-full h-96 object-cover opacity-80 transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 hero-gradient opacity-20"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;