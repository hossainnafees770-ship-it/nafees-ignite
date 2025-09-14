import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaDatabase, FaTools, FaBrain, FaComments, FaCertificate } from 'react-icons/fa';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: FaCode,
      color: "primary",
      skills: [
        { name: "C++", level: 90, years: "2+ years" },
        { name: "C", level: 85, years: "2+ years" },
        { name: "Python", level: 80, years: "1+ year" },
        { name: "Kotlin", level: 75, years: "1 year" }
      ]
    },
    {
      title: "Database & Tools",
      icon: FaDatabase,
      color: "secondary",
      skills: [
        { name: "SQL", level: 85, years: "1+ year" },
        { name: "MySQL", level: 80, years: "1+ year" },
        { name: "SuperBase", level: 75, years: "6 months" },
        { name: "Room DB", level: 70, years: "6 months" }
      ]
    },
    {
      title: "Development Tools",
      icon: FaTools,
      color: "accent",
      skills: [
        { name: "Git/GitHub", level: 85, years: "2+ years" },
        { name: "VS Code", level: 90, years: "2+ years" },
        { name: "Linux/Unix", level: 75, years: "1+ year" },
        { name: "Android SDK", level: 70, years: "6 months" }
      ]
    },
    {
      title: "CS Fundamentals",
      icon: FaBrain,
      color: "primary",
      skills: [
        { name: "Data Structures & Algorithms", level: 80, years: "2+ years" },
        { name: "Object-Oriented Programming", level: 85, years: "2+ years" },
        { name: "System Design", level: 70, years: "1 year" },
        { name: "Problem Solving", level: 85, years: "2+ years" }
      ]
    },
    {
      title: "AI & Modern Tools",
      icon: FaBrain,
      color: "secondary",
      skills: [
        { name: "Machine Learning", level: 75, years: "1 year" },
        { name: "OCR (EasyOCR)", level: 70, years: "6 months" },
        { name: "Lovable AI", level: 80, years: "6 months" },
        { name: "ChatGPT Integration", level: 75, years: "1 year" }
      ]
    },
    {
      title: "Soft Skills",
      icon: FaComments,
      color: "accent",
      skills: [
        { name: "Presentation Skills", level: 90, years: "2+ years" },
        { name: "Communication", level: 85, years: "3+ years" },
        { name: "Team Collaboration", level: 85, years: "2+ years" },
        { name: "Leadership", level: 80, years: "1+ year" }
      ]
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const progressVariants = {
    hidden: { width: "0%" },
    visible: { width: "100%", transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-20 bg-card/5" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold hero-gradient bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical proficiencies and soft skills developed through hands-on experience and continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-card p-6 rounded-lg card-glow"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-${category.color}/10 mr-4`}>
                  <category.icon className={`text-${category.color} text-xl`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.years}</span>
                    </div>
                    <div className="relative h-2 bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: "0%" }}
                        transition={{ duration: 1, ease: "easeOut", delay: skillIndex * 0.1 }}
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r from-${category.color} to-${category.color}/70 rounded-full`}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {skill.level}% proficiency
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center">
              <FaCertificate className="text-accent mr-3" />
              Certifications
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card p-4 rounded-lg card-glow">
              <h4 className="font-semibold text-primary">NPTEL Certifications</h4>
              <p className="text-sm text-muted-foreground">Discrete Mathematics • Programming in Java</p>
            </div>
            <div className="bg-card p-4 rounded-lg card-glow">
              <h4 className="font-semibold text-secondary">Coursera Certifications</h4>
              <p className="text-sm text-muted-foreground">Database Management • DSA • App Development</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;