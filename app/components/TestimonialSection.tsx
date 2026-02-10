'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  { name: 'Sarah Jacob', role: 'Founder', text: 'This team transformed our digital growth and gave us measurable outcomes.', avatar: 'https://i.pravatar.cc/80?img=32' },
  { name: 'Tom Atkins', role: 'Marketing Lead', text: 'Great process, transparent communication, and excellent delivery speed.', avatar: 'https://i.pravatar.cc/80?img=12' },
  { name: 'Mila Rose', role: 'Product Owner', text: 'Our conversions grew significantly after just one month.', avatar: 'https://i.pravatar.cc/80?img=45' }
];

export default function TestimonialSection() {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl font-bold">Testimonials</h2>
        <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 3200 }} pagination={{ clickable: true }} loop spaceBetween={20} className="mt-8 pb-10">
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <article className="rounded-3xl bg-white p-8 text-center shadow-card">
                <img src={item.avatar} alt={item.name} className="mx-auto h-16 w-16 rounded-full" />
                <p className="mt-5 text-slate-600">“{item.text}”</p>
                <p className="mt-4 font-semibold">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role} • ★★★★★</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
