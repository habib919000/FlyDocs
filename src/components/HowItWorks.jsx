import { BoxSelect, Sparkles, Palette, Globe } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const steps = [
  {
    n: '01',
    title: 'Create space',
    description: 'Define spaces, API references, and user directories in minutes.',
    icon: BoxSelect,
  },
  {
    n: '02',
    title: 'Write with AI',
    description: 'Transform rough notes and developer logs into clean, structured guides.',
    icon: Sparkles,
  },
  {
    n: '03',
    title: 'Customize your site',
    description: 'No code or CSS required. Configure styling and colors in real-time.',
    icon: Palette,
  },
  {
    n: '04',
    title: 'Publish and share',
    description: 'Deploy instantly to edge servers with SEO and AI chat pre-built.',
    icon: Globe,
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="section bg-[#f8f8f8] border-y border-[#f1f5f9]">
      <div className="container-page text-center">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <SectionHeading
            title="How it works"
            intro="Discover the intelligent workspace that visualizes editing, parses code, and automates document edge deployment."
          />
          <Reveal delay={140} className="mt-8">
            <a
              href="#start"
              className="inline-flex h-[48px] items-center justify-center bg-[#4f46e5] text-white hover:bg-indigo-700 px-[24px] text-[16px] font-medium rounded-full transition duration-200"
            >
              Start building
            </a>
          </Reveal>
        </div>

        {/* 4-Column Horizontal Cards Layout */}
        <Reveal delay={200} className="mt-16 text-left">
          <div className="bg-white/70 border border-[#e2e8f0]/80 rounded-[16px] overflow-hidden flex flex-col lg:flex-row">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.n}
                  className={`flex-1 flex flex-col justify-between p-6 lg:px-[24px] lg:py-[24px] xl:p-8 bg-white min-h-[350px] lg:min-h-[420px] ${
                    i !== 0 ? 'border-t lg:border-t-0 lg:border-l border-[#e7ecf3]' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[36px] font-bold tracking-tight text-[#4f46e5] leading-none font-heading">{s.n}</span>
                  </div>
                  
                  <div className="mt-12 lg:mt-auto">
                    <h4 className="text-[36px] xl:text-[42px] font-semibold text-[#0f172b] leading-[1.1] mb-3 font-heading tracking-tight">{s.title}</h4>
                    <p className="text-[13px] xl:text-[14px] text-[#45556c] opacity-90 leading-relaxed">{s.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
