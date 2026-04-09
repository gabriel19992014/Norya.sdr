import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ServiciosPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const siteUrl = "https://www.noryapartners.com";
const canonicalPath = "/es/servicios";

const faqItems = [
  {
    question: "Que es el BPO comercial B2B?",
    answer:
      "El BPO comercial B2B es la externalizacion estructurada de parte de la operacion comercial, enfocada en prospeccion, calificacion y generacion de reuniones con decisores."
  },
  {
    question: "Cuando aparecen los primeros resultados?",
    answer:
      "Por lo general las primeras senales de traccion aparecen entre 30 y 60 dias, segun ICP, oferta y madurez del proceso comercial."
  },
  {
    question: "Con que tipo de empresas trabaja NORYA?",
    answer:
      "Trabajamos con empresas B2B de tecnologia, consultoria y servicios que necesitan pipeline previsible y mas oportunidades calificadas."
  },
  {
    question: "El servicio incluye estrategia y ejecucion?",
    answer:
      "Si. Combinamos definicion estrategica de ICP y mensaje con ejecucion continua de prospeccion y calificacion comercial."
  }
];

export const metadata: Metadata = {
  title: "BPO Comercial B2B | NORYA",
  description:
    "Servicio de BPO comercial B2B con estrategia, prospeccion y calificacion para generar reuniones con decisores y pipeline previsible.",
  alternates: {
    canonical: canonicalPath,
    languages: {
      "pt-BR": "/pt/servicos",
      "es-AR": "/es/servicios",
      "x-default": "/pt/servicos"
    }
  },
  openGraph: {
    title: "BPO Comercial B2B | NORYA",
    description:
      "Operacion comercial B2B para generar oportunidades calificadas con consistencia.",
    url: `${siteUrl}${canonicalPath}`,
    siteName: "NORYA Partners",
    images: [
      {
        url: "/img/logo.webp",
        width: 1200,
        height: 630,
        alt: "NORYA Partners"
      }
    ],
    type: "article",
    locale: "es_AR"
  }
};

export default async function ServiciosPage({ params }: ServiciosPageProps) {
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
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  const breadcrumbLdJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${siteUrl}/es`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Servicios",
        item: `${siteUrl}${canonicalPath}`
      }
    ]
  };

  const serviceLdJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "BPO Comercial B2B",
    provider: {
      "@type": "Organization",
      name: "NORYA"
    },
    serviceType: "Generacion de oportunidades B2B",
    areaServed: "LATAM",
    url: `${siteUrl}${canonicalPath}`
  };

  return (
    <main id="top" lang="es-AR" className="section-shell pb-16 pt-14 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqLdJson, breadcrumbLdJson, serviceLdJson]) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-norya-slate">
        <Link href="/es" className="hover:text-norya-ink">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <span className="text-norya-ink">Servicios</span>
      </nav>

      <header className="mt-6 rounded-3xl border border-norya-ink/10 bg-white p-7 shadow-soft sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-norya-tide">Servicio especializado</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-norya-ink sm:text-4xl">BPO comercial B2B con foco en decisores</h1>
        <p className="mt-4 max-w-3xl text-base text-norya-slate sm:text-lg">
          Estructuramos y ejecutamos la prospeccion comercial de tu empresa para generar reuniones calificadas y mejorar la previsibilidad del pipeline.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/es#contact"
            className="inline-flex rounded-full bg-norya-tide px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d8ea3]"
          >
            Solicitar diagnostico
          </Link>
          <Link
            href="/es"
            className="inline-flex rounded-full border border-norya-ink/20 px-5 py-2.5 text-sm font-semibold text-norya-ink transition hover:bg-norya-ink hover:text-white"
          >
            Ver pagina principal
          </Link>
        </div>
      </header>

      <section className="mt-10">
        <h2 className="section-title">Como funciona</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/es/prospeccion" className="inline-flex rounded-full border border-norya-ink/15 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-norya-slate">
            Prospeccion B2B
          </Link>
          <Link href="/es/generacion-de-reuniones" className="inline-flex rounded-full border border-norya-ink/15 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-norya-slate">
            Generacion de reuniones
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <article className="card bg-white">
            <h3 className="font-display text-xl font-semibold text-norya-ink">1. Diagnostico comercial</h3>
            <p className="mt-2 text-sm text-norya-slate">Mapeamos ICP, oferta, mensaje y prioridades para construir una base estrategica solida.</p>
          </article>
          <article className="card bg-white">
            <h3 className="font-display text-xl font-semibold text-norya-ink">2. Prospeccion estructurada</h3>
            <p className="mt-2 text-sm text-norya-slate">Ejecutamos cadencias multicanal con foco en decisores y cuentas objetivo con potencial real.</p>
          </article>
          <article className="card bg-white">
            <h3 className="font-display text-xl font-semibold text-norya-ink">3. Calificacion y reuniones</h3>
            <p className="mt-2 text-sm text-norya-slate">Entregamos oportunidades calificadas para que tu equipo comercial avance con mas cierre.</p>
          </article>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="section-title">FAQ</h2>
        <p className="section-subtitle">Preguntas frecuentes sobre nuestro servicio de BPO comercial B2B.</p>
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
