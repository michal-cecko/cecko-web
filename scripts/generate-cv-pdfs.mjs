#!/usr/bin/env node
// Generates one PDF per locale from the live /cv page.
// Usage:
//   1. start the dev server  →  npm run dev
//   2. in another terminal   →  npm run generate-pdfs
// Outputs:
//   public/cv-en.pdf, public/cv-sk.pdf, public/cv-cs.pdf

import { mkdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import puppeteer from 'puppeteer';

const BASE = process.env.SITE_URL || 'http://127.0.0.1:3000';
const OUT_DIR = resolve(process.cwd(), 'public');

// path → locale (en is default, no prefix)
const TARGETS = [
  { locale: 'en', url: `${BASE}/cv` },
  { locale: 'sk', url: `${BASE}/sk/cv` },
  { locale: 'cs', url: `${BASE}/cs/cv` },
];

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({ headless: true });

try {
  for (const { locale, url } of TARGETS) {
    process.stdout.write(`→ ${locale.toUpperCase()}: ${url}  `);
    const page = await browser.newPage();
    await page.emulateMediaType('print');
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30_000 });
    // Mark body so the print stylesheet can add CV-specific tweaks.
    await page.evaluate(() => document.body.setAttribute('data-cv-print', ''));
    // Make sure web fonts have actually loaded before printing.
    await page.evaluateHandle('document.fonts.ready');

    const out = resolve(OUT_DIR, `cv-${locale}.pdf`);
    await page.pdf({
      path: out,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: false,
      margin: { top: '14mm', right: '14mm', bottom: '14mm', left: '14mm' },
    });
    await page.close();
    process.stdout.write(`✓ ${out.replace(process.cwd() + '/', '')}\n`);
  }
} finally {
  await browser.close();
}

console.log('\nDone. PDFs are in public/. PrintButton hands these out as downloads.');
