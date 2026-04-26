'use client';

import { useEffect, useState } from 'react';
import { STACK } from '../../data';
import Reveal from '../Reveal';
import type { Dict } from '../../i18n/dictionaries';

export default function StackSection({ t }: { t: Dict }) {
  const [openState, setOpenState] = useState<Record<string, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const on = () => setIsMobile(window.innerWidth <= 900);
    on();
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);

  const toggle = (cat: string) => setOpenState((s) => ({ ...s, [cat]: !s[cat] }));

  return (
    <section className="stack" id="stack" data-screen-label="03 Stack">
      <div className="stack-inner">
        <Reveal>
          <div className="section-head">
            <div className="section-head-meta">
              <span className="mono">{t.stack.metaLabel}</span>
              <span className="section-head-meta-desc">{t.stack.metaDesc}</span>
            </div>
            <h2 className="section-title">
              <em>{t.stack.titleEm}</em> {t.stack.titleAfter}
            </h2>
          </div>
        </Reveal>
        <div className="stack-grid">
          {STACK.map((cat, ci) => {
            const open = !isMobile || openState[cat.title];
            return (
              <Reveal key={cat.title} delay={ci * 80}>
                <div
                  className={`stack-cat ${isMobile ? 'stack-cat-collapsible' : ''} ${open ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="stack-cat-head"
                    onClick={() => isMobile && toggle(cat.title)}
                    aria-expanded={open}
                  >
                    <h3 className="stack-cat-title">{cat.title}</h3>
                    <span className="stack-cat-count">{String(cat.items.length).padStart(2, '0')}</span>
                    <span className="stack-cat-chev" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  {open && (
                    <div className="stack-list">
                      {cat.items.map((it) => (
                        <div key={it.n} className={`stack-item ${!it.p ? 'secondary' : ''}`}>
                          <span className="stack-item-name">{it.n}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
