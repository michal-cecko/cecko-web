import type { Metadata } from 'next';
import Link from 'next/link';
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

const SERVICES_DETAIL: {
  n: string;
  title: string;
  desc: string;
  price: string;
  dur: string;
  includes: string[];
}[] = [
  {
    n: '01',
    title: 'Prezentačný web',
    desc: 'Jednoduchý prezentačný web alebo landing page s kontaktným formulárom. Rýchly, dobre vyzerajúci. Ideálne pre malé firmy, freelancerov, alebo launch produktu.',
    price: 'od 800 €',
    dur: '1–2 týždne',
    includes: ['Technická špecifikácia', 'UI dizajn', 'HTML + CSS + Alpine.js', 'Kontaktný formulár', 'SEO základy', 'Analytics'],
  },
  {
    n: '02',
    title: 'E-shop (menší)',
    desc: 'Jednoduchý e-shop pre menší sortiment — WordPress/WooCommerce alebo custom Laravel riešenie. Platby, doprava, admin, základné integrácie.',
    price: 'od 2 000 €',
    dur: '2–4 týždne',
    includes: ['Technická špecifikácia', 'UI dizajn', 'Produkty + kategórie', 'Platobná brána', 'Doprava + objednávky', 'Admin panel'],
  },
  {
    n: '03',
    title: 'Webová aplikácia / interný systém',
    desc: 'Custom riešenia na mieru — interné nástroje, admin dashboardy, CRM, klientské portály, weby s admin rozhraním a CMS. Laravel + FilamentPHP backend, moderný frontend.',
    price: 'od 2 500 €',
    dur: '4–12 týždňov',
    includes: ['Technická špecifikácia', 'UX/UI dizajn (ak treba)', 'Laravel backend + DB', 'Admin rozhranie (Filament)', 'Deploy + DevOps', 'Dokumentácia'],
  },
  {
    n: '04',
    title: 'Mobilné aplikácie',
    desc: 'Cross-platform (Flutter, Ionic, React Native) alebo natívne (Swift, Kotlin). App Store + Play Store submission v cene.',
    price: 'od 15 000 €',
    dur: '8–16 týždňov',
    includes: ['Product discovery', 'UI/UX dizajn', 'iOS + Android build', 'Analytics', 'Push notifikácie', 'Store submission'],
  },
  {
    n: '05',
    title: 'UI & UX dizajn',
    desc: 'Weby, aplikácie, logá, branding a vizuálna identita. AI-powered workflow pre rýchle iterácie — od prvých wireframov po produkčný design systém.',
    price: 'od 3 500 €',
    dur: '2–4 týždne',
    includes: ['Brand discovery', 'Logo & vizuálna identita', 'Wireframe', 'Hi-fi Figma mockup', 'Design systém', 'Responzívne layouty', 'Odovzdanie vývojárovi'],
  },
  {
    n: '06',
    title: 'SaaS MVP',
    desc: 'End-to-end produktový launch z technickej stránky — brand, dizajn, web, mobilná appka, platby, hosting. Pre zakladateľov, ktorí už vedia čo chcú postaviť a potrebujú jedného človeka na celú realizáciu.',
    price: 'od 15 000 €',
    dur: '12–24 týždňov',
    includes: ['Technická špecifikácia', 'Brand + vizuálna identita', 'Web + mobilná appka', 'Auth + platby (Stripe)', 'Admin panel', 'Hosting 12 mes.'],
  },
  {
    n: '07',
    title: 'AI integrácie',
    desc: 'Chatboti, RAG systémy, automatizácie. Claude, OpenAI, open-source modely. Prototyp → produkčná integrácia → tréning.',
    price: 'od 2 500 €',
    dur: '1–6 týždňov',
    includes: ['AI objavovanie', 'Prototyp', 'API integrácia', 'Vektorová DB (ak treba)', 'UI pre AI', 'Training & handoff'],
  },
];

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
          {SERVICES_DETAIL.map((s) => (
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
