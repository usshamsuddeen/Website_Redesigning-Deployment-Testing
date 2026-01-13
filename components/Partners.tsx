
import React from 'react';

export const Partners: React.FC = () => {
  const partners = [
    "Odoo", "Zapier", "Twilio", "HubSpot", "Google", "Microsoft", "Salesforce", "AWS"
  ];

  return (
    <div className="py-12 border-y border-slate-100">
      <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mb-10">Trusted by Forward-Thinking Brands</p>
      <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
        {partners.map((partner) => (
          <span key={partner} className="text-3xl font-black text-slate-900 tracking-tighter cursor-default hover:text-blue-600 transition-colors">
            {partner}
          </span>
        ))}
      </div>
    </div>
  );
};
