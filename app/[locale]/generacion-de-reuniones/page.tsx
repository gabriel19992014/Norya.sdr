import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPANY } from "../../lib/company";

type GeneracionReunionesPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const siteUrl = COMPANY.siteUrl;
const canonicalPath = "/es/generacion-de-reuniones";

const faqItems = [
  {
    question: "Que consideran una reunion calificada?",
    answer:
      "Una reunion con perfil alineado al ICP, necesidad identificada y potencial real de avanzar en el proceso comercial."
  },
  {
    question: "Priorizan calidad o volumen?",
    answer:
      "Priorizamos calidad con volumen sostenible para proteger conversion y mantener pipeline saludable."
  },
  {
    question: "Como entregan la informacion al equipo comercial?",
    answer:
      "Cada reunion se transfiere con contexto, resumen de intereses y notas clave para continuar negociacion rapidamente."
  }
];

export const metadata: Metadata = {
  title: "Generacion de Reuniones B2B | NORYA",
  description:
    "Servicio de generacion de reuniones B2B con calificacion comercial para acelerar oportunidades con decisores.",
  alternates: {
    canonical: canonicalPath,
    languages: {
      "pt-BR": "/pt/geracao-de-reunioes",
      "es-AR": "/es/generacion-de-reuniones",
      "x-default": "/pt/geracao-de-reunioes"
    }
  },
  openGraph: {
    title: "Generacion de Reuniones B2B | NORYA",
    description: "Reuniones calificadas con decisores para previsibilidad comercial en operaciones B2B.",
    url: `${siteUrl}${canonicalPath}`,
    siteName: "NORYA Partners",
    images: [{ url: "/img/logo.webp", width: 1200, height: 630, alt: "NORYA Partners" }],
    type: "article",
    locale: "es_AR"
  }
};

export default async function GeneracionReunionesPage({ params }: GeneracionReunionesPageProps) {
  const { locale } = await params;
  if (locale !== "es") {
    notFound();
  }

  const faqLdJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  const breadcrumbLdJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteUrl}/es` },
      { "@type": "ListItem", position: 2, name: "Generacion de reuniones", item: `${siteUrl}${canonicalPath}` }
    ]
  };

  return (
    <main id="top" lang="es-AR" className="section-shell pb-16 pt-14 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqLdJson, breadcrumbLdJson]) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-norya-slate">
        <Link href="/es" className="hover:text-norya-ink">Inicio</Link>
        <span className="mx-2">/</span>
        <span className="text-norya-ink">Generacion de reuniones</span>
      </nav>

      <header className="mt-6 rounded-3xl border border-norya-ink/10 bg-white p-7 shadow-soft sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-norya-tide">Pagina satelite</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-norya-ink sm:text-4xl">Generacion de reuniones B2B enfocada en conversion</h1>
        <p className="mt-4 max-w-3xl text-base text-norya-slate sm:text-lg">
          Convertimos prospeccion en agenda comercial de calidad con handoff claro para tu equipo de ventas.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/es#contact" className="inline-flex rounded-full bg-norya-tide px-5 py-2.5 text-sm font-semibold text-white">Solicitar plan</Link>
          <Link href="/es/prospeccion" className="inline-flex rounded-full border border-norya-ink/20 px-5 py-2.5 text-sm font-semibold text-norya-ink">Ver prospeccion</Link>
          <Link href="/es/servicios" className="inline-flex rounded-full border border-norya-ink/20 px-5 py-2.5 text-sm font-semibold text-norya-ink">Ver servicios</Link>
        </div>
      </header>

      <section className="mt-10">
        <h2 className="section-title">Modelo de entrega</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <article className="card bg-white"><h3 className="font-display text-xl font-semibold text-norya-ink">Calificacion</h3><p className="mt-2 text-sm text-norya-slate">Filtramos perfil e interes para asegurar reuniones con potencial comercial.</p></article>
          <article className="card bg-white"><h3 className="font-display text-xl font-semibold text-norya-ink">Agenda</h3><p className="mt-2 text-sm text-norya-slate">Coordinamos agenda y expectativa para elevar asistencia y continuidad.</p></article>
          <article className="card bg-white"><h3 className="font-display text-xl font-semibold text-norya-ink">Handoff</h3><p className="mt-2 text-sm text-norya-slate">Transferencia con contexto para acelerar conversacion comercial y cierre.</p></article>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="section-title">FAQ</h2>
        <div className="mt-6 space-y-3">
          {faqItems.map((item) => (
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
