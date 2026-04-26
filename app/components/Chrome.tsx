'use client';

import { usePathname } from 'next/navigation';
import Cursor from './Cursor';
import Nav from './Nav';
import Footer from './Footer';
import WorkPreviewFollow from './WorkPreviewFollow';
import type { Locale } from '../i18n/config';
import type { Dict } from '../i18n/dictionaries';

const PATH_TO_KEY: Record<string, string> = {
  '/': 'home',
  '/about': 'about',
  '/services': 'services',
  '/work': 'work',
  '/case-studies': 'work',
  '/contact': 'contact',
  '/cv': 'cv',
};

function stripLocale(pathname: string, locale: Locale): string {
  if (locale === 'en') return pathname || '/';
  const prefix = `/${locale}`;
  if (pathname === prefix) return '/';
  if (pathname.startsWith(prefix + '/')) return pathname.slice(prefix.length);
  return pathname;
}

export default function Chrome({
  children,
  locale,
  t,
}: {
  children: React.ReactNode;
  locale: Locale;
  t: Dict;
}) {
  const fullPath = usePathname() || '/';
  const pathname = stripLocale(fullPath, locale);
  const matchKey = Object.keys(PATH_TO_KEY)
    .sort((a, b) => b.length - a.length)
    .find((p) => pathname === p || pathname.startsWith(p + '/'));
  const active = matchKey ? PATH_TO_KEY[matchKey] : 'home';

  const showWorkPreview = active === 'home' || active === 'work';

  return (
    <>
      <Cursor />
      <Nav active={active} locale={locale} t={t} />
      {showWorkPreview && <WorkPreviewFollow />}
      {children}
      <Footer locale={locale} t={t} />
    </>
  );
}
