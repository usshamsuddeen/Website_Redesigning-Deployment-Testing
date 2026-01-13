
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="space-y-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Form Column */}
        <div className="lg:col-span-7 glass-card p-12 rounded-[56px] bg-white/60">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">Start A Conversation</h2>
            <p className="text-slate-500 font-medium">Have a specific project in mind? We'd love to hear from you.</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-white/50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-medium" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-white/50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-medium" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">How can we help?</label>
              <textarea rows={4} placeholder="Describe your project goals..." className="w-full px-6 py-4 rounded-[32px] border border-slate-100 bg-white/50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-medium resize-none"></textarea>
            </div>
            <button className="md:col-span-2 py-5 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-sm shadow-2xl shadow-slate-900/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
              Send Proposal <Send size={18} />
            </button>
          </form>
        </div>

        {/* Info Column */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="glass-card p-10 rounded-[48px] bento-shape-2 space-y-10 flex-1 flex flex-col justify-center">
            <div className="flex gap-6 items-center">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="text-emerald-600" size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest">Email Support</h4>
                <p className="text-xl font-bold text-slate-900">hello@gtech.agency</p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest">Call Directly</h4>
                <p className="text-xl font-bold text-slate-900">+1 (800) GTECH-01</p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="text-slate-900" size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest">Global HQ</h4>
                <p className="text-xl font-bold text-slate-900">San Francisco, CA</p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-10 rounded-[40px] bg-emerald-500 text-slate-900 bento-shape-1 flex items-center justify-between group cursor-pointer">
            <div className="space-y-2">
              <h4 className="text-2xl font-black tracking-tighter">Live Chat</h4>
              <p className="font-bold opacity-80">Available 24/7 for partners</p>
            </div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <MessageSquare className="text-emerald-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
