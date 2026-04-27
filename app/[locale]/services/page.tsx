import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '../../data';
import ProcessSection from '../../components/sections/ProcessSection';
import FAQSection from '../../components/sections/FAQSection';
import ContactSection from '../../components/sections/ContactSection';
import Reveal from '../../components/Reveal';
import { type Locale, locales, defaultLocale } from '../../i18n/config';
import { getDictionary } from '../../i18n/dictionaries';

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = ((locales as readonly string[]).includes(raw) ? raw : defaultLocale) as Locale;
  const t = getDictionary(locale);
  const path = locale === defaultLocale ? '/services' : `/${locale}/services`;
  return {
    title: t.nav.services,
    description: t.servicesPage.metaDesc,
    alternates: { canonical: path },
    openGraph: {
      title: `${t.nav.services} — Michal Čečko`,
      description: t.servicesPage.metaDesc,
      url: path,
    },
  };
}

function localizedHref(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

export default async function ServicesPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale = ((locales as readonly string[]).includes(raw) ? raw : defaultLocale) as Locale;
  const t = getDictionary(locale);

  return (
    <>
      <section className="section" style={{ paddingTop: 140 }}>
        <Reveal>
          <div className="section-head">
            <div className="section-head-meta">
              <span className="mono">{t.servicesPage.metaLabel}</span>
              <span className="section-head-meta-desc">{t.servicesPage.metaDesc}</span>
            </div>
            <h1 className="section-title">
              {t.servicesPage.title} <em>{t.servicesPage.titleEm}</em>
            </h1>
          </div>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {SERVICES.map((s, i) => {
            const c = t.services.cards[s.n as keyof typeof t.services.cards];
            return (
            <Reveal key={s.n} delay={i * 60} offset={20}>
            <div
              key={s.n}
              id={`service-${s.n}`}
              className="services-card"
              style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                padding: '40px',
                scrollMarginTop: 100,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 48,
                  fontWeight: 500,
                  color: 'var(--lime)',
                  letterSpacing: '-0.03em',
                  lineHeight: 0.9,
                }}
              >
                {s.n}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 36,
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    marginBottom: 16,
                  }}
                >
                  {c.title}
                </h3>
                <p style={{ color: 'var(--fg-dim)', fontSize: 16, lineHeight: 1.5, marginBottom: 24, maxWidth: 600 }}>
                  {c.desc}
                </p>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--fg-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: 12,
                  }}
                >
                  {t.servicesPage.inPrice}
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px 24px',
                    maxWidth: 600,
                  }}
                >
                  {c.includes.map((it) => (
                    <li key={it} style={{ fontSize: 14, color: 'var(--fg-dim)', paddingLeft: 16, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--lime)' }}>→</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="services-card-meta"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--fg-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: 6,
                    }}
                  >
                    {t.servicesPage.price}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 24,
                      fontWeight: 500,
                      color: 'var(--lime)',
                    }}
                  >
                    {c.price}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--fg-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: 6,
                    }}
                  >
                    {t.servicesPage.duration}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500 }}>{c.dur}</div>
                </div>
                <Link
                  href={localizedHref(locale, '/contact')}
                  className="btn btn-primary btn-sm"
                  style={{ justifyContent: 'center', marginTop: 8 }}
                >
                  {t.servicesPage.inquire}
                </Link>
                {s.workFilter && (
                  <Link
                    href={`${localizedHref(locale, '/work')}?filter=${s.workFilter}`}
                    className="btn btn-ghost btn-sm"
                    style={{ justifyContent: 'center' }}
                  >
                    {t.servicesPage.seeProjects}
                  </Link>
                )}
              </div>
            </div>
            </Reveal>
            );
          })}
        </div>
      </section>
      <ProcessSection t={t} />
      <FAQSection t={t} />
      <ContactSection t={t} />
    </>
  );
}
