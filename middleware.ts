import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const host = req.headers.get('host') || '';
    const hostname = host.split(':')[0];

    // 1. WWW Redirect
    if (process.env.NODE_ENV === 'production' && hostname === 'mentiscare.nl') {
        return NextResponse.redirect(`https://www.mentiscare.nl${nextUrl.pathname}${nextUrl.search}`, 301);
    }

    // 2. Auth Protection
    const isLoggedIn = !!req.auth;
    const isOnAdmin = nextUrl.pathname.startsWith('/admin');
    const isOnLogin = nextUrl.pathname.startsWith('/admin/login');

    if (isOnAdmin && !isOnLogin && !isLoggedIn) {
        return NextResponse.redirect(new URL('/admin/login', nextUrl));
    }

    return NextResponse.next();
});

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

