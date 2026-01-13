
import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Alex Thompson",
      role: "CTO, NextScale",
      text: "The ERP solution provided by GTech revolutionized our internal workflows. We saw a 40% increase in efficiency within the first quarter.",
      avatar: "https://picsum.photos/100/100?random=11"
    },
    {
      name: "Sarah Chen",
      role: "Marketing Director, LuxLife",
      text: "Their SEO and digital marketing team is world-class. Our organic traffic skyrocketed and stayed consistent throughout the year.",
      avatar: "https://picsum.photos/100/100?random=12"
    },
    {
      name: "Marcus Miller",
      role: "CEO, InnovateX",
      text: "The UI/UX design was precisely what we needed. They took our complex idea and made it simple, elegant, and highly functional.",
      avatar: "https://picsum.photos/100/100?random=13"
    }
  ];

  return (
    <div className="space-y-16">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">What Our Clients Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, i) => (
          <div key={i} className="glass-card p-10 rounded-[40px] shadow-sm relative flex flex-col justify-between">
            <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-100 -z-0" />
            <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10 font-medium">
              "{rev.text}"
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <img src={rev.avatar} alt={rev.name} className="w-14 h-14 rounded-2xl object-cover ring-4 ring-white shadow-lg" />
              <div>
                <h4 className="font-bold text-slate-900">{rev.name}</h4>
                <p className="text-slate-400 text-sm font-medium">{rev.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
