import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProspeccionPageProps = {
  params: {
    locale: string;
  };
};

const siteUrl = "https://www.noryapartners.com";
const canonicalPath = "/es/prospeccion";

const faqItems = [
  {
    question: "Que necesita una operacion de prospeccion B2B?",
    answer:
      "Necesita ICP definido, segmentacion de cuentas, mensajes validados y cadencias multicanal con seguimiento continuo."
  },
  {
    question: "La prospeccion se enfoca en decisores?",
    answer:
      "Si. Priorizamos contactos con influencia real en compra para acelerar conversaciones y mejorar conversion."
  },
  {
    question: "Como miden el rendimiento?",
    answer:
      "Medimos tasa de respuesta, reuniones agendadas, calidad de oportunidades y avance del pipeline por sprint."
  }
];

export const metadata: Metadata = {
  title: "Prospeccion B2B | NORYA",
  description:
    "Servicio de prospeccion B2B con ICP, segmentacion y cadencias multicanal para generar oportunidades calificadas.",
  alternates: {
    canonical: canonicalPath,
    languages: {
      "pt-BR": "/pt/prospeccao",
      "es-AR": "/es/prospeccion",
      "x-default": "/pt/prospeccao"
    }
  },
  openGraph: {
    title: "Prospeccion B2B | NORYA",
    description: "Prospeccion comercial B2B con foco en decisores y previsibilidad de pipeline.",
    url: `${siteUrl}${canonicalPath}`,
    siteName: "NORYA Partners",
    images: [{ url: "/img/logo.webp", width: 1200, height: 630, alt: "NORYA Partners" }],
    type: "article",
    locale: "es_AR"
  }
};

export default function ProspeccionPage({ params }: ProspeccionPageProps) {
  if (params.locale !== "es") {
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
      { "@type": "ListItem", position: 2, name: "Prospeccion", item: `${siteUrl}${canonicalPath}` }
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
        <span className="text-norya-ink">Prospeccion</span>
      </nav>

      <header className="mt-6 rounded-3xl border border-norya-ink/10 bg-white p-7 shadow-soft sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-norya-tide">Pagina satelite</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-norya-ink sm:text-4xl">Prospeccion B2B basada en ICP y cuentas objetivo</h1>
        <p className="mt-4 max-w-3xl text-base text-norya-slate sm:text-lg">
          Construimos cadencias de prospeccion para conectar tu propuesta con decisores y crear una operacion comercial estable.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/es#contact" className="inline-flex rounded-full bg-norya-tide px-5 py-2.5 text-sm font-semibold text-white">Solicitar diagnostico</Link>
          <Link href="/es/generacion-de-reuniones" className="inline-flex rounded-full border border-norya-ink/20 px-5 py-2.5 text-sm font-semibold text-norya-ink">Ver generacion de reuniones</Link>
          <Link href="/es/servicios" className="inline-flex rounded-full border border-norya-ink/20 px-5 py-2.5 text-sm font-semibold text-norya-ink">Ver servicios</Link>
        </div>
      </header>

      <section className="mt-10">
        <h2 className="section-title">Etapas de prospeccion</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <article className="card bg-white"><h3 className="font-display text-xl font-semibold text-norya-ink">Planificacion</h3><p className="mt-2 text-sm text-norya-slate">Definimos ICP, segmentos y mensajes para cada perfil de cuenta objetivo.</p></article>
          <article className="card bg-white"><h3 className="font-display text-xl font-semibold text-norya-ink">Ejecucion</h3><p className="mt-2 text-sm text-norya-slate">Activamos cadencias multicanal con foco en conversaciones de valor con decisores.</p></article>
          <article className="card bg-white"><h3 className="font-display text-xl font-semibold text-norya-ink">Optimizacion</h3><p className="mt-2 text-sm text-norya-slate">Ajustes semanales para elevar respuesta, agenda comercial y conversion.</p></article>
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
