import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { WORKS } from '../../../data';
import ContactSection from '../../../components/sections/ContactSection';
import Reveal from '../../../components/Reveal';
import { type Locale, locales, defaultLocale } from '../../../i18n/config';
import { getDictionary } from '../../../i18n/dictionaries';

export function generateStaticParams() {
  return locales.flatMap((locale) => WORKS.map((w) => ({ locale, slug: w.id })));
}

type Params = { params: Promise<{ locale: string; slug: string }> };

function localizedHref(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = ((locales as readonly string[]).includes(rawLocale) ? rawLocale : defaultLocale) as Locale;
  const project = WORKS.find((w) => w.id === slug);
  const t = getDictionary(locale);
  if (!project) return { title: t.nav.work };
  const path = localizedHref(locale, `/case-studies/${project.id}`);
  const wt = t.works[project.id as keyof typeof t.works];
  return {
    title: wt.title,
    description: `${wt.kind} · ${project.year}. ${wt.challenge.slice(0, 140)}`,
    alternates: { canonical: path },
    openGraph: {
      title: `${wt.title} — ${wt.kind}`,
      description: wt.challenge,
      url: path,
      type: 'article',
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { locale: rawLocale, slug } = await params;
  const locale = ((locales as readonly string[]).includes(rawLocale) ? rawLocale : defaultLocale) as Locale;
  const t = getDictionary(locale);
  const project = WORKS.find((w) => w.id === slug);
  if (!project) notFound();
  const idx = WORKS.findIndex((w) => w.id === project.id);
  const next = WORKS[(idx + 1) % WORKS.length];

  const tw = t.work;
  const wt = t.works[project.id as keyof typeof t.works];
  const nextWt = t.works[next.id as keyof typeof t.works];

  return (
    <>
      <section className="section" style={{ paddingTop: 140 }}>
        <Link
          href={localizedHref(locale, '/work')}
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
          {tw.backToWork}
        </Link>

        <Reveal>
        <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: 40, marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 16, marginBottom: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="chip chip-accent">{project.year}</span>
            <span className="mono">{wt.kind}</span>
            {project.confidential && (
              <span className="chip" style={{ borderColor: 'var(--border-hi)', color: 'var(--fg-muted)' }}>
                {tw.confidential}
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
            {wt.title}
          </h1>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            {project.tags.map((tag) => (
              <span key={tag} className="chip">
                {t.tagLabels[tag] ?? tag}
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
        </Reveal>

        <Reveal delay={120}>
        <div
          style={{
            aspectRatio: '16/9',
            borderRadius: 20,
            background: 'linear-gradient(135deg, #49F0E0, #8b6cce)',
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
            {wt.title}
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
            {tw.placeholderHero}
          </div>
        </div>
        </Reveal>

        <Reveal delay={80}>
        <div className="case-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div>
              <div className="mono" style={{ marginBottom: 12, color: 'var(--lime)' }}>
                {tw.challenge}
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
                {wt.challenge}
              </p>
            </div>
            <div>
              <div className="mono" style={{ marginBottom: 12, color: 'var(--lime)' }}>
                {tw.solution}
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fg-dim)' }}>{wt.solution}</p>
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
              {tw.detailsTitle}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {(
                [
                  [tw.year, project.year],
                  [tw.role, wt.role],
                  [tw.stack, project.tags.map((tag) => t.tagLabels[tag] ?? tag).join(' · ')],
                  [tw.status, project.inProgress ? tw.statusInProgress : project.url ? tw.statusLive : project.confidential ? tw.statusConfidential : tw.statusDone],
                  [tw.web, project.url ? project.url.replace(/^https?:\/\//, '').replace(/\/$/, '') : '—'],
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
                {tw.openWeb}
              </a>
            )}
          </div>
        </div>
        </Reveal>

        <Reveal>
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
            {tw.placeholderShot}
          </div>
        </div>
        </Reveal>

        <Reveal>
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
          <Link href={localizedHref(locale, '/work')} className="btn btn-ghost">
            {tw.backToWork.replace('← ', '← ')}
          </Link>
          <Link href={localizedHref(locale, `/case-studies/${next.id}`)} className="btn btn-ghost">
            {t.caseStudy.nextProject} {nextWt.title} →
          </Link>
          <Link href={localizedHref(locale, '/contact')} className="btn btn-primary">
            {tw.similarProject}
          </Link>
        </div>
        </Reveal>
      </section>
      <ContactSection t={t} />
    </>
  );
}
