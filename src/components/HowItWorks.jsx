import { useState } from 'react';
import { ArrowUpRight, ArrowDown, Sparkles, Code, Globe, Terminal } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const steps = [
  {
    n: '01',
    title: 'Create space',
    description: 'Define spaces, API references, and user directories in minutes.',
    detailEyebrowLeft: 'Workspace Setup',
    detailEyebrowRight: 'Initial Node',
    detailTitle: 'Establish your secure documentation workspace',
    detailBody: 'Initialize a custom brand domain for your team, connect your AI provider, and map out your core documentation structure in under 10 minutes.',
    mockType: 'structure'
  },
  {
    n: '02',
    title: 'Write with AI',
    description: 'Transform rough notes and developer logs into clean, structured guides.',
    detailEyebrowLeft: 'AI Coprocessor',
    detailEyebrowRight: 'LLM Generator',
    detailTitle: 'AI-native content drafting and refinement',
    detailBody: 'Draft code blocks, explain complex architecture, or translate entire guides in seconds with native Claude/ChatGPT integrations.',
    mockType: 'ai'
  },
  {
    n: '03',
    title: 'Customize site',
    description: 'No code or CSS required. Configure styling and colors in real-time.',
    detailEyebrowLeft: 'Visual Editor',
    detailEyebrowRight: 'Branding Node',
    detailTitle: 'Tailor design elements to match your brand style',
    detailBody: 'Customize layouts, light/dark themes, custom scripts, and navigation links. Preview all styling changes live in the browser.',
    mockType: 'design'
  },
  {
    n: '04',
    title: 'Publish live',
    description: 'Deploy instantly to edge servers with SEO and AI chat pre-built.',
    detailEyebrowLeft: 'Edge Network',
    detailEyebrowRight: 'AI Scraper Ready',
    detailTitle: 'Deploy securely to global edge servers',
    detailBody: 'Publish your docs with single sign-on, configure SEO indexing, and deploy an interactive chat assistant for your users.',
    mockType: 'publish'
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const activeFeature = steps[activeStep];

  return (
    <section id="how" className="section bg-[#FAFBFB] text-slate-900 border-y border-slate-100">
      <div className="container-page text-center">
        {/* Section Heading with Start Building Button */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <SectionHeading
            title="How it works"
            intro="Discover the intelligent workspace that visualizes editing, parses code, and automates document edge deployment."
          />
          <Reveal delay={140} className="mt-6">
            <a
              href="#start"
              className="inline-flex h-10 items-center justify-center bg-slate-950 text-white hover:bg-slate-800 px-6 text-sm font-semibold rounded-full transition duration-200"
            >
              Start building
            </a>
          </Reveal>
        </div>

        {/* Interactive Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center text-left mt-16">
          
          {/* Left: Column Drawer Accordion */}
          <div className="flex flex-col md:flex-row border border-slate-200/80 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-md h-[500px] md:h-[420px] w-full">
            {steps.map((s, i) => {
              const isActive = activeStep === i;
              
              if (isActive) {
                return (
                  <div
                    key={s.n}
                    className="flex-1 bg-brand text-white p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden select-none min-h-[220px] md:min-h-0"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-3xl md:text-4xl font-bold tracking-tight">{s.n}</span>
                      <ArrowUpRight size={24} className="text-white/80" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold tracking-tight">{s.title}</h4>
                      <p className="text-xs text-white/80 leading-relaxed">{s.description}</p>
                    </div>

                    {/* Dynamic mini graphic */}
                    <div className="rounded-xl border border-white/20 bg-white/10 p-3 h-24 flex items-center justify-center overflow-hidden">
                      {s.mockType === 'structure' && (
                        <div className="w-full space-y-1.5 text-left">
                          <div className="h-1.5 w-1/3 rounded bg-white/40" />
                          <div className="h-1.5 w-2/3 rounded bg-white/20 ml-2" />
                          <div className="h-1.5 w-1/2 rounded bg-white/20 ml-2" />
                        </div>
                      )}
                      {s.mockType === 'ai' && (
                        <div className="w-full space-y-1.5 text-left flex flex-col items-center">
                          <Sparkles size={16} className="text-white/80 animate-pulse mb-1" />
                          <div className="h-1.5 w-3/4 rounded bg-white/25" />
                        </div>
                      )}
                      {s.mockType === 'design' && (
                        <div className="w-full flex gap-1.5 justify-center">
                          <span className="h-3.5 w-3.5 rounded-full bg-white/40" />
                          <span className="h-3.5 w-3.5 rounded-full bg-white/20" />
                          <span className="h-3.5 w-3.5 rounded-full bg-white/10" />
                        </div>
                      )}
                      {s.mockType === 'publish' && (
                        <div className="w-full text-center">
                          <span className="text-[9px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full border border-white/10">docs.yoursite.com</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={s.n}
                  onClick={() => setActiveStep(i)}
                  className="h-14 md:h-full w-full md:w-16 border-b md:border-b-0 md:border-r border-slate-200/80 flex md:flex-col items-center justify-between md:justify-between px-6 md:px-0 py-0 md:py-6 cursor-pointer bg-slate-50 text-slate-400 hover:text-slate-700 transition-all duration-300 hover:bg-slate-100/40"
                >
                  <ArrowDown size={16} className="text-slate-400 hidden md:block" />
                  <span className="text-lg font-bold tracking-wider">{s.n}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider block md:hidden">{s.title}</span>
                  <ArrowUpRight size={16} className="text-slate-400 block md:hidden" />
                  <div className="w-2 h-2 hidden md:block" /> {/* spacer */}
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Specifications Panel */}
          <div className="flex flex-col justify-center space-y-6 text-left pl-0 lg:pl-10">
            <Reveal key={`eyebrow-${activeStep}`} delay={40}>
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                <span>{activeFeature.detailEyebrowLeft}</span>
                <div className="w-16 h-[1px] bg-slate-200" />
                <span>{activeFeature.detailEyebrowRight}</span>
              </div>
            </Reveal>

            <Reveal key={`title-${activeStep}`} delay={80}>
              <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                {activeFeature.detailTitle}
              </h3>
            </Reveal>

            <Reveal key={`body-${activeStep}`} delay={120}>
              <p className="p-md text-slate-600 leading-relaxed">
                {activeFeature.detailBody}
              </p>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
