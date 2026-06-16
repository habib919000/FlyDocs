import { Code2, Palette, KeyRound, Tag, BadgeCheck } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const reasons = [
  {
    icon: Code2,
    title: 'No Code Needed',
    body: 'A visual editor anyone can use. Write docs like you write a note.',
  },
  {
    icon: Palette,
    title: 'Beautiful Output, Zero Design Work',
    body: 'Every site looks pro by default. No theme tweaking, no CSS.',
  },
  {
    icon: KeyRound,
    title: 'AI on Your Terms',
    body: 'Use our AI or bring your own key. You stay in control of cost and privacy.',
  },
  {
    icon: Tag,
    title: 'A Price That Fits',
    body: (
      <>
        Start free. Paid plans from <span className="font-semibold tabular-nums text-slate-900">$19/mo</span>, not $300.
      </>
    ),
  },
];

export default function WhyFlyDocs() {
  return (
    <section id="why" className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading
          title="Why FlyDocs?"
          intro="Most doc tools are built for developers or cost a fortune. FlyDocs is built for everyone, at a price that makes sense."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, body }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 80}
              className="rounded-xl border border-slate-200 bg-white p-8 transition duration-200 ease-out hover:shadow-md"
            >
              <span className="icon-tile mb-5">
                <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="h6 mb-2">{title}</h3>
              <p className="p-md">{body}</p>
            </Reveal>
          ))}

          {/* Featured: Backed by weDevs */}
          <Reveal
            delay={80}
            className="flex flex-col justify-center rounded-xl border border-brand/20 bg-brand-subtle p-8 md:col-span-2 lg:col-span-1"
          >
            <span className="icon-tile mb-5 bg-white">
              <BadgeCheck size={24} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <h3 className="h6 mb-2 text-slate-900 font-semibold">Backed by weDevs</h3>
            <p className="p-md text-slate-700">
              <span className="font-semibold tabular-nums text-slate-900">200K+</span> users and{' '}
              <span className="font-semibold tabular-nums text-slate-900">10+</span> years of shipping. FlyDocs is
              built to last.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
