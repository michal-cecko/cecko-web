import type { Metadata } from 'next';
import WorkList from './WorkList';
import ContactSection from '../components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Práce',
  description:
    'Vybrané projekty od roku 2018: SaaS platformy, weby, mobilné aplikácie. Filtrujte podľa typu — web, mobile, SaaS.',
  alternates: { canonical: '/prace' },
  openGraph: {
    title: 'Práce — Michal Čečko',
    description: 'Vybrané projekty od roku 2018. SaaS, web, mobile.',
    url: '/prace',
  },
};

export default function WorkPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 140 }}>
        <div className="section-head">
          <div className="section-head-meta">
            <span className="mono">— Práce</span>
            <span className="section-head-meta-desc">
              Kompletný zoznam vybraných projektov. Filtrujte podľa typu.
            </span>
          </div>
          <h1 className="section-title">
            Projekty <em>od roku 2018.</em>
          </h1>
        </div>

        <WorkList />
      </section>
      <ContactSection />
    </>
  );
}
