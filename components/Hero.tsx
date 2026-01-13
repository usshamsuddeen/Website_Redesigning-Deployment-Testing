
import React from 'react';
import { ArrowUpRight, Sparkles, Users, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-12 md:pt-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in">
          {["Market Strategy", "High Performance", "AI Intelligence", "Global Scalability", "Visual Aesthetics"].map((tag, i) => (
            <div key={i} className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all cursor-pointer group
              ${i === 0 ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-200' : 'bg-white/60 border-slate-200 text-slate-400 hover:border-emerald-500 hover:text-emerald-500'}
            `}>
              {i === 0 && <Star size={10} className="fill-white" />}
              {tag}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8 space-y-12">
            <h1 className="text-6xl md:text-[6.2rem] font-extrabold text-slate-900 leading-[0.95] tracking-tight text-center lg:text-left">
              Intelligent <span className="text-emerald-500">Design</span> <br />
              For The <span className="inline-flex items-center align-middle mx-2">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/150?u=hero${i}`} className="w-14 h-14 md:w-20 md:h-20 rounded-full border-[6px] border-white object-cover shadow-xl" />
                  ))}
                </div>
              </span> <br />
              Modern Era.
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left space-y-10">
                <p className="subtext max-w-xl">
                  We empower visionary brands to outperform the market through mission-critical software and bespoke engineering. Elevate your operational capabilities with the gold standard of digital craftsmanship.
                </p>
                <div className="flex items-center gap-6 justify-center md:justify-start">
                  <button className="px-10 py-5 bg-slate-900 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-2xl shadow-slate-900/30 flex items-center gap-3 group hover:scale-105">
                    Start Your Transformation
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </button>
                  <div className="flex items-center gap-3 text-slate-400 group cursor-pointer hover:text-slate-900 transition-colors">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-50">
                      <Sparkles size={18} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Explore Portfolio</span>
                  </div>
                </div>
              </div>

              <div className="relative w-48 h-48 flex items-center justify-center shrink-0">
                <div className="absolute inset-0 spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path id="heroCirclePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                    <text className="circular-text">
                      <textPath href="#heroCirclePath">
                        • ELITE DIGITAL SOLUTIONS • MISSION CRITICAL ARCHITECTURE •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="w-20 h-20 bg-white glass-card rounded-full flex items-center justify-center shadow-2xl z-10 border-white">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-inner shadow-emerald-700/20">
                    <ArrowUpRight className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
             <div className="glass-card p-0 bento-shape-1 relative overflow-hidden bg-gradient-to-br from-white to-blue-50/20 min-h-[500px] flex flex-col justify-between group">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                  className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-1000" 
                  alt="Tech Context"
                />
                <div className="p-10 space-y-8 relative z-10">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-50">
                     <Users className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-7xl font-black text-slate-900 tracking-tighter leading-none">15k+</h3>
                  <p className="subtext leading-snug">
                    Seamless digital transformations delivered to global market leaders in 2024. Our engineering rigor ensures your enterprise stays ahead of the disruption curve.
                  </p>
                </div>
                <div className="p-10 space-y-6 relative z-10">
                  <div className="flex -space-x-3">
                    {[1,2,3,4,5].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=bentohero${i}`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" />
                    ))}
                  </div>
                  <div className="pt-4 border-t border-slate-100/50">
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Trusted by Fortune 500 Innovators</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
