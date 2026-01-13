
import React from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  isScrolled: boolean;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled, currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks: { name: string; id: Page }[] = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNav = (id: Page) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => handleNav('home')}>
             <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:rotate-12 transition-transform">
                <div className="w-5 h-5 bg-white rounded-full"></div>
             </div>
             <span className="text-lg font-black tracking-tighter text-slate-900">Smart GTech</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center bg-white/40 backdrop-blur-xl px-2 py-2 rounded-full border border-white/50 shadow-sm">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-6 py-2 text-[11px] font-black uppercase tracking-widest transition-all rounded-full ${
                  currentPage === link.id ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNav('contact')}
              className="hidden sm:flex items-center gap-2 px-8 py-3 bg-white border border-slate-200 text-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-sm group"
            >
              Consultation
              <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-all">
                 <ArrowUpRight className="w-3 h-3" />
              </div>
            </button>
            <button className="lg:hidden w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 glass-card p-10 rounded-[48px] shadow-2xl lg:hidden flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-4xl font-black tracking-tighter text-left ${currentPage === link.id ? 'text-emerald-500' : 'text-slate-900'}`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-6 border-t border-slate-100">
            <button onClick={() => handleNav('contact')} className="w-full py-5 bg-slate-900 text-white rounded-[24px] font-black uppercase tracking-widest text-xs shadow-xl">
              Get Started Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
