import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  companyWebsite?: string;
  renderedAt?: number;
};

const requestHistory = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const NAME_MAX_LENGTH = 80;
const EMAIL_MAX_LENGTH = 160;
const MESSAGE_MAX_LENGTH = 2000;
const MIN_RENDERED_DELAY_MS = 1500;
const JSON_HEADERS = {
  "Cache-Control": "no-store"
};

function json(body: Record<string, string | boolean>, status: number) {
  return NextResponse.json(body, { status, headers: JSON_HEADERS });
}

function getIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const existing = requestHistory.get(ip) || [];
  const recent = existing.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestHistory.set(ip, recent);

  for (const [key, timestamps] of requestHistory.entries()) {
    if (timestamps.some((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS)) {
      continue;
    }

    requestHistory.delete(key);
  }

  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const ip = getIp(request);
    if (isRateLimited(ip)) {
      return json({ error: "rate_limited" }, 429);
    }

    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return json({ error: "invalid_content_type" }, 415);
    }

    const body = (await request.json()) as Partial<ContactPayload>;

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const message = String(body.message || "").trim();
    const companyWebsite = String(body.companyWebsite || "").trim();
    const renderedAt = Number(body.renderedAt || 0);

    if (companyWebsite) {
      return json({ ok: true }, 200);
    }

    const sentTooFast = !renderedAt || Date.now() - renderedAt < MIN_RENDERED_DELAY_MS;
    if (sentTooFast) {
      return json({ error: "invalid_payload" }, 400);
    }

    const isInvalidSize =
      name.length > NAME_MAX_LENGTH ||
      email.length > EMAIL_MAX_LENGTH ||
      message.length > MESSAGE_MAX_LENGTH;

    if (
      !name ||
      !email ||
      !message ||
      !Number.isFinite(renderedAt) ||
      !isValidEmail(email) ||
      isInvalidSize
    ) {
      return json({ error: "invalid_payload" }, 400);
    }

    console.info("NORYA contact lead", {
      name,
      email,
      message,
      receivedAt: new Date().toISOString()
    });

    return json({ ok: true }, 200);
  } catch {
    return json({ error: "internal_error" }, 500);
  }
}
