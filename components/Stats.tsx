
import React from 'react';
import { Star, ShieldCheck, CreditCard, Globe } from 'lucide-react';

export const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Social Partners Card */}
      <div className="glass-card p-10 bento-shape-2 relative overflow-hidden bg-emerald-50/20">
         <div className="absolute top-6 right-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            </div>
         </div>
         <h4 className="text-2xl font-bold text-slate-900 mb-6">Social Partners</h4>
         <div className="grid grid-cols-2 gap-4 mb-8">
            <p className="text-slate-500 text-sm leading-relaxed">
               Seamless payments across all global bank accounts.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
               Instant synchronization with your online banking.
            </p>
         </div>
         <div className="flex gap-3">
            {[1,2,3].map(i => (
              <div key={i} className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                 <img src={`https://www.google.com/s2/favicons?domain=${['visa.com', 'stripe.com', 'paypal.com'][i-1]}&sz=32`} className="w-5 h-5 grayscale opacity-50" />
              </div>
            ))}
         </div>
      </div>

      {/* Central Metric Card */}
      <div className="glass-card p-10 flex flex-col items-center justify-center text-center space-y-4 rounded-[40px] border-emerald-100">
         <div className="flex -space-x-4 mb-2">
            {[1,2,3].map(i => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white shadow-sm overflow-hidden">
                <div className={`w-full h-full border border-slate-200 rounded-full flex items-center justify-center ${i===1 ? 'bg-blue-50' : i===2 ? 'bg-emerald-50' : 'bg-amber-50'}`}>
                   {i === 1 ? <ShieldCheck size={18} className="text-blue-500" /> : i === 2 ? <CreditCard size={18} className="text-emerald-500" /> : <Globe size={18} className="text-amber-500" />}
                </div>
              </div>
            ))}
         </div>
         <h3 className="text-6xl font-black text-slate-900 tracking-tighter">75K</h3>
         <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Global Contributions In 2024</p>
      </div>

      {/* Total Clients Card */}
      <div className="glass-card p-10 bento-shape-1 bg-slate-900 text-white border-none flex flex-col justify-between overflow-hidden relative">
         <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
         <div className="space-y-2">
           <h3 className="text-5xl font-black tracking-tighter">8000+</h3>
           <p className="text-slate-400 font-medium">Total Clients Served</p>
         </div>
         <div className="flex -space-x-3 pt-8">
            {[1,2,3,4].map(i => (
              <img key={i} src={`https://i.pravatar.cc/100?u=stat${i}`} className="w-12 h-12 rounded-full border-4 border-slate-900 object-cover shadow-2xl" />
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-slate-900 bg-emerald-500 flex items-center justify-center text-[10px] font-black text-slate-900">
              JOIN
            </div>
         </div>
      </div>
    </div>
  );
};
