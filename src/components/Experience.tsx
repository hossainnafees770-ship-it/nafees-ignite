import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Intern & Junior Researcher",
      company: "IIFR Lab, IEM Kolkata",
      period: "Feb 2024 – Present",
      description: "Developing hardware and software systems for V2V charging platforms with advanced programming and system design.",
      achievements: [
        "Built scalable software architecture for EV charging systems",
        "Developed algorithms for efficient power management and distribution"
      ],
      icon: FaBriefcase,
      gradient: "gradient-primary"
    }
  ];

  const memberships = [
    {
      title: "Student Member",
      organizations: ["GDG On Campus IEM", "IEEE Computer Society", "IETE"],
      period: "2023 – Present",
      description: "Active participation in programming workshops, hackathons, and technical community projects.",
      achievements: [
        "Participated in Google Solution Challenge and programming competitions",
        "Contributed to open-source projects and technical workshops"
      ],
      icon: FaUsers,
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
    <section id="experience" className="py-16" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional experience and community involvement
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Professional Experience */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <div className="bg-card p-6 rounded-2xl shadow-secondary border border-border/50 hover:shadow-primary transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 ${exp.gradient} rounded-xl flex-shrink-0 shadow-secondary`}>
                    <exp.icon className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-medium text-primary">{exp.company}</p>
                      </div>
                      <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                        <FaCalendarAlt className="mr-2 text-sm" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full ${exp.gradient} mt-2 flex-shrink-0`}></div>
                          <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Student Memberships */}
          {memberships.map((membership, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <div className="bg-card p-6 rounded-2xl shadow-secondary border border-border/50 hover:shadow-primary transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 ${membership.gradient} rounded-xl flex-shrink-0 shadow-secondary`}>
                    <membership.icon className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground mb-1">
                          {membership.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {membership.organizations.map((org, i) => (
                            <span key={i} className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                              {org}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                        <FaCalendarAlt className="mr-2 text-sm" />
                        <span className="text-sm font-medium">{membership.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">{membership.description}</p>
                    
                    <div className="space-y-2">
                      {membership.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full ${membership.gradient} mt-2 flex-shrink-0`}></div>
                          <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                        </div>
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

export default Experience;