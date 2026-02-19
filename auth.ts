import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { loginRateLimiter } from '@/lib/limiter';

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;

                    // Security: Rate Limit check
                    // We key by email to prevent brute-forcing a specific account. 
                    // ideally we also key by IP, but IP is hard to get reliably here without request context modifications
                    const isAllowed = loginRateLimiter.check(5, email);
                    if (!isAllowed) {
                        return null; // Or throw error if we want to show specific message
                    }

                    const user = await db.select().from(users).where(eq(users.email, email)).get();
                    if (!user) return null;

                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    if (passwordsMatch) return user;
                }

                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
});
