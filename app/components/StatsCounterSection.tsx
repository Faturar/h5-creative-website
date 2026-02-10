'use client';

import { motion } from 'framer-motion';

const stats = [
  ['39,000+', 'Students globally connected'],
  ['180M+', 'Happy customers'],
  ['5.00', 'Avg. rating'],
  ['24/7', 'Support & guidance']
];

export default function StatsCounterSection() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <motion.article
            whileHover={{ y: -4 }}
            key={value}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
          >
            <p className="text-3xl font-bold">{value}</p>
            <p className="mt-2 text-sm text-slate-500">{label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
