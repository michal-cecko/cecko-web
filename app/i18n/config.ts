export const locales = ['en', 'sk', 'cs'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** UI label per locale (what the LangSwitcher shows) */
export const localeLabel: Record<Locale, string> = {
  en: 'EN',
  sk: 'SK',
  cs: 'CZ',
};

/** ISO/regional tag for <html lang> + hreflang */
export const localeHtmlTag: Record<Locale, string> = {
  en: 'en',
  sk: 'sk-SK',
  cs: 'cs-CZ',
};

/** Open Graph locale code */
export const localeOgTag: Record<Locale, string> = {
  en: 'en_US',
  sk: 'sk_SK',
  cs: 'cs_CZ',
};
