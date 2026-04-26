import type { Metadata } from 'next';
import StackSection from '../components/sections/StackSection';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'O mne',
  description:
    'Michal Čečko — freelance fullstack developer z Ostravy a Žiliny. PHP / Laravel, Vue / Nuxt, mobilné appky. 8+ rokov skúseností.',
  alternates: { canonical: '/o-mne' },
  openGraph: {
    title: 'O mne — Michal Čečko',
    description: 'Freelance fullstack developer z Ostravy a Žiliny. 8+ rokov skúseností.',
    url: '/o-mne',
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 140 }}>
        <div className="section-head">
          <div className="section-head-meta">
            <span className="mono">— O mne</span>
            <span className="section-head-meta-desc">
              Rýchly prehľad — kto som, odkiaľ prichádzam a prečo robím, čo robím.
            </span>
          </div>
          <h1 className="section-title">
            Som <em>Michal.</em>
            <br />
            <span className="section-title-dim">Už 8 rokov píšem kód pre biznis.</span>
          </h1>
        </div>

        <div className="about">
          <div className="about-text">
            <p>
              Som freelance fullstack developer — pôsobím v <strong>Ostrave (CZ)</strong> aj{' '}
              <strong>Žiline (SK)</strong>.
            </p>
            <p>
              Špecializujem sa na <strong>PHP / Laravel</strong> backend, FilamentPHP pre admin rozhrania, a moderný
              JavaScript frontend (Vue, Nuxt, React). Keď treba, pridám k tomu mobilnú aplikáciu — Flutter, Ionic, alebo
              React Native.
            </p>
            <p>
              Baví ma stavať produkty, ktoré skutočne fungujú. Od MVP pre overenie nápadu, cez plnohodnotné SaaS
              platformy, až po interné nástroje, ktoré šetria firmám desiatky hodín mesačne.
            </p>
            <p>
              Pracujem najradšej priamo so zakladateľmi a majiteľmi firiem — ľuďmi, ktorí vedia čo chcú a potrebujú
              parťáka, ktorý im to postaví. Bez korporátnej byrokracie, agilu ako samoúčelu, alebo &quot;ticketov&quot;.
            </p>
            <p>
              Keď nekódujem, pijem podozrivo veľa kávy, makám na workoutovom ihrisku a na Strave postupne
              beatujem svoje vlastné minuloročné rekordy. (klamem, haha)
            </p>
          </div>

          <div className="about-facts">
            <div className="about-fact">
              <span className="about-fact-key">Meno</span>
              <span className="about-fact-val">Michal Čečko</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-key">Lokácia</span>
              <span className="about-fact-val">Ostrava CZ / Žilina SK</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-key">Prvá lajna kódu</span>
              <span className="about-fact-val">2016</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-key">Profesionálne</span>
              <span className="about-fact-val">
                <span className="lime">8+</span> rokov
              </span>
            </div>
            <div className="about-fact">
              <span className="about-fact-key">Status</span>
              <span className="about-fact-val">
                <span className="lime">●</span> K dispozícii
              </span>
            </div>
            <div className="about-fact">
              <span className="about-fact-key">IČO</span>
              <span className="about-fact-val">23260696</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-key">Jazyky</span>
              <span className="about-fact-val">SK · CZ · EN</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-key">Káva</span>
              <span className="about-fact-val">Flat white, bez cukru</span>
            </div>
          </div>
        </div>
      </section>

      <StackSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
