import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal.jsx';

export default function PromoCards() {
  return (
    <section id="promo-cards" className="py-12 bg-white">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card: Team / FlyDocs One */}
          <Reveal
            delay={40}
            className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-[#FAFBFB] p-8 md:p-10 transition duration-200 hover:shadow-lg hover:border-brand/20 text-left min-h-[340px]"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-subtle px-3 py-1 text-xs font-semibold text-brand">
                <Sparkles size={12} className="fill-brand text-brand" /> Team Plan
              </span>
              <h2 className="h2 text-slate-900 leading-[1.2]">
                Your edge to write <br />every doc.
              </h2>
              <p className="p-md text-slate-600 leading-relaxed max-w-md">
                FlyDocs unites visual block editing and AI writing assistant tools in one workspace — built on modern web documentation standards.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#start"
                className="btn-primary btn-lg"
              >
                Try for free <ArrowRight size={18} strokeWidth={1.5} />
              </a>
            </div>
          </Reveal>

          {/* Right Card: Enterprise */}
          <Reveal
            delay={120}
            className="flex flex-col justify-between rounded-2xl border border-white/5 bg-slate-950 p-8 md:p-10 transition duration-200 hover:shadow-xl hover:border-brand/20 text-left min-h-[340px]"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
                <ShieldCheck size={12} className="text-white" /> Enterprise
              </span>
              <h2 className="h2 text-white leading-[1.2]">
                Bigger scale. <br />Bigger docs.
              </h2>
              <p className="p-md text-slate-400 leading-relaxed max-w-md">
                FlyDocs for Enterprise means absolute document portals dominance. Secure, custom brand sites, and single sign-on for all your global teams.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#start"
                className="btn-primary btn-lg"
              >
                Book a demo <ArrowRight size={18} strokeWidth={1.5} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
