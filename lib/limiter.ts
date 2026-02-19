type RateLimitStore = Map<string, { count: number; expiresAt: number }>;

const parsedRateLimit = new Map<string, { count: number; expiresAt: number }>();

interface RateLimitOptions {
    interval: number; // ms
    uniqueTokenPerInterval: number; // max keys
}

export class RateLimiter {
    private tokenCache: RateLimitStore;
    private interval: number;

    constructor(options: RateLimitOptions) {
        this.tokenCache = parsedRateLimit;
        this.interval = options.interval;
    }

    check(limit: number, token: string): boolean {
        const now = Date.now();
        const tokenCount = this.tokenCache.get(token);

        if (!tokenCount) {
            this.tokenCache.set(token, { count: 1, expiresAt: now + this.interval });
            return true;
        }

        if (now > tokenCount.expiresAt) {
            this.tokenCache.set(token, { count: 1, expiresAt: now + this.interval });
            return true;
        }

        if (tokenCount.count >= limit) {
            return false;
        }

        tokenCount.count += 1;
        return true;
    }
}

// Singleton instance for login attempts
// 5 attempts per 15 minutes per email/IP
export const loginRateLimiter = new RateLimiter({
    interval: 15 * 60 * 1000, // 15 minutes
    uniqueTokenPerInterval: 500,
});
