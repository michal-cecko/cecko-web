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

export type Service = {
  n: string;
  title: string;
  desc: string;
  price: string;
  dur: string;
  includes: string[];
  span: string;
};

export const SERVICES: Service[] = [
  {
    n: '01',
    title: 'Prezentačný web',
    desc: 'Jednoduchý prezentačný web alebo landing page s kontaktným formulárom. Rýchly, dobre vyzerajúci. Ideálne pre malé firmy, freelancerov, alebo launch produktu.',
    price: 'od 800 €',
    dur: '1–2 týždne',
    includes: ['Technická špecifikácia', 'UI dizajn', 'HTML + CSS + Alpine.js', 'Kontaktný formulár', 'SEO základy', 'Analytics'],
    span: 'span-6',
  },
  {
    n: '02',
    title: 'E-shop (menší)',
    desc: 'Jednoduchý e-shop pre menší sortiment — WordPress/WooCommerce alebo custom Laravel riešenie. Platby, doprava, admin, základné integrácie.',
    price: 'od 2 000 €',
    dur: '2–4 týždne',
    includes: ['Technická špecifikácia', 'UI dizajn', 'Produkty + kategórie', 'Platobná brána', 'Doprava + objednávky', 'Admin panel'],
    span: 'span-6',
  },
  {
    n: '03',
    title: 'Webová aplikácia / interný systém',
    desc: 'Custom riešenia na mieru — interné nástroje, admin dashboardy, CRM, klientské portály, weby s admin rozhraním a CMS. Laravel + FilamentPHP backend, moderný frontend.',
    price: 'od 2 500 €',
    dur: '4–12 týždňov',
    includes: ['Technická špecifikácia', 'UX/UI dizajn (ak treba)', 'Laravel backend + DB', 'Admin rozhranie (Filament)', 'Deploy + DevOps', 'Dokumentácia'],
    span: 'span-4',
  },
  {
    n: '04',
    title: 'Mobilné aplikácie',
    desc: 'Cross-platform (Flutter, Ionic, React Native) alebo natívne (Swift, Kotlin). App Store + Play Store submission v cene.',
    price: 'od 1 500 €',
    dur: '2–6 týždňov',
    includes: ['Product discovery', 'UI/UX dizajn', 'iOS + Android build', 'Analytics', 'Push notifikácie', 'Store submission'],
    span: 'span-4',
  },
  {
    n: '05',
    title: 'UI & UX dizajn',
    desc: 'Weby, aplikácie, logá, branding a vizuálna identita. AI-powered workflow pre rýchle iterácie — od prvých wireframov po produkčný design systém.',
    price: 'od 1 000 €',
    dur: '2–4 týždne',
    includes: ['Brand discovery', 'Logo & vizuálna identita', 'Wireframe', 'Hi-fi Figma mockup', 'Design systém', 'Responzívne layouty', 'Odovzdanie vývojárovi'],
    span: 'span-4',
  },
  {
    n: '06',
    title: 'SaaS MVP',
    desc: 'End-to-end produktový launch z technickej stránky — brand, dizajn, web, mobilná appka, platby, hosting. Pre zakladateľov, ktorí už vedia čo chcú postaviť a potrebujú jedného človeka na celú realizáciu.',
    price: 'od 3 500 €',
    dur: '4–8 týždňov',
    includes: ['Technická špecifikácia', 'Brand + vizuálna identita', 'Web + mobilná appka', 'Auth + platby (Stripe)', 'Admin panel', 'Hosting 12 mes.'],
    span: 'span-6',
  },
  {
    n: '07',
    title: 'AI integrácie',
    desc: 'Chatboti, automatizácie. Claude, OpenAI, open-source modely. Prototyp → produkčná integrácia → tréning.',
    price: 'podľa špecifikácie',
    dur: '1–6 týždňov',
    includes: ['AI objavovanie', 'Prototyp', 'API integrácia', 'Vektorová DB (ak treba)', 'UI pre AI', 'Training & handoff'],
    span: 'span-6',
  },
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

export type ProcessStep = { n: string; title: string; dur: string; desc: string; outputs: string[] };

export const PROCESS: ProcessStep[] = [
  { n: '01', title: 'Prvý kontakt', dur: 'Email / telefón', desc: 'Napíšete alebo zavoláte. V mailu popíšete ľudskou rečou, čo potrebujete — žiadna technická reč, žiadne požiadavky na formu. Stačí ak viem o čom to je.', outputs: ['Email / call', 'Raw zadanie', 'Bez formátu'] },
  { n: '02', title: 'Môj pohľad & odhad', dur: '2–4 dni', desc: 'Spravím si na projekt svoj pohľad — netechnickú špecifikáciu v ľudskej reči, priložím referencie a odkazy na podobné práce, a hrubý cenový odhad. Aby ste vedeli do čoho idete.', outputs: ['Netechnická špecifikácia', 'Referencie', 'Hrubý odhad ceny'] },
  { n: '03', title: 'Detailná špecifikácia', dur: '1–2 týždne', desc: 'Ak vám to vyhovuje, pripravím detailnú, technickejšiu špecku. Toto je alfa a omega — presne opisuje čo bude odovzdané. Plus timeline, míľniky, a pri väčších projektoch rozdelenie na sprinty.', outputs: ['Detailná špecifikácia', 'Timeline & míľniky', 'Finálna cena'] },
  { n: '04', title: 'Vývoj & odovzdanie', dur: '2–16 týždňov', desc: 'Väčšie appky idú v sprintoch — priebežne vidíte progress na stagingu. Menšie appky uvidíte naraz, keď sú hotové — odovzdám na kontrolu na staging verzii, opravím pripomienky, spustíme do produkcie.', outputs: ['Live staging verzia', 'Kontrola & pripomienky', 'Po kontrole odovzdanie do produkcie'] },
];

export type Testimonial = { quote: string; name: string; role: string; init: string };

export const TESTIMONIALS: Testimonial[] = [
  { quote: 'Michal dodal presne to, čo sme potrebovali. Komunikácia je jasná, termíny dodržané, kvalita kódu prvotriedna. Odporúčam.', name: 'Peter Kováč', role: 'CEO, Medico s.r.o.', init: 'PK' },
  { quote: 'Po dvoch neúspešných pokusoch s inými dodávateľmi nám Michal dorobil SaaS platformu za 10 týždňov. Stále s ním spolupracujeme.', name: 'Ivana Horváthová', role: 'Founder, TrainPro', init: 'IH' },
  { quote: 'Najlepšia investícia tohto roka. Mobilná appka sa vyvíjala rýchlo, všetko transparentne, žiadne prekvapenia v cene.', name: 'Martin Blaho', role: 'COO, DeliveryNow', init: 'MB' },
];

export type FAQ = { q: string; a: string };

export const FAQS: FAQ[] = [
  { q: 'Koľko stojí spustenie projektu?', a: 'Záleží od rozsahu. Jednoduchý statický web s kontaktným formulárom viem spraviť od 800 €. Menší jednoduchý e-shop od 2 000 €. Robustnejšie webové a mobilné aplikácie sa vždy naceňujú samostatne — ceny sa menia podľa špecifikácie a pevná cena sa dá stanoviť až po detailnom zadaní. Po úvodnom calle dostanete odhad a harmonogram.' },
  { q: 'Pracujete sám alebo máte tím?', a: 'Sám. Pracujem ako freelancer. Na väčšie projekty, v prípade nízkych kapacít, mám preverených subcontractorov (dizajn, mobile, DevOps), ale vždy je za komunikáciu a kvalitu zodpovedný jeden človek — ja.' },
  { q: 'Prečo PHP / Laravel a nie niečo "modernejšie"?', a: 'Pretože Laravel je najmodernejší 🤯 najrýchlejší spôsob ako dodať robustný backend za málo peňazí. FilamentPHP je pecka, šetrí týždne práce na admin rozhraniach. Kde treba, použijem Node alebo Go — ale 80% biznis projektov sa hodí najlepšie na Laravel.' },
  { q: 'Robíte aj rýchle úpravy existujúcich projektov?', a: 'Áno, mesačný retainer od 400€ (10 hodín práce). Môžete ho použiť na bug fixy, nové featury, konzultácie alebo code review.' },
  { q: 'Ako prebieha spolupráca na diaľku?', a: 'Väčšinu času remote — Slack, Discord, Google Meet. Rád sa osobne stretnem na kickoffe a prípadne pri väčších míľnikoch.' },
  { q: 'Podpisujete NDA?', a: 'Samozrejme, rád podpíšem Vašu NDA pred prvým hovorom ak treba. Všetky projekty štandardne chránim pred zverejnením, kým nedostanem súhlas klienta.' },
  { q: 'Viete spraviť aj dizajn alebo len vývoj?', a: 'Obidvoje. Preferujem keď môžem mať dizajn pod kontrolou — výsledok je konzistentný a rýchlejšie sa programuje. Viem pracovať aj z dodaného Figma filu.' },
  { q: 'Fakturujete s DPH?', a: 'Nie. Mám založenú českú živnosť. Faktúry vystavujem mesačne alebo podľa dohodnutých míľnikov.' },
];
