import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaTrophy, FaAward, FaCertificate, FaChevronDown, FaChevronUp, FaMedal, FaGraduationCap } from 'react-icons/fa';

const Accomplishments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openSection, setOpenSection] = useState<string | null>('awards');

  const accomplishments = [
    {
      id: 'awards',
      title: 'Awards & Recognition',
      icon: FaTrophy,
      color: 'primary',
      items: [
        {
          title: 'IEEE Smart Village (ISV) IdeaRun 2024 Winner',
          description: 'Won international competition with innovative EV project, securing $2,217 in funding',
          achievement: '$2,217 International Funding',
          date: '2024'
        },
        {
          title: 'Top 5 National Teams - ISV Symposium',
          description: 'Selected among top 5 teams nationwide at DA-IICT, Gujarat for sustainable technology solutions',
          achievement: '₹5,000 Cash Prize',
          date: '2024'
        },
        {
          title: 'Institutional Funding Winner',
          description: 'Secured substantial funding from IEM Kolkata for EV project development and research',
          achievement: '₹3 Lakh Funding',
          date: '2024'
        }
      ]
    },
    {
      id: 'experience',
      title: 'Professional Experience',
      icon: FaMedal,
      color: 'secondary',
      items: [
        {
          title: 'C++ Development Expertise',
          description: 'Over 2 years of hands-on experience developing multiple algorithm-based projects and systems',
          achievement: '2+ Years Experience',
          date: '2022-Present'
        },
        {
          title: 'Research Paper Author',
          description: 'Currently authoring research paper on V2V charging systems and sustainable EV technology',
          achievement: 'Research Publication',
          date: '2024 (In Progress)'
        },
        {
          title: 'Team Leadership',
          description: 'Leading multi-disciplinary teams in complex engineering projects and research initiatives',
          achievement: 'Project Team Lead',
          date: '2024'
        }
      ]
    },
    {
      id: 'certifications',
      title: 'Certifications & Learning',
      icon: FaCertificate,
      color: 'accent',
      items: [
        {
          title: 'NPTEL Certifications',
          description: 'Completed advanced courses in discrete mathematics and Java programming with excellent grades',
          achievement: 'Discrete Math & Java',
          date: '2023-2024'
        },
        {
          title: 'Coursera Specializations',
          description: 'Earned certifications in database management, data structures & algorithms, and app development',
          achievement: 'Database, DSA, App Dev',
          date: '2023-2024'
        },
        {
          title: 'Google Programs Participation',
          description: 'Active participant in Google Solution Challenge, GSoC, and Arcade programs',
          achievement: 'Google Community',
          date: '2023-Present'
        }
      ]
    },
    {
      id: 'education',
      title: 'Academic Excellence',
      icon: FaGraduationCap,
      color: 'primary',
      items: [
        {
          title: 'B.Tech Information Technology',
          description: 'Maintaining excellent academic performance with consistent high grades at IEM Kolkata',
          achievement: 'SGPA: 8.4',
          date: '2023-2027'
        },
        {
          title: 'Higher Secondary Achievement',
          description: 'Graduated with distinction from Bagnan High School, demonstrating consistent academic excellence',
          achievement: '84.14% (12th), 82.2% (10th)',
          date: '2020-2022'
        },
        {
          title: 'Scout Social Movement',
          description: 'Active participation in social service and community development initiatives during school years',
          achievement: 'Community Service',
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="accomplishments" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold hero-gradient bg-clip-text text-transparent mb-4">
            Accomplishments
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition, achievements, and milestones in my academic and professional journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {accomplishments.map((section, index) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="mb-4"
            >
              <motion.button
                onClick={() => toggleSection(section.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-card p-6 rounded-lg card-glow transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg bg-${section.color}/10 mr-4`}>
                      <section.icon className={`text-${section.color} text-xl`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                  </div>
                  <div className="text-muted-foreground">
                    {openSection === section.id ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
              </motion.button>

              <motion.div
                initial={false}
                animate={{
                  height: openSection === section.id ? 'auto' : 0,
                  opacity: openSection === section.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={openSection === section.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: itemIndex * 0.1 }}
                      className="bg-card/50 p-4 rounded-lg border border-border/50"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                      <div className={`inline-block bg-${section.color}/10 text-${section.color} px-3 py-1 rounded-full text-xs font-medium`}>
                        {item.achievement}
                      </div>
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