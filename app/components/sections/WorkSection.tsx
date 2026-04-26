import Link from 'next/link';
import { WORKS } from '../../data';
import Reveal from '../Reveal';
import { defaultLocale, type Locale } from '../../i18n/config';
import type { Dict } from '../../i18n/dictionaries';

function localizedHref(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  if (path === '/') return `/${locale}`;
  return `/${locale}${path}`;
}

export default function WorkSection({ locale, t }: { locale: Locale; t: Dict }) {
  return (
    <section className="section" id="work" data-screen-label="04 Work">
      <Reveal>
        <div className="section-head">
          <div className="section-head-meta">
            <span className="mono">{t.work.metaLabel}</span>
            <span className="section-head-meta-desc">{t.work.metaDesc}</span>
          </div>
          <h2 className="section-title">
            {t.work.title} <em>{t.work.titleEm}</em>
          </h2>
          <Link href={localizedHref(locale, '/work')} className="btn btn-ghost section-cta">
            {t.work.cta}
          </Link>
        </div>
      </Reveal>
      <div className="work-list">
        {WORKS.slice(0, 6).map((w, i) => {
          const wt = t.works[w.id as keyof typeof t.works];
          return (
            <Reveal key={w.id} delay={i * 50} offset={16}>
              <Link href={localizedHref(locale, `/case-studies/${w.id}`)} className="work-row">
                <span className="work-row-n">({String(i + 1).padStart(2, '0')})</span>
                <div className="work-row-main">
                  <h3 className="work-row-title">{wt.title}</h3>
                  <span className="work-row-kind">{wt.kind}</span>
                </div>
                <div className="work-row-tags">
                  {w.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {t.tagLabels[tag] ?? tag}
                    </span>
                  ))}
                </div>
                <span className="work-row-year">{w.year}</span>
                <span className="work-row-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div
                  className="work-preview"
                  style={{
                    background:
                      i % 2 === 0
                        ? 'linear-gradient(135deg, #49F0E0, #8b6cce)'
                        : 'linear-gradient(135deg, #1c1e19, #49F0E0)',
                  }}
                >
                  <div className="wp-mock" style={{ color: i % 2 === 0 ? '#0c0d0a' : '#f0ede4' }}>
                    <div className="wp-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div>
                      <div className="wp-title">{wt.title}</div>
                      <div className="wp-sub">{wt.kind}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
