import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const host = req.headers.get('host') || '';
    const hostname = host.split(':')[0];

    // Force redirect to www in production
    if (process.env.NODE_ENV === 'production' && hostname === 'mentiscare.nl') {
        return NextResponse.redirect(`https://www.mentiscare.nl${req.nextUrl.pathname}${req.nextUrl.search}`, 301);
    }

    return NextResponse.next();
});

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

