import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const TOKEN = 'letmein';

export function middleware(req: NextRequest) {
  if (req.nextUrl.searchParams.get('token') !== TOKEN) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
