import Link from "next/link";

type Locale = "pt" | "es";

type ServiceLinksProps = {
  locale: Locale;
};

const services = {
  pt: [
    {
      href: "/pt/servicos",
      label: "BPO Comercial B2B",
      description:
        "Terceirize a operação comercial com estratégia, execução e governança dedicadas para gerar pipeline previsível.",
      tag: "Serviço"
    },
    {
      href: "/pt/prospeccao",
      label: "Prospecção B2B",
      description:
        "Abordagem multicanal focada em decisores, com ICP definido e cadências testadas para acelerar oportunidades.",
      tag: "Serviço"
    },
    {
      href: "/pt/geracao-de-reunioes",
      label: "Geração de Reuniões B2B",
      description:
        "Reuniões qualificadas com decisores, entregues com contexto comercial para agilizar o avanço no funil.",
      tag: "Serviço"
    }
  ],
  es: [
    {
      href: "/es/servicios",
      label: "BPO Comercial B2B",
      description:
        "Terceriza la operacion comercial con estrategia, ejecucion y gobernanza dedicadas para generar pipeline previsible.",
      tag: "Servicio"
    },
    {
      href: "/es/prospeccion",
      label: "Prospeccion B2B",
      description:
        "Abordaje multicanal enfocado en decisores, con ICP definido y cadencias probadas para acelerar oportunidades.",
      tag: "Servicio"
    },
    {
      href: "/es/generacion-de-reuniones",
      label: "Generacion de Reuniones B2B",
      description:
        "Reuniones calificadas con decisores, entregadas con contexto comercial para agilizar el avance en el funnel.",
      tag: "Servicio"
    }
  ]
};

const sectionTitle = {
  pt: "Nossos Serviços",
  es: "Nuestros Servicios"
};

const sectionSubtitle = {
  pt: "Conheça em detalhes cada frente de atuação da NORYA.",
  es: "Conoce en detalle cada frente de actuacion de NORYA."
};

const learnMore = {
  pt: "Saiba mais →",
  es: "Conoce más →"
};

export default function ServiceLinks({ locale }: ServiceLinksProps) {
  const items = services[locale];

  return (
    <section className="section-shell pt-16" id="services">
      <h2 className="section-title">{sectionTitle[locale]}</h2>
      <p className="section-subtitle">{sectionSubtitle[locale]}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="card group flex flex-col gap-3 no-underline hover:border-norya-sand/40 hover:shadow-md"
          >
            <span className="inline-flex w-fit rounded-full border border-norya-ink/15 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-norya-slate">
              {item.tag}
            </span>
            <h3 className="font-display text-xl font-semibold text-norya-ink leading-snug">
              {item.label}
            </h3>
            <p className="mt-auto text-sm text-norya-slate">{item.description}</p>
            <span className="mt-2 text-sm font-semibold text-norya-ink group-hover:text-norya-sand transition-colors">
              {learnMore[locale]}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
