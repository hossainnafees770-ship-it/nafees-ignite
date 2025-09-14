import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';

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
      featured: true,
      gradient: "gradient-primary"
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
      link: "#",
      gradient: "gradient-secondary"
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
      link: "#",
      gradient: "gradient-primary"
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
      link: "#",
      gradient: "gradient-secondary"
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Innovative solutions in AI, Android development, and sustainable technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group relative ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="bg-card p-8 rounded-3xl shadow-secondary border border-border/50 group-hover:shadow-primary transition-all duration-500 h-full">
                {project.featured && (
                  <div className="flex items-center mb-4">
                    <FaStar className="text-yellow-500 mr-2" />
                    <span className="text-sm font-medium text-muted-foreground">Featured Project</span>
                  </div>
                )}

                <div className={`${project.featured ? 'md:flex md:space-x-8' : ''}`}>
                  <div className={`${project.featured ? 'md:flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex space-x-3 opacity-60 group-hover:opacity-100 transition-opacity">
                        <motion.a
                          href={project.link}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-background rounded-lg hover:bg-primary hover:text-white transition-colors"
                          aria-label="View project"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </motion.a>
                        <motion.a
                          href={project.link}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-background rounded-lg hover:bg-primary hover:text-white transition-colors"
                          aria-label="View source code"
                        >
                          <FaGithub className="text-sm" />
                        </motion.a>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <div className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full ${project.gradient} mt-2 flex-shrink-0`}></div>
                            <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${project.featured ? 'md:flex-1' : ''}`}>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-background text-foreground px-3 py-2 rounded-full text-xs font-medium border border-border/30 hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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