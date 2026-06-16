import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const faqs = [
  {
    q: 'Do I need to know how to code?',
    a: 'No. FlyDocs uses a visual editor anyone can use. No markdown or code required.',
  },
  {
    q: 'Can I use my own AI provider?',
    a: 'Yes. Bring your own AI key on any plan for full control over cost and privacy.',
  },
  {
    q: 'Is FlyDocs really free?',
    a: 'Yes. There is a free plan with no expiry and no credit card required.',
  },
  {
    q: 'Can I use my own domain?',
    a: 'Yes. Connect a custom domain and publish your docs anywhere.',
  },
  {
    q: 'Will my docs work with AI tools like ChatGPT?',
    a: 'Yes. Copy any page for ChatGPT or Claude, and add an AI chat to your site.',
  },
  {
    q: 'What happens to my docs if I cancel?',
    a: 'Your content stays yours. You can export it anytime.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section bg-white">
      <div className="container-page">
        <SectionHeading title="Frequently Asked Questions" />
        <dl className="mx-auto max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  >
                    <span className="h6 text-slate-900">{item.q}</span>
                    <ChevronDown
                      size={24}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className={`shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand' : ''
                      }`}
                    />
                  </button>
                </dt>
                <dd
                  className={`grid overflow-hidden transition-all duration-200 ease-out ${
                    isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="p-rg min-h-0 pr-10 text-slate-600">{item.a}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
