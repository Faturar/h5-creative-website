'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';

export default function AboutSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">About Us</p>
          <h2 className="text-4xl font-bold leading-tight">We blend creativity and data-driven insights to achieve impactful results</h2>
          <p className="mt-5 text-slate-600">At Axilab Codex, we craft campaigns that elevate your brand and drive results.</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            <li>✓ Our vision focused on outcomes.</li>
            <li>✓ Goal mission for measurable growth.</li>
            <li>✓ Team with specialized strategic talents.</li>
          </ul>
          <div className="mt-8 flex gap-4">
            <Button>Start now</Button>
            <button className="text-sm font-semibold text-slate-700">Book Business Assistant</button>
          </div>
        </div>
        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} className="relative">
          <div className="rounded-3xl border border-primary/20 bg-[#dfe2ff] p-3">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
              alt="Team"
              width={520}
              height={380}
              className="rounded-[1.6rem]"
            />
          </div>
          <div className="absolute -bottom-4 left-4 rounded-2xl bg-white p-3 shadow-card">
            <p className="text-xs text-slate-500">Conversion</p>
            <p className="text-sm font-bold text-primary">+28.6%</p>
          </div>
          <div className="absolute -right-4 bottom-10 rounded-2xl bg-white p-3 shadow-card">
            <p className="text-xs text-slate-500">Customer support</p>
            <p className="text-sm font-bold">15+ members</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
