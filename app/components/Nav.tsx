'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import LangSwitcher from './LangSwitcher';

const LINKS: [string, string, string][] = [
  ['/', 'home', 'Domov'],
  ['/o-mne', 'about', 'O mne'],
  ['/sluzby', 'services', 'Služby'],
  ['/prace', 'work', 'Práce'],
  ['/cv', 'cv', 'CV'],
  ['/kontakt', 'contact', 'Kontakt'],
];

export default function Nav({ active = 'home' }: { active?: string }) {
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

  return (
    <>
      <nav className={`nav ${open ? 'nav-open' : ''}`}>
        <Link href="/" className="nav-brand" onClick={close}>
          <span className="nav-name">
            ČEČKO<em>.dev</em>
          </span>
        </Link>
        <ul className="nav-links">
          {LINKS.map(([href, key, label]) => (
            <li key={key}>
              <Link href={href} onClick={close} className={active === key ? 'active' : ''}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <span className="nav-status">
            <span className="dot-live" /> K dispozícii — Jún 2026
          </span>
          <LangSwitcher />
          <Link href="/kontakt" className="nav-cta" onClick={close}>
            Napíšte mi
          </Link>
        </div>
        <button
          type="button"
          className="nav-burger"
          aria-label={open ? 'Zavrieť menu' : 'Otvoriť menu'}
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
              {LINKS.map(([href, key, label]) => (
                <li key={key}>
                  <Link href={href} onClick={close} className={active === key ? 'active' : ''}>
                    {label}
                  </Link>
                </li>
              ))}
              <li className="nav-overlay-cta">
                <LangSwitcher className="lang-switch-lg" />
                <Link href="/kontakt" className="btn btn-ghost" onClick={close}>
                  Napíšte mi →
                </Link>
              </li>
            </ul>
          </div>,
          document.body,
        )}
    </>
  );
}
