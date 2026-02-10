const logos = ['Logoipsum', 'Logotype', 'Logopixel', 'Logi', 'Logo'];

export default function LogoStrip() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-10 opacity-50">
        {logos.map((logo) => (
          <span key={logo} className="text-lg font-semibold tracking-wide text-slate-500">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
