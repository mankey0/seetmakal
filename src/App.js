// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import { LanguageProvider } from './Context/LanguageContext';
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Navbar from './components/navbar';
// import Home from './pages/home';
// import About from './pages/about';
// import Services from './pages/services';

// function App() {
  
//   return (
//     <LanguageProvider>
//       <Router>
//         {/* تمرير اللغة ودالة تغيير اللغة إلى Navbar */}
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Navigate to="/home" />} />
//           {/* تمرير language إلى الصفحات */}
//           <Route path="/home" element={<Home />} />
//           <Route path="/home/about" element={<About />} />
//           <Route path="/home/Services" element={<Services />} />
//         </Routes>
//       </Router>
//     </LanguageProvider>
//   );
// }

// export default App;

















import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { LanguageProvider, useLanguage } from './Context/LanguageContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';

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
        <Route path="/home/Services" element={<Services />} />
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
