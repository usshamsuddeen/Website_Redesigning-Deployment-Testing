import React from 'react';
import { Target, Eye, Award, CheckCircle2, Shield, Zap, Compass, Star, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="space-y-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Narrative Card */}
        <div className="lg:col-span-8 glass-card p-16 rounded-[64px] bento-shape-1 bg-gradient-to-br from-white to-emerald-50/20 flex flex-col justify-between group min-h-[650px] relative overflow-hidden">
          <div className="absolute right-0 top-0 w-2/3 h-full z-0 opacity-[0.04] group-hover:opacity-[0.1] transition-all duration-1000 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Elite Team" />
          </div>
          
          <div className="space-y-12 relative z-10">
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl border border-slate-50 group-hover:rotate-6 transition-transform">
              <Target className="w-10 h-10 text-emerald-500" />
            </div>
            <div className="space-y-8">
               <h2 className="text-6xl md:text-[5.5rem] font-black text-slate-900 tracking-tighter leading-[0.9] max-w-2xl">
                Engineering <br />
                <span className="text-emerald-500">Exceptional</span> <br />
                Digital Value.
              </h2>
              <p className="subtext max-w-3xl">
                Smart GTech stands at the absolute intersection of high-performance engineering and radical design intuition. We don't simply deliver projects; we engineer high-fidelity ecosystems that empower global innovators to dominate their market through technological superiority and operational resilience. Our philosophy is rooted in the pursuit of perfection, merging analytical rigor with artisanal craftsmanship.
              </p>
            </div>
          </div>
          
          <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-slate-100 relative z-10">
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <div className="space-y-2">
                <h4 className="font-black text-slate-900 uppercase tracking-widest text-[12px]">Advanced Algorithm Stacks</h4>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tight leading-relaxed max-w-[240px]">Architecting proprietary technical frameworks optimized for mission-critical scale and zero-latency performance.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0 shadow-lg shadow-slate-900/20">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="space-y-2">
                <h4 className="font-black text-slate-900 uppercase tracking-widest text-[12px]">Defensive Security Core</h4>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tight leading-relaxed max-w-[240px]">Military-grade encryption protocols and zero-trust architectures designed to protect high-value organizational data assets.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Certification Column */}
        <div className="lg:col-span-4 flex flex-col gap-10">
          <div className="glass-card p-14 rounded-[64px] bento-shape-2 bg-slate-900 text-white flex flex-col justify-between flex-1 group relative overflow-hidden border-none shadow-2xl">
            <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-30 transition-opacity duration-1000">
               <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" className="w-full h-full object-cover scale-150 group-hover:scale-100 transition-transform duration-[4000ms]" alt="Visionary Roadmap" />
            </div>
            <div className="space-y-12 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-2xl border border-white/20">
                   <Eye className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="px-5 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-400">
                  Mission 2025
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl font-black tracking-tighter">The Vision</h3>
                <p className="text-slate-400 font-medium leading-relaxed text-xl">
                  To establish the global benchmark for digital operational intelligence.
                </p>
                <div className="pt-8 space-y-5">
                  {[
                    { icon: <Zap size={14} />, text: "Scalability Engine" },
                    { icon: <Compass size={14} />, text: "Strategic Resilience" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-5 text-[11px] font-black uppercase tracking-widest text-slate-200">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-emerald-500 border border-white/5">
                        {item.icon}
                      </div>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-12 rounded-[56px] flex flex-col justify-between group bg-white/60 border-emerald-100 shadow-xl shadow-emerald-500/[0.03]">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-emerald-50 rounded-[30px] flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors shadow-sm">
                <Award className="w-9 h-9 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-3xl font-black text-slate-900 tracking-tighter">Top Vendor</h4>
                <p className="text-emerald-600 text-[11px] font-black uppercase tracking-[0.2em] mt-1">Verified Growth Expert</p>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-8">
               <div className="flex items-center gap-1.5">
                 {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}
                 <span className="text-[11px] font-black ml-4 text-slate-400 tracking-[0.2em]">99.9% SUCCESS</span>
               </div>
               <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-emerald-500 transition-colors shadow-2xl cursor-pointer">
                 <ArrowUpRight size={22} />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};