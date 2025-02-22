

import React from 'react';
import { useLanguage } from '../Context/LanguageContext';
import Hero from '../components/hero';
import WhoUs from '../components/whous'
import Services from '../components/services'
import Projects from '../components/projects'
import Location from '../components/location'
import Footer from '../components/footer'
function Home() { 
  const { language } = useLanguage();

  return (
    <>
      <Hero language={language} /> 
      <WhoUs language={language} /> 
      <Services language={language} /> 
      <Projects language={language} /> 
      <Location language={language} /> 
      <Footer language={language} /> 
    </>
  );
}

export default Home;






