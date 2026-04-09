"use client";

import { FormEvent, useState } from "react";

type ContactProps = {
  title: string;
  subtitle: string;
  locale: "pt" | "es";
  whatsappUrl: string;
  trustPoints: string[];
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitLabel: string;
  loadingLabel: string;
  successMessage: string;
  errorMessage: string;
};

export default function Contact({
  title,
  subtitle,
  locale,
  whatsappUrl,
  trustPoints,
  nameLabel,
  emailLabel,
  messageLabel,
  submitLabel,
  loadingLabel,
  successMessage,
  errorMessage
}: ContactProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [renderedAt] = useState(() => Date.now());
  const formAriaLabel = locale === "pt" ? "Formulario de contato" : "Formulario de contacto";

  function getErrorMessage(errorCode?: string) {
    if (errorCode === "rate_limited") {
      return locale === "pt"
        ? "Limite de tentativas atingido. Aguarde alguns minutos e tente novamente."
        : "Se alcanzo el limite de intentos. Espera unos minutos e intentalo nuevamente.";
    }

    if (errorCode === "invalid_payload") {
      return locale === "pt"
        ? "Revise os campos obrigatorios e tente novamente."
        : "Revisa los campos obligatorios e intentalo nuevamente.";
    }

    return errorMessage;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");
    setFeedbackMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      companyWebsite: String(formData.get("companyWebsite") || "").trim(),
      renderedAt
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        setFeedbackMessage(getErrorMessage(data?.error));
        throw new Error(data?.error || "send-error");
      }

      event.currentTarget.reset();
      setStatus("success");
      setFeedbackMessage(successMessage);
    } catch {
      setStatus("error");
      setFeedbackMessage((currentMessage) => currentMessage || errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section-shell pb-16 pt-16" id="contact">
      <div className="grid gap-8 rounded-3xl bg-norya-ink p-8 text-white sm:p-10 md:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold leading-tight">{title}</h2>
          <p className="mt-4 text-white/85">{subtitle}</p>

          <div className="mt-8 space-y-3 text-sm">
            <p>
              <span className="font-semibold">Email:</span> gabriella@noryapartners.com
            </p>
            <p>
              <span className="font-semibold">Telefone:</span> +54 9 341 752-5939
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              data-cta="whatsapp-contact"
              className="inline-flex rounded-full border border-[#25D366] px-4 py-2 font-semibold text-[#7ff2b1] transition hover:bg-[#25D366] hover:text-white"
            >
              {locale === "pt" ? "Falar no WhatsApp" : "Hablar por WhatsApp"}
            </a>
          </div>

          <div className="mt-6 space-y-2">
            {trustPoints.map((point) => (
              <p key={point} className="inline-flex items-center gap-2 text-xs text-white/80">
                <span aria-hidden className="text-norya-sand">
                  ✓
                </span>
                {point}
              </p>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4" aria-label={formAriaLabel} noValidate>
          <fieldset disabled={loading} className="space-y-4 disabled:opacity-90">
          <label className="block text-sm">
            {nameLabel}
            <input
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={80}
              autoComplete="name"
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-norya-sand focus:outline-none"
              placeholder={nameLabel}
            />
          </label>

          <label className="block text-sm">
            {emailLabel}
            <input
              name="email"
              type="email"
              required
              maxLength={160}
              autoComplete="email"
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-norya-sand focus:outline-none"
              placeholder={emailLabel}
            />
          </label>

          <label className="block text-sm">
            {messageLabel}
            <textarea
              name="message"
              rows={5}
              required
              minLength={10}
              maxLength={2000}
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-norya-sand focus:outline-none"
              placeholder={messageLabel}
            />
          </label>

          <input
            name="companyWebsite"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className="inline-flex min-w-48 items-center justify-center rounded-full bg-norya-sand px-6 py-3 font-semibold text-norya-ink transition hover:bg-[#ffc177] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? loadingLabel : submitLabel}
          </button>
          </fieldset>

          {status === "success" ? (
            <p className="text-sm text-green-300" role="status" aria-live="polite">
              {feedbackMessage}
            </p>
          ) : null}
          {status === "error" ? (
            <p className="text-sm text-red-300" role="alert" aria-live="assertive">
              {feedbackMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
