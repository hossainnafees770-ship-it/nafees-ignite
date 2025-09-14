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
      gradient: "gradient-primary",
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
      gradient: "gradient-secondary",
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
      gradient: "gradient-primary",
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
      gradient: "gradient-secondary",
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
      gradient: "gradient-primary",
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
      gradient: "gradient-secondary",
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technical proficiencies and soft skills developed through hands-on experience and continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-card p-8 rounded-3xl shadow-secondary border border-border/50 hover:shadow-primary transition-all duration-500"
            >
              <div className="flex items-center mb-8">
                <div className={`p-4 ${category.gradient} rounded-2xl mr-4 shadow-secondary`}>
                  <category.icon className="text-white text-2xl" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        {skill.years}
                      </span>
                    </div>
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: "0%" }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className={`absolute top-0 left-0 h-full ${category.gradient} rounded-full shadow-sm`}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground mt-2 text-right">
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-bold text-foreground mb-4 flex items-center justify-center">
              <FaCertificate className="text-accent mr-3" />
              Certifications
            </h3>
            <p className="text-muted-foreground">Professional certifications and continuous learning achievements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-2xl shadow-secondary border border-border/50 hover:shadow-primary transition-all duration-300">
              <h4 className="font-display font-bold text-primary text-lg mb-2">NPTEL Certifications</h4>
              <p className="text-muted-foreground mb-4">Advanced courses with excellent performance</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">Discrete Mathematics</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">Programming in Java</span>
              </div>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-secondary border border-border/50 hover:shadow-primary transition-all duration-300">
              <h4 className="font-display font-bold text-accent text-lg mb-2">Coursera Certifications</h4>
              <p className="text-muted-foreground mb-4">Industry-recognized specializations</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Database Management</span>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">DSA</span>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">App Development</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;