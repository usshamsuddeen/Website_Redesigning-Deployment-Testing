
import React from 'react';

const projects = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "ERP / Web App",
    image: "https://picsum.photos/800/600?random=1",
    size: "col-span-1"
  },
  {
    id: 2,
    title: "E-Commerce Cloud",
    category: "Mobile / E-commerce",
    image: "https://picsum.photos/1200/800?random=2",
    size: "col-span-1 md:col-span-2"
  },
  {
    id: 3,
    title: "HealthTech AI",
    category: "AI / Data Science",
    image: "https://picsum.photos/1200/800?random=3",
    size: "col-span-1 md:col-span-2"
  },
  {
    id: 4,
    title: "Luxury Estate CRM",
    category: "CRM / Real Estate",
    image: "https://picsum.photos/800/600?random=4",
    size: "col-span-1"
  }
];

export const Portfolio: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div 
          key={project.id} 
          className={`group relative overflow-hidden rounded-[40px] glass-card h-[400px] cursor-pointer ${project.size}`}
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
            <p className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">{project.category}</p>
            <h3 className="text-3xl font-bold text-white tracking-tight">{project.title}</h3>
          </div>
          
          {/* Default Label */}
          <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-slate-900 shadow-xl opacity-100 group-hover:opacity-0 transition-opacity">
            {project.category}
          </div>
        </div>
      ))}
    </div>
  );
};
