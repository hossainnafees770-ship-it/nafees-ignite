import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'hossainnafees587@gmail.com',
      href: 'mailto:hossainnafees587@gmail.com',
      gradient: 'gradient-primary'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/nafeeshossain',
      gradient: 'gradient-secondary'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'View my projects',
      href: 'https://github.com/nafeeshossain',
      gradient: 'gradient-primary'
    },
    {
      icon: SiLeetcode,
      title: 'LeetCode',
      value: 'See my solutions',
      href: 'https://leetcode.com/nafeeshossain',
      gradient: 'gradient-secondary'
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
    <section id="contact" className="py-16" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's connect and discuss opportunities, projects, or just have a chat about technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactLinks.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <div className="flex items-center space-x-6 p-6 bg-card rounded-2xl shadow-secondary border border-border/50 group-hover:shadow-primary transition-all duration-500">
                  <div className={`p-4 ${contact.gradient} rounded-2xl shadow-secondary group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                      {contact.title}
                    </h4>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors leading-relaxed">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="bg-card p-8 rounded-3xl shadow-secondary border border-border/50 max-w-2xl mx-auto">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Let's Build Something Great
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations. Whether you're looking for a developer or just want to 
                connect, feel free to reach out through any of the channels above.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', data);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'hossainnafees587@gmail.com',
      href: 'mailto:hossainnafees587@gmail.com',
      gradient: 'gradient-primary'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 9564289091',
      href: 'tel:+919564289091',
      gradient: 'gradient-secondary'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Chakkamala North, Deulti, Bagnan, Howrah, 711303',
      href: '#',
      gradient: 'gradient-primary'
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
    <section id="contact" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project idea, collaboration opportunity, or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-8">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group"
                  >
                    {info.href.startsWith('#') ? (
                      <div className="flex items-center space-x-6 p-6 bg-card rounded-2xl shadow-secondary border border-border/50 group-hover:shadow-primary transition-all duration-500">
                        <div className={`p-4 ${info.gradient} rounded-2xl shadow-secondary group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className="text-white text-2xl" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">{info.value}</p>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={info.href}
                        className="flex items-center space-x-6 p-6 bg-card rounded-2xl shadow-secondary border border-border/50 group-hover:shadow-primary transition-all duration-500 block"
                      >
                        <div className={`p-4 ${info.gradient} rounded-2xl shadow-secondary group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className="text-white text-2xl" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground hover:text-primary transition-colors leading-relaxed">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-secondary border border-border/50">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Let's Create Something Amazing
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always interested in hearing about new opportunities, collaborations, 
                and innovative projects. Whether you're looking for a developer, researcher, 
                or just want to discuss technology, I'd love to connect.
              </p>
              <div className="flex items-center text-primary">
                <FaCheckCircle className="mr-2" />
                <span className="text-sm font-medium">Usually responds within 24 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-card p-8 rounded-3xl shadow-secondary border border-border/50">
              <h3 className="font-display text-2xl font-bold text-foreground mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">
                      Full Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      id="name"
                      className="w-full px-4 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground placeholder-muted-foreground"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-2">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                      Email Address *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Please enter a valid email'
                        }
                      })}
                      type="email"
                      id="email"
                      className="w-full px-4 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground placeholder-muted-foreground"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-2">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-3">
                    Subject *
                  </label>
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    type="text"
                    id="subject"
                    className="w-full px-4 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground placeholder-muted-foreground"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-destructive text-sm mt-2">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    id="message"
                    rows={6}
                    className="w-full px-4 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none text-foreground placeholder-muted-foreground"
                    placeholder="Tell me about your project or idea..."
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-2">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full gradient-primary text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-60 disabled:cursor-not-allowed shadow-primary hover:shadow-accent"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;