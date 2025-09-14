import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import projectsBg from '../assets/projects-bg.jpg';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Smart Multi-Purpose EV",
      description: "Leading the development of a multi-utility EV with solar-powered V2V charging, integrating control algorithms and energy management systems.",
      techStack: ["C++", "Solar Technology", "V2V Charging", "Control Algorithms", "Energy Management"],
      achievements: [
        "Secured ₹3 lakh institutional funding",
        "Won IEEE Smart Village IdeaRun 2024 ($2,217)",
        "Top 5 National Teams at ISV Symposium",
        "Research paper in progress"
      ],
      link: "#",
      featured: true
    },
    {
      title: "Food Label Allergy Detector",
      description: "AI-powered app using OCR and Logistic Regression to detect allergens in food labels by analyzing ingredient text from uploaded images.",
      techStack: ["Python", "EasyOCR", "scikit-learn", "Pandas", "NumPy"],
      achievements: [
        "Accurate allergen detection system",
        "Real-time OCR text extraction",
        "Machine learning classification",
        "User-friendly interface"
      ],
      link: "#"
    },
    {
      title: "SmartGrocer App",
      description: "Offline-first Android grocery management app with voice input, budget tracking, personalized suggestions, and smart alerts.",
      techStack: ["Kotlin", "Android SDK", "Room DB", "Google ML Kit", "Voice Input"],
      achievements: [
        "Offline-first architecture",
        "Voice-enabled input system",
        "Smart budget tracking",
        "Expiry and low-stock alerts"
      ],
      link: "#"
    },
    {
      title: "Custom Database in C++",
      description: "Designed and implemented a custom database system supporting efficient data storage, retrieval, and management operations.",
      techStack: ["C++", "STL", "File Handling", "Data Structures", "Algorithms"],
      achievements: [
        "Efficient memory management",
        "Custom indexing system",
        "CRUD operations support",
        "Performance optimization"
      ],
      link: "#"
    }
  ];

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
    <section id="projects" className="py-20 relative" ref={ref}>
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-5">
        <img src={projectsBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-background/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold hero-gradient bg-clip-text text-transparent mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions in AI, Android development, and sustainable technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`bg-card p-6 rounded-lg card-glow transition-all duration-300 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'md:flex md:space-x-6' : ''}`}>
                <div className={`${project.featured ? 'md:flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label="View project"
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-secondary hover:text-secondary/80 transition-colors"
                        aria-label="View source code"
                      >
                        <FaGithub />
                      </motion.a>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`${project.featured ? 'md:flex-1' : ''}`}>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;