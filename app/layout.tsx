import { headers } from 'next/headers';
import './globals.css';
import { defaultLocale, locales, localeHtmlTag, type Locale } from './i18n/config';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const h = await headers();
  const headerLocale = h.get('x-locale');
  const locale: Locale =
    headerLocale && (locales as readonly string[]).includes(headerLocale)
      ? (headerLocale as Locale)
      : defaultLocale;

  return (
    <html lang={localeHtmlTag[locale]}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Fraunces:ital,wght@1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body data-theme="dark">{children}</body>
    </html>
  );
}
