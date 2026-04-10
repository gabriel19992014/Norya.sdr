import { NextResponse } from "next/server";
import { Resend } from "resend";
import { VALIDATION } from "@/app/lib/constants";
import { getValidatedEnv } from "@/app/lib/env";
import { validateEmail, escapeHtml } from "@/app/lib/validation";
import { checkRateLimit, RATE_LIMITS } from "@/app/lib/rateLimit";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  companyWebsite?: string;
  renderedAt?: number;
};

const NAME_MAX_LENGTH = VALIDATION.NAME_MAX_LENGTH;
const EMAIL_MAX_LENGTH = VALIDATION.EMAIL_MAX_LENGTH;
const MESSAGE_MAX_LENGTH = VALIDATION.MESSAGE_MAX_LENGTH;
const MIN_RENDERED_DELAY_MS = VALIDATION.MIN_RENDERED_DELAY_MS;

const JSON_HEADERS = {
  "Cache-Control": "no-store"
};

const env = getValidatedEnv();
const RESEND_API_KEY = env.RESEND_API_KEY;
const CONTACT_TO_EMAIL = env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL = env.CONTACT_FROM_EMAIL || "NORYA <onboarding@resend.dev>";
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

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

async function sendContactLeadEmail(payload: { name: string; email: string; message: string }) {
  if (!resend || !CONTACT_TO_EMAIL) {
    return { ok: false as const, reason: "email_not_configured" as const };
  }

  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safeMessage = escapeHtml(payload.message).replace(/\n/g, "<br />");

  const { error } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    replyTo: payload.email,
    subject: `Novo lead NORYA - ${payload.name}`,
    text: `Nome: ${payload.name}\nEmail: ${payload.email}\n\nMensagem:\n${payload.message}`,
    html: `<h2>Novo lead via formulario</h2><p><strong>Nome:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Mensagem:</strong><br />${safeMessage}</p>`
  });

  if (error) {
    console.error("NORYA contact email send error", error);
    return { ok: false as const, reason: "email_provider_error" as const };
  }

  return { ok: true as const };
}

export async function POST(request: Request) {
  try {
    const ip = getIp(request);
    const rateLimitResult = checkRateLimit(ip, RATE_LIMITS.contact);

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: "rate_limited" },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimitResult.retryAfter || 60),
          },
        }
      );
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
      !validateEmail(email) ||
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

    const emailResult = await sendContactLeadEmail({ name, email, message });
    if (!emailResult.ok) {
      return json({ error: emailResult.reason }, 503);
    }

    return json({ ok: true }, 200);
  } catch {
    return json({ error: "internal_error" }, 500);
  }
}
