
import React from 'react';
import { Clock, TrendingUp, ChevronRight } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const blogs = [
    {
      title: "The Physics of User Experience Design",
      date: "May 28, 2024",
      time: "12 min read",
      author: "Julian Voss",
      category: "Deep Dive",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      featured: true,
      summary: "Exploring the fundamental principles of movement, momentum, and friction in digital interfaces to build more intuitive software ecosystems."
    },
    {
      title: "Kubernetes for Scale: 2025 Guide",
      date: "May 22, 2024",
      time: "7 min read",
      author: "Elena Rossi",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "The ROI of Organic Search Clusters",
      date: "May 15, 2024",
      time: "5 min read",
      author: "Sophia Kim",
      category: "Growth",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Serverless Performance Metrics",
      date: "May 10, 2024",
      time: "9 min read",
      author: "Julian Voss",
      category: "Cloud",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "AI Automation in Sales Pipelines",
      date: "May 04, 2024",
      time: "6 min read",
      author: "Marcus Thorne",
      category: "Intelligence",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "The Future of Headless Commerce",
      date: "May 01, 2024",
      time: "8 min read",
      author: "Elena Rossi",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div id="blog" className="space-y-16 py-12">
      <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-slate-100 pb-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full">
            <TrendingUp size={14} className="text-emerald-500" />
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">Latest Insights</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Knowledge Base.</h2>
        </div>
        <button className="group px-10 py-5 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all flex items-center gap-3">
          Explore Insights <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <div 
            key={idx} 
            className={`group flex flex-col glass-card p-4 rounded-[48px] hover:shadow-2xl transition-all duration-1000 ${blog.featured ? 'md:col-span-2' : ''}`}
          >
            <div className={`overflow-hidden rounded-[36px] relative ${blog.featured ? 'aspect-[21/10]' : 'aspect-[4/5]'}`}>
              <img 
                src={blog.image} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute top-6 left-6 px-4 py-2 bg-white/95 backdrop-blur rounded-full text-[9px] font-black uppercase text-slate-900 tracking-widest">
                {blog.category}
              </div>
            </div>
            
            <div className="p-8 space-y-6 flex-1 flex flex-col">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">
                  <span>{blog.date}</span>
                  <span className="flex items-center gap-2"><Clock size={12} className="text-emerald-500" /> {blog.time}</span>
                </div>
                <h3 className={`font-black text-slate-900 group-hover:text-emerald-500 transition-colors tracking-tight leading-tight ${blog.featured ? 'text-4xl' : 'text-2xl'}`}>
                  {blog.title}
                </h3>
                {blog.featured && (
                  <p className="text-slate-500 font-medium leading-relaxed line-clamp-2">{blog.summary}</p>
                )}
              </div>
              
              <div className="flex items-center justify-between pt-8 border-t border-slate-100/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 p-1 border border-white overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?u=${blog.author}`} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">{blog.author}</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <ChevronRight size={18} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
