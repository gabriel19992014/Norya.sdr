type RateLimitEntry = {
  count: number;
  resetTime: number;
};

const cache = new Map<string, RateLimitEntry>();

export const RATE_LIMITS = {
  contact: {
    window: 60 * 1000,
    maxRequests: 3,
  },
  general: {
    window: 60 * 1000,
    maxRequests: 100,
  },
} as const;

export function checkRateLimit(
  key: string,
  config: (typeof RATE_LIMITS)[keyof typeof RATE_LIMITS]
): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = cache.get(key);

  if (!entry || now > entry.resetTime) {
    cache.set(key, {
      count: 1,
      resetTime: now + config.window,
    });
    return { allowed: true };
  }

  entry.count++;

  if (entry.count > config.maxRequests) {
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }

  return { allowed: true };
}

export function cleanupExpiredEntries() {
  const now = Date.now();
  for (const [key, entry] of cache) {
    if (now > entry.resetTime) {
      cache.delete(key);
    }
  }
}
