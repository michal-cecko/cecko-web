import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Chrome from '../components/Chrome';
import { locales, localeOgTag, type Locale } from '../i18n/config';
import { getDictionary } from '../i18n/dictionaries';

const SITE_URL = 'https://cecko.dev';

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) return {};
  const t = getDictionary(locale as Locale);
  const titleEn = 'Michal Čečko — Full-Stack Developer · Remote';
  const desc =
    locale === 'en'
      ? 'Freelance fullstack developer. Laravel, Vue, Flutter. Websites, mobile apps and SaaS products end-to-end.'
      : locale === 'sk'
        ? 'Freelance fullstack developer. Laravel, Vue, Flutter. Weby, mobilné aplikácie a SaaS produkty od A po Z.'
        : 'Freelance fullstack developer. Laravel, Vue, Flutter. Weby, mobilní aplikace a SaaS produkty od A do Z.';

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: titleEn,
      template: '%s — Michal Čečko',
    },
    description: desc,
    applicationName: 'Michal Čečko',
    authors: [{ name: 'Michal Čečko', url: SITE_URL }],
    creator: 'Michal Čečko',
    alternates: {
      canonical: locale === 'en' ? '/' : `/${locale}`,
      languages: {
        en: '/',
        sk: '/sk',
        cs: '/cs',
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'website',
      locale: localeOgTag[locale as Locale],
      url: locale === 'en' ? SITE_URL : `${SITE_URL}/${locale}`,
      siteName: 'Michal Čečko',
      title: titleEn,
      description: desc,
      alternateLocale: Object.values(localeOgTag).filter((l) => l !== localeOgTag[locale as Locale]),
    },
    twitter: { card: 'summary_large_image', title: titleEn, description: desc },
    icons: { icon: '/mark.svg' },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: Params & { children: React.ReactNode }) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();
  const t = getDictionary(locale as Locale);
  return <Chrome locale={locale as Locale} t={t}>{children}</Chrome>;
}
