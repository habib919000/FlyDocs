const makers = ['Dokan', 'FlyWP', 'FlyCommerce', 'weDevs Cloud', 'Appsero', 'Dokan Pro', 'FlyWP Agent'];

export default function MakersMarquee() {
  return (
    <section id="makers-marquee" className="bg-white border-b border-slate-100 py-6 overflow-hidden">
      <div className="container-page mb-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 text-center">
          From the makers of
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex gap-16 whitespace-nowrap animate-marquee">
          {[...makers, ...makers].map((m, idx) => (
            <span
              key={idx}
              className="text-base font-bold tracking-tight text-slate-400 transition-colors duration-200 hover:text-slate-700 cursor-default"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
