import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <Hero />
      <ScrollReveal delay={100}>
        <About />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <Experience />
      </ScrollReveal>
      <ScrollReveal delay={300}>
        <Projects />
      </ScrollReveal>
      <ScrollReveal delay={400}>
        <Skills />
      </ScrollReveal>
      <ScrollReveal delay={500}>
        <Education />
      </ScrollReveal>
      <ScrollReveal delay={600}>
        <Contact />
      </ScrollReveal>
      <Footer />
    </>
  );
};

export default Home;
