import type { Metadata } from 'next';
import PrintButton from './PrintButton';
import { STACK } from '../../data';
import { type Locale, locales, defaultLocale } from '../../i18n/config';
import { getDictionary, type Dict } from '../../i18n/dictionaries';

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = ((locales as readonly string[]).includes(raw) ? raw : defaultLocale) as Locale;
  const t = getDictionary(locale);
  const path = locale === defaultLocale ? '/cv' : `/${locale}/cv`;
  const desc =
    locale === 'en'
      ? 'CV / Resume — Laravel & Vue developer with 8+ years of experience. Backend, frontend, mobile, DevOps.'
      : locale === 'sk'
        ? 'CV / Resume Michala Čečka — Laravel & Vue developer s 8+ rokmi praxe. Backend, frontend, mobile, DevOps.'
        : 'CV / Resume Michala Čečka — Laravel & Vue developer s 8+ lety praxe. Backend, frontend, mobile, DevOps.';
  return {
    title: 'CV',
    description: desc,
    alternates: { canonical: path },
    openGraph: { title: 'CV — Michal Čečko', description: desc, url: path },
  };
}

function CVList({ t, items }: { t: Dict; items: { yr: string; role: string; co: string; desc?: string }[] }) {
  return (
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
  );
}

const sectionH2: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 28,
  fontWeight: 500,
  letterSpacing: '-0.02em',
  marginBottom: 24,
  paddingBottom: 12,
  borderBottom: '1px solid var(--border)',
};

export default async function CVPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale = ((locales as readonly string[]).includes(raw) ? raw : defaultLocale) as Locale;
  const t = getDictionary(locale);
  const tcv = t.cv;

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
            {tcv.metaLabel}
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
            {tcv.name}
          </h1>
          <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-dim)' }}>
            {tcv.titles}
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
            <span>{tcv.location}</span>
            <span>·</span>
            <a href="mailto:ceckomichal@gmail.com">ceckomichal@gmail.com</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/michal-cecko/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <PrintButton label={tcv.downloadPdf} />
      </div>

      <div style={{ marginBottom: 48 }}>
        <h2 style={{ ...sectionH2, marginBottom: 20 }}>{tcv.aboutTitle}</h2>
        <p style={{ fontSize: 16, color: 'var(--fg-dim)', lineHeight: 1.6, maxWidth: 780 }}>{tcv.aboutBody}</p>
      </div>

      <div style={{ marginBottom: 48 }}>
        <h2 style={sectionH2}>{tcv.workTitle}</h2>
        <CVList t={t} items={tcv.work as unknown as { yr: string; role: string; co: string; desc?: string }[]} />
      </div>

      <div style={{ marginBottom: 48 }}>
        <h2 style={sectionH2}>{tcv.educationTitle}</h2>
        <CVList t={t} items={tcv.education as unknown as { yr: string; role: string; co: string; desc?: string }[]} />
      </div>

      <div style={{ marginBottom: 48 }}>
        <h2 style={sectionH2}>{tcv.skillsTitle}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {STACK.map((cat) => {
            const main = cat.items.filter((i) => i.p).map((i) => i.n);
            const extra = cat.items.filter((i) => !i.p).map((i) => i.n);
            return (
              <div key={cat.title} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32, alignItems: 'start' }}>
                <div className="mono" style={{ color: 'var(--lime)' }}>
                  {cat.title}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--fg-muted)', marginBottom: 8 }}>
                      {tcv.skillsMain}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {main.map((skill) => (
                        <span key={skill} className="chip chip-accent">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  {extra.length > 0 && (
                    <div>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--fg-muted)', marginBottom: 8, marginTop: 6 }}>
                        {tcv.skillsExtra}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {extra.map((skill) => (
                          <span key={skill} className="chip">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginBottom: 48 }}>
        <h2 style={sectionH2}>{tcv.softTitle}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {tcv.soft.map(([title, desc]) => (
            <div key={title} style={{ padding: 20, background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 14 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, marginBottom: 8 }}>{title}</div>
              <div style={{ fontSize: 14, color: 'var(--fg-dim)', lineHeight: 1.5 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 48 }}>
        <h2 style={sectionH2}>{tcv.languagesTitle}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {tcv.languages.map(([l, lvl]) => (
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
