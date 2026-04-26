import Link from 'next/link';
import Counter from '../Counter';
import { defaultLocale, type Locale } from '../../i18n/config';
import type { Dict } from '../../i18n/dictionaries';

function localizedHref(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  if (path === '/') return `/${locale}`;
  return `/${locale}${path}`;
}

export default function Hero({ locale, t }: { locale: Locale; t: Dict }) {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero-grid-bg" />
      <div className="hero-blob" />
      <div className="hero-blob hero-blob-2" />

      <div className="hero-top">
        <div className="hero-availability">
          <span className="hero-availability-dot" />
          <span className="hero-availability-label">
            {t.hero.availability} <b>{t.hero.availabilityMonth}</b>
          </span>
        </div>
        <span className="hero-location">{t.hero.location}</span>
      </div>

      <div className="hero-center">
        <div className="hero-preheading hero-preheading-author">
          <span className="hero-photo" aria-label={t.hero.name} />
          <span className="hero-preheading-text">
            <span className="hero-preheading-name">{t.hero.name}</span>
            <span className="hero-preheading-role">{t.hero.role}</span>
          </span>
        </div>
        <h1 className="hero-heading">
          {t.hero.heading.split(/<br\s*\/?>/i).map((line, i) => (
            <span
              key={i}
              className="hero-heading-line"
              style={{ animationDelay: `${320 + i * 140}ms` }}
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </h1>
      </div>

      <div className="hero-sub">
        <p className="hero-sub-text" dangerouslySetInnerHTML={{ __html: t.hero.sub }} />
        <div className="hero-actions">
          <Link href={localizedHref(locale, '/contact')} className="btn btn-primary">
            {t.hero.ctaPrimary}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8m0 0L8 4m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href={localizedHref(locale, '/work')} className="btn btn-ghost">
            {t.hero.ctaGhost}
          </Link>
        </div>
      </div>

      <div className="hero-foot">
        <div className="hero-stat">
          <div className="hero-stat-num">
            <Counter to={8} sup="+" />
          </div>
          <div className="hero-stat-label">{t.hero.statYears}</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">
            <Counter to={62} sup="+" />
          </div>
          <div className="hero-stat-label">{t.hero.statProjects}</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">
            <Counter to={14} />
          </div>
          <div className="hero-stat-label">{t.hero.statClients}</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">
            100<sup>%</sup>
          </div>
          <div className="hero-stat-label">{t.hero.statOnTime}</div>
        </div>
      </div>
    </section>
  );
}
