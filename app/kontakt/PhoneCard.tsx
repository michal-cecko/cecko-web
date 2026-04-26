'use client';

import { useLocalePhone } from '../components/LocalePhone';

export default function PhoneCard() {
  const phone = useLocalePhone();
  return (
    <a
      href={phone.href}
      style={{
        gridColumn: '1 / -1',
        padding: '14px 18px',
        background: 'var(--bg-2)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        transition: 'all 0.2s',
        minWidth: 0,
      }}
    >
      <div style={{ minWidth: 0 }}>
        <div className="mono" style={{ marginBottom: 2, fontSize: 10 }}>
          Telefón / WhatsApp
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 500,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {phone.display}
        </div>
      </div>
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, opacity: 0.5 }}>
        <path
          d="M5 13l8-8m0 0H7m6 0v6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
