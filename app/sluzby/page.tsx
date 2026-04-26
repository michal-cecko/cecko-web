import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '../data';
import ProcessSection from '../components/sections/ProcessSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Služby',
  description:
    'Web a mobilné aplikácie, SaaS MVP, AI integrácie, UI/UX dizajn. Cenník od 800 €. Doručenie 1–24 týždňov.',
  alternates: { canonical: '/sluzby' },
  openGraph: {
    title: 'Služby — Michal Čečko',
    description: 'Sedem oblastí, v ktorých viem dodať výsledok. Cenník a trvanie.',
    url: '/sluzby',
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 140 }}>
        <div className="section-head">
          <div className="section-head-meta">
            <span className="mono">— Služby</span>
            <span className="section-head-meta-desc">
              Sedem oblastí, v ktorých viem dodať výsledok. Kombinujem ich podľa potreby projektu.
            </span>
          </div>
          <h1 className="section-title">
            Čo pre vás <em>postavím.</em>
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {SERVICES.map((s) => (
            <div
              key={s.n}
              style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                padding: '40px',
                display: 'grid',
                gridTemplateColumns: '80px 1fr 280px',
                gap: 32,
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 48,
                  fontWeight: 500,
                  color: 'var(--lime)',
                  letterSpacing: '-0.03em',
                  lineHeight: 0.9,
                }}
              >
                {s.n}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 36,
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    marginBottom: 16,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ color: 'var(--fg-dim)', fontSize: 16, lineHeight: 1.5, marginBottom: 24, maxWidth: 600 }}>
                  {s.desc}
                </p>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--fg-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: 12,
                  }}
                >
                  V cene
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px 24px',
                    maxWidth: 600,
                  }}
                >
                  {s.includes.map((i) => (
                    <li key={i} style={{ fontSize: 14, color: 'var(--fg-dim)', paddingLeft: 16, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--lime)' }}>→</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  paddingLeft: 24,
                  borderLeft: '1px solid var(--border)',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--fg-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: 6,
                    }}
                  >
                    Cena
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 24,
                      fontWeight: 500,
                      color: 'var(--lime)',
                    }}
                  >
                    {s.price}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--fg-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: 6,
                    }}
                  >
                    Trvanie
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500 }}>{s.dur}</div>
                </div>
                <Link
                  href="/kontakt"
                  className="btn btn-primary btn-sm"
                  style={{ justifyContent: 'center', marginTop: 8 }}
                >
                  Spýtať sa →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ProcessSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
