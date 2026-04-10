import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware para segurança, CORS e rate limiting
 * Executado em edge runtime (muito rápido)
 */

// Store simples para rate limiting (em produção usar Redis)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = {
  window: 60 * 1000, // 1 minuto
  maxRequests: 100, // 100 requisições por minuto por IP
};

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const existing = requestCounts.get(ip);

  if (!existing || now > existing.resetTime) {
    requestCounts.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT.window,
    });
    return false;
  }

  existing.count++;
  if (existing.count > RATE_LIMIT.maxRequests) {
    return true;
  }

  return false;
}

export function middleware(request: NextRequest) {
  // 1. Rate limiting
  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": String(RATE_LIMIT.window / 1000),
      },
    });
  }

  // 2. Security headers
  const response = NextResponse.next();

  // HSTS (HTTPS only)
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains"
  );

  // CSP - Content Security Policy
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net",
      "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
      "img-src 'self' data: https:",
      "font-src 'self' data: https://cdn.jsdelivr.net",
      "connect-src 'self' https:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ")
  );

  // CORS
  response.headers.set(
    "Access-Control-Allow-Origin",
    process.env.NODE_ENV === "development"
      ? "*"
      : "https://www.noryapartners.com"
  );
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  response.headers.set("Access-Control-Max-Age", "86400");

  // Remove server info
  response.headers.delete("server");
  response.headers.delete("x-powered-by");

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
