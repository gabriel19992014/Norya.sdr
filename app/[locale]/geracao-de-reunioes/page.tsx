import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type GeracaoReunioesPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const siteUrl = "https://www.noryapartners.com";
const canonicalPath = "/pt/geracao-de-reunioes";

const faqItems = [
  {
    question: "O que e uma reuniao qualificada?",
    answer:
      "E uma reuniao com perfil aderente ao ICP, dor clara e potencial de avancar no processo comercial com seu time de vendas."
  },
  {
    question: "Vocês entregam volume ou qualidade?",
    answer:
      "Priorizamos qualidade com metas de volume saudavel para gerar pipeline consistente sem comprometer aderencia de oportunidades."
  },
  {
    question: "Como e feito o handoff para vendas?",
    answer:
      "Cada reuniao e entregue com contexto do lead, resumo da conversa e pontos de interesse para acelerar a continuidade comercial."
  }
];

export const metadata: Metadata = {
  title: "Geracao de Reunioes B2B | NORYA",
  description:
    "Servico de geracao de reunioes B2B com qualificacao comercial para acelerar oportunidades com decisores.",
  alternates: {
    canonical: canonicalPath,
    languages: {
      "pt-BR": "/pt/geracao-de-reunioes",
      "es-AR": "/es/generacion-de-reuniones",
      "x-default": "/pt/geracao-de-reunioes"
    }
  },
  openGraph: {
    title: "Geracao de Reunioes B2B | NORYA",
    description: "Reunioes qualificadas com decisores para previsibilidade comercial em operacoes B2B.",
    url: `${siteUrl}${canonicalPath}`,
    siteName: "NORYA Partners",
    images: [{ url: "/img/logo.webp", width: 1200, height: 630, alt: "NORYA Partners" }],
    type: "article",
    locale: "pt_BR"
  }
};

export default async function GeracaoReunioesPage({ params }: GeracaoReunioesPageProps) {
  const { locale } = await params;
  if (locale !== "pt") {
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
      { "@type": "ListItem", position: 2, name: "Geracao de reunioes", item: `${siteUrl}${canonicalPath}` }
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
        <span className="text-norya-ink">Geracao de reunioes</span>
      </nav>

      <header className="mt-6 rounded-3xl border border-norya-ink/10 bg-white p-7 shadow-soft sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-norya-tide">Pagina satelite</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-norya-ink sm:text-4xl">Geracao de reunioes B2B com foco em conversao</h1>
        <p className="mt-4 max-w-3xl text-base text-norya-slate sm:text-lg">
          Transformamos prospeccao em agenda comercial com reunioes qualificadas e contexto para seu time vender melhor.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/pt#contact" className="inline-flex rounded-full bg-norya-tide px-5 py-2.5 text-sm font-semibold text-white">Solicitar plano</Link>
          <Link href="/pt/prospeccao" className="inline-flex rounded-full border border-norya-ink/20 px-5 py-2.5 text-sm font-semibold text-norya-ink">Ver prospeccao</Link>
          <Link href="/pt/servicos" className="inline-flex rounded-full border border-norya-ink/20 px-5 py-2.5 text-sm font-semibold text-norya-ink">Ver servicos</Link>
        </div>
      </header>

      <section className="mt-10">
        <h2 className="section-title">Modelo de entrega</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <article className="card bg-white"><h3 className="font-display text-xl font-semibold text-norya-ink">Qualificacao</h3><p className="mt-2 text-sm text-norya-slate">Filtramos o perfil e contexto para garantir reunioes com real potencial comercial.</p></article>
          <article className="card bg-white"><h3 className="font-display text-xl font-semibold text-norya-ink">Agendamento</h3><p className="mt-2 text-sm text-norya-slate">Coordenamos disponibilidade e alinhamento de expectativa para reduzir faltas e no-shows.</p></article>
          <article className="card bg-white"><h3 className="font-display text-xl font-semibold text-norya-ink">Handoff</h3><p className="mt-2 text-sm text-norya-slate">Transferencia estruturada com informacoes-chave para continuidade rapida da negociacao.</p></article>
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
