'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const plans = [
  { name: 'Standard', monthly: 99, yearly: 899 },
  { name: 'Professional', monthly: 299, yearly: 2499, featured: true },
  { name: 'Enterprise', monthly: 89, yearly: 799 }
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold">Choose the Right Plan for Your Business</h2>
        <div className="mx-auto mt-6 flex w-fit rounded-full bg-white p-1 shadow-card">
          <button onClick={() => setYearly(false)} className={`rounded-full px-5 py-2 text-sm ${!yearly ? 'bg-primary text-white' : ''}`}>Monthly</button>
          <button onClick={() => setYearly(true)} className={`rounded-full px-5 py-2 text-sm ${yearly ? 'bg-primary text-white' : ''}`}>Yearly</button>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.article whileHover={{ y: -5 }} key={plan.name} className={`rounded-3xl border p-6 ${plan.featured ? 'scale-[1.03] border-primary bg-primary text-white shadow-soft' : 'border-slate-200 bg-white shadow-card'}`}>
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-3 text-4xl font-bold">${yearly ? plan.yearly : plan.monthly}<span className="text-sm font-normal">/{yearly ? 'yr' : 'mo'}</span></p>
              <ul className={`mt-5 space-y-2 text-sm ${plan.featured ? 'text-white/90' : 'text-slate-600'}`}>
                <li>✓ Advanced analytics</li><li>✓ Unlimited projects</li><li>✓ Priority support</li><li>✓ Team collaboration</li>
              </ul>
              <Button variant={plan.featured ? 'ghost' : 'primary'} className="mt-6 w-full">Deal now</Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
