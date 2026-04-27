import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import ServicesSection from '../components/sections/ServicesSection';
import WorkSection from '../components/sections/WorkSection';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import { type Locale, locales } from '../i18n/config';
import { getDictionary } from '../i18n/dictionaries';

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
  sameAs: ['https://www.linkedin.com/in/michal-cecko/'],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://cecko.dev',
  name: 'Michal Čečko — Full-Stack Developer',
};

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = ((locales as readonly string[]).includes(rawLocale) ? rawLocale : 'en') as Locale;
  const t = getDictionary(locale);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <Hero locale={locale} t={t} />
      <Marquee />
      <ServicesSection locale={locale} t={t} />
      <WorkSection locale={locale} t={t} />
      <ProcessSection t={t} />
      <TestimonialsSection t={t} />
      <FAQSection t={t} />
      <ContactSection t={t} />
    </>
  );
}
