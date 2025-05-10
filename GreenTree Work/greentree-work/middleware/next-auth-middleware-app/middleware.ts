import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true'

  const isProtectedRoute = !request.nextUrl.pathname.startsWith('/login') &&
                           !request.nextUrl.pathname.startsWith('/_next')

  if (!isAuthenticated && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/protected/:path*'],
}
