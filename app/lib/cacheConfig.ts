/**
 * Configurações de cache e performance headers
 */

export const CACHE_CONFIG = {
  // Recursos estáticos permanentes (nunca mudam)
  static: {
    maxAge: 31536000, // 1 ano
    immutable: true,
  },
  // Assets (CSS, JS, fonts)
  assets: {
    maxAge: 31536000, // 1 ano
    immutable: true,
  },
  // Imagens
  images: {
    maxAge: 2592000, // 30 dias
    immutable: false,
  },
  // HTML pages (revalidate)
  html: {
    maxAge: 3600, // 1 hora
    staleWhileRevalidate: 86400, // 24 horas
  },
  // API responses (curto)
  api: {
    maxAge: 0, // Não cache
    noStore: true,
  },
} as const;

/**
 * Headers para cache
 */
export function getCacheHeaders(type: keyof typeof CACHE_CONFIG) {
  const config = CACHE_CONFIG[type];

  if ("noStore" in config && config.noStore) {
    return {
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
    };
  }

  const parts = [`public`, `max-age=${config.maxAge}`];

  if ("immutable" in config && config.immutable) {
    parts.push("immutable");
  }

  if ("staleWhileRevalidate" in config && config.staleWhileRevalidate) {
    parts.push(`stale-while-revalidate=${config.staleWhileRevalidate}`);
  }

  return {
    "Cache-Control": parts.join(", "),
  };
}

/**
 * Headers de compressão
 */
export const COMPRESSION_HEADERS = {
  "Accept-Encoding": "gzip, deflate, br",
};

/**
 * Headers de segurança adicional para API
 */
export const API_SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Access-Control-Allow-Credentials": "true",
};
