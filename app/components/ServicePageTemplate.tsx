import Link from "next/link";
import { COMPANY } from "../lib/company";
import type { ServicePageData } from "../lib/service-pages";

const siteUrl = COMPANY.siteUrl;

type ServicePageTemplateProps = {
  data: ServicePageData;
};

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const faqLdJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbLdJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteUrl}/${data.locale}` },
      { "@type": "ListItem", position: 2, name: data.breadcrumbLabel, item: `${siteUrl}${data.canonicalPath}` },
    ],
  };

  const homeHref = `/${data.locale}`;

  return (
    <main id="top" lang={data.lang} className="section-shell pb-16 pt-14 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqLdJson, breadcrumbLdJson]) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-norya-slate">
        <Link href={homeHref} className="hover:text-norya-ink">Inicio</Link>
        <span className="mx-2">/</span>
        <span className="text-norya-ink">{data.breadcrumbLabel}</span>
      </nav>

      <header className="mt-6 rounded-3xl border border-norya-ink/10 bg-white p-7 shadow-soft sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-norya-tide">{data.tagline}</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-norya-ink sm:text-4xl">{data.title}</h1>
        <p className="mt-4 max-w-3xl text-base text-norya-slate sm:text-lg">{data.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={data.ctaHref}
            className="inline-flex rounded-full bg-norya-tide px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d8ea3]"
          >
            {data.ctaLabel}
          </Link>
          {data.secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex rounded-full border border-norya-ink/20 px-5 py-2.5 text-sm font-semibold text-norya-ink transition hover:bg-norya-ink hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </header>

      <section className="mt-10">
        <h2 className="section-title">{data.stepsTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {data.steps.map((step) => (
            <article key={step.title} className="card bg-white">
              <h3 className="font-display text-xl font-semibold text-norya-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-norya-slate">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="section-title">{data.faqTitle}</h2>
        {data.faqSubtitle && <p className="section-subtitle">{data.faqSubtitle}</p>}
        <div className="mt-6 space-y-3">
          {data.faqItems.map((item) => (
            <details key={item.question} className="rounded-2xl border border-norya-ink/10 bg-white p-5 shadow-soft">
              <summary className="cursor-pointer list-none font-display text-lg font-semibold text-norya-ink">{item.question}</summary>
              <p className="mt-3 text-sm leading-relaxed text-norya-slate">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
