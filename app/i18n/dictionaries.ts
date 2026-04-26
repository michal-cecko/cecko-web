import en from './dict/en';
import sk from './dict/sk';
import cs from './dict/cs';
import type { Locale } from './config';

const dictionaries = { en, sk, cs };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type { Dict } from './dict/en';
