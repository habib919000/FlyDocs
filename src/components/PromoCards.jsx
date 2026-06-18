import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal.jsx';

export default function PromoCards() {
  return (
    <section id="promo-cards" className="py-16 bg-white">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[32px]">
          {/* Left Card: Team Plan */}
          <Reveal
            delay={40}
            className="flex flex-col justify-between rounded-[16px] border border-[#e2e8f0]/80 bg-white p-8 md:p-[41px] transition duration-300 hover:shadow-xl hover:-translate-y-1 text-left min-h-[380px] lg:min-h-[431px]"
          >
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef2ff] px-[12px] py-[4px] text-[12px] font-semibold text-[#4f46e5]">
                  <Sparkles size={12} className="fill-[#4f46e5] text-[#4f46e5]" /> Team Plan
                </span>
              </div>
              <h2 className="text-[40px] lg:text-[52px] font-semibold text-[#0f172b] leading-[1.2] font-heading tracking-tight">
                Your edge to write <br />every doc.
              </h2>
              <p className="text-[16px] lg:text-[18px] text-[#45556c] leading-[1.6] max-w-md">
                FlyDocs unites visual block editing and AI writing assistant tools in one workspace — built on modern web documentation standards.
              </p>
            </div>
            <div className="mt-8 lg:mt-12">
              <a
                href="#start"
                className="inline-flex items-center justify-center gap-2 bg-[#4f46e5] text-white h-[48px] px-[24px] rounded-full text-[16px] font-medium hover:bg-indigo-700 transition duration-200"
              >
                Try for free <ArrowRight size={18} strokeWidth={1.5} />
              </a>
            </div>
          </Reveal>

          {/* Right Card: Enterprise */}
          <Reveal
            delay={120}
            className="flex flex-col justify-between rounded-[16px] border border-white/5 p-8 md:p-[41px] transition duration-300 hover:shadow-2xl hover:shadow-indigo-900/20 hover:-translate-y-1 text-left min-h-[380px] lg:min-h-[431px]"
            style={{ backgroundImage: "linear-gradient(213.417deg, rgb(79, 70, 229) -10%, rgb(15, 23, 43) 45%)" }}
          >
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-[12px] py-[4px] text-[12px] font-semibold text-[#cad5e2]">
                  <ShieldCheck size={12} className="text-[#cad5e2]" /> Enterprise
                </span>
              </div>
              <h2 className="text-[40px] lg:text-[52px] font-semibold text-white leading-[1.2] font-heading tracking-tight">
                Bigger scale. <br />Bigger docs.
              </h2>
              <p className="text-[16px] lg:text-[18px] text-[#90a1b9] leading-[1.6] max-w-md">
                FlyDocs for Enterprise means absolute document portals dominance. Secure, custom brand sites, and single sign-on for all your global teams.
              </p>
            </div>
            <div className="mt-8 lg:mt-12">
              <a
                href="#start"
                className="inline-flex items-center justify-center gap-2 bg-[#4f46e5] text-white h-[48px] px-[24px] rounded-full text-[16px] font-medium hover:bg-indigo-700 transition duration-200"
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
