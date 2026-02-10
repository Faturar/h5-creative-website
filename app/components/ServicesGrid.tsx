'use client';

import { motion } from 'framer-motion';
import Button from './Button';

const services = [
  ['SEO', 'Improve search ranking and organic traffic.', false],
  ['Social Media Marketing', 'Build audience and engagement around your brand.', true],
  ['PPC', 'Drive qualified leads with paid campaigns.', false],
  ['Content Marketing', 'Craft compelling stories that convert.', false],
  ['Graphic Design', 'Visual systems with cohesive identity.', false],
  ['Virtual Assistant', 'Support your operation with speed.', false]
] as const;

export default function ServicesGrid() {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <p className="mx-auto mb-4 w-fit rounded-full border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">Services</p>
        <h2 className="mx-auto max-w-2xl text-center text-4xl font-bold">We deliver powerful solutions, tailored for excellence every time.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, text, highlighted]) => (
            <motion.article
              whileHover={{ scale: 1.02, y: -5 }}
              key={title}
              className={`rounded-2xl border p-6 shadow-card transition ${highlighted ? 'border-primary bg-primary text-white' : 'border-slate-200 bg-white'}`}
            >
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full ${highlighted ? 'bg-white/20' : 'bg-primary/10 text-primary'}`}>✦</div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className={`mt-2 text-sm ${highlighted ? 'text-white/80' : 'text-slate-600'}`}>{text}</p>
              <Button variant={highlighted ? 'ghost' : 'light'} className="mt-6 w-full">See More</Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
