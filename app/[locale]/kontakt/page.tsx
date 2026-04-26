import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import PhoneCard from './PhoneCard';
import { CONTACT } from '../../data';
import { type Locale, locales, defaultLocale } from '../../i18n/config';
import { getDictionary } from '../../i18n/dictionaries';

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = ((locales as readonly string[]).includes(raw) ? raw : defaultLocale) as Locale;
  const t = getDictionary(locale);
  const path = locale === defaultLocale ? '/kontakt' : `/${locale}/kontakt`;
  return {
    title: t.nav.contact,
    description: t.contact.pageMetaDesc,
    alternates: { canonical: path },
    openGraph: {
      title: `${t.nav.contact} — Michal Čečko`,
      description: t.contact.pageMetaDesc,
      url: path,
    },
  };
}

export default async function ContactPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale = ((locales as readonly string[]).includes(raw) ? raw : defaultLocale) as Locale;
  const t = getDictionary(locale);

  return (
    <section className="section" style={{ paddingTop: 140 }}>
      <div className="section-head">
        <div className="section-head-meta">
          <span className="mono">{t.contact.pageMetaLabel}</span>
          <span className="section-head-meta-desc">{t.contact.pageMetaDesc}</span>
        </div>
        <h1 className="section-title">
          {t.contact.pageTitle} <em>{t.contact.pageTitleEm}</em>
        </h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'start' }}>
        <div>
          <ContactForm t={t} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ padding: '18px 22px', background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 14 }}>
            <div className="mono" style={{ marginBottom: 8, color: 'var(--lime)', fontSize: 11 }}>
              {t.contact.capacityLabel}
            </div>
            <p style={{ fontSize: 13, color: 'var(--fg-dim)', lineHeight: 1.5, margin: 0 }}>
              {t.contact.capacityText}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {(
              [
                {
                  label: t.contact.emailLabel,
                  val: CONTACT.email,
                  href: `mailto:${CONTACT.email}`,
                  full: true,
                  external: false,
                },
                {
                  label: t.contact.linkedinLabel,
                  val: CONTACT.linkedinHandle,
                  href: CONTACT.linkedinUrl,
                  external: true,
                },
                {
                  label: t.contact.githubLabel,
                  val: '@michal-cecko',
                  href: 'https://github.com/michal-cecko',
                  external: true,
                },
              ] as { label: string; val: string; href: string; full?: boolean; external: boolean }[]
            ).map((c, i) => (
              <a
                key={i}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
            <PhoneCard t={t} />
          </div>

          <div style={{ padding: '18px 22px', background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 14 }}>
            <div className="mono" style={{ marginBottom: 8, fontSize: 11 }}>
              {t.contact.billingTitle}
            </div>
            <div style={{ fontSize: 13, color: 'var(--fg-dim)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
              {t.contact.billingBody}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
