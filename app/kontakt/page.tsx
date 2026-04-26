import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Napíšte mi o projekte. Do 24 hodín odpoviem. Email, telefón, WhatsApp. Remote · Ostrava CZ / Žilina SK.',
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Kontakt — Michal Čečko',
    description: 'Napíšte mi o projekte. Do 24 hodín odpoviem.',
    url: '/kontakt',
  },
};

export default function ContactPage() {
  return (
    <section className="section" style={{ paddingTop: 140 }}>
      <div className="section-head">
        <div className="section-head-meta">
          <span className="mono">— Kontakt</span>
          <span className="section-head-meta-desc">Napíšte mi. Do 24 hodín odpoviem s návrhom ďalších krokov.</span>
        </div>
        <h1 className="section-title">
          Poďme sa <em>porozprávať.</em>
        </h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'start' }}>
        <div>
          <ContactForm />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ padding: '18px 22px', background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 14 }}>
            <div className="mono" style={{ marginBottom: 8, color: 'var(--lime)', fontSize: 11 }}>
              ● Voľné kapacity
            </div>
            <p style={{ fontSize: 13, color: 'var(--fg-dim)', lineHeight: 1.5, margin: 0 }}>
              Prijímam projekty so štartom ihneď.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {(
              [
                { label: 'Email', val: 'michal@cecko.dev', href: 'mailto:michal@cecko.dev', full: true },
                { label: 'Telefón / WhatsApp', val: '+421 900 000 000', href: 'tel:+421900000000', full: true },
                { label: 'LinkedIn', val: '@michalcecko', href: '#' },
                { label: 'GitHub', val: '@michalcecko', href: '#' },
              ] as { label: string; val: string; href: string; full?: boolean }[]
            ).map((c, i) => (
              <a
                key={i}
                href={c.href}
                style={{
                  gridColumn: c.full ? '1 / -1' : 'auto',
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
                    {c.label}
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
                    {c.val}
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
            ))}
          </div>

          <div style={{ padding: '18px 22px', background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 14 }}>
            <div className="mono" style={{ marginBottom: 8, fontSize: 11 }}>
              Fakturačné údaje
            </div>
            <div style={{ fontSize: 13, color: 'var(--fg-dim)', lineHeight: 1.6 }}>
              Michal Čečko · Freelance · Remote
              <br />
              IČO: 23260696
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
