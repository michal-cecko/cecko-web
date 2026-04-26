import type { MetadataRoute } from 'next';
import { WORKS } from './data';

const SITE_URL = 'https://cecko.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/o-mne`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/sluzby`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/prace`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/cv`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
  for (const w of WORKS) {
    routes.push({
      url: `${SITE_URL}/pripadova-studia/${w.id}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }
  return routes;
}
