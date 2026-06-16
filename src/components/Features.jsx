import { useState } from 'react';
import {
  MousePointerClick,
  Bot,
  Globe,
  BrainCircuit,
  Check,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const features = [
  {
    icon: MousePointerClick,
    title: 'Visual Editor',
    eyebrow: 'No Markdown Required',
    tagline: 'Write like a doc, publish like a pro.',
    points: [
      'No code or markdown configurations needed',
      'Drag, drop, and format layout components with ease',
      'Live preview changes instantly in the browser',
    ],
  },
  {
    icon: Bot,
    title: 'AI Assistant',
    eyebrow: 'AI-Native Writing',
    tagline: 'Rewrite, shorten, expand, or simplify in seconds.',
    points: [
      'Generate and refine drafts from rough notes',
      'Update entire articles directly from screenshots',
      'Translate document folders into multiple languages',
      'Bring your own API key for maximum privacy & custom rates',
    ],
  },
  {
    icon: Globe,
    title: 'Beautiful Published Sites',
    eyebrow: 'Custom Branding',
    tagline: 'Modern, fast, and SEO-ready outputs.',
    points: [
      'Ultra-fast static generation for smooth loading times',
      'Deploy on custom domain names with instant SSL setup',
      'Light and dark modes supported automatically',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'Made for the AI Era',
    eyebrow: 'LLM & Search Ready',
    tagline: 'Clean structures AI search assistants can scan.',
    points: [
      'One-click page copies optimized for ChatGPT or Claude',
      'Deploy an interactive AI chatbot on your published docs site',
      'Structured schema mapping to ensure accurate AI references',
    ],
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);
  const [demoDark, setDemoDark] = useState(false);

  const activeFeature = features[activeTab];

  return (
    <section id="features" className="section bg-white border-b border-slate-100">
      <div className="container-page">
        <SectionHeading
          eyebrow="Solutions ( 4 )"
          title="Write. Customize. Share. Be the answer."
        />

        {/* Detail Panel Showcase */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-center min-h-[380px]">
          {/* Left info column */}
          <Reveal key={`info-${activeTab}`} delay={80} className="space-y-6">
            <div>
              <span className="display-1 text-xs">{activeFeature.eyebrow}</span>
              <h3 className="h3 mt-2">{activeFeature.title}</h3>
              <p className="p-lg mt-3 text-slate-600 font-medium">
                {activeFeature.tagline}
              </p>
            </div>

            <ul className="space-y-3">
              {activeFeature.points.map((p) => (
                <li key={p} className="p-rg flex items-start gap-3 text-slate-600">
                  <Check
                    size={20}
                    strokeWidth={2.5}
                    className="mt-0.5 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a href="#start" className="btn-primary btn-md">
                Get started free <ArrowRight size={18} strokeWidth={1.5} />
              </a>
            </div>
          </Reveal>

          {/* Right interactive mockups column */}
          <Reveal key={`mockup-${activeTab}`} delay={120} className="relative bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-center justify-center min-h-[300px]">
            {activeTab === 0 && (
              <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex gap-2">
                    <span className="h-5 w-5 rounded bg-slate-100 flex items-center justify-center font-bold text-[10px] text-slate-700">B</span>
                    <span className="h-5 w-5 rounded bg-slate-100 flex items-center justify-center italic text-[10px] text-slate-700">I</span>
                    <span className="h-5 w-5 rounded bg-slate-100 flex items-center justify-center underline text-[10px] text-slate-700">U</span>
                    <span className="h-5 w-5 rounded bg-slate-100 flex items-center justify-center text-[10px] text-slate-500 font-mono">&lt;&gt;</span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 border border-slate-200/50 px-2 py-0.5 rounded">Visual Canvas</span>
                </div>
                <div className="space-y-3 text-left">
                  <div className="rounded-lg border border-dashed border-slate-300 p-4 bg-slate-50 flex items-center gap-2 hover:border-brand transition-colors cursor-pointer">
                    <span className="text-xs text-slate-500 font-medium flex-1">Drag and drop layout blocks</span>
                    <span className="text-[10px] bg-brand text-white px-2 py-1 rounded font-bold">+ ADD</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-3 w-1/3 rounded bg-slate-200" />
                    <div className="h-2 w-full rounded bg-slate-100" />
                    <div className="h-2 w-[80%] rounded bg-slate-100" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-slate-900 text-white p-4 shadow-lg">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <span className="text-xs font-semibold text-brand flex items-center gap-1.5">
                    <Sparkles size={12} className="fill-brand text-brand" /> AI Translator & Assistant
                  </span>
                  <span className="text-[10px] text-slate-500">v2 API Active</span>
                </div>
                <div className="space-y-3 text-left">
                  <div className="bg-slate-800 rounded-lg p-2.5 text-xs text-slate-300">
                    <p className="font-semibold text-slate-500 text-[9px] uppercase tracking-wider mb-1">Source context</p>
                    <p className="text-slate-300 italic">"Generate a configuration guide from our API screenshot"</p>
                  </div>
                  <div className="bg-brand/10 border border-brand/20 rounded-lg p-3 text-xs text-brand space-y-1">
                    <p className="font-bold text-[9px] uppercase tracking-wider text-brand">AI Draft Output</p>
                    <p className="text-slate-200 leading-relaxed">
                      To initialize, supply your `apiKey` in the headers structure and configure the endpoint paths...
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className={`w-full max-w-sm rounded-xl border transition-all duration-300 shadow-lg p-4 text-left ${demoDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
                <div className={`flex items-center justify-between border-b pb-3 mb-4 ${demoDark ? 'border-white/5' : 'border-slate-100'}`}>
                  <span className="text-xs font-semibold flex items-center gap-1">docs.acme-corp.com</span>
                  <button
                    onClick={() => setDemoDark(!demoDark)}
                    className="text-[10px] font-semibold bg-brand text-white px-2.5 py-1 rounded hover:bg-brand-hover transition"
                  >
                    Toggled {demoDark ? 'Dark' : 'Light'} Mode
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="h-2.5 w-24 rounded bg-brand/20" />
                  <div className={`h-4 w-2/3 rounded ${demoDark ? 'bg-white/10' : 'bg-slate-100'}`} />
                  <div className="space-y-1.5 pt-2">
                    <div className={`h-2 w-full rounded ${demoDark ? 'bg-white/5' : 'bg-slate-50'}`} />
                    <div className={`h-2 w-[90%] rounded ${demoDark ? 'bg-white/5' : 'bg-slate-50'}`} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-4 shadow-lg text-left">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
                  <span className="h-2 w-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-700">AI Search Indexer Active</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="rounded-lg bg-slate-50 p-2.5 text-slate-600 border border-slate-100">
                    <p className="font-bold text-slate-400 text-[9px] uppercase tracking-wider mb-1">Search Engine API Scrape</p>
                    <p className="text-slate-800 font-mono">GET /docs/pricing - XML schema</p>
                  </div>
                  <div className="rounded-lg bg-brand-subtle p-3 text-brand border border-brand/20">
                    <p className="font-bold text-brand text-[9px] uppercase tracking-wider mb-1">Parsed structured schema</p>
                    <p className="text-slate-700 leading-relaxed font-semibold">
                      "FlyDocs plans begin on free tier. Paid pricing is fixed at $19/mo with domain mapping."
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Reveal>
        </div>

        {/* Tab Switcher - Now Bottom Sticky */}
        <Reveal delay={40} className="sticky bottom-4 z-30 mx-auto mt-12 w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-full border border-slate-200/80 shadow-lg px-4 py-2 flex flex-wrap justify-center items-center gap-2 sm:gap-4 transition-all duration-300">
          {features.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={item.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 font-semibold text-sm transition-all duration-200 rounded-full cursor-pointer ${
                  isActive
                    ? 'bg-brand text-white shadow-sm shadow-brand/10 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                }`}
              >
                <Icon size={16} strokeWidth={2} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </Reveal>

        <Reveal delay={120} className="mt-12 flex justify-center md:mt-16">
          <a href="#start" className="btn-primary btn-lg">
            Explore the Full Features List <ArrowRight size={20} strokeWidth={1.5} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
