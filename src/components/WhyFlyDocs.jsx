import { Code2, Palette, KeyRound, Tag } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import weDevsLogo from '../weDevs logo icon.png';

const bentoItems = [
  {
    icon: Code2,
    title: 'No Code Needed',
    body: 'A visual editor anyone can use. Write docs like you write a note.',
    className: 'col-span-1 md:col-span-2 lg:col-start-1 lg:col-span-2 lg:row-start-1 bg-white',
  },
  {
    icon: Palette,
    title: 'Beautiful Output',
    body: 'Every site looks pro by default. No theme tweaking, no CSS.',
    className: 'col-span-1 md:col-span-1 lg:col-start-3 lg:col-span-1 lg:row-start-1 bg-white',
  },
  {
    icon: KeyRound,
    title: 'AI on Your Terms',
    body: 'Use our AI or bring your own key. You stay in control of cost and privacy.',
    className: 'col-span-1 md:col-span-1 lg:col-start-1 lg:col-span-1 lg:row-start-2 bg-white',
  },
  {
    icon: Tag,
    title: 'A Price That Fits',
    body: (
      <>
        Start free. Paid plans from <span className="font-semibold tabular-nums text-[#0f172b]">$19/mo</span>, not $300.
      </>
    ),
    className: 'col-span-1 md:col-span-2 lg:col-start-1 lg:col-span-1 lg:row-start-3 bg-white',
  },
];

export default function WhyFlyDocs() {
  return (
    <section id="why" className="section bg-[#f8fafc]">
      <div className="container-page">
        <SectionHeading
          title="Why FlyDocs?"
          intro="Most doc tools are built for developers or cost a fortune. FlyDocs is built for everyone, at a price that makes sense."
        />
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {bentoItems.map(({ icon: Icon, title, body, className }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 80}
              className={`rounded-[16px] border border-[#e2e8f0] p-8 transition duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col ${className}`}
            >
              <span className="inline-flex items-center justify-center h-[48px] w-[48px] rounded-xl bg-[#eef2ff] text-brand mb-8">
                <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div className="mt-auto">
                <h3 className="text-[24px] font-semibold text-[#0f172b] mb-3 font-heading leading-tight">{title}</h3>
                <p className="text-[18px] text-[#45556c] leading-[27px]">{body}</p>
              </div>
            </Reveal>
          ))}

          {/* Featured: Backed by weDevs */}
          <Reveal
            delay={80}
            className="col-span-1 md:col-span-2 lg:col-start-2 lg:col-span-2 lg:row-start-2 lg:row-span-2 rounded-[16px] text-white p-8 md:p-10 transition duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group flex flex-col"
            style={{ backgroundImage: "linear-gradient(212deg, rgb(79, 70, 229) -10%, rgb(15, 23, 43) 45%)" }}
          >
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center mb-6">
                <img src={weDevsLogo} alt="weDevs Logo" className="h-[32px] w-auto object-contain" />
              </div>
              <div className="mb-10">
                <h3 className="text-[36px] font-semibold text-white mb-2 font-heading leading-tight">Backed by weDevs</h3>
                <p className="text-[20px] text-[#cad5e2] max-w-xl leading-[30px]">
                  <span className="font-bold text-white">200K+</span> users and{' '}
                  <span className="font-bold text-white">10+</span> years of shipping. FlyDocs is
                  built on a foundation you can trust.
                </p>
              </div>

              {/* Purple Stats Grid */}
              <div className="mt-auto bg-[#2c277f] rounded-[16px] px-8 py-6 grid grid-cols-2 gap-y-8 gap-x-8 max-w-[514px]">
                <div>
                  <h4 className="text-[36px] font-semibold text-white mb-1 font-heading leading-tight">520k+</h4>
                  <p className="text-[18px] text-[#cad5e2]">Business Empowered</p>
                </div>
                <div>
                  <h4 className="text-[36px] font-semibold text-white mb-1 font-heading leading-tight">70k+</h4>
                  <p className="text-[18px] text-[#cad5e2]">Business Empowered</p>
                </div>
                <div>
                  <h4 className="text-[36px] font-semibold text-white mb-1 font-heading leading-tight">99%</h4>
                  <p className="text-[18px] text-[#cad5e2]">Business Empowered</p>
                </div>
                <div>
                  <h4 className="text-[36px] font-semibold text-white mb-1 font-heading leading-tight">160+</h4>
                  <p className="text-[18px] text-[#cad5e2]">Business Empowered</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
