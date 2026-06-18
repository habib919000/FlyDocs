import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from './SectionHeading.jsx';

const benefits = [
  {
    image: '/Write the Way You Think.png',
    title: 'Write the Way You Think',
    body: 'Turn rough notes and screenshots into clean, structured documentation.',
    bgColor: '#FFEEF6',
  },
  {
    image: '/Publish Without the Hassle.png',
    title: 'Publish Without the Hassle',
    body: 'No code, no setup. Your docs go live on a beautiful site instantly.',
    bgColor: '#F3EEFF',
  },
  {
    image: '/Faster Writing with AI.png',
    title: 'Faster Writing with AI',
    body: 'Draft, rewrite, and translate in seconds with AI built in.',
    bgColor: '#FFF6EE',
  },
];

export default function Benefits() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.feature-item');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className="section bg-white">
      <div className="container-page">
        <SectionHeading title="Docs That Work as Hard as You Do" />

        <div
          ref={containerRef}
          className="mt-16 flex flex-col lg:flex-row items-start gap-12 lg:gap-24 relative"
        >
          {/* Left Side: Scrolling Features */}
          <div className="flex-1 w-full lg:w-1/2 flex flex-col space-y-16 lg:space-y-64 lg:py-64">
            {benefits.map(({ title, body, image }, i) => (
              <div
                key={title}
                data-index={i}
                className={`feature-item transition-all duration-700 ease-out ${activeIndex === i ? 'opacity-100 translate-x-0' : 'opacity-40 lg:opacity-20 translate-x-2 lg:translate-x-6'
                  }`}
              >
                {/* Mobile visual inline */}
                <div 
                  className="lg:hidden mb-8 p-6 rounded-[24px]"
                  style={{ backgroundColor: benefits[i].bgColor }}
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-auto block"
                  />
                </div>
                <h3 className="h3 mb-4 text-slate-900">{title}</h3>
                <p className="p-md text-slate-600">{body}</p>
              </div>
            ))}
          </div>

          {/* Right Side: Sticky Visual (Desktop Only) */}
          <div 
            className="hidden lg:flex lg:flex-1 w-full lg:w-1/2 sticky top-32 p-10 transition-colors duration-700 h-[600px] overflow-hidden items-center justify-center rounded-[24px]"
            style={{ backgroundColor: benefits[activeIndex].bgColor }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {benefits.map(({ image, title }, i) => (
                <img
                  key={title}
                  src={image}
                  alt={title}
                  className={`absolute w-full h-auto max-h-full object-contain transition-all duration-700 ease-in-out ${activeIndex === i
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 translate-y-8'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
