import './App.css';
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import MobileMenu from './components/MobileMenu';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home setCurrentPage={setCurrentPage} />;
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'contact': return <Contact />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        setCurrentPage={setCurrentPage} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      {isMobileMenuOpen && <MobileMenu setCurrentPage={setCurrentPage} setIsMobileMenuOpen={setIsMobileMenuOpen} />}
      {renderPage()}
    </div>
  );
}

export default App;
