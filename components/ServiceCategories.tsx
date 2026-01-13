
import React from 'react';
import { Palette, Terminal, Search, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

const categories = [
  {
    title: "Elite Design Lab",
    icon: <Palette className="w-10 h-10 text-rose-500" />,
    desc: "Crafting emotional connections through frictionless interfaces and high-fidelity aesthetics. We build design systems that scale across entire product ecosystems.",
    items: ["UI/UX Intelligence", "Visual Identity Systems", "High-Fi Prototyping", "A/B Conversion Testing"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1964&auto=format&fit=crop"
  },
  {
    title: "Core Engineering",
    icon: <Terminal className="w-10 h-10 text-indigo-500" />,
    desc: "Robust backend infrastructures and cloud-native solutions designed for massive concurrency and military-grade resilience.",
    items: ["Microservice Architecture", "Real-time Data Pipes", "Security Operations", "Legacy System Migration"],
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Semantic SEO",
    icon: <Search className="w-10 h-10 text-emerald-500" />,
    desc: "Dominating search engine results pages through technical superiority, semantic authority, and advanced entity-based optimization.",
    items: ["Algorithm Resilience", "Content Clusters", "Technical Infrastructure", "Competitor Intelligence"],
    img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Performance Growth",
    icon: <TrendingUp className="w-10 h-10 text-amber-500" />,
    desc: "Strategic marketing automation and predictive analytics designed to convert high-intent traffic into long-term customer equity.",
    items: ["Omnichannel Automation", "Lead Pipeline Scoring", "Sales Intelligence", "Predictive Analytics"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  }
];

export const ServiceCategories: React.FC = () => {
  return (
    <div className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Our Holistic Approach</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">Elite Domain <br /><span className="text-emerald-500">Expertise.</span></h2>
          <p className="subtext max-w-xl">
            Our multi-disciplinary team operates at the forefront of digital innovation. We integrate design, code, and growth strategies into a singular high-performance flywheel for your brand.
          </p>
        </div>
        <div className="flex lg:justify-end">
           <div className="flex -space-x-12">
              {categories.map((c, i) => (
                <div key={i} className="w-32 h-32 rounded-[40px] border-[10px] border-white overflow-hidden shadow-2xl hover:translate-y-[-15px] hover:z-10 transition-all cursor-pointer">
                  <img src={c.img} className="w-full h-full object-cover" />
                </div>
              ))}
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {categories.map((cat, i) => (
          <div key={i} className="glass-card p-12 rounded-[56px] group hover:bg-slate-900 transition-all duration-700 flex flex-col justify-between min-h-[650px] relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-15 transition-opacity duration-1000">
               <img src={cat.img} className="w-full h-full object-cover scale-150 group-hover:scale-100 transition-transform duration-[2500ms]" />
            </div>
            <div className="space-y-12 relative z-10">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl group-hover:rotate-6 transition-transform">
                 {cat.icon}
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter group-hover:text-white leading-none">{cat.title}</h3>
                <p className="subtext text-base group-hover:text-slate-400 leading-relaxed">{cat.desc}</p>
              </div>
              <ul className="space-y-4 pt-6">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-300">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-12 relative z-10 border-t border-slate-100 group-hover:border-white/10 mt-8">
               <button className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 group-hover:text-emerald-400 transition-colors">
                  Details <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
