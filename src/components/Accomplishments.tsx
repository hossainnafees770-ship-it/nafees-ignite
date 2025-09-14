import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaTrophy, FaAward, FaCertificate, FaChevronDown, FaChevronRight, FaMedal, FaGraduationCap } from 'react-icons/fa';

const Accomplishments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openSection, setOpenSection] = useState<string | null>('awards');

  const accomplishments = [
    {
      id: 'awards',
      title: 'Awards & Recognition',
      icon: FaTrophy,
      gradient: 'gradient-primary',
      items: [
        {
          title: 'IEEE Smart Village (ISV) IdeaRun 2024 Winner',
          description: 'Won international competition with innovative EV project, securing $2,217 in funding for sustainable technology development.',
          achievement: '$2,217 International Funding',
          date: '2024'
        },
        {
          title: 'Top 5 National Teams - ISV Symposium',
          description: 'Selected among top 5 teams nationwide at DA-IICT, Gujarat for sustainable technology solutions presentation.',
          achievement: '₹5,000 Cash Prize',
          date: '2024'
        },
        {
          title: 'Institutional Funding Winner',
          description: 'Secured substantial funding from IEM Kolkata for EV project development and research initiatives.',
          achievement: '₹3 Lakh Funding',
          date: '2024'
        }
      ]
    },
    {
      id: 'experience',
      title: 'Professional Experience',
      icon: FaMedal,
      gradient: 'gradient-secondary',
      items: [
        {
          title: 'C++ Development Expertise',
          description: 'Over 2 years of hands-on experience developing multiple algorithm-based projects and systems with advanced C++ programming.',
          achievement: '2+ Years Experience',
          date: '2022-Present'
        },
        {
          title: 'Research Paper Author',
          description: 'Currently authoring research paper on V2V charging systems and sustainable EV technology for international publication.',
          achievement: 'Research Publication',
          date: '2024 (In Progress)'
        },
        {
          title: 'Team Leadership',
          description: 'Leading multi-disciplinary teams in complex engineering projects and research initiatives with proven results.',
          achievement: 'Project Team Lead',
          date: '2024'
        }
      ]
    },
    {
      id: 'certifications',
      title: 'Certifications & Learning',
      icon: FaCertificate,
      gradient: 'gradient-primary',
      items: [
        {
          title: 'NPTEL Certifications',
          description: 'Completed advanced courses in discrete mathematics and Java programming with excellent grades from IIT professors.',
          achievement: 'Discrete Math & Java',
          date: '2023-2024'
        },
        {
          title: 'Coursera Specializations',
          description: 'Earned certifications in database management, data structures & algorithms, and app development from top universities.',
          achievement: 'Database, DSA, App Dev',
          date: '2023-2024'
        },
        {
          title: 'Google Programs Participation',
          description: 'Active participant in Google Solution Challenge, GSoC, and Arcade programs, contributing to open-source projects.',
          achievement: 'Google Community Member',
          date: '2023-Present'
        }
      ]
    },
    {
      id: 'education',
      title: 'Academic Excellence',
      icon: FaGraduationCap,
      gradient: 'gradient-secondary',
      items: [
        {
          title: 'B.Tech Information Technology',
          description: 'Maintaining excellent academic performance with consistent high grades at IEM Kolkata, specializing in IT and research.',
          achievement: 'SGPA: 8.4',
          date: '2023-2027'
        },
        {
          title: 'Higher Secondary Achievement',
          description: 'Graduated with distinction from Bagnan High School, demonstrating consistent academic excellence in science stream.',
          achievement: '84.14% (12th), 82.2% (10th)',
          date: '2020-2022'
        },
        {
          title: 'Scout Social Movement',
          description: 'Active participation in social service and community development initiatives during school years, developing leadership skills.',
          achievement: 'Community Service Leader',
          date: '2014-2022'
        }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

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
    <section id="accomplishments" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
            Accomplishments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recognition, achievements, and milestones in my academic and professional journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {accomplishments.map((section, index) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="mb-6"
            >
              <motion.button
                onClick={() => toggleSection(section.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-card p-8 rounded-3xl shadow-secondary border border-border/50 hover:shadow-primary transition-all duration-500 text-left group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`p-4 ${section.gradient} rounded-2xl mr-6 shadow-secondary group-hover:scale-110 transition-transform duration-300`}>
                      <section.icon className="text-white text-2xl" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                  </div>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    {openSection === section.id ? (
                      <FaChevronDown className="text-xl" />
                    ) : (
                      <FaChevronRight className="text-xl" />
                    )}
                  </div>
                </div>
              </motion.button>

              <motion.div
                initial={false}
                animate={{
                  height: openSection === section.id ? 'auto' : 0,
                  opacity: openSection === section.id ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-6 space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={openSection === section.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: itemIndex * 0.1, duration: 0.4 }}
                      className="bg-card/70 p-6 rounded-2xl border border-border/30 hover:border-primary/20 hover:bg-card transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-display font-bold text-foreground text-lg">{item.title}</h4>
                        <div className="flex flex-col items-end">
                          <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full mb-2">
                            {item.date}
                          </span>
                          <div className={`${section.gradient} text-white px-4 py-2 rounded-full text-sm font-medium shadow-secondary`}>
                            {item.achievement}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Accomplishments;