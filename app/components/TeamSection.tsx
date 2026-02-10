'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const team = [
  ['Alex Mett', 'CEO', 'https://i.pravatar.cc/300?img=58'],
  ['Kefu Lu', 'Product Lead', 'https://i.pravatar.cc/300?img=57'],
  ['Rexine Khan', 'Designer', 'https://i.pravatar.cc/300?img=45'],
  ['Arif Baha', 'Developer', 'https://i.pravatar.cc/300?img=66']
];

export default function TeamSection() {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold">Leadership team with vision</h2>
        <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop spaceBetween={16} breakpoints={{ 0: { slidesPerView: 1.2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }} className="mt-8">
          {team.map(([name, role, src], i) => (
            <SwiperSlide key={name}>
              <article className={`rounded-2xl p-3 ${i === 1 ? 'bg-primary text-white' : 'bg-white'} shadow-card`}>
                <img src={src} alt={name} className="h-52 w-full rounded-xl object-cover" />
                <h3 className="mt-3 font-semibold">{name}</h3>
                <p className={`text-sm ${i === 1 ? 'text-white/80' : 'text-slate-500'}`}>{role}</p>
                <div className="mt-3 flex gap-2 text-xs"><span>●</span><span>✕</span><span>◌</span></div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
