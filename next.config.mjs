/** @type {import('next').NextConfig} */
const SLUG_RENAMES = [
  ['o-mne', 'about'],
  ['sluzby', 'services'],
  ['prace', 'work'],
  ['pripadova-studia', 'case-studies'],
  ['kontakt', 'contact'],
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Old Slovak slugs → new English ones (301).
  // Covers default locale (no prefix) and the /sk, /cs prefixes.
  async redirects() {
    const out = [];
    for (const [from, to] of SLUG_RENAMES) {
      // root, default locale (English) — but our content always lived
      // at /[locale]/{slug}, so the only canonical URL space is the
      // unprefixed default + the /sk, /cs prefixed locales.
      out.push({ source: `/${from}`,         destination: `/${to}`,         permanent: true });
      out.push({ source: `/${from}/:path*`,  destination: `/${to}/:path*`,  permanent: true });
      out.push({ source: `/sk/${from}`,        destination: `/sk/${to}`,        permanent: true });
      out.push({ source: `/sk/${from}/:path*`, destination: `/sk/${to}/:path*`, permanent: true });
      out.push({ source: `/cs/${from}`,        destination: `/cs/${to}`,        permanent: true });
      out.push({ source: `/cs/${from}/:path*`, destination: `/cs/${to}/:path*`, permanent: true });
    }
    return out;
  },
};

export default nextConfig;
