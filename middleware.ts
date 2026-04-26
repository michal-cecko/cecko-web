import { NextResponse, type NextRequest } from 'next/server';
import { locales, defaultLocale, type Locale } from './app/i18n/config';

const PUBLIC_FILE = /\.(.*)$/;
const STATIC_PREFIXES = ['/_next', '/api', '/sitemap.xml', '/robots.txt', '/Michal_Cecko_CV.pdf', '/favicon.svg'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    STATIC_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + '/')) ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0] as string | undefined;
  const hasLocale = first && (locales as readonly string[]).includes(first);
  const locale: Locale = hasLocale ? (first as Locale) : defaultLocale;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-locale', locale);
  requestHeaders.set('x-pathname', pathname);

  if (hasLocale) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // Rewrite (not redirect) so the URL stays clean: cecko.dev/services
  // internally serves /en/services content.
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
