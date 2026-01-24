import type { Locale } from './index';
import { defaultLocale } from './index';

export function withLocale(path: string, locale: Locale): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (locale === defaultLocale) {
    return normalizedPath;
  }

  return `/${locale}${normalizedPath}`;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] === 'es') {
    return 'es';
  }

  return defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] === 'es') {
    return '/' + segments.slice(1).join('/') || '/';
  }

  return pathname;
}
