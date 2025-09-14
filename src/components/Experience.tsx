import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaUsers, FaCog, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Intern & Junior Researcher",
      company: "IIFR Lab, IEM Kolkata",
      period: "Feb 2024 – Present",
      description: "Developing hardware and software systems for V2V charging platforms with wired & wireless EV stations. Leading team projects and research initiatives in sustainable technology.",
      achievements: [
        "Won IEEE Smart Village (ISV) IdeaRun 2024 with $2,217 funding",
        "Selected among Top 5 National Teams at ISV Symposium",
        "Presented research at ISV Symposium, earned ₹5,000 cash prize",
        "Currently authoring research paper on EV charging systems"
      ],
      icon: FaBriefcase,
      color: "primary",
      gradient: "gradient-primary"
    },
    {
      title: "Student Member",
      company: "GDG On Campus, IEM",
      period: "2023 – Present",
      description: "Active participation in Google programs and hackathons, contributing to community projects and sustainable development goals.",
      achievements: [
        "Participated in Google Solution Challenge",
        "Engaged in Google Summer of Code (GSoC) programs",
        "Completed Google Arcade challenges",
        "Built community projects focusing on SDG solutions"
      ],
      icon: FaUsers,
      color: "accent",
      gradient: "gradient-secondary"
    },
    {
      title: "Student Member",
      company: "IETE",
      period: "2023 – Present",
      description: "Engaging in workshops and events focused on Information Technology, electronics, and telecommunications.",
      achievements: [
        "Attended technical workshops on emerging technologies",
        "Participated in seminars on IT and telecom innovations",
        "Networked with industry professionals",
        "Enhanced knowledge in electronics and telecommunications"
      ],
      icon: FaCog,
      color: "primary",
      gradient: "gradient-primary"
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
    <section id="experience" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey in research, technology communities, and professional development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <div className="bg-card p-8 rounded-3xl shadow-secondary border border-border/50 hover:shadow-primary transition-all duration-500">
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className={`p-4 ${exp.gradient} rounded-2xl flex-shrink-0 shadow-secondary`}>
                      <exp.icon className="text-white text-2xl" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-medium text-primary">{exp.company}</p>
                        </div>
                        <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                          <FaCalendarAlt className="mr-2 text-sm" />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground text-lg">Key Achievements:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;