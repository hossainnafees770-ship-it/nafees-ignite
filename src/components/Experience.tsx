import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaUsers, FaCog } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Intern & Junior Researcher",
      company: "IIFR Lab, IEM Kolkata",
      period: "Feb 2024 – Present",
      description: "Developing hardware and software systems for V2V charging platforms with wired & wireless EV stations. Leading team projects and research initiatives.",
      achievements: [
        "Won IEEE Smart Village (ISV) IdeaRun 2024 with $2,217 funding",
        "Selected among Top 5 National Teams at ISV Symposium",
        "Presented research at ISV Symposium, earned ₹5,000 cash prize",
        "Currently authoring research paper on EV charging systems"
      ],
      icon: FaBriefcase,
      color: "primary"
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
      color: "secondary"
    },
    {
      title: "Student Member",
      company: "IETE (Institution of Electronics and Telecommunication Engineers)",
      period: "2023 – Present",
      description: "Engaging in workshops and events focused on Information Technology, electronics, and telecommunications.",
      achievements: [
        "Attended technical workshops on emerging technologies",
        "Participated in seminars on IT and telecom innovations",
        "Networked with industry professionals",
        "Enhanced knowledge in electronics and telecommunications"
      ],
      icon: FaCog,
      color: "accent"
    }
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-card/5" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold hero-gradient bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in research, technology communities, and professional development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:items-start`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-${exp.color} flex items-center justify-center z-10 card-glow`}>
                  <exp.icon className="text-white text-sm" />
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-card p-6 rounded-lg card-glow transition-all duration-300"
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className={`text-${exp.color} font-medium`}>{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-${exp.color} mt-2 flex-shrink-0`}></div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
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