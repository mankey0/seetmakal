
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { LanguageProvider, useLanguage } from './Context/LanguageContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact'
import Commercial from './pages/commercial'
import Residential from './pages/residential'
import Industrial from './pages/industrial';
import Concrete from './pages/Concrete';
import Carpentry from './pages/carpentry';
import Plastering from './pages/plastering';
import Steelworks from './pages/steelworks';
import Electricalworks from './pages/electricalworks';
import Painting from './pages/Painting';
import Renovation from './pages/renovation';
import Finishingworks from './pages/finishingworks';
import Ceramic from './pages/ceramic';
import Gypsum from './pages/gypsum';
import Roofinsulation from './pages/roofinsulation';
import Woodendoor from './pages/woodendoor';
import Infrastructureprojects from './pages/infrastructureprojects';
import Aluminumglass from './pages/aluminumglass';
function AppContent() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/about" element={<About />} />
        <Route path="/home/contact" element={<Contact />} />
        <Route path="/home/services/commercial" element={<Commercial />} />
        <Route path="/home/services/residential" element={<Residential />} />
        <Route path="/home/services/industrial" element={<Industrial />} />
        <Route path="/home/services/concrete" element={<Concrete />} />
        <Route path="/home/services/carpentry" element={<Carpentry />} />
        <Route path="/home/services/plastering" element={<Plastering />} />
        <Route path="/home/services/steelworks" element={<Steelworks />} />
        <Route path="/home/services/electricalworks" element={<Electricalworks />} />
        <Route path="/home/services/painting" element={<Painting />} />
        <Route path="/home/services/renovation" element={<Renovation />} />
        <Route path="/home/services/finishingworks" element={<Finishingworks />} />
        <Route path="/home/services/ceramic" element={<Ceramic />} />
        <Route path="/home/services/gypsum" element={<Gypsum />} />
        <Route path="/home/services/roofinsulation" element={<Roofinsulation />} />
        <Route path="/home/services/woodendoor" element={<Woodendoor />} />
       <Route path="/home/services/infrastructureprojects" element={<Infrastructureprojects />} />
         <Route path="/home/services/aluminumglass" element={<Aluminumglass />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
