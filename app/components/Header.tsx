'use client';

import Button from './Button';

const links = ['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Contact'];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/90 px-6 py-3 shadow-card backdrop-blur">
        <div className="text-xl font-bold tracking-tight text-primary">Axilab</div>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          {links.map((link) => (
            <a key={link} className="transition hover:text-primary" href="#">
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden text-sm font-semibold text-slate-600 md:block">Log in</button>
          <Button className="px-5 py-2.5 text-xs">Book a Call</Button>
        </div>
      </div>
    </header>
  );
}
