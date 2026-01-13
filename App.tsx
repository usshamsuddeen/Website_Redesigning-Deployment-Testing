
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';

export type Page = 'home' | 'services' | 'portfolio' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} />;
      case 'services': return <ServicesPage />;
      case 'portfolio': return <PortfolioPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen mesh-bg selection:bg-emerald-100 selection:text-emerald-900 scroll-smooth">
      <Navbar isScrolled={isScrolled} currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="relative pt-32 pb-12">
        {/* Animated Background Orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[-15%] left-[-5%] w-[50%] h-[50%] bg-emerald-100/20 rounded-full blur-[160px] animate-pulse"></div>
          <div className="absolute bottom-[-15%] right-[-5%] w-[50%] h-[50%] bg-blue-100/20 rounded-full blur-[160px] animate-pulse"></div>
        </div>

        {renderPage()}
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
