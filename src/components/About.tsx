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
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions that make a real difference
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - About Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a passionate B.Tech Information Technology student at the Institute of Engineering 
                and Management, Kolkata, currently in my 3rd year with an SGPA of 8.4. As a Junior 
                Researcher at IIFR Lab, I work on cutting-edge V2V charging platforms and innovative 
                EV technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in technology is driven by a desire to solve real-world problems through 
                innovative solutions, particularly in sustainable technology and artificial intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-2xl shadow-secondary border border-border/50">
                <div className="flex items-center mb-4">
                  <div className="p-3 gradient-primary rounded-xl mr-4">
                    <FaGraduationCap className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Education</h4>
                    <p className="text-sm text-muted-foreground">B.Tech IT • SGPA: 8.4</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">IEM Kolkata (2023-2027)</p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-secondary border border-border/50">
                <div className="flex items-center mb-4">
                  <div className="p-3 gradient-secondary rounded-xl mr-4">
                    <FaAward className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">IEEE Award</h4>
                    <p className="text-sm text-muted-foreground">$2,217 Funding</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Smart Village Winner 2024</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-2xl font-semibold text-foreground">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-4 p-4 bg-card/50 rounded-xl border border-border/30">
                  <FaMapMarkerAlt className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Howrah, West Bengal, India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-card/50 rounded-xl border border-border/30">
                  <FaPhone className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 9564289091</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-card/50 rounded-xl border border-border/30">
                  <FaEnvelope className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hossainnafees587@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-accent">
              <img
                src={aboutBg}
                alt="Nafees Hossain professional photo"
                className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 gradient-primary opacity-10"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-8">
                <p className="text-white font-medium text-lg">
                  "Innovation distinguishes between a leader and a follower."
                </p>
                <p className="text-white/80 text-sm mt-2">- Steve Jobs</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;