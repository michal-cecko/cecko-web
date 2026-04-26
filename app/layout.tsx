import type { Metadata } from 'next';
import './globals.css';
import Chrome from './components/Chrome';

const SITE_URL = 'https://cecko.dev';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Michal Čečko — Full-Stack Developer · Remote',
    template: '%s — Michal Čečko',
  },
  description:
    'Freelance fullstack developer. Laravel, Vue, Flutter. Weby, mobilné aplikácie a SaaS produkty od A po Z.',
  applicationName: 'Michal Čečko',
  authors: [{ name: 'Michal Čečko', url: SITE_URL }],
  creator: 'Michal Čečko',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    url: SITE_URL,
    siteName: 'Michal Čečko',
    title: 'Michal Čečko — Full-Stack Developer · Remote',
    description:
      'Freelance fullstack developer. Laravel, Vue, Flutter. Weby, mobilné aplikácie a SaaS produkty od A po Z.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michal Čečko — Full-Stack Developer · Remote',
    description:
      'Freelance fullstack developer. Laravel, Vue, Flutter. Weby, mobilné aplikácie a SaaS produkty od A po Z.',
  },
  icons: {
    icon: '/mark.svg',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Fraunces:ital,wght@1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body data-theme="dark">
        <Chrome>{children}</Chrome>
      </body>
    </html>
  );
}
