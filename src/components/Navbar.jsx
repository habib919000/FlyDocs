import { useEffect, useState } from 'react';
import { Feather, Menu, X, ArrowRight } from 'lucide-react';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Why FlyDocs', href: '#why' },
  { label: 'How It Works', href: '#how' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <nav className="flex h-14 items-center justify-between border border-slate-200/80 bg-white/80 backdrop-blur-md rounded-full px-6 shadow-sm" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
          <Feather className="text-brand" size={20} strokeWidth={1.5} aria-hidden="true" />
          <span className="text-lg font-bold tracking-tight text-slate-900 font-heading">FlyDocs</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-[#0F172B] transition-colors hover:text-brand"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#" className="text-sm font-medium text-[#0F172B] hover:text-brand transition-colors">
            Sign In
          </a>
          <a href="#start" className="inline-flex h-8 items-center justify-center bg-brand text-white hover:bg-brand-hover px-4 text-xs font-semibold rounded-full transition duration-200">
            Start Free
          </a>
        </div>

        <button
          type="button"
          className="btn -mr-2 inline-flex h-9 w-9 items-center justify-center text-slate-600 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile capsule menu */}
      {open && (
        <div className="absolute top-16 left-4 right-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex h-10 items-center text-sm font-medium text-[#0F172B] hover:text-brand"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-3 flex flex-col gap-2 pt-3 border-t border-slate-100">
              <a href="#" className="btn h-10 text-sm border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-full" onClick={() => setOpen(false)}>
                Sign in
              </a>
              <a href="#start" className="btn h-10 text-sm bg-brand text-white hover:bg-brand-hover rounded-full font-semibold" onClick={() => setOpen(false)}>
                Start Free
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
