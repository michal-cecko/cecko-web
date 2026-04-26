'use client';

import { useState } from 'react';
import { CONTACT } from '../../data';
import { useLocalePhone } from '../LocalePhone';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = CONTACT.email;
  const phone = useLocalePhone();

  return (
    <section className="contact" id="contact" data-screen-label="08 Contact">
      <div className="contact-inner">
        <span className="mono" style={{ color: 'var(--lime)' }}>
          08 — Začnime
        </span>
        <h2 className="contact-title">
          Máte projekt?<br />
          <em>Poďme sa baviť.</em>
        </h2>
        <p className="contact-sub">
          Napíšte mi pár riadkov o projekte. Do 24 hodín odpoviem a navrhnem úvodný 30-minútový call — zdarma.
        </p>
        <a href={`mailto:${email}`} className="contact-email">
          <span className="contact-email-label">Email</span>
          <span className="contact-email-addr">{email}</span>
          <span className="contact-email-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 18L18 6M18 6H9M18 6v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--fg-dim)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            padding: '8px',
          }}
        >
          {copied ? '✓ Skopírované' : 'Skopírovať email'}
        </button>
        <div className="contact-channels" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <a href={phone.href} className="contact-channel">
            <span className="contact-channel-label">Telefón / WhatsApp</span>
            <span className="contact-channel-value">{phone.display}</span>
          </a>
          <a href={CONTACT.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-channel">
            <span className="contact-channel-label">LinkedIn</span>
            <span className="contact-channel-value">{CONTACT.linkedinHandle}</span>
          </a>
        </div>
        <div className="contact-meta">
          <span>Remote · Ostrava CZ / Žilina SK</span>
          <span>Pon–Pia · 9:00–17:00</span>
          <span>IČO: 23260696</span>
        </div>
      </div>
    </section>
  );
}
