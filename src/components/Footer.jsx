import { Instagram, Play } from 'lucide-react';

const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Integrations', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Startups', href: '#' },
      { label: 'Enterprise', href: '#' },
      { label: 'E-commerce', href: '#' },
      { label: 'Agencies', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="text-indigo-100 overflow-hidden relative"
      style={{
        background: '#5047E5',
      }}
    >
      {/* SVG Background Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1920 861"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <g clipPath="url(#clip0_7194_6706)">
            <rect width="1920" height="861" fill="#5047E5" />
            <g filter="url(#filter0_f_7194_6706)">
              <circle cx="960.5" cy="903.5" r="1150.5" fill="#010002" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_7194_6706"
              x="-690"
              y="-747"
              width="3301"
              height="3301"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_7194_6706" />
            </filter>
            <clipPath id="clip0_7194_6706">
              <rect width="1920" height="861" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {/* Central CTA Heading and Buttons */}
      <div
        id="start"
        className="container-page flex flex-col items-center text-center py-20 md:py-28 max-w-4xl mx-auto px-4 relative z-10"
      >
        <h2
          className="text-4xl md:text-[56px] font-bold text-white tracking-tight leading-[1.12]"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Start Writing Today
        </h2>
        <p className="text-lg md:text-xl text-indigo-100/90 mt-4 max-w-xl">
          Your next doc is 10 minutes away.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="#start"
            className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#5047E5] hover:bg-indigo-50 transition-all duration-150 active:scale-[0.98]"
          >
            Start Free
          </a>
        </div>
      </div>

      {/* Main Link Grid */}
      <div className="container-page py-16 border-t border-white/10 relative z-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-6">
          {/* Brand & Socials Column */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <span className="text-lg font-bold text-white tracking-tight font-heading">
              FlyDocs.co
            </span>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-indigo-150 transition-all duration-150 hover:border-white hover:bg-white/10 hover:text-white"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Play"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-indigo-150 transition-all duration-150 hover:border-white hover:bg-white/10 hover:text-white"
              >
                <Play size={18} strokeWidth={1.5} className="ml-0.5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="col-span-1">
              <h3 className="mb-4 text-sm font-semibold text-white">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-indigo-100/80 transition-colors duration-150 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container-page py-6 flex flex-col items-center justify-between gap-4 sm:flex-row text-[13px] text-indigo-200/70">
          <p>
            © {new Date().getFullYear()} FlyDocs.co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
