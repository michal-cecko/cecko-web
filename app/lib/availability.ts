import type { Locale } from '../i18n/config';

const INTL_LOCALES: Record<Locale, string> = { en: 'en-US', sk: 'sk-SK', cs: 'cs-CZ' };

/** Label for the month following today, e.g. "June 2026" / "Júl 2026". */
export function nextMonthLabel(locale: Locale): string {
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const formatted = new Intl.DateTimeFormat(INTL_LOCALES[locale], { month: 'long', year: 'numeric' }).format(next);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
