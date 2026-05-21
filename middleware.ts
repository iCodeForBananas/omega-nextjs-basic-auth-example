import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const session = req.cookies.get('session')?.value
  if (session !== 'authenticated') {
    return NextResponse.redirect(new URL('/', req.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
