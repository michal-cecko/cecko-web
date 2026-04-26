'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import LangSwitcher from './LangSwitcher';
import { defaultLocale, type Locale } from '../i18n/config';
import type { Dict } from '../i18n/dictionaries';

function localizedHref(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  if (path === '/') return `/${locale}`;
  return `/${locale}${path}`;
}

export default function Nav({
  active = 'home',
  locale,
  t,
}: {
  active?: string;
  locale: Locale;
  t: Dict;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    document.body.classList.toggle('nav-overlay-open', open);
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('nav-overlay-open');
    };
  }, [open]);

  const close = () => setOpen(false);

  const links: [string, string, string][] = [
    ['/', 'home', t.nav.home],
    ['/about', 'about', t.nav.about],
    ['/services', 'services', t.nav.services],
    ['/work', 'work', t.nav.work],
    ['/cv', 'cv', t.nav.cv],
    ['/contact', 'contact', t.nav.contact],
  ];

  return (
    <>
      <nav className={`nav ${open ? 'nav-open' : ''}`}>
        <Link href={localizedHref(locale, '/')} className="nav-brand" onClick={close}>
          <span className="nav-name">
            ČEČKO<em>.dev</em>
          </span>
        </Link>
        <ul className="nav-links">
          {links.map(([href, key, label]) => (
            <li key={key}>
              <Link
                href={localizedHref(locale, href)}
                onClick={close}
                className={active === key ? 'active' : ''}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <span className="nav-status">
            <span className="dot-live" /> {t.nav.available}
          </span>
          <LangSwitcher locale={locale} groupLabel={t.nav.langGroup} />
          <Link href={localizedHref(locale, '/contact')} className="nav-cta" onClick={close}>
            {t.nav.cta}
          </Link>
        </div>
        <button
          type="button"
          className="nav-burger"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      {mounted &&
        createPortal(
          <div className={`nav-overlay ${open ? 'is-open' : ''}`} aria-hidden={!open}>
            <ul className="nav-overlay-links">
              {links.map(([href, key, label]) => (
                <li key={key}>
                  <Link
                    href={localizedHref(locale, href)}
                    onClick={close}
                    className={active === key ? 'active' : ''}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="nav-overlay-cta">
                <LangSwitcher className="lang-switch-lg" locale={locale} groupLabel={t.nav.langGroup} />
                <Link href={localizedHref(locale, '/contact')} className="btn btn-ghost" onClick={close}>
                  {t.nav.cta} →
                </Link>
              </li>
            </ul>
          </div>,
          document.body,
        )}
    </>
  );
}
