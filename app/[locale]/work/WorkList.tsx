'use client';

import { useState } from 'react';
import Link from 'next/link';
import { WORKS } from '../../data';
import { defaultLocale, type Locale } from '../../i18n/config';
import type { Dict } from '../../i18n/dictionaries';

const TAG_FILTER: Record<string, string[]> = {
  web: ['Laravel', 'Nuxt', 'Vue', 'Alpine', 'WordPress', 'HTML', 'CSS', 'ACF'],
  mobile: ['Flutter', 'Ionic', 'RN', 'Mobile'],
  saas: ['Filament'],
};

function localizedHref(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

export default function WorkList({ locale, t }: { locale: Locale; t: Dict }) {
  const [filter, setFilter] = useState('all');
  const filters: { k: string; l: string }[] = [
    { k: 'all', l: t.work.filterAll },
    { k: 'web', l: t.work.filterWeb },
    { k: 'mobile', l: t.work.filterMobile },
    { k: 'saas', l: t.work.filterSaas },
  ];
  const filtered =
    filter === 'all' ? WORKS : WORKS.filter((w) => w.tags.some((tg) => (TAG_FILTER[filter] || []).includes(tg)));

  return (
    <>
      <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
        {filters.map((f) => (
          <button
            key={f.k}
            onClick={() => setFilter(f.k)}
            style={{
              padding: '10px 18px',
              background: filter === f.k ? 'var(--lime)' : 'transparent',
              color: filter === f.k ? 'var(--bg)' : 'var(--fg-dim)',
              border: '1px solid ' + (filter === f.k ? 'var(--lime)' : 'var(--border-hi)'),
              borderRadius: 999,
              fontSize: 12,
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {f.l}{' '}
            <span style={{ opacity: 0.6, marginLeft: 6 }}>
              {f.k === 'all'
                ? WORKS.length
                : WORKS.filter((w) => w.tags.some((tg) => (TAG_FILTER[f.k] || []).includes(tg))).length}
            </span>
          </button>
        ))}
      </div>

      <div className="work-list">
        {filtered.map((w, i) => {
          const wt = t.works[w.id as keyof typeof t.works];
          return (
            <Link key={w.id} href={localizedHref(locale, `/case-studies/${w.id}`)} className="work-row">
              <span className="work-row-n">({String(i + 1).padStart(2, '0')})</span>
              <div className="work-row-main">
                <h3 className="work-row-title">{wt.title}</h3>
                <span className="work-row-kind">{wt.kind}</span>
              </div>
              <div className="work-row-tags">
                {w.tags.map((tg) => (
                  <span key={tg} className="chip">
                    {t.tagLabels[tg] ?? tg}
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
          );
        })}
      </div>
    </>
  );
}
