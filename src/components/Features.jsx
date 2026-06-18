import { useState } from 'react';
import {
  MousePointerClick,
  Bot,
  Globe,
  BrainCircuit,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Reveal from './Reveal.jsx';

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
    <section id="features" className="section bg-gradient-to-b from-white via-[#ffebf0] via-[40%] to-[#8ab7f9] border-y border-[#f1f5f9] overflow-hidden">
      <div className="container-page">
        {/* Header section */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-12">
          <Reveal>
            <p className="text-[#4f46e5] text-[16px] font-semibold tracking-[1.28px] uppercase mb-4">
              Solutions ( 4 )
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-[42px] md:text-[52px] font-semibold text-[#0f172b] leading-[1.2] tracking-tight font-heading">
              Write. Customize. Share. Be the answer.
            </h2>
          </Reveal>
        </div>

        {/* Tab Switcher */}
        <Reveal delay={200} className="flex flex-wrap justify-center items-center gap-4 mb-16">
          {features.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={item.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-[16px] py-[10px] font-semibold text-[14px] transition-all duration-200 rounded-full cursor-pointer ${
                  isActive
                    ? 'bg-[#4f46e5] text-white shadow-md'
                    : 'text-[#0f172b] hover:bg-white/50'
                }`}
              >
                <Icon size={16} strokeWidth={2} className={isActive ? 'text-white' : 'text-[#0f172b]'} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </Reveal>

        {/* Main Content Card */}
        <Reveal delay={300}>
          <div className="bg-white rounded-[24px] p-8 md:p-[40px] lg:p-[48px] w-full flex flex-col lg:flex-row gap-10 lg:gap-[60px] items-center shadow-xl shadow-indigo-900/5">
            
            {/* Left info column */}
            <div className="flex-1 space-y-8 lg:max-w-[50%] w-full text-left">
              <div>
                <span className="text-[#4f46e5] text-[12px] font-semibold tracking-[0.96px] uppercase">
                  {activeFeature.eyebrow}
                </span>
                <h3 className="text-[36px] lg:text-[42px] font-heading text-[#0f172b] leading-[1.2] mt-4 tracking-tight">
                  <span className="font-semibold">{activeFeature.title}.</span>{' '}
                  <span className="font-normal text-[#45556c]">{activeFeature.tagline}</span>
                </h3>
              </div>

              <ul className="space-y-4">
                {activeFeature.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[16px] text-[#45556c] leading-[24px]">
                    <CheckCircle2
                      size={24}
                      strokeWidth={1.5}
                      className="shrink-0 text-[#4f46e5]"
                      aria-hidden="true"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <a
                  href="#start"
                  className="inline-flex items-center gap-2 bg-[#4f46e5] text-white px-[20px] py-[12px] rounded-full text-[14px] font-medium hover:bg-indigo-700 transition duration-200"
                >
                  Get started free <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Right interactive mockups column */}
            <div className="flex-1 w-full bg-[#e2e8ff] rounded-[16px] flex items-center justify-center p-8 min-h-[400px] lg:min-h-[500px]">
              {activeTab === 0 && (
                <div className="w-full max-w-sm rounded-xl border border-slate-200/50 bg-white p-4 shadow-xl shadow-indigo-900/10">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <div className="flex gap-2">
                      <span className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center font-bold text-[12px] text-slate-700">B</span>
                      <span className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center italic text-[12px] text-slate-700">I</span>
                      <span className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center underline text-[12px] text-slate-700">U</span>
                      <span className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center text-[12px] text-slate-500 font-mono">&lt;&gt;</span>
                    </div>
                    <span className="text-[10px] font-semibold text-[#4f46e5] bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">Visual Canvas</span>
                  </div>
                  <div className="space-y-4 text-left">
                    <div className="rounded-lg border border-dashed border-[#4f46e5]/30 p-4 bg-indigo-50/50 flex items-center gap-2 hover:border-[#4f46e5] transition-colors cursor-pointer">
                      <span className="text-xs text-slate-600 font-medium flex-1">Drag and drop layout blocks</span>
                      <span className="text-[10px] bg-[#4f46e5] text-white px-3 py-1.5 rounded-md font-bold">+ ADD</span>
                    </div>
                    <div className="space-y-2 pt-2">
                      <div className="h-3 w-1/3 rounded bg-slate-200" />
                      <div className="h-2 w-full rounded bg-slate-100" />
                      <div className="h-2 w-[85%] rounded bg-slate-100" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="w-full max-w-sm rounded-xl border border-slate-700 bg-[#0f172b] text-white p-4 shadow-xl shadow-indigo-900/20">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <span className="text-xs font-semibold text-indigo-400 flex items-center gap-1.5">
                      <Sparkles size={14} className="fill-indigo-400 text-indigo-400" /> AI Translator & Assistant
                    </span>
                    <span className="text-[10px] text-slate-500">v2 API Active</span>
                  </div>
                  <div className="space-y-4 text-left">
                    <div className="bg-slate-800/80 rounded-lg p-3 text-xs text-slate-300 border border-slate-700/50">
                      <p className="font-semibold text-slate-500 text-[9px] uppercase tracking-wider mb-1.5">Source context</p>
                      <p className="text-slate-300 italic leading-relaxed">"Generate a configuration guide from our API screenshot"</p>
                    </div>
                    <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-3.5 text-xs space-y-1.5">
                      <p className="font-bold text-[9px] uppercase tracking-wider text-indigo-400">AI Draft Output</p>
                      <p className="text-slate-200 leading-relaxed">
                        To initialize, supply your `apiKey` in the headers structure and configure the endpoint paths...
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className={`w-full max-w-sm rounded-xl border transition-all duration-300 shadow-xl p-5 text-left ${demoDark ? 'bg-[#0f172b] border-slate-800 text-white shadow-indigo-900/20' : 'bg-white border-slate-200 text-slate-900 shadow-indigo-900/10'}`}>
                  <div className={`flex items-center justify-between border-b pb-4 mb-5 ${demoDark ? 'border-white/5' : 'border-slate-100'}`}>
                    <span className="text-xs font-semibold flex items-center gap-1">docs.acme-corp.com</span>
                    <button
                      onClick={() => setDemoDark(!demoDark)}
                      className="text-[10px] font-semibold bg-[#4f46e5] text-white px-3 py-1.5 rounded-full hover:bg-indigo-700 transition"
                    >
                      Toggled {demoDark ? 'Dark' : 'Light'} Mode
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-32 rounded bg-[#4f46e5]/20" />
                    <div className={`h-4 w-3/4 rounded ${demoDark ? 'bg-white/10' : 'bg-slate-100'}`} />
                    <div className="space-y-2 pt-3">
                      <div className={`h-2.5 w-full rounded ${demoDark ? 'bg-white/5' : 'bg-slate-50'}`} />
                      <div className={`h-2.5 w-[90%] rounded ${demoDark ? 'bg-white/5' : 'bg-slate-50'}`} />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 shadow-xl shadow-indigo-900/10 text-left">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-4 mb-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-700">AI Search Indexer Active</span>
                  </div>
                  <div className="space-y-4 text-xs">
                    <div className="rounded-lg bg-slate-50 p-3 text-slate-600 border border-slate-100 shadow-inner">
                      <p className="font-bold text-slate-400 text-[9px] uppercase tracking-wider mb-1.5">Search Engine API Scrape</p>
                      <p className="text-slate-800 font-mono">GET /docs/pricing - XML schema</p>
                    </div>
                    <div className="rounded-lg bg-indigo-50 p-4 text-indigo-900 border border-indigo-100">
                      <p className="font-bold text-[#4f46e5] text-[9px] uppercase tracking-wider mb-2">Parsed structured schema</p>
                      <p className="text-slate-700 leading-relaxed font-medium">
                        "FlyDocs plans begin on free tier. Paid pricing is fixed at $19/mo with domain mapping."
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
