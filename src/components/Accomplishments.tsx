import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaTrophy, FaCertificate, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Accomplishments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentCert, setCurrentCert] = useState(0);

  const accomplishments = [
    {
      title: 'Smart Village Winner 2024',
      description: 'Won $2,217 funding for innovative EV project',
      achievement: '$2,217 International Funding',
      date: '2024'
    },
    {
      title: 'Top 5 National Teams',
      description: 'Selected among top teams at ISV Symposium',
      achievement: '₹5,000 Cash Prize',
      date: '2024'
    },
    {
      title: 'Institutional Funding',
      description: 'Secured funding for EV project development',
      achievement: '₹3 Lakh Funding',
      date: '2024'
    }
  ];

  const certifications = [
    {
      title: 'NPTEL - Discrete Mathematics',
      issuer: 'IIT Professor',
      date: '2023',
      type: 'Academic'
    },
    {
      title: 'NPTEL - Programming in Java',
      issuer: 'IIT Professor',
      date: '2024',
      type: 'Academic'
    },
    {
      title: 'Coursera - Database Management',
      issuer: 'University Course',
      date: '2023',
      type: 'Professional'
    },
    {
      title: 'Coursera - Data Structures & Algorithms',
      issuer: 'University Course',
      date: '2024',
      type: 'Professional'
    },
    {
      title: 'Coursera - App Development',
      issuer: 'University Course',
      date: '2024',
      type: 'Professional'
    }
  ];

  const nextCert = () => {
    setCurrentCert((prev) => (prev + 1) % certifications.length);
  };

  const prevCert = () => {
    setCurrentCert((prev) => (prev - 1 + certifications.length) % certifications.length);
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
    <section id="accomplishments" className="py-16 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
            Accomplishments
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Awards */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center justify-center">
                <FaTrophy className="text-accent mr-3" />
                Awards & Recognition
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accomplishments.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-card p-6 rounded-2xl shadow-secondary border border-border/50 hover:shadow-primary transition-all duration-300"
                >
                  <h4 className="font-display font-bold text-primary text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="gradient-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.achievement}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Carousel */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center justify-center">
                <FaCertificate className="text-accent mr-3" />
                Certifications
              </h3>
            </div>
            <div className="relative max-w-md mx-auto">
              <div className="bg-card p-8 rounded-3xl shadow-secondary border border-border/50 text-center">
                <motion.div
                  key={currentCert}
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center`}>
                    <FaCertificate className="text-white text-2xl" />
                  </div>
                  <h4 className="font-display font-bold text-foreground text-lg mb-2">
                    {certifications[currentCert].title}
                  </h4>
                  <p className="text-muted-foreground mb-2">{certifications[currentCert].issuer}</p>
                  <div className="flex justify-center items-center space-x-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                      {certifications[currentCert].type}
                    </span>
                    <span className="text-xs text-muted-foreground">{certifications[currentCert].date}</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Navigation */}
              <button
                onClick={prevCert}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-card rounded-full shadow-secondary hover:shadow-primary transition-all duration-300 text-muted-foreground hover:text-primary"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextCert}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-card rounded-full shadow-secondary hover:shadow-primary transition-all duration-300 text-muted-foreground hover:text-primary"
              >
                <FaChevronRight />
              </button>
              
              {/* Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {certifications.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCert(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentCert ? 'gradient-primary w-6' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accomplishments;