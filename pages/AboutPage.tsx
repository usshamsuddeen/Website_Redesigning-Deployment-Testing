
import React from 'react';
import { Target, Shield, Cpu, Users, Globe, Award, Zap, CheckCircle2 } from 'lucide-react';

const values = [
  { icon: <Shield size={24} />, title: "Digital Resilience", desc: "We build architectures designed to withstand the highest pressures of global scale." },
  { icon: <Cpu size={24} />, title: "Precision Code", desc: "Our engineering team prioritizes algorithmic efficiency and maintainable excellence." },
  { icon: <Zap size={24} />, title: "Speed to Market", desc: "Agile methodologies refined for high-velocity enterprise delivery cycles." }
];

export const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 space-y-32 py-12">
      {/* Narrative Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900 rounded-full">
            <Globe size={14} className="text-emerald-500" />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Our Global Ethos</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
            The Engineering <br />
            <span className="text-emerald-500">Powerhouse</span> <br />
            Behind Growth.
          </h1>
          <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            Smart GTech isn't just a software agency. We are a multidisciplinary laboratory where high-level engineering meets radical design intuition.
          </p>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="glass-card p-4 rounded-[64px] bento-shape-2 rotate-2 group hover:rotate-0 transition-all duration-1000">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              className="rounded-[56px] w-full h-[500px] object-cover" 
            />
          </div>
        </div>
      </div>

      {/* Values Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <div key={i} className="glass-card p-12 rounded-[48px] space-y-8 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
              {v.icon}
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{v.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Deep Metrics */}
      <div className="glass-card p-20 rounded-[80px] bento-shape-1 bg-gradient-to-br from-white to-emerald-50/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "Lines of Precision Code", val: "12M+" },
            { label: "Successful Deployments", val: "450+" },
            { label: "Average ROI Increase", val: "220%" },
            { label: "Elite Team Size", val: "45+" }
          ].map((stat, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-6xl font-black text-slate-900 tracking-tighter">{stat.val}</h4>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Row */}
      <div className="py-24 border-y border-slate-100">
        <p className="text-center text-slate-400 text-xs font-black uppercase tracking-[0.3em] mb-12">Industry Validated Excellence</p>
        <div className="flex flex-wrap items-center justify-center gap-16 opacity-30 grayscale">
          {['ISO 27001', 'SOC2 TYPE II', 'AWS CERTIFIED', 'GOOGLE PARTNER', 'FORBES ELITE'].map(p => (
            <span key={p} className="text-2xl font-black tracking-tighter text-slate-900">{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
