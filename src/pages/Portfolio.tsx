import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Accomplishments from '@/components/Accomplishments';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Accomplishments />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;