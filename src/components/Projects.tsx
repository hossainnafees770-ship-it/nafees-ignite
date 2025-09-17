import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaDatabase, FaCar } from 'react-icons/fa';
import projectsBg from '../assets/projects-bg.jpg';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Food Label Allergy Detector",
      description: "OCR-based system that detects allergens in food labels using machine learning for dietary safety.",
      technologies: ["Python", "EasyOCR", "Scikit-learn", "Pandas", "NumPy"],
      icon: FaCode,
      gradient: "gradient-primary",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "SmartGrocer",
      description: "Offline Android app with voice commands, budget tracking, and smart shopping alerts.",
      technologies: ["Kotlin", "Android SDK", "Room DB", "Google ML Kit"],
      icon: FaMobile,
      gradient: "gradient-secondary",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Custom Database System",
      description: "Built-from-scratch database with efficient storage, retrieval, and query processing in C++.",
      technologies: ["C++", "STL", "File Handling", "Data Structures"],
      icon: FaDatabase,
      gradient: "gradient-primary",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Smart Multi-Purpose EV",
      description: "Team lead for solar-powered V2V charging system with advanced algorithms and sustainable design.",
      technologies: ["Hardware", "Algorithms", "System Design", "Solar Integration"],
      icon: FaCar,
      gradient: "gradient-secondary",
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-16 relative" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={projectsBg}
          alt="Projects background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Software solutions and innovative projects I've built
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card p-6 rounded-2xl shadow-secondary border border-border/50 hover:shadow-primary transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 ${project.gradient} rounded-xl shadow-secondary`}>
                  <project.icon className="text-white text-xl" />
                </div>
                <div className="flex space-x-3">
                  <motion.a
                    href={project.links.github}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-muted hover:bg-primary/20 rounded-lg transition-colors text-muted-foreground hover:text-primary"
                  >
                    <FaGithub className="text-lg" />
                  </motion.a>
                  <motion.a
                    href={project.links.demo}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-muted hover:bg-primary/20 rounded-lg transition-colors text-muted-foreground hover:text-primary"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                  </motion.a>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;