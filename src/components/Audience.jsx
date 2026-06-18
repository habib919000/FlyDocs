import { Package, Megaphone, Rocket } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const personas = [
  { icon: Package, label: 'Product teams' },
  { icon: Megaphone, label: 'Marketing teams' },
  { icon: Rocket, label: 'Founders & support teams' },
];

export default function Audience() {
  return (
    <section id="audience" className="section bg-[#f8f8f8] border-y border-slate-100">
      <div className="container-page">
        <SectionHeading
          title="Built for Teams Without a Docs Team"
          intro="You don't need developers. You don't need markdown. Just your ideas. FlyDocs is made for people who need great documentation but don't write code, like:"
        />
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {personas.map(({ icon: Icon, label }, i) => (
            <Reveal
              key={label}
              delay={i * 80}
              className="flex flex-col items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-8 text-center transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-brand/20"
            >
              <span className="icon-tile h-14 w-14 rounded-full">
                <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="h6 text-slate-900">{label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
