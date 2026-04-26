'use client';

import { useState } from 'react';
import { CONTACT } from '../../data';
import { useLocalePhone } from '../LocalePhone';
import Reveal from '../Reveal';
import type { Dict } from '../../i18n/dictionaries';

export default function ContactSection({ t }: { t: Dict }) {
  const [copied, setCopied] = useState(false);
  const email = CONTACT.email;
  const phone = useLocalePhone();

  return (
    <section className="contact" id="contact" data-screen-label="08 Contact">
      <Reveal>
        <div className="contact-inner">
          <span className="mono" style={{ color: 'var(--lime)' }}>
            {t.contact.sectionLabel}
          </span>
          <h2 className="contact-title">
            {t.contact.titleA}
            <br />
            <em>{t.contact.titleB}</em>
          </h2>
          <p className="contact-sub">{t.contact.sub}</p>
          <a href={`mailto:${email}`} className="contact-email">
            <span className="contact-email-label">{t.contact.emailLabel}</span>
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
            {copied ? t.contact.copied : t.contact.copy}
          </button>
          <div className="contact-channels" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <a href={phone.href} className="contact-channel">
              <span className="contact-channel-label">{t.contact.phoneLabel}</span>
              <span className="contact-channel-value">{phone.display}</span>
            </a>
            <a href={CONTACT.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-channel">
              <span className="contact-channel-label">{t.contact.linkedinLabel}</span>
              <span className="contact-channel-value">{CONTACT.linkedinHandle}</span>
            </a>
          </div>
          <div className="contact-meta">
            <span>{t.contact.location}</span>
            <span>{t.contact.hours}</span>
            <span>{t.contact.ico}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
