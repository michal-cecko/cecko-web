import type { Metadata } from 'next';
import StackSection from '../../components/sections/StackSection';
import ProcessSection from '../../components/sections/ProcessSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import ContactSection from '../../components/sections/ContactSection';
import { type Locale, locales, defaultLocale } from '../../i18n/config';
import { getDictionary } from '../../i18n/dictionaries';

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = ((locales as readonly string[]).includes(raw) ? raw : defaultLocale) as Locale;
  const t = getDictionary(locale);
  const path = locale === defaultLocale ? '/o-mne' : `/${locale}/o-mne`;
  return {
    title: t.nav.about,
    description: t.about.metaDesc,
    alternates: { canonical: path },
    openGraph: {
      title: `${t.nav.about} — Michal Čečko`,
      description: t.about.metaDesc,
      url: path,
    },
  };
}

export default async function AboutPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale = ((locales as readonly string[]).includes(raw) ? raw : defaultLocale) as Locale;
  const t = getDictionary(locale);

  return (
    <>
      <section className="section" style={{ paddingTop: 140 }}>
        <div className="section-head">
          <div className="section-head-meta">
            <span className="mono">{t.about.metaLabel}</span>
            <span className="section-head-meta-desc">{t.about.metaDesc}</span>
          </div>
          <h1 className="section-title">
            {t.about.title} <em>{t.about.titleEm}</em>
            <br />
            <span className="section-title-dim">{t.about.subtitle}</span>
          </h1>
        </div>

        <div className="about">
          <div className="about-text">
            {t.about.body.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>

          <div className="about-facts">
            <div className="about-fact">
              <span className="about-fact-key">{t.about.facts.name}</span>
              <span className="about-fact-val">Michal Čečko</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-key">{t.about.facts.location}</span>
              <span className="about-fact-val">Ostrava CZ / Žilina SK</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-key">{t.about.facts.firstLine}</span>
              <span className="about-fact-val">2016</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-key">{t.about.facts.pro}</span>
              <span className="about-fact-val">
                <span className="lime">8+</span> {t.about.facts.proValue.replace('8+ ', '')}
              </span>
            </div>
            <div className="about-fact">
              <span className="about-fact-key">{t.about.facts.status}</span>
              <span className="about-fact-val">
                <span className="lime">●</span> {t.about.facts.statusValue.replace('● ', '')}
              </span>
            </div>
            <div className="about-fact">
              <span className="about-fact-key">{t.about.facts.ico}</span>
              <span className="about-fact-val">23260696</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-key">{t.about.facts.languages}</span>
              <span className="about-fact-val">SK · CZ · EN</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-key">{t.about.facts.coffee}</span>
              <span className="about-fact-val">{t.about.facts.coffeeValue}</span>
            </div>
          </div>
        </div>
      </section>

      <StackSection t={t} />
      <ProcessSection t={t} />
      <TestimonialsSection t={t} />
      <ContactSection t={t} />
    </>
  );
}
