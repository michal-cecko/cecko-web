export const CONTACT = {
  email: 'ceckomichal@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/michal-cecko/',
  linkedinHandle: '@michalcecko',
  phones: {
    sk: { display: '+421 911 266 631', href: 'tel:+421911266631' },
    en: { display: '+421 911 266 631', href: 'tel:+421911266631' },
    cz: { display: '+420 776 310 843', href: 'tel:+420776310843' },
  },
} as const;

export type Lang = keyof typeof CONTACT.phones;

export type WorkFilter = 'web' | 'mobile' | 'saas';
export type Service = { n: string; span: string; workFilter?: WorkFilter };

export const SERVICES: Service[] = [
  { n: '01', span: 'span-6', workFilter: 'web' },
  { n: '02', span: 'span-6', workFilter: 'web' },
  { n: '03', span: 'span-4', workFilter: 'saas' },
  { n: '04', span: 'span-4', workFilter: 'mobile' },
  { n: '05', span: 'span-4' },
  { n: '06', span: 'span-6', workFilter: 'saas' },
  { n: '07', span: 'span-6' },
];

export type StackItem = { n: string; p?: boolean };
export type StackCategory = { title: string; items: StackItem[] };

export const STACK: StackCategory[] = [
  {
    title: 'Backend & DB',
    items: [
      { n: 'PHP', p: true },
      { n: 'Laravel', p: true },
      { n: 'Livewire', p: true },
      { n: 'FilamentPHP', p: true },
      { n: 'REST API Design', p: true },
      { n: 'PHPUnit', p: true },
      { n: 'Pest', p: true },
      { n: 'Node.js', p: true },
      { n: 'WordPress', p: true },
      { n: 'MySQL / Postgres', p: true },
      { n: 'Redis', p: true },
      { n: 'Go' },
      { n: 'Python' },
      { n: 'WebSockets', p: true },
      { n: 'Custom témy / WooCommerce / ACF', p: true },
      { n: 'Nette' },
      { n: 'Symfony' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { n: 'JavaScript', p: true },
      { n: 'Vue.js', p: true },
      { n: 'Nuxt.js', p: true },
      { n: 'React', p: true },
      { n: 'Next.js', p: true },
      { n: 'Tailwind CSS', p: true },
      { n: 'Inertia.js', p: true },
      { n: 'Alpine.js', p: true },
      { n: 'Vue Query' },
      { n: 'Pinia' },
    ],
  },
  {
    title: 'Mobile',
    items: [
      { n: 'Flutter', p: true },
      { n: 'Ionic (Vue 3 + Capacitor.js)', p: true },
      { n: 'React Native', p: true },
      { n: 'Swift (iOS)' },
      { n: 'Kotlin (Android)' },
    ],
  },
  {
    title: 'Design & Tooling',
    items: [
      { n: 'Figma', p: true },
      { n: 'Affinity', p: true },
      { n: 'Git', p: true },
      { n: 'Docker', p: true },
      { n: 'Traefik', p: true },
      { n: 'Nginx', p: true },
      { n: 'Linux', p: true },
      { n: 'Bash', p: true },
      { n: 'Digital Ocean (Droplets, S3)', p: true },
      { n: 'Hetzner', p: true },
      { n: 'Sentry', p: true },
      { n: 'Grafana' },
      { n: 'Prometheus' },
      { n: 'Jenkins' },
      { n: 'Portainer' },
    ],
  },
];

/** Structural work data — id, year, tags, url, confidentiality.
 *  Localized text fields (title, kind, role, challenge, solution)
 *  live in app/i18n/dict/{en,sk,cs}.ts under `works[id]`. */
export type Work = {
  id: string;
  year: string;
  tags: string[];
  url: string | null;
  confidential: boolean;
};

export const WORKS: Work[] = [
  { id: 'bcz',           year: '2026', tags: ['Laravel', 'Filament', 'Alpine'], url: 'https://bcz-club.com',                  confidential: false },
  { id: 'friendlyfyzio', year: '2026', tags: ['Laravel', 'Filament', 'Alpine'], url: 'https://www.friendlyfyzio.cz',          confidential: false },
  { id: 'idealnedvere',  year: '2025', tags: ['Nuxt', 'Dizajn'],                url: 'https://idealnedvere.sk',               confidential: false },
  { id: 'faktury',       year: '2025', tags: ['Laravel', 'Filament'],          url: null,                                    confidential: true  },
  { id: 'songbook',      year: '2024', tags: ['Laravel', 'Filament', 'Mobile'],url: null,                                    confidential: true  },
  { id: 'streetworkout', year: '2023', tags: ['WordPress', 'Dizajn'],          url: 'https://www.streetworkoutkysuce.sk',    confidential: false },
  { id: 'oblock',        year: '2023', tags: ['HTML', 'CSS'],                  url: null,                                    confidential: false },
  { id: '3mbarbers',     year: '2022', tags: ['WordPress', 'Vue', 'ACF'],      url: null,                                    confidential: false },
  { id: 'mensvenue',     year: '2022', tags: ['Nuxt', 'Dizajn'],               url: 'https://mensvenue.sk',                  confidential: false },
];

export type WorkId = (typeof WORKS)[number]['id'];



