import { isAuthenticated } from './actions/helpers.actions'
import { NextResponse } from 'next/server';

export default async function middleware(req) {
  
    const isAuth  = await isAuthenticated();
    const isAuthPage = req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/signup');
    
    if(isAuthPage) {
      if(isAuth) {

        return NextResponse.redirect(new URL('/dashboard',req.url))
      }
      return null;
    }
    if(!isAuth) {
      return NextResponse.redirect(new URL('/login',req.url));
    }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}