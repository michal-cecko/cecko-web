import type { MetadataRoute } from 'next';
import { WORKS } from './data';
import { locales, defaultLocale, type Locale } from './i18n/config';

const SITE_URL = 'https://cecko.dev';

const staticPaths = ['/', '/o-mne', '/sluzby', '/prace', '/kontakt', '/cv'];

function urlFor(locale: Locale, path: string): string {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  if (path === '/') return `${SITE_URL}${prefix || '/'}`;
  return `${SITE_URL}${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [];

  for (const path of staticPaths) {
    for (const locale of locales) {
      routes.push({
        url: urlFor(locale, path),
        lastModified: now,
        changeFrequency: path === '/prace' ? 'weekly' : 'monthly',
        priority: path === '/' ? 1 : path === '/sluzby' || path === '/prace' ? 0.9 : 0.7,
      });
    }
  }

  for (const w of WORKS) {
    for (const locale of locales) {
      routes.push({
        url: urlFor(locale, `/pripadova-studia/${w.id}`),
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return routes;
}
