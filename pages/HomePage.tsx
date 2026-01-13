import React from 'react';
import { Hero } from '../components/Hero';
import { Partners } from '../components/Partners';
import { AboutSection } from '../components/AboutSection';
import { ServicesBento } from '../components/ServicesBento';
import { Stats } from '../components/Stats';
import { Portfolio } from '../components/Portfolio';
import { TeamSection } from '../components/TeamSection';
import { Testimonials } from '../components/Testimonials';
import { BlogSection } from '../components/BlogSection';
import { ContactSection } from '../components/ContactSection';
import { ProductShowcase } from '../components/ProductShowcase';
import { ServiceCategories } from '../components/ServiceCategories';
import { ProcessSection } from '../components/ProcessSection';
import { Page } from '../App';

export const HomePage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="space-y-32">
      <section className="container mx-auto px-4 md:px-12">
        <Hero />
      </section>

      <section className="container mx-auto px-4 md:px-12">
        <Partners />
      </section>

      <section className="container mx-auto px-4 md:px-12">
        <AboutSection />
      </section>

      <section className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-slate-100 pb-12">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">Elite <br />Capabilities.</h2>
            <p className="subtext max-w-2xl">
              Defining industrial-grade software standards through rigorous technological superiority and artisanal digital craftsmanship.
            </p>
          </div>
          <button onClick={() => onNavigate('services')} className="px-12 py-6 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-transform shadow-2xl shadow-slate-900/10">
            Explore Solutions
          </button>
        </div>
        <ServicesBento />
      </section>

      <section className="container mx-auto px-4 md:px-12">
        <ServiceCategories />
      </section>

      <section className="container mx-auto px-4 md:px-12">
        <ProcessSection />
      </section>

      <section className="bg-white/40 py-24 backdrop-blur-3xl border-y border-white/60 shadow-inner">
        <div className="container mx-auto px-4 md:px-12">
          <Stats />
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-12">
        <ProductShowcase />
      </section>

      <section className="container mx-auto px-4 md:px-12">
        <Portfolio />
      </section>

      <section className="container mx-auto px-4 md:px-12">
        <TeamSection />
      </section>

      <section className="container mx-auto px-4 md:px-12">
        <Testimonials />
      </section>

      <section className="container mx-auto px-4 md:px-12">
        <BlogSection />
      </section>

      <section className="container mx-auto px-4 md:px-12 pb-24">
        <ContactSection />
      </section>
    </div>
  );
};