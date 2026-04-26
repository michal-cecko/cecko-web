import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import ServicesSection from './components/sections/ServicesSection';
import StackSection from './components/sections/StackSection';
import WorkSection from './components/sections/WorkSection';
import ProcessSection from './components/sections/ProcessSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Michal Čečko',
  jobTitle: 'Freelance Full-Stack Developer',
  url: 'https://cecko.dev',
  email: 'mailto:ceckomichal@gmail.com',
  address: [
    { '@type': 'PostalAddress', addressLocality: 'Ostrava', addressCountry: 'CZ' },
    { '@type': 'PostalAddress', addressLocality: 'Žilina', addressCountry: 'SK' },
  ],
  knowsAbout: ['Laravel', 'PHP', 'FilamentPHP', 'Vue.js', 'Nuxt', 'React', 'Next.js', 'Flutter', 'TypeScript'],
  sameAs: ['https://www.linkedin.com/in/michal-%C4%8De%C4%8Dko-338892204'],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://cecko.dev',
  name: 'Michal Čečko — Full-Stack Developer',
  inLanguage: 'sk-SK',
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <Hero />
      <Marquee />
      <ServicesSection />
      <StackSection />
      <WorkSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
