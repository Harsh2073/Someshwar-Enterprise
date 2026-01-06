import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Expertises from '../components/Expertises';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Landing = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);

      if (element) {
        const yOffset = -100; // navbar height offset
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <Hero />
      <About />
      <Expertises />
      <Projects />
      <Contact />
    </div>
  );
};

export default Landing;
