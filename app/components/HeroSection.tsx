'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';

const cardAnim = { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 } };

export default function HeroSection() {
  return (
    <section className="px-4">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-hero-gradient px-6 pb-16 pt-10 md:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Business for clients
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              Grow your <span className="underline decoration-[#b2fb5f] decoration-4">online business</span> with us & make
              <span className="ml-2 text-primary">Success</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-600 md:text-lg">
              The most expert team we have for you. We craft premium experiences for modern ambitious businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button>Get Started Project</Button>
              <Button variant="ghost">Watch demo</Button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
              alt="Smiling man"
              width={440}
              height={520}
              className="relative z-10 rounded-[2rem] object-cover"
            />
            <motion.div
              {...cardAnim}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute -left-2 top-14 z-20 w-52 rounded-2xl bg-white p-4 shadow-card"
            >
              <p className="text-xs font-semibold text-primary">Business Services</p>
              <p className="mt-2 text-xs text-slate-500">SEO • Branding • Marketing</p>
            </motion.div>
            <motion.div
              {...cardAnim}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 left-10 z-20 w-56 rounded-2xl bg-[#1f1970] p-4 text-white shadow-soft"
            >
              <p className="text-xs text-white/80">Total Revenue</p>
              <p className="text-2xl font-bold">25,4780</p>
            </motion.div>
            <motion.div
              {...cardAnim}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-3 right-0 z-20 w-40 rounded-2xl bg-[#ecf080] p-4 shadow-card"
            >
              <p className="text-3xl font-bold">12K+</p>
              <p className="text-xs text-slate-700">Freelancer & Business Helped</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
