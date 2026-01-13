
import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Zap, Target, Layers } from 'lucide-react';

const cases = [
  {
    title: "Global Commerce Hub",
    client: "LuxRetail Inc.",
    impact: "+140% Conversion",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    size: "lg"
  },
  {
    title: "Intelligence ERP",
    client: "Apex Logistix",
    impact: "-40% Operational Cost",
    category: "ERP Solutions",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop",
    size: "md"
  },
  {
    title: "Neural Search SEO",
    client: "ScaleUp AI",
    impact: "1M+ Monthly Organic",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
    size: "md"
  },
  {
    title: "Visionary Mobile",
    client: "Neon Lifestyle",
    impact: "4.9 App Store Rating",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    size: "lg"
  }
];

export const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full-Stack', 'ERP Solutions', 'SEO', 'Mobile'];

  return (
    <div className="container mx-auto px-4 md:px-12 space-y-24 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-end justify-between gap-12 border-b border-slate-100 pb-16">
        <div className="space-y-8">
           <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
            The <span className="text-emerald-500">Showcase</span> <br />
            Of Excellence.
          </h1>
          <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-xl">
            A selection of mission-critical platforms built for global market leaders.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                filter === cat ? 'bg-slate-900 text-white shadow-xl' : 'bg-white text-slate-400 border border-slate-100 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {cases.filter(c => filter === 'All' || c.category === filter).map((project, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="glass-card p-4 rounded-[64px] overflow-hidden transition-all duration-1000 group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]">
              <div className="aspect-[16/10] overflow-hidden rounded-[48px] relative">
                <img src={project.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-8 right-8 flex gap-3">
                   <div className="px-5 py-2 bg-white/95 backdrop-blur rounded-full text-[9px] font-black uppercase text-slate-900 tracking-widest">
                     {project.category}
                   </div>
                </div>
              </div>
              <div className="p-10 space-y-8">
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <p className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.2em]">{project.client}</p>
                    <h3 className="text-4xl font-black text-slate-900 tracking-tighter">{project.title}</h3>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:rotate-45 transition-all">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-50">
                   <div className="space-y-1">
                      <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Proven Impact</p>
                      <p className="text-xl font-black text-slate-900">{project.impact}</p>
                   </div>
                   <div className="flex items-center justify-end">
                      <div className="flex -space-x-3">
                        {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100" />)}
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="py-24 text-center space-y-10">
         <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Ready To Be Our Next Success Story?</h2>
         <button className="px-12 py-6 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-emerald-500 transition-colors shadow-2xl">
           Start Your Transformation
         </button>
      </div>
    </div>
  );
};
