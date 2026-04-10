import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, cleanupExpiredEntries, RATE_LIMITS } from "@/app/lib/rateLimit";

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}

export function middleware(request: NextRequest) {
  cleanupExpiredEntries();

  const clientIp = getClientIp(request);
  const result = checkRateLimit(`mw:${clientIp}`, RATE_LIMITS.general);
  if (!result.allowed) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: { "Retry-After": String(result.retryAfter || 60) },
    });
  }

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
