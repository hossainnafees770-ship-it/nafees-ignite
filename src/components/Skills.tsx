import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaDatabase, FaTools, FaBrain } from 'react-icons/fa';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming",
      icon: FaCode,
      gradient: "gradient-primary",
      skills: ["C++", "C", "Python", "Kotlin"]
    },
    {
      title: "Database",
      icon: FaDatabase,
      gradient: "gradient-secondary",
      skills: ["SQL", "MySQL", "SuperBase", "Room DB"]
    },
    {
      title: "Tools",
      icon: FaTools,
      gradient: "gradient-primary",
      skills: ["Git/GitHub", "VS Code", "Linux/Unix", "Android SDK"]
    },
    {
      title: "Fundamentals",
      icon: FaBrain,
      gradient: "gradient-secondary",
      skills: ["DSA", "OOP", "System Design", "Problem Solving"]
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
    <section id="skills" className="py-16" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-card p-6 rounded-2xl shadow-secondary border border-border/50 hover:shadow-primary transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 ${category.gradient} rounded-xl mr-3 shadow-secondary`}>
                  <category.icon className="text-white text-lg" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-muted/50 px-3 py-2 rounded-lg">
                    <span className="text-sm font-medium text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;