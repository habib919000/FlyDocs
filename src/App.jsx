import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MakersMarquee from './components/MakersMarquee.jsx';
import PromoCards from './components/PromoCards.jsx';
import Audience from './components/Audience.jsx';
import Benefits from './components/Benefits.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Features from './components/Features.jsx';
import WhyFlyDocs from './components/WhyFlyDocs.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import DOMComment from './components/DOMComment.jsx';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      {/* Navigation Bar */}
      <DOMComment text="Navigation Bar" />
      <Navbar />
      <main id="main">
        {/* Hero Section */}
        <DOMComment text="Hero Section" />
        <Hero />
        {/* Makers Marquee Section */}
        <DOMComment text="Makers Marquee Section" />
        <MakersMarquee />
        {/* Promo Cards Section */}
        <DOMComment text="Promo Cards Section" />
        <PromoCards />
        {/* Audience Section */}
        <DOMComment text="Audience Section" />
        <Audience />
        {/* Benefits Section */}
        <DOMComment text="Benefits Section" />
        <Benefits />
        {/* How It Works Section */}
        <DOMComment text="How It Works Section" />
        <HowItWorks />
        {/* Features Section */}
        <DOMComment text="Features Section" />
        <Features />
        {/* Why FlyDocs Section */}
        <DOMComment text="Why FlyDocs Section" />
        <WhyFlyDocs />
        {/* FAQ Section */}
        <DOMComment text="FAQ Section" />
        <FAQ />
      </main>
      {/* Footer Section & Final CTA */}
      <DOMComment text="Footer Section & Final CTA" />
      <Footer />
    </>
  );
}
