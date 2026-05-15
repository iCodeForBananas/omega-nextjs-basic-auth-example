/**
 * HTTP Basic Authentication Middleware
 *
 * Usage:
 * - Place this file at the project root (next to package.json).
 * - Requests to matched routes will require Basic Auth credentials.
 * - The browser will show a native login prompt on 401 responses.
 *
 * Configuration:
 * - Copy `.env.sample` to `.env.local` and set BASIC_AUTH_USER / BASIC_AUTH_PASS.
 * - Add routes to the `config.matcher` array to protect additional paths.
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const USER = process.env.BASIC_AUTH_USER!;
const PASS = process.env.BASIC_AUTH_PASS!;

function isAuthenticated(req: NextRequest): boolean {
  if (!USER || !PASS) return false;
  const auth = req.headers.get('authorization');
  if (!auth?.startsWith('Basic ')) return false;
  const [user, pass] = atob(auth.slice(6)).split(':');
  return user === USER && pass === PASS;
}

export function middleware(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
