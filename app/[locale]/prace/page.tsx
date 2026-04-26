import type { Metadata } from 'next';
import WorkList from './WorkList';
import ContactSection from '../../components/sections/ContactSection';
import { type Locale, locales, defaultLocale } from '../../i18n/config';
import { getDictionary } from '../../i18n/dictionaries';

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = ((locales as readonly string[]).includes(raw) ? raw : defaultLocale) as Locale;
  const t = getDictionary(locale);
  const path = locale === defaultLocale ? '/prace' : `/${locale}/prace`;
  return {
    title: t.nav.work,
    description: t.work.pageMetaDesc,
    alternates: { canonical: path },
    openGraph: {
      title: `${t.nav.work} — Michal Čečko`,
      description: t.work.pageMetaDesc,
      url: path,
    },
  };
}

export default async function WorkPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale = ((locales as readonly string[]).includes(raw) ? raw : defaultLocale) as Locale;
  const t = getDictionary(locale);

  return (
    <>
      <section className="section" style={{ paddingTop: 140 }}>
        <div className="section-head">
          <div className="section-head-meta">
            <span className="mono">{t.work.pageMetaLabel}</span>
            <span className="section-head-meta-desc">{t.work.pageMetaDesc}</span>
          </div>
          <h1 className="section-title">
            {t.work.pageTitle} <em>{t.work.pageTitleEm}</em>
          </h1>
        </div>

        <WorkList locale={locale} t={t} />
      </section>
      <ContactSection t={t} />
    </>
  );
}
