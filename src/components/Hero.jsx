import { ArrowRight, Check, Sparkles } from 'lucide-react';
import Reveal from './Reveal.jsx';

const trust = ['Free plan', 'No credit card required', 'Bring your own AI key'];


export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 min-h-screen flex flex-col justify-between"
      style={{ backgroundImage: 'url(/hero_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center center' }}
    >
      <div className="container-page relative z-10 pt-20 pb-16 text-center md:pt-24 md:pb-20">
        <Reveal className="mx-auto max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white/70 backdrop-blur-sm px-3 py-1 text-sm font-medium text-brand">
            <Sparkles size={16} strokeWidth={1.5} /> AI-native documentation
          </span>
          <h1 className="h1 text-slate-900 leading-tight">
            Beautiful Docs.
            <br />
            <span className="text-brand">Written by Anyone.</span>
          </h1>
          <p 
            className="mx-auto mt-6 max-w-xl text-slate-600"
            style={{ fontSize: 'var(--text-xl)', '--text-xl': '1.25rem', lineHeight: '1.5' }}
          >
            Create, update, and publish beautiful documentation with AI. No code, no hassle.
          </p>
        </Reveal>

        {/* Primary CTA Button */}
        <Reveal delay={120} className="mx-auto mt-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <a
              href="#start"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-semibold text-white hover:bg-brand-hover shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Start Free <ArrowRight size={18} strokeWidth={2} />
            </a>
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {trust.map((t) => (
                <li key={t} className="p-lt flex items-center gap-1.5 text-slate-600">
                  <Check size={16} strokeWidth={2} className="text-brand" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>


        {/* Product preview screenshot */}
        <Reveal delay={120} className="mt-16 md:mt-24 relative z-10">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-slate-200/60 shadow-2xl">
            <img
              src="/flydocs-hero.png"
              alt="FlyDocs dashboard — manage docs, articles, and feedback in one place"
              width={1320}
              height={880}
              className="w-full block"
              loading="eager"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}


