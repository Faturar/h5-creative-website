import Image from 'next/image';

export default function AnalyticsSection() {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-3xl bg-white p-8 shadow-card lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold">Manage and Grow Your Business</h2>
          <p className="mt-4 text-slate-600">Maximize foundational strategy and drive competition with automation and intelligent systems.</p>
          <ul className="mt-6 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
            <li>✓ Business Forecasting</li><li>✓ Cloud based security</li><li>✓ Competitive intelligence</li><li>✓ Project management</li><li>✓ Digital transformation</li><li>✓ CRM solutions</li>
          </ul>
        </div>
        <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80" alt="Dashboard" width={520} height={330} className="rounded-2xl" />
      </div>
    </section>
  );
}
