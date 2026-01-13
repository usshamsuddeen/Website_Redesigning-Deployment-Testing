
import React from 'react';
import { Linkedin, Twitter, ExternalLink } from 'lucide-react';

const team = [
  { name: "Julian Voss", role: "Chief Architect", img: "https://i.pravatar.cc/300?u=voss", badge: "Technical" },
  { name: "Elena Rossi", role: "Creative Director", img: "https://i.pravatar.cc/300?u=rossi", badge: "Design" },
  { name: "Marcus Thorne", role: "Strategy Head", img: "https://i.pravatar.cc/300?u=thorne", badge: "Business" },
  { name: "Sophia Kim", role: "SEO Specialist", img: "https://i.pravatar.cc/300?u=kim", badge: "Marketing" },
];

export const TeamSection: React.FC = () => {
  return (
    <div id="team" className="space-y-16 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Meet The Experts</h2>
          <p className="text-slate-500 font-medium max-w-xl text-lg">
            Our multi-disciplinary team is the engine behind every successful transformation project we've delivered.
          </p>
        </div>
        <button className="px-8 py-4 bg-white border border-slate-200 rounded-full text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2">
          Join the crew <ExternalLink size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <div key={i} className="group relative">
            <div className="glass-card p-4 rounded-[48px] bento-shape-1 transition-all duration-500 group-hover:translate-y-[-10px] group-hover:shadow-2xl">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden mb-6 relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur rounded-full text-[10px] font-black uppercase text-slate-900">
                  {member.badge}
                </div>
              </div>
              <div className="px-4 pb-6 space-y-2">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{member.name}</h3>
                <p className="text-slate-500 font-bold text-sm">{member.role}</p>
                <div className="flex gap-3 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Linkedin size={18} className="text-slate-400 hover:text-blue-600 cursor-pointer" />
                  <Twitter size={18} className="text-slate-400 hover:text-sky-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
