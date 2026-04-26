'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, defaultLocale, localeLabel, type Locale } from '../i18n/config';

function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && (locales as readonly string[]).includes(segments[0])) {
    return '/' + segments.slice(1).join('/');
  }
  return pathname || '/';
}

function buildPath(target: Locale, basePath: string): string {
  const cleanBase = basePath === '/' ? '' : basePath;
  if (target === defaultLocale) return cleanBase || '/';
  return `/${target}${cleanBase}`;
}

export default function LangSwitcher({
  className = '',
  locale,
  groupLabel,
}: {
  className?: string;
  locale: Locale;
  groupLabel: string;
}) {
  const pathname = usePathname() || '/';
  const router = useRouter();

  const pick = (v: Locale) => {
    if (v === locale) return;
    const base = stripLocaleFromPath(pathname);
    const next = buildPath(v, base);
    // Persist for client components reading mc_lang (e.g. LocalePhone).
    try {
      localStorage.setItem('mc_lang', v);
    } catch {}
    window.dispatchEvent(new Event('mc:lang'));
    router.push(next);
  };

  return (
    <div className={`lang-switch ${className}`} role="group" aria-label={groupLabel}>
      {locales.map((v) => (
        <button
          key={v}
          type="button"
          className={`lang-opt ${locale === v ? 'is-active' : ''}`}
          onClick={() => pick(v)}
          aria-pressed={locale === v}
        >
          {localeLabel[v]}
        </button>
      ))}
    </div>
  );
}
