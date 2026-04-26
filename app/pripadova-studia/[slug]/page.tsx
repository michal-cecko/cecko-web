import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { WORKS } from '../../data';
import ContactSection from '../../components/sections/ContactSection';

export function generateStaticParams() {
  return WORKS.map((w) => ({ slug: w.id }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = WORKS.find((w) => w.id === slug);
  if (!project) return { title: 'Prípadová štúdia' };
  return {
    title: project.title,
    description: `${project.kind} · ${project.year}. ${project.challenge.slice(0, 140)}`,
    alternates: { canonical: `/pripadova-studia/${project.id}` },
    openGraph: {
      title: `${project.title} — ${project.kind}`,
      description: project.challenge,
      url: `/pripadova-studia/${project.id}`,
      type: 'article',
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = WORKS.find((w) => w.id === slug);
  if (!project) notFound();
  const idx = WORKS.findIndex((w) => w.id === project.id);
  const next = WORKS[(idx + 1) % WORKS.length];

  return (
    <>
      <section className="section" style={{ paddingTop: 140 }}>
        <Link
          href="/prace"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--fg-dim)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: 40,
            display: 'inline-block',
          }}
        >
          ← Späť na práce
        </Link>

        <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: 40, marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 16, marginBottom: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="chip chip-accent">{project.year}</span>
            <span className="mono">{project.kind}</span>
            {project.confidential && (
              <span className="chip" style={{ borderColor: 'var(--border-hi)', color: 'var(--fg-muted)' }}>
                ● Dôverné
              </span>
            )}
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 8vw, 120px)',
              fontWeight: 500,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              marginBottom: 20,
            }}
          >
            {project.title}
          </h1>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            {project.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="chip"
                style={{ borderColor: 'var(--lime)', color: 'var(--lime)', marginLeft: 8 }}
              >
                {project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')} ↗
              </a>
            )}
          </div>
        </div>

        <div
          style={{
            aspectRatio: '16/9',
            borderRadius: 20,
            background: 'linear-gradient(135deg, #C6F432, #8b6cce)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 60,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(60px, 10vw, 180px)',
              fontWeight: 600,
              color: '#0c0d0a',
              letterSpacing: '-0.04em',
              textAlign: 'center',
              padding: '0 20px',
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 24,
              left: 24,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: '#0c0d0a',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            placeholder — screenshot doplním
          </div>
        </div>

        <div
          className="case-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 320px',
            gap: 80,
            alignItems: 'start',
            marginBottom: 80,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div>
              <div className="mono" style={{ marginBottom: 12, color: 'var(--lime)' }}>
                Výzva
              </div>
              <p
                style={{
                  fontSize: 19,
                  lineHeight: 1.5,
                  color: 'var(--fg)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}
              >
                {project.challenge}
              </p>
            </div>
            <div>
              <div className="mono" style={{ marginBottom: 12, color: 'var(--lime)' }}>
                Riešenie
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fg-dim)' }}>{project.solution}</p>
            </div>
          </div>

          <div
            style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: 28,
              position: 'sticky',
              top: 100,
            }}
          >
            <div className="mono" style={{ marginBottom: 16 }}>
              Detaily projektu
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {(
                [
                  ['Rok', project.year],
                  ['Role', project.role],
                  ['Stack', project.tags.join(' · ')],
                  ['Status', project.url ? 'Live' : project.confidential ? 'Dôverné / interné' : 'Dokončené'],
                  ['Web', project.url ? project.url.replace(/^https?:\/\//, '').replace(/\/$/, '') : '—'],
                ] as [string, string][]
              ).map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: 12,
                    borderBottom: '1px dashed var(--border-hi)',
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--fg-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      flexShrink: 0,
                    }}
                  >
                    {k}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 500, textAlign: 'right', wordBreak: 'break-word' }}>{v}</span>
                </div>
              ))}
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginTop: 20, width: '100%', justifyContent: 'center' }}
              >
                Otvoriť web ↗
              </a>
            )}
          </div>
        </div>

        <div
          style={{
            aspectRatio: '16/10',
            borderRadius: 20,
            background:
              'repeating-linear-gradient(45deg, var(--bg-2) 0, var(--bg-2) 12px, var(--bg-3) 12px, var(--bg-3) 24px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 60,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--fg-muted)',
              padding: '10px 18px',
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 999,
            }}
          >
            placeholder — detailný screenshot
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 40,
            borderTop: '1px solid var(--border)',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <Link href="/prace" className="btn btn-ghost">
            ← Všetky práce
          </Link>
          <Link href={`/pripadova-studia/${next.id}`} className="btn btn-ghost">
            Ďalší projekt: {next.title} →
          </Link>
          <Link href="/kontakt" className="btn btn-primary">
            Mám podobný projekt →
          </Link>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
