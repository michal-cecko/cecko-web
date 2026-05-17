# cecko.dev

Personal portfolio site for **Michal Čečko** — freelance full-stack developer based between Ostrava (CZ) and Žilina (SK).

Live at **[cecko.dev](https://cecko.dev)**.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- Custom **i18n** middleware → routes under `/[locale]/` (CZ/SK/EN)
- **Lenis** for smooth scroll
- **Resend** for the contact form
- **JSON-LD** structured data (`Person`, `WebSite`) for SEO
- Dark theme; system fonts: Inter, Inter Tight, JetBrains Mono, Fraunces

## Layout

```
app/
├── [locale]/                  # locale-prefixed pages
│   ├── page.tsx               # home (hero, work, services, testimonials, FAQ, contact)
│   ├── about/
│   ├── case-studies/
│   ├── contact/
│   ├── cv/                    # rendered CV pages — also exported to PDF
│   ├── services/
│   └── work/
├── components/
│   ├── sections/              # Hero, Services, Work, Process, Testimonials, FAQ, Contact, Marquee
│   ├── Chrome.tsx             # site shell
│   ├── Cursor.tsx             # custom cursor
│   ├── SmoothScroll.tsx       # Lenis wrapper
│   └── …
├── api/                       # route handlers (contact form via Resend)
├── i18n/                      # dictionaries + middleware config
├── layout.tsx                 # root layout, theme, font preconnect
├── robots.ts                  # generated /robots.txt
└── sitemap.ts                 # generated /sitemap.xml
```

## Local dev

```bash
npm install                    # or bun install
npm run dev                    # http://localhost:3000
```

Required env (`.env.local`):

```
RESEND_API_KEY=...             # contact form
```

## CV PDF export

```bash
npm run generate-pdfs          # writes PDF versions of /cv into public/
```

Uses a headless render of the live CV routes — keeps the design source-of-truth in the same React components.

## Deploy

Containerised — `Dockerfile` + `docker-compose.yml` included. Deployed to a Dokploy host. The `health/` route returns `{ok:true}` for upstream health checks.

## License

[MIT](LICENSE) © Michal Čečko
