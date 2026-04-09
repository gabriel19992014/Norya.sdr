import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProspeccaoPageProps = {
  params: {
    locale: string;
  };
};

const siteUrl = "https://www.noryapartners.com";
const canonicalPath = "/pt/prospeccao";

const faqItems = [
  {
    question: "O que uma operacao de prospeccao B2B precisa ter?",
    answer:
      "Precisa de ICP definido, segmentacao de contas, mensagens testadas e cadencia multicanal com acompanhamento de respostas."
  },
  {
    question: "A prospeccao e feita com foco em decisores?",
    answer:
      "Sim. Priorizamos contatos com influencia real na compra para reduzir ciclos longos e aumentar a taxa de reunioes qualificadas."
  },
  {
    question: "Como voces medem desempenho?",
    answer:
      "Acompanhamos indicadores de resposta, reunioes agendadas, qualidade dos leads e evolucao do pipeline ao longo das sprints."
  }
];

export const metadata: Metadata = {
  title: "Prospeccao B2B | NORYA",
  description:
    "Servico de prospeccao B2B com ICP, segmentacao e cadencias multicanais para gerar oportunidades qualificadas.",
  alternates: {
    canonical: canonicalPath,
    languages: {
      "pt-BR": "/pt/prospeccao",
      "es-AR": "/es/prospeccion",
      "x-default": "/pt/prospeccao"
    }
  },
  openGraph: {
    title: "Prospeccao B2B | NORYA",
    description: "Prospeccao comercial B2B focada em decisores e previsibilidade de pipeline.",
    url: `${siteUrl}${canonicalPath}`,
    siteName: "NORYA Partners",
    images: [{ url: "/img/logo.webp", width: 1200, height: 630, alt: "NORYA Partners" }],
    type: "article",
    locale: "pt_BR"
  }
};

export default function ProspeccaoPage({ params }: ProspeccaoPageProps) {
  if (params.locale !== "pt") {
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
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteUrl}/pt` },
      { "@type": "ListItem", position: 2, name: "Prospeccao", item: `${siteUrl}${canonicalPath}` }
    ]
  };

  return (
    <main id="top" lang="pt-BR" className="section-shell pb-16 pt-14 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqLdJson, breadcrumbLdJson]) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-norya-slate">
        <Link href="/pt" className="hover:text-norya-ink">Inicio</Link>
        <span className="mx-2">/</span>
        <span className="text-norya-ink">Prospeccao</span>
      </nav>

      <header className="mt-6 rounded-3xl border border-norya-ink/10 bg-white p-7 shadow-soft sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-norya-tide">Pagina satelite</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-norya-ink sm:text-4xl">Prospeccao B2B orientada por ICP e contas-alvo</h1>
        <p className="mt-4 max-w-3xl text-base text-norya-slate sm:text-lg">
          Construimos cadencias de prospeccao para conectar sua oferta aos decisores certos com rotina comercial previsivel.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/pt#contact" className="inline-flex rounded-full bg-norya-tide px-5 py-2.5 text-sm font-semibold text-white">Solicitar diagnostico</Link>
          <Link href="/pt/geracao-de-reunioes" className="inline-flex rounded-full border border-norya-ink/20 px-5 py-2.5 text-sm font-semibold text-norya-ink">Ver geracao de reunioes</Link>
          <Link href="/pt/servicos" className="inline-flex rounded-full border border-norya-ink/20 px-5 py-2.5 text-sm font-semibold text-norya-ink">Ver servicos</Link>
        </div>
      </header>

      <section className="mt-10">
        <h2 className="section-title">Etapas da prospeccao</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <article className="card bg-white"><h3 className="font-display text-xl font-semibold text-norya-ink">Planejamento</h3><p className="mt-2 text-sm text-norya-slate">Definicao de ICP, mercado alvo e proposta de valor por segmento.</p></article>
          <article className="card bg-white"><h3 className="font-display text-xl font-semibold text-norya-ink">Execucao</h3><p className="mt-2 text-sm text-norya-slate">Cadencias em canais combinados com mensagens adaptadas ao perfil do lead.</p></article>
          <article className="card bg-white"><h3 className="font-display text-xl font-semibold text-norya-ink">Otimizacao</h3><p className="mt-2 text-sm text-norya-slate">Ajustes semanais para elevar resposta, conversa e qualidade das oportunidades.</p></article>
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
