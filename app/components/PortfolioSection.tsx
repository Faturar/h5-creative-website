'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const tabs = ['All', 'Web', 'App', 'Branding', 'Marketing'];
const projects = [
  ['Web Design', 'Redefining User Experience', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80'],
  ['App Design', 'Trade from mobile app', 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80'],
  ['Service', 'Digital service app', 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=900&q=80']
];

export default function PortfolioSection() {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <p className="mx-auto w-fit rounded-full border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">Portfolio</p>
        <h2 className="mx-auto mt-4 max-w-xl text-center text-4xl font-bold">The work we do and the people we help.</h2>
        <div className="mt-7 flex flex-wrap justify-center gap-2">{tabs.map((tab) => <button key={tab} className={`rounded-full border px-4 py-2 text-xs ${tab === 'All' ? 'bg-primary text-white' : 'bg-white text-slate-600'}`}>{tab}</button>)}</div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(([category, title, src]) => (
            <motion.article whileHover={{ y: -6 }} key={title} className="group overflow-hidden rounded-2xl bg-white shadow-card">
              <div className="relative overflow-hidden">
                <Image src={src} alt={title} width={430} height={260} className="h-48 w-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/0 transition group-hover:bg-primary/20" />
              </div>
              <div className="p-5"><p className="text-xs text-primary">{category}</p><h3 className="mt-2 text-xl font-semibold">{title}</h3><button className="mt-4 text-sm font-semibold text-primary">Service →</button></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
