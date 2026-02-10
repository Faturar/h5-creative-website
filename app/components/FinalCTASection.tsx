import Image from 'next/image';
import Button from './Button';

export default function FinalCTASection() {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-6 overflow-hidden rounded-3xl bg-cta-gradient px-8 py-10 text-white lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold">Ready to run your business better with us</h2>
          <Button variant="ghost" className="mt-6">Get started</Button>
        </div>
        <div className="justify-self-center lg:justify-self-end">
          <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80" alt="CTA person" width={300} height={260} className="rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
