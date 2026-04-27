import Link from 'next/link';
import { SERVICES } from '../../data';
import Reveal from '../Reveal';
import { defaultLocale, type Locale } from '../../i18n/config';
import type { Dict } from '../../i18n/dictionaries';

function localizedHref(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  if (path === '/') return `/${locale}`;
  return `/${locale}${path}`;
}

export default function ServicesSection({ locale, t }: { locale: Locale; t: Dict }) {
  return (
    <section className="section" id="services" data-screen-label="02 Services">
      <Reveal>
        <div className="section-head">
          <div className="section-head-meta">
            <span className="mono">{t.services.metaLabel}</span>
            <span className="section-head-meta-desc">{t.services.metaDesc}</span>
          </div>
          <h2 className="section-title">
            {t.services.title} <em>{t.services.titleEm}</em>
          </h2>
        </div>
      </Reveal>
      <div className="services-grid">
        {SERVICES.map((s, i) => {
          const c = t.services.cards[s.n as keyof typeof t.services.cards];
          return (
          <Reveal key={s.n} delay={i * 60} className={s.span}>
            <Link href={`${localizedHref(locale, '/services')}#service-${s.n}`} className={`service-card`}>
              <span className="service-card-bg-num">{s.n.replace('0', '')}</span>
              <h3 className="service-card-title">{c.title}</h3>
              <p className="service-card-desc">{c.desc}</p>
              <div className="service-card-footer">
                <div className="service-card-tags">
                  <span className="chip chip-accent">{c.price}</span>
                  <span className="chip">{c.dur}</span>
                </div>
                <span className="service-card-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}
