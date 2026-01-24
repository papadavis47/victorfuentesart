import { en } from './en';
import { es } from './es';

export type Locale = 'en' | 'es';

export const defaultLocale: Locale = 'en';

export const locales: Locale[] = ['en', 'es'];

const translations = { en, es } as const;

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: unknown = translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      value = undefined;
      break;
    }
  }

  if (typeof value === 'string') {
    return value;
  }

  if (locale !== defaultLocale) {
    return t(defaultLocale, key);
  }

  return key;
}
