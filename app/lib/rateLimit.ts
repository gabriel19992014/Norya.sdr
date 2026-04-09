/**
 * Rate limiting avançado com Redis ready
 * Usa Map em memória, mas preparado para Redis em produção
 */

type RateLimitEntry = {
  count: number;
  resetTime: number;
};

const cache = new Map<string, RateLimitEntry>();

// Configurações por tipo de endpoint
export const RATE_LIMITS = {
  // API de contato - mais restritivo
  contact: {
    window: 60 * 1000, // 1 minuto
    maxRequests: 3, // 3 requisições por minuto por IP
  },
  // Geral - menos restritivo
  api: {
    window: 60 * 1000,
    maxRequests: 100,
  },
  // Auth endpoints - muito restritivo
  auth: {
    window: 15 * 60 * 1000, // 15 minutos
    maxRequests: 5,
  },
} as const;

/**
 * Valida se está rate limited
 * @returns { allowed: boolean, retryAfter?: number }
 */
export function checkRateLimit(
  key: string,
  config: (typeof RATE_LIMITS)[keyof typeof RATE_LIMITS]
): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = cache.get(key);

  // Primeira requisição ou reset já ocorreu
  if (!entry || now > entry.resetTime) {
    cache.set(key, {
      count: 1,
      resetTime: now + config.window,
    });
    return { allowed: true };
  }

  // Incrementar contador
  entry.count++;

  if (entry.count > config.maxRequests) {
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
    return {
      allowed: false,
      retryAfter,
    };
  }

  return { allowed: true };
}

/**
 * Limpa cache de entradas expiradas (executar periodicamente)
 */
export function cleanupExpiredEntries() {
  const now = Date.now();
  let cleaned = 0;

  for (const [key, entry] of cache.entries()) {
    if (now > entry.resetTime) {
      cache.delete(key);
      cleaned++;
    }
  }

  return cleaned;
}

/**
 * Reset manual de rate limit (admin)
 */
export function resetRateLimit(key: string) {
  cache.delete(key);
}

/**
 * Get stats de rate limiting
 */
export function getRateLimitStats() {
  return {
    totalKeys: cache.size,
    entries: Array.from(cache.entries()).map(([key, entry]) => ({
      key,
      count: entry.count,
      resetIn: Math.max(0, entry.resetTime - Date.now()),
    })),
  };
}

// Cleanup automático a cada 5 minutos
setInterval(() => {
  const cleaned = cleanupExpiredEntries();
  if (process.env.NODE_ENV === "development" && cleaned > 0) {
    console.log(`[RateLimit] Limpou ${cleaned} entradas expiradas`);
  }
}, 5 * 60 * 1000);
