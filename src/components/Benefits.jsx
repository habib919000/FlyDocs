import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const benefits = [
  {
    image: '/Write the Way You Think.png',
    title: 'Write the Way You Think',
    body: 'Turn rough notes and screenshots into clean, structured documentation.',
  },
  {
    image: '/Publish Without the Hassle.png',
    title: 'Publish Without the Hassle',
    body: 'No code, no setup. Your docs go live on a beautiful site instantly.',
  },
  {
    image: '/Faster Writing with AI.png',
    title: 'Faster Writing with AI',
    body: 'Draft, rewrite, and translate in seconds with AI built in.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="section bg-white">
      <div className="container-page">
        <SectionHeading title="Docs That Work as Hard as You Do" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-12">
          {benefits.map(({ image, title, body }, i) => (
            <Reveal
              key={title}
              delay={i * 80}
              className="group rounded-xl border border-slate-200 bg-white p-8 transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-brand/20 motion-reduce:hover:translate-y-0"
            >
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto block"
                />
              </div>
              <h3 className="h6 mb-2 text-slate-900 font-semibold">{title}</h3>
              <p className="p-md text-slate-600">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
