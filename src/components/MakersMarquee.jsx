import appseroLogo from '../logos/Appsero Colors Logo.svg';
import dokanLogo from '../logos/Dokan Logo Design.svg';
import flywpLogo from '../logos/FlyWP.svg';
import inboxwpLogo from '../logos/InboxWP logo.svg';
import pmLogo from '../logos/PM Colors Logo.svg';
import wperpLogo from '../logos/WP ERP Colors Logo.svg';
import wphiveLogo from '../logos/WP Hive.svg';
import wpufLogo from '../logos/WP UF Colors Logo.svg';
import wedocsLogo from '../logos/weDocs Logo.svg';
import wemailLogo from '../logos/weMail Colors Logo.svg';
import weposLogo from '../logos/wePOS Colors Logo.svg';

const makers = [
  { name: 'Dokan', src: dokanLogo },
  { name: 'FlyWP', src: flywpLogo },
  { name: 'weDocs', src: wedocsLogo },
  { name: 'Appsero', src: appseroLogo },
  { name: 'WP ERP', src: wperpLogo },
  { name: 'InboxWP', src: inboxwpLogo },
  { name: 'WP Project Manager', src: pmLogo },
  { name: 'WP User Frontend', src: wpufLogo },
  { name: 'WP Hive', src: wphiveLogo },
  { name: 'weMail', src: wemailLogo },
  { name: 'wePOS', src: weposLogo },
];

export default function MakersMarquee() {
  return (
    <section id="makers-marquee" className="bg-white border-b border-slate-100 py-8 overflow-hidden">
      <div className="container-page mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 text-center">
          From the makers of
        </p>
      </div>
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex gap-16 items-center whitespace-nowrap animate-marquee">
          {[...makers, ...makers, ...makers].map((m, idx) => (
            <img
              key={idx}
              src={m.src}
              alt={m.name}
              className="h-6 md:h-[30px] w-auto object-contain grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
