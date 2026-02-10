export default function Footer() {
  return (
    <footer className="mt-10 bg-footer-gradient px-4 py-14 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-2xl font-bold text-[#7f81ff]">Axilab</p>
            <p className="mt-6 text-sm text-white/70">Subscribe Newsletter</p>
            <div className="mt-3 flex max-w-sm rounded-full bg-white/10 p-1">
              <input className="w-full bg-transparent px-4 text-sm outline-none placeholder:text-white/40" placeholder="Enter email" />
              <button className="rounded-full bg-primary px-4 py-2 text-xs font-semibold">Subscribe</button>
            </div>
          </div>
          {['Products', 'Solutions', 'Help & Support'].map((heading) => (
            <div key={heading}>
              <p className="text-sm font-semibold">{heading}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>Features</li><li>Pricing</li><li>Case studies</li><li>Resources</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60">
          <p>©2024 2025 all rights reserved.</p>
          <div className="flex gap-2"><span className="rounded-full border border-white/20 px-2 py-1">f</span><span className="rounded-full border border-white/20 px-2 py-1">x</span><span className="rounded-full border border-white/20 px-2 py-1">in</span></div>
        </div>
      </div>
    </footer>
  );
}
