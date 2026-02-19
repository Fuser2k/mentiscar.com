import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const host = req.headers.get('host') || '';
    const hostname = host.split(':')[0];

    // Redirect non-www to www in production
    if (process.env.NODE_ENV === 'production' && hostname === 'mentiscare.nl') {
        const url = req.nextUrl.clone();
        url.hostname = 'www.mentiscare.nl';
        url.port = ''; // Clear port if present
        return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
});

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

