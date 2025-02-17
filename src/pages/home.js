

import React from 'react';
import { useLanguage } from '../Context/LanguageContext';
import Hero from '../components/hero';
import WhoUs from '../components/whous'
import Services from '../components/services'
function Home() { // استقبال اللغة كمُعامل
  const { language } = useLanguage();

  return (
    <>
      <Hero language={language} /> 
      <WhoUs language={language} /> 
      <Services language={language} /> 
    </>
  );
}

export default Home;






