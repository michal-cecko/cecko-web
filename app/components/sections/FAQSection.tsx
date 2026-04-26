'use client';

import { useState } from 'react';
import { FAQS } from '../../data';
import Reveal from '../Reveal';

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq" data-screen-label="07 FAQ">
      <Reveal>
        <div className="section-head">
          <div className="section-head-meta">
            <span className="mono">07 — Časté otázky</span>
            <span className="section-head-meta-desc">Najčastejšie otázky, ktoré dostávam pred začatím spolupráce.</span>
          </div>
          <h2 className="section-title">
            Čo by ste sa ešte chceli <em>spýtať?</em>
          </h2>
        </div>
      </Reveal>
      <div className="faq-list">
        {FAQS.map((f, i) => (
          <Reveal key={i} delay={i * 40} offset={12}>
            <div className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="faq-n">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq-q-text">{f.q}</span>
                <span className="faq-toggle">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
