import type { Metadata } from 'next';
import PrintButton from './PrintButton';

export const metadata: Metadata = {
  title: 'CV',
  description:
    'CV / Resume Michala Čečka — Laravel & Vue developer s 8+ rokmi praxe. Backend, frontend, mobile, DevOps.',
  alternates: { canonical: '/cv' },
  openGraph: {
    title: 'CV — Michal Čečko',
    description: 'CV / Resume — Laravel & Vue developer s 8+ rokmi praxe.',
    url: '/cv',
  },
};

function CVSection({
  title,
  items,
}: {
  title: string;
  items: { yr: string; role: string; co: string; desc?: string }[];
}) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          marginBottom: 24,
          paddingBottom: 12,
          borderBottom: '1px solid var(--border)',
        }}
      >
        {title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32 }}>
            <div>
              <div className="mono" style={{ color: 'var(--lime)' }}>
                {it.yr}
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, letterSpacing: '-0.01em' }}>
                {it.role}
              </h3>
              <div className="mono" style={{ marginTop: 4 }}>
                {it.co}
              </div>
              {it.desc && (
                <p style={{ fontSize: 15, color: 'var(--fg-dim)', lineHeight: 1.5, marginTop: 10, maxWidth: 640 }}>
                  {it.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CVPage() {
  return (
    <section className="section" style={{ paddingTop: 140, maxWidth: 1000 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          marginBottom: 60,
          paddingBottom: 32,
          borderBottom: '1px solid var(--border)',
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        <div>
          <span className="mono" style={{ color: 'var(--lime)' }}>
            — CV / Resume
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              marginTop: 12,
            }}
          >
            Michal Čečko
          </h1>
          <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-dim)' }}>
            Fullstack Vue + Laravel Dev · Fullstack Livewire + Laravel Dev · Backend Dev
          </div>
          <div
            style={{
              marginTop: 16,
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap',
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--fg-dim)',
            }}
          >
            <span>Žilina, SK / Ostrava, CZ</span>
            <span>·</span>
            <a href="mailto:michal.cecko@gmail.com">michal.cecko@gmail.com</a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/michal-%C4%8De%C4%8Dko-338892204"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <PrintButton />
      </div>

      <div style={{ marginBottom: 48 }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            marginBottom: 20,
            paddingBottom: 12,
            borderBottom: '1px solid var(--border)',
          }}
        >
          O mne
        </h2>
        <p style={{ fontSize: 16, color: 'var(--fg-dim)', lineHeight: 1.6, maxWidth: 780 }}>
          Som zapálený Laravel developer a team leader so solídnou skúsenosťou s vedením projektov od prvotného konceptu
          až po finálny deploy. Sústredím sa na čistý, udržiavateľný kód a hladkú spoluprácu v tíme. Hlavná silná
          stránka je Laravel, ale rád pracujem aj s modernými JavaScript frameworkami ako Vue.js a Nuxt.js. Cením si
          jasnú komunikáciu, čestnosť a spoľahlivosť. Mimo techniky som aktívny v prírode, športujem a trávim čas s
          rodinou a priateľmi.
        </p>
      </div>

      <CVSection
        title="Pracovné skúsenosti"
        items={[
          {
            yr: '01/2023 — dnes',
            role: 'Laravel Developer',
            co: 'Madelo · Ostrava, CZ',
            desc:
              'Vediem backend vývoj a som product owner viacerých úspešných projektov. Navrhujem, vyvíjam a testujem robustné API. Úzko spolupracujem s frontend tímami a dizajnérmi pri integrácii UI a API. Pravidelne komunikujem s klientami a riešim ich požiadavky.',
          },
          {
            yr: '04/2022 — 04/2023',
            role: 'WordPress Developer',
            co: 'Madelo · Žilina, SK',
            desc: 'Custom WordPress témy, práca s ACF, WPML, WooCommerce. Vývoj custom pluginov.',
          },
          {
            yr: '03/2019 — dnes',
            role: 'Freelance Developer',
            co: 'Self-Employed · Žilina, SK',
            desc:
              'Riadim kompletný životný cyklus projektov — od špecifikácie cez dizajn, frontend, backend až po deployment. Doručujem spoľahlivé a user-friendly weby a aplikácie pre rôznych klientov.',
          },
        ]}
      />

      <CVSection
        title="Vzdelanie"
        items={[
          { yr: '09/2020 — 03/2022', role: 'Informačné technológie', co: 'Žilinská univerzita v Žiline' },
          {
            yr: '09/2016 — 05/2020',
            role: 'Informačné technológie',
            co: 'Stredná priemyselná škola informačných technológií',
          },
        ]}
      />

      <div style={{ marginBottom: 48 }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            marginBottom: 24,
            paddingBottom: 12,
            borderBottom: '1px solid var(--border)',
          }}
        >
          Technické zručnosti
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {(
            [
              {
                area: 'Backend',
                main: ['Laravel', 'PHP', 'WordPress', 'REST API Design', 'TDD', 'PHPUnit', 'Pest', 'Livewire', 'FilamentPHP', 'Laravel 1st party packages'],
                extra: ['Nette', 'Symfony', 'Java', 'C', 'Python'],
              },
              { area: 'Data', main: ['MySQL / MariaDB', 'PostgreSQL', 'Redis'], extra: [] },
              {
                area: 'Frontend',
                main: ['JavaScript', 'Vue 3', 'Nuxt 4', 'Bootstrap 5', 'TailwindCSS', 'Inertia.js', 'jQuery', 'PrimeVue'],
                extra: ['React', 'Vue Query', 'Pinia'],
              },
              { area: 'Hybrid Mobile', main: ['Ionic (Vue 3 + Capacitor.js)'], extra: ['React', 'Android', 'Kotlin'] },
              {
                area: 'DevOps + Sysadmin',
                main: ['Docker', 'Traefik', 'Nginx', 'Apache', 'Linux', 'Bash', 'Digital Ocean (Droplets, S3)', 'Sentry'],
                extra: ['Grafana', 'Prometheus', 'Jenkins', 'Portainer'],
              },
            ] as { area: string; main: string[]; extra: string[] }[]
          ).map((g) => (
            <div key={g.area} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32, alignItems: 'start' }}>
              <div className="mono" style={{ color: 'var(--lime)' }}>
                {g.area}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--fg-muted)', marginBottom: 8 }}>
                    Hlavné
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {g.main.map((t) => (
                      <span key={t} className="chip chip-accent">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {g.extra.length > 0 && (
                  <div>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--fg-muted)', marginBottom: 8, marginTop: 6 }}>
                      Skúsenosť s
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {g.extra.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 48 }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            marginBottom: 24,
            paddingBottom: 12,
            borderBottom: '1px solid var(--border)',
          }}
        >
          Soft skills
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {(
            [
              ['Leadership & spolupráca', 'Skúsenosť s vedením tímov, podpora spolupráce a dovedenie projektov k úspechu.'],
              ['Project management', 'Plánovanie, organizácia a efektívne doručenie projektov.'],
              ['Transparentná komunikácia', 'Vždy otvorený a úprimný — ak niečo neviem, priznám to a zaviažem sa nájsť riešenie.'],
              ['Lifelong learner', 'Zvedavý a proaktívny — neznáme témy beriem ako príležitosť na rast.'],
              ['Tímový hráč', 'Človek, s ktorým si vieš pokecať pri pive, na tréningu, alebo na túre — dobré projekty začínajú dobrými vzťahmi.'],
            ] as [string, string][]
          ).map(([t, d]) => (
            <div key={t} style={{ padding: 20, background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 14 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, marginBottom: 8 }}>{t}</div>
              <div style={{ fontSize: 14, color: 'var(--fg-dim)', lineHeight: 1.5 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 48 }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            marginBottom: 24,
            paddingBottom: 12,
            borderBottom: '1px solid var(--border)',
          }}
        >
          Jazyky
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {(
            [
              ['Slovenčina', 'Rodný jazyk'],
              ['Čeština', 'Plynule'],
              ['Angličtina', 'Pokročilá'],
              ['Nemčina', 'Základy (B1)'],
            ] as [string, string][]
          ).map(([l, lvl]) => (
            <div key={l} style={{ padding: 20, background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 14 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500 }}>{l}</div>
              <div className="mono" style={{ marginTop: 8 }}>
                {lvl}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
