
import React from 'react';
import { Search, Database, Smartphone, Repeat, Code2, PencilRuler, ArrowUpRight, CheckCircle2, Shield } from 'lucide-react';

const detailedServices = [
  {
    title: "Performance SEO & SEM",
    desc: "Engineered visibility for the modern search landscape. We don't just optimize keywords; we dominate market share through technical excellence and semantic authority.",
    features: ["Entity-Based Content Clusters", "Technical Infrastructure Audits", "Predictive Algorithm Modeling", "High-Impact Link Engineering"],
    icon: <Search className="w-10 h-10 text-emerald-500" />,
    color: "emerald"
  },
  {
    title: "Next-Gen UI/UX Design",
    desc: "Human-centric interfaces that bridge the gap between complex functionality and emotional connection. We build digital products people love to use.",
    features: ["Frictionless User Journeys", "Design System Engineering", "High-Fidelity Interaction Design", "Rapid Prototyping & User Testing"],
    icon: <PencilRuler className="w-10 h-10 text-blue-500" />,
    color: "blue"
  },
  {
    title: "Enterprise ERP Solutions",
    desc: "Mission-critical operational backbones. We unify global logistics, HR, and finance into a single, real-time intelligence hub.",
    features: ["Multi-Region Financial Engine", "AI-Driven Demand Forecasting", "Unified Workforce Management", "Automated Supply Chain Flows"],
    icon: <Database className="w-10 h-10 text-slate-900" />,
    color: "slate"
  },
  {
    title: "Velocity CRM Systems",
    desc: "Accelerate your sales velocity through data-driven customer relationship management and automated engagement pipelines.",
    features: ["Predictive Lead Scoring", "Full-Funnel Automation", "Omnichannel Insight Engine", "Dynamic Sales Dashboarding"],
    icon: <Repeat className="w-10 h-10 text-amber-500" />,
    color: "amber"
  }
];

export const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 space-y-32 py-12">
      {/* Header */}
      <div className="max-w-4xl space-y-8">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full">
          <Shield size={14} className="text-emerald-500" />
          <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">Our Solutions Matrix</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
          Engineering <span className="text-emerald-500">Excellence</span> At Every Layer.
        </h1>
        <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
          We provide the high-performance digital infrastructure required to lead in a hyper-competitive landscape.
        </p>
      </div>

      {/* Services Bento Grid Expanded */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {detailedServices.map((service, idx) => (
          <div key={idx} className="glass-card p-14 rounded-[64px] group hover:shadow-2xl transition-all duration-1000 flex flex-col justify-between">
            <div className="space-y-12">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm border border-slate-50 group-hover:rotate-6 transition-transform">
                {service.icon}
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter">{service.title}</h2>
                <p className="text-xl text-slate-500 leading-relaxed font-medium">{service.desc}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-12 mt-12 border-t border-slate-100 flex items-center justify-between">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Scale Ready Solution</span>
               <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest group-hover:bg-emerald-500 transition-colors">
                 Build This <ArrowUpRight size={14} />
               </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Request Section */}
      <div className="glass-card p-16 rounded-[80px] bento-shape-1 bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]"></div>
        <div className="space-y-6 relative z-10">
          <h2 className="text-5xl font-black tracking-tighter leading-tight">Need A Bespoke <br /> Architecture?</h2>
          <p className="text-slate-400 text-xl font-medium max-w-md leading-relaxed">
            Our specialized lab handles high-intensity projects requiring unique cross-platform integrations and deep-stack engineering.
          </p>
        </div>
        <button className="relative z-10 px-12 py-8 bg-emerald-500 text-slate-900 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl shadow-emerald-500/20">
          Start Custom Inquiry
        </button>
      </div>
    </div>
  );
};
