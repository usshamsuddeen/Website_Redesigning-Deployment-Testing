
import React from 'react';
import { 
  Code2, 
  Search, 
  Smartphone, 
  Database, 
  PencilRuler,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Settings,
  Zap,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    title: "MarketDominator SEO",
    desc: "Dominating search landscapes through technical engineering and semantic authority. We analyze millions of data points to optimize your organic visibility with precision content clusters and high-fidelity link strategies. Our proprietary algorithms ensure sustained ranking growth in competitive niches.",
    tech: ["ElasticSearch", "Core Vitals", "AI Content Engine"],
    icon: <Search className="w-8 h-8 text-emerald-600" />,
    size: "md:col-span-2 md:row-span-1",
    shape: "rounded-[56px] bento-shape-1",
    tag: "98.4% Rank Efficiency",
    status: "Live",
    img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "UX Conversion Labs",
    desc: "Crafting emotional connections through frictionless design and predictive user journeys. We bridge the gap between complex logic and simple aesthetics.",
    tech: ["Figma Enterprise", "Framer"],
    icon: <PencilRuler className="w-8 h-8 text-blue-600" />,
    size: "md:col-span-1 md:row-span-1",
    shape: "rounded-[56px]",
    tag: "ROI Driven Design",
    status: "Active",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Enterprise ERP Systems",
    desc: "End-to-end enterprise resource management. We build tailor-made operational backbones that unify your logistics, HR, and global financial pipelines into a single intelligence hub. Our systems are built for mission-critical reliability with zero-downtime requirements and multi-region synchronization.",
    tech: ["Go Microservices", "PostgreSQL Clusters", "Redis"],
    details: ["Global Inventory Sync", "Automated Payroll", "Real-time Supply Chain"],
    icon: <Database className="w-8 h-8 text-slate-900" />,
    size: "md:col-span-1 md:row-span-2",
    shape: "rounded-[56px] bento-shape-2 bg-slate-50/50",
    tag: "Enterprise Resilience",
    status: "Priority",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    title: "Native Mobile Core",
    desc: "Elite applications for iOS and Android ecosystems, optimized for zero-latency performance and high-retention engagement.",
    tech: ["Swift UI", "Kotlin Multiplatform"],
    icon: <Smartphone className="w-8 h-8 text-rose-600" />,
    size: "md:col-span-1 md:row-span-1",
    shape: "rounded-[56px]",
    tag: "Native Excellence",
    status: "New",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "AI-Driven Automation",
    desc: "Leveraging machine learning to automate complex decision-making processes and customer lifecycle management.",
    tech: ["PyTorch", "TensorFlow"],
    icon: <Zap className="w-8 h-8 text-amber-600" />,
    size: "md:col-span-1 md:row-span-1",
    shape: "rounded-[56px] bento-shape-1",
    tag: "Intelligent Ops",
    status: "Live",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Cloud-Scale Software",
    desc: "Bespoke digital products designed for infinite scale. We handle the entire engineering lifecycle—from architectural blueprints to global cloud deployment and 24/7 security monitoring. Our focus is on high-availability, low-latency, and military-grade encryption for enterprise-level safety.",
    tech: ["Kubernetes", "GraphQL Federation", "Terraform"],
    icon: <Code2 className="w-8 h-8 text-indigo-600" />,
    size: "md:col-span-2 md:row-span-1",
    shape: "rounded-[56px]",
    tag: "Infinite Scalability",
    status: "Elite",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  }
];

export const ServicesBento: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div 
          key={index} 
          className={`glass-card p-12 shadow-sm hover:shadow-2xl transition-all duration-1000 flex flex-col justify-between group relative overflow-hidden ${service.size} ${service.shape}`}
        >
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-1000">
            <img src={service.img} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2000ms]" alt="" />
          </div>
          
          <div className="absolute top-10 right-10 z-10">
             <div className="flex items-center gap-1.5 px-4 py-1.5 bg-white/90 backdrop-blur border border-slate-100 rounded-full shadow-sm">
                <div className={`w-1.5 h-1.5 rounded-full ${service.status === 'Live' ? 'bg-emerald-500' : service.status === 'Priority' ? 'bg-amber-500' : 'bg-blue-500'} animate-pulse`}></div>
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider">{service.status}</span>
             </div>
          </div>
          
          <div className="space-y-10 relative z-10">
            <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-md border border-slate-50 group-hover:rotate-6 transition-transform">
              {service.icon}
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter leading-tight group-hover:text-emerald-600 transition-colors">{service.title}</h3>
              <p className="subtext leading-relaxed group-hover:text-slate-600">{service.desc}</p>
              
              {service.details && (
                <div className="grid grid-cols-1 gap-3 pt-4">
                  {service.details.map((d, di) => (
                    <div key={di} className="flex items-center gap-3 text-[11px] font-black text-slate-500 uppercase tracking-widest bg-white/40 p-2 rounded-xl border border-white/50">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      {d}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-6">
                {service.tech.map((t, ti) => (
                  <span key={ti} className="text-[9px] font-black text-slate-400 bg-white/80 px-4 py-2 rounded-full border border-slate-100 uppercase tracking-widest shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-8 relative z-10">
            <div className="flex items-center gap-3">
               <ShieldCheck size={16} className="text-emerald-500" />
               <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">{service.tag}</span>
            </div>
            <button className="px-8 py-3.5 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-emerald-600 transition-colors shadow-xl shadow-slate-900/10">
              Details <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
