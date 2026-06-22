import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CANONICAL_HOST = 'smartrenov237.com';
const LEGACY_HOSTS = new Set(['www.smartrenov237.com', 'srs.cm', 'www.srs.cm']);

/** Redirige www et ancien domaine vers l’URL canonique HTTPS (SEO). */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0] ?? '';

  if (LEGACY_HOSTS.has(host)) {
    const url = request.nextUrl.clone();
    url.protocol = 'https';
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
};
