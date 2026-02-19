import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const hostname = req.headers.get('host');

    // Redirect non-www to www in production
    if (process.env.NODE_ENV === 'production' && hostname === 'mentiscare.nl') {
        const url = req.nextUrl.clone();
        url.hostname = 'www.mentiscare.nl';
        return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
});

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

