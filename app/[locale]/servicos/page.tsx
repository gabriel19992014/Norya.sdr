import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ServicosPageProps = {
  params: {
    locale: string;
  };
};

const siteUrl = "https://www.noryapartners.com";
const canonicalPath = "/pt/servicos";

const faqItems = [
  {
    question: "O que e BPO comercial B2B?",
    answer:
      "BPO comercial B2B e a terceirizacao estruturada de parte da operacao comercial, com foco em prospeccao, qualificacao e geracao de reunioes com decisores."
  },
  {
    question: "Em quanto tempo aparecem os primeiros resultados?",
    answer:
      "Normalmente os primeiros sinais de tracao aparecem entre 30 e 60 dias, dependendo do ICP, da oferta e da maturidade do processo comercial."
  },
  {
    question: "A NORYA atua com quais tipos de empresa?",
    answer:
      "Atuamos com empresas B2B de servicos, tecnologia e consultoria que precisam de pipeline previsivel e maior volume de oportunidades qualificadas."
  },
  {
    question: "A operacao inclui estrategia e execucao?",
    answer:
      "Sim. O trabalho combina definicao estrategica de ICP e mensagem com execucao recorrente de prospeccao e qualificacao comercial."
  }
];

export const metadata: Metadata = {
  title: "BPO Comercial B2B | NORYA",
  description:
    "Servico de BPO comercial B2B com estrategia, prospeccao e qualificacao para gerar reunioes com decisores e pipeline previsivel.",
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
      "Estruturacao comercial B2B para gerar oportunidades qualificadas com consistencia.",
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
    locale: "pt_BR"
  }
};

export default function ServicosPage({ params }: ServicosPageProps) {
  if (params.locale !== "pt") {
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
        item: `${siteUrl}/pt`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Servicos",
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
    serviceType: "Geracao de oportunidades B2B",
    areaServed: "LATAM",
    url: `${siteUrl}${canonicalPath}`
  };

  return (
    <main id="top" lang="pt-BR" className="section-shell pb-16 pt-14 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqLdJson, breadcrumbLdJson, serviceLdJson]) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-norya-slate">
        <Link href="/pt" className="hover:text-norya-ink">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <span className="text-norya-ink">Servicos</span>
      </nav>

      <header className="mt-6 rounded-3xl border border-norya-ink/10 bg-white p-7 shadow-soft sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-norya-tide">Servico especializado</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-norya-ink sm:text-4xl">BPO Comercial B2B com foco em decisores</h1>
        <p className="mt-4 max-w-3xl text-base text-norya-slate sm:text-lg">
          Estruturamos e executamos a prospeccao comercial da sua empresa para gerar reunioes qualificadas e aumentar a previsibilidade do pipeline.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/pt#contact"
            className="inline-flex rounded-full bg-norya-tide px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d8ea3]"
          >
            Solicitar diagnostico
          </Link>
          <Link
            href="/pt"
            className="inline-flex rounded-full border border-norya-ink/20 px-5 py-2.5 text-sm font-semibold text-norya-ink transition hover:bg-norya-ink hover:text-white"
          >
            Ver pagina principal
          </Link>
        </div>
      </header>

      <section className="mt-10">
        <h2 className="section-title">Como funciona</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/pt/prospeccao" className="inline-flex rounded-full border border-norya-ink/15 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-norya-slate">
            Prospeccao B2B
          </Link>
          <Link href="/pt/geracao-de-reunioes" className="inline-flex rounded-full border border-norya-ink/15 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-norya-slate">
            Geracao de reunioes
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <article className="card bg-white">
            <h3 className="font-display text-xl font-semibold text-norya-ink">1. Diagnostico comercial</h3>
            <p className="mt-2 text-sm text-norya-slate">Mapeamos ICP, oferta, argumentos e prioridades para montar uma base estrategica consistente.</p>
          </article>
          <article className="card bg-white">
            <h3 className="font-display text-xl font-semibold text-norya-ink">2. Prospeccao estruturada</h3>
            <p className="mt-2 text-sm text-norya-slate">Executamos cadencias multicanais com foco em contato com tomadores de decisao e contas-alvo.</p>
          </article>
          <article className="card bg-white">
            <h3 className="font-display text-xl font-semibold text-norya-ink">3. Qualificacao e reunioes</h3>
            <p className="mt-2 text-sm text-norya-slate">Entregamos oportunidades qualificadas para seu time focar em conversa comercial e fechamento.</p>
          </article>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="section-title">FAQ</h2>
        <p className="section-subtitle">Perguntas frequentes sobre nosso servico de BPO comercial B2B.</p>
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
