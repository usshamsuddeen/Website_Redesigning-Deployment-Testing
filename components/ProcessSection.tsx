import React from 'react';
import { SearchCode, Terminal, Rocket, CheckCircle, BarChart, Settings } from 'lucide-react';

const steps = [
  {
    title: "Deep Analysis",
    icon: <SearchCode className="w-8 h-8 text-blue-500" />,
    desc: "We begin with a rigorous analytical deep-dive into your existing technical architecture and market position. Our team identifies friction points and growth opportunities using proprietary audit frameworks.",
    img: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Precision Engineering",
    icon: <Terminal className="w-8 h-8 text-emerald-500" />,
    desc: "Our engineers architect bespoke, zero-latency solutions using the latest in microservices and cloud-native technologies. Every line of code is optimized for performance, scalability, and security.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Agile Deployment",
    icon: <Rocket className="w-8 h-8 text-rose-500" />,
    desc: "Using advanced CI/CD pipelines, we ensure rapid, stable, and incremental releases. Our agile methodology minimizes time-to-market while maintaining the highest quality standards across all environments.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <div className="py-24 space-y-20">
      <div className="max-w-4xl space-y-8">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-900 rounded-full border border-slate-800 shadow-2xl">
          <Settings size={16} className="text-emerald-500" />
          <span className="text-[11px] font-black text-white uppercase tracking-widest">Our Engineering Flywheel</span>
        </div>
        <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.95]">How We <span className="text-emerald-500">Deliver</span> Results.</h2>
        <p className="subtext max-w-2xl">
          Precision is not an accident; it is a byproduct of a disciplined, repeatable methodology designed for high-intensity digital transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {steps.map((step, i) => (
          <div key={i} className="glass-card p-12 rounded-[56px] group hover:shadow-2xl transition-all duration-700 flex flex-col justify-between min-h-[550px] relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-1000">
               <img src={step.img} className="w-full h-full object-cover scale-150 group-hover:scale-100 transition-transform duration-[2000ms]" alt="" />
            </div>
            <div className="space-y-10 relative z-10">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl border border-slate-50 group-hover:rotate-6 transition-transform">
                 {step.icon}
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter leading-none">{step.title}</h3>
                <p className="subtext leading-relaxed">{step.desc}</p>
              </div>
            </div>
            <div className="pt-10 relative z-10">
               <div className="flex items-center gap-3">
                 <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-[14px] font-black text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all">0{i+1}</div>
                 <div className="flex-1 h-px bg-slate-100 group-hover:bg-emerald-500 transition-colors"></div>
                 <CheckCircle className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};