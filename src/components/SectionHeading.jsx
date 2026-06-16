import Reveal from './Reveal.jsx';

// Centered section header: optional eyebrow + title + optional intro.
export default function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      {eyebrow && (
        <Reveal as="p" className="display-1 mb-4">
          {eyebrow}
        </Reveal>
      )}
      <Reveal as="h2" className="h2" delay={60}>
        {title}
      </Reveal>
      {intro && (
        <Reveal as="p" className="p-lg mt-4" delay={120}>
          {intro}
        </Reveal>
      )}
    </div>
  );
}
