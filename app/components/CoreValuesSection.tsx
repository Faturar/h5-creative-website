const values = [
  ['Customer-centric', 'Placed at the center to build better experiences.'],
  ['Innovation', 'Driven by curiosity, bold ideas, and modern systems.'],
  ['Excellence', 'Quality without compromise in all outcomes.'],
  ['Communicate', 'Open and clear collaboration with stakeholders.']
];

export default function CoreValuesSection() {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold">Our core values</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">◎</div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
