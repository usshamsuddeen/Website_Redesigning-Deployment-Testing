
import React from 'react';
import { ArrowUpRight, Zap, Globe, Layers, BarChart, CheckCircle2 } from 'lucide-react';

const products = [
  {
    title: "Nexus ERP Core",
    desc: "The mission-critical heartbeat of modern enterprise operations. Nexus is a unified intelligence layer that synchronizes complex global logistics, automated HR pipelines, and multi-region financial flows in a zero-latency, high-security environment.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    features: ["Predictive Inventory Flow", "Unified Global Ledger", "Dynamic Resource Scheduler"],
    metric: "45% OPEX Reduction",
    icon: <Layers className="text-emerald-500" />
  },
  {
    title: "Coresight AI",
    desc: "Transform fragmented data points into clear executive strategies. Coresight combines advanced neural networks with high-fidelity visualization to provide real-time forecasting and decision support for leadership teams.",
    img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop",
    features: ["Neural Trend Forecasting", "Real-time Sentiment Hub", "Automated Strategy Reports"],
    metric: "99.99% Data Insight",
    icon: <BarChart className="text-blue-500" />
  }
];

export const ProductShowcase: React.FC = () => {
  return (
    <div className="py-24">
      <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12 border-b border-slate-100 pb-16">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-50 rounded-full border border-blue-100 shadow-sm">
            <Zap size={16} className="text-blue-500" />
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-widest">Internal Software Lab</span>
          </div>
          <h2 className="text-6xl md:text-[5.5rem] font-black text-slate-900 tracking-tighter leading-[0.9]">Proprietary <br /><span className="text-blue-500">Infrastructure.</span></h2>
          <p className="subtext max-w-2xl">
            Our engineering team doesn't just use standard tools—we build the specialized SaaS platforms that define operational excellence for our elite partners. Experience the power of custom-built intelligence.
          </p>
        </div>
        <button className="px-12 py-6 bg-white border border-slate-200 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-slate-900/5 group">
           Request Demo Access <ArrowUpRight size={16} className="inline ml-2 group-hover:rotate-45 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {products.map((p, i) => (
          <div key={i} className="glass-card p-10 rounded-[72px] group hover:shadow-2xl transition-all duration-1000 flex flex-col min-h-[750px] overflow-hidden">
            <div className="flex-1 rounded-[56px] overflow-hidden mb-12 relative shadow-2xl">
               <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
               <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                  <div className="space-y-3">
                    <p className="text-[11px] font-black text-emerald-400 uppercase tracking-[0.3em]">Verified Outcome</p>
                    <p className="text-5xl font-black text-white tracking-tighter leading-none">{p.metric}</p>
                  </div>
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform">
                     <ArrowUpRight size={32} className="text-slate-900" />
                  </div>
               </div>
            </div>
            <div className="px-6 pb-6 space-y-10">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-inner border border-slate-100">
                     {p.icon}
                  </div>
                  <h3 className="text-5xl font-black text-slate-900 tracking-tighter">{p.title}</h3>
               </div>
               <p className="subtext leading-relaxed">
                  {p.desc} This ecosystem is architected to eliminate operational friction and empower leadership with absolute data transparency.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {p.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-50 p-3 rounded-2xl bg-slate-50/30">
                       <CheckCircle2 size={14} className="text-emerald-500" />
                       {f}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
