'use client';

import { useState } from 'react';
import Link from 'next/link';
import { WORKS } from '../data';

const FILTERS: { k: string; l: string }[] = [
  { k: 'all', l: 'Všetko' },
  { k: 'web', l: 'Web' },
  { k: 'mobile', l: 'Mobile' },
  { k: 'saas', l: 'SaaS' },
];

const TAG_FILTER: Record<string, string[]> = {
  web: ['Laravel', 'Nuxt', 'Vue', 'Alpine', 'WordPress', 'HTML', 'CSS', 'ACF'],
  mobile: ['Flutter', 'Ionic', 'RN', 'Mobile'],
  saas: ['Filament'],
};

export default function WorkList() {
  const [filter, setFilter] = useState('all');
  const filtered =
    filter === 'all' ? WORKS : WORKS.filter((w) => w.tags.some((t) => (TAG_FILTER[filter] || []).includes(t)));

  return (
    <>
      <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
        {FILTERS.map((f) => (
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
                : WORKS.filter((w) => w.tags.some((t) => (TAG_FILTER[f.k] || []).includes(t))).length}
            </span>
          </button>
        ))}
      </div>

      <div className="work-list">
        {filtered.map((w, i) => (
          <Link key={w.id} href={`/pripadova-studia/${w.id}`} className="work-row">
            <span className="work-row-n">({String(i + 1).padStart(2, '0')})</span>
            <div className="work-row-main">
              <h3 className="work-row-title">{w.title}</h3>
              <span className="work-row-kind">{w.kind}</span>
            </div>
            <div className="work-row-tags">
              {w.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            <span className="work-row-year">{w.year}</span>
            <span className="work-row-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 12L12 4M12 4H6M12 4v6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
                  <div className="wp-title">{w.title}</div>
                  <div className="wp-sub">{w.kind}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
