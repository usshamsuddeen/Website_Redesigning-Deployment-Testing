
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, ArrowUpRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 space-y-24 py-12">
      {/* Header */}
      <div className="max-w-4xl space-y-8">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full">
          <MessageSquare size={14} className="text-blue-500" />
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Partner Inquiry Hub</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
          Let's Build <span className="text-emerald-500">Something</span> <br /> Legendary.
        </h1>
        <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-xl">
          Whether you need a full enterprise overhaul or a targeted digital strategy, we're ready to engineer your growth.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Form Column */}
        <div className="lg:col-span-7 glass-card p-14 rounded-[64px] bg-white/60">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Your Identity</label>
                <input type="text" placeholder="Name or Organization" className="w-full px-8 py-5 rounded-2xl border border-slate-100 bg-white/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-slate-900" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Direct Email</label>
                <input type="email" placeholder="example@business.com" className="w-full px-8 py-5 rounded-2xl border border-slate-100 bg-white/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-slate-900" />
              </div>
            </div>
            
            <div className="space-y-6">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Core Service Required</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['ERP', 'UI/UX', 'SEO', 'Mobile'].map(s => (
                  <button key={s} type="button" className="py-4 border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">The Challenge</label>
              <textarea rows={6} placeholder="Tell us about your mission-critical goals..." className="w-full px-8 py-6 rounded-[32px] border border-slate-100 bg-white/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-slate-900 resize-none"></textarea>
            </div>

            <button className="w-full py-6 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-emerald-500 transition-all flex items-center justify-center gap-4">
              Initialize Project Strategy <Send size={18} />
            </button>
          </form>
        </div>

        {/* Global Access Column */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="glass-card p-12 rounded-[56px] bento-shape-2 space-y-12 bg-slate-900 text-white border-none relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
               <Globe className="text-emerald-500 animate-pulse" size={32} />
            </div>
            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-3xl font-black tracking-tighter">Silicon Valley HQ</h3>
                <p className="text-slate-400 font-medium leading-relaxed">
                  10 Innovation Plaza, Suite 500<br />
                  Palo Alto, CA 94301
                </p>
                <div className="flex items-center gap-2 text-emerald-500 text-xs font-black uppercase tracking-widest">
                   Live on Map <ArrowUpRight size={14} />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black tracking-tighter">Direct Lines</h3>
                <div className="space-y-2">
                  <p className="text-slate-300 font-bold">+1 (800) GTECH-01</p>
                  <p className="text-slate-300 font-bold">solutions@gtech.agency</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-12 rounded-[56px] bento-shape-1 bg-emerald-500 text-slate-900 space-y-6 flex flex-col justify-center">
            <h4 className="text-3xl font-black tracking-tighter">Emergency <br /> Support?</h4>
            <p className="font-bold opacity-80 max-w-[200px]">Active partners have 24/7 dedicated engineering access.</p>
            <div className="flex items-center gap-3 pt-4">
               <button className="px-8 py-4 bg-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">Portal Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
