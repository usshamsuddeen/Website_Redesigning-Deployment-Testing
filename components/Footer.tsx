import React from 'react';
import { Linkedin, Twitter, Instagram, Mail, MapPin, ArrowUpRight, Send, Globe, ShieldCheck, Terminal, Layers, Cpu } from 'lucide-react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative mt-40 p-4 md:p-8 lg:p-12 overflow-hidden">
      {/* Light-themed background animation */}
      <div className="absolute inset-0 footer-light-anim -z-10 opacity-70"></div>
      
      {/* Main Glass Container - Clean Light Theme */}
      <div className="container mx-auto glass-card rounded-[80px] border-white/60 p-12 md:p-20 relative z-10 overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)]">
        
        {/* Subtle Decorative Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24 relative z-10">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-5 group cursor-pointer" onClick={() => onNavigate('home')}>
                <div className="w-16 h-16 bg-white rounded-[24px] flex items-center justify-center shadow-xl border border-slate-100 group-hover:rotate-12 transition-all duration-700">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black tracking-tighter text-slate-900 leading-none">Smart GTech</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mt-2">Engineering Hub</span>
                </div>
              </div>
              <p className="subtext max-w-lg">
                Pioneering mission-critical digital architectures for global innovators. We deliver high-fidelity engineering solutions that establish market authority and operational excellence.
              </p>
            </div>

            <div className="space-y-8 p-10 bg-white/40 rounded-[48px] border border-white/60 shadow-sm backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500">Subscribe To Insights</h4>
              </div>
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="enterprise@email.com" 
                  className="bg-white/80 border border-slate-200 rounded-full px-8 py-5 flex-1 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all text-sm text-slate-900 font-medium"
                />
                <button className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all shadow-xl shadow-slate-900/10">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Link Matrix */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16 pt-4">
            <div className="space-y-10">
              <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.3em] border-b border-slate-100 pb-6 flex items-center gap-2">
                <Terminal size={14} className="text-emerald-500" />
                Navigation
              </h4>
              <ul className="space-y-5 font-bold text-[15px]">
                {['Home Base', 'Capability Matrix', 'Success Stories', 'Our Ethos'].map((item, i) => (
                  <li key={i}>
                    <button 
                      onClick={() => onNavigate(['home', 'services', 'portfolio', 'about'][i] as Page)} 
                      className="text-slate-500 hover:text-emerald-600 transition-all flex items-center gap-2 group"
                    >
                      {item}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.3em] border-b border-slate-100 pb-6 flex items-center gap-2">
                <Cpu size={14} className="text-blue-500" />
                Intelligence
              </h4>
              <div className="flex flex-col gap-6 pt-2">
                {[
                  { icon: Linkedin, name: 'LinkedIn' },
                  { icon: Twitter, name: 'Twitter' },
                  { icon: Instagram, name: 'Instagram' }
                ].map((social, i) => (
                  <a key={i} href="#" className="flex items-center gap-4 text-slate-500 hover:text-slate-900 transition-all group">
                    <div className="w-10 h-10 rounded-2xl border border-slate-100 flex items-center justify-center group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-all">
                      <social.icon size={18} />
                    </div>
                    <span className="text-[11px] font-black tracking-widest uppercase">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.3em] border-b border-slate-100 pb-6 flex items-center gap-2">
                <Layers size={14} className="text-rose-500" />
                Connectivity
              </h4>
              <div className="space-y-8 text-sm font-medium">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                     <Mail className="text-emerald-600" size={16} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Operations</p>
                    <p className="text-slate-900 font-bold">ops@gtech.agency</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                     <Globe className="text-blue-600" size={16} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Headquarters</p>
                    <p className="text-slate-900 font-bold leading-relaxed">Palo Alto Technology District, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-16 border-t border-slate-100 flex flex-col xl:flex-row justify-between items-center gap-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">
              © 2024 Smart GTech Engineering Hub. Precision Monitored.
            </p>
            <div className="flex items-center gap-3 px-6 py-2 bg-emerald-50 rounded-full border border-emerald-100 shadow-sm">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">ISO 27001 Certified</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 lg:gap-14 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            {['Privacy Architecture', 'Legal Framework', 'SLA Policy'].map((link, i) => (
              <a key={i} href="#" className="hover:text-emerald-600 transition-all">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Aesthetic Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-slate-900/[0.02] -z-20 select-none">
        GTECH
      </div>
    </footer>
  );
};