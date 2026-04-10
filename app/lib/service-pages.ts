import type { Metadata } from "next";
import type { Locale } from "../content";
import { COMPANY } from "./company";

const siteUrl = COMPANY.siteUrl;

type FaqItem = {
  question: string;
  answer: string;
};

type Step = {
  title: string;
  text: string;
};

type RelatedLink = {
  href: string;
  label: string;
};

export type ServicePageData = {
  locale: Locale;
  lang: string;
  canonicalPath: string;
  alternates: Record<string, string>;
  tagline: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLinks: RelatedLink[];
  stepsTitle: string;
  steps: Step[];
  faqTitle: string;
  faqSubtitle?: string;
  faqItems: FaqItem[];
  breadcrumbLabel: string;
  metadata: Metadata;
};

// ─── Serviços / Servicios ────────────────────────────────────────────

const servicosPt: ServicePageData = {
  locale: "pt",
  lang: "pt-BR",
  canonicalPath: "/pt/servicos",
  alternates: { "pt-BR": "/pt/servicos", "es-AR": "/es/servicios", "x-default": "/pt/servicos" },
  tagline: "Serviço especializado",
  title: "BPO Comercial B2B com foco em decisores",
  description: "Estruturamos e executamos a prospecção comercial da sua empresa para gerar reuniões qualificadas e aumentar a previsibilidade do pipeline.",
  ctaLabel: "Solicitar diagnóstico",
  ctaHref: "/pt#contact",
  secondaryLinks: [
    { href: "/pt/prospeccao", label: "Prospecção B2B" },
    { href: "/pt/geracao-de-reunioes", label: "Geração de reuniões" },
  ],
  stepsTitle: "Como funciona",
  steps: [
    { title: "1. Diagnóstico comercial", text: "Mapeamos ICP, oferta, argumentos e prioridades para montar uma base estratégica consistente." },
    { title: "2. Prospecção estruturada", text: "Executamos cadências multicanais com foco em contato com tomadores de decisão e contas-alvo." },
    { title: "3. Qualificação e reuniões", text: "Entregamos oportunidades qualificadas para seu time focar em conversa comercial e fechamento." },
  ],
  faqTitle: "FAQ",
  faqSubtitle: "Perguntas frequentes sobre nosso serviço de BPO comercial B2B.",
  faqItems: [
    { question: "O que é BPO comercial B2B?", answer: "BPO comercial B2B é a terceirização estruturada de parte da operação comercial, com foco em prospecção, qualificação e geração de reuniões com decisores." },
    { question: "Em quanto tempo aparecem os primeiros resultados?", answer: "Normalmente os primeiros sinais de tração aparecem entre 30 e 60 dias, dependendo do ICP, da oferta e da maturidade do processo comercial." },
    { question: "A NORYA atua com quais tipos de empresa?", answer: "Atuamos com empresas B2B de serviços, tecnologia e consultoria que precisam de pipeline previsível e maior volume de oportunidades qualificadas." },
    { question: "A operação inclui estratégia e execução?", answer: "Sim. O trabalho combina definição estratégica de ICP e mensagem com execução recorrente de prospecção e qualificação comercial." },
  ],
  breadcrumbLabel: "Serviços",
  metadata: {
    title: "BPO Comercial B2B | NORYA",
    description: "Serviço de BPO comercial B2B com estratégia, prospecção e qualificação para gerar reuniões com decisores e pipeline previsível.",
    alternates: { canonical: "/pt/servicos", languages: { "pt-BR": "/pt/servicos", "es-AR": "/es/servicios", "x-default": "/pt/servicos" } },
    openGraph: {
      title: "BPO Comercial B2B | NORYA",
      description: "Estruturação comercial B2B para gerar oportunidades qualificadas com consistência.",
      url: `${siteUrl}/pt/servicos`,
      siteName: "NORYA Partners",
      images: [{ url: "/img/logo.webp", width: 1200, height: 630, alt: "NORYA Partners" }],
      type: "article",
      locale: "pt_BR",
    },
  },
};

const serviciosEs: ServicePageData = {
  locale: "es",
  lang: "es-AR",
  canonicalPath: "/es/servicios",
  alternates: { "pt-BR": "/pt/servicos", "es-AR": "/es/servicios", "x-default": "/pt/servicos" },
  tagline: "Servicio especializado",
  title: "BPO comercial B2B con foco en decisores",
  description: "Estructuramos y ejecutamos la prospección comercial de tu empresa para generar reuniones calificadas y mejorar la previsibilidad del pipeline.",
  ctaLabel: "Solicitar diagnóstico",
  ctaHref: "/es#contact",
  secondaryLinks: [
    { href: "/es/prospeccion", label: "Prospección B2B" },
    { href: "/es/generacion-de-reuniones", label: "Generación de reuniones" },
  ],
  stepsTitle: "Cómo funciona",
  steps: [
    { title: "1. Diagnóstico comercial", text: "Mapeamos ICP, oferta, mensaje y prioridades para construir una base estratégica sólida." },
    { title: "2. Prospección estructurada", text: "Ejecutamos cadencias multicanal con foco en decisores y cuentas objetivo con potencial real." },
    { title: "3. Calificación y reuniones", text: "Entregamos oportunidades calificadas para que tu equipo comercial avance con más cierre." },
  ],
  faqTitle: "FAQ",
  faqSubtitle: "Preguntas frecuentes sobre nuestro servicio de BPO comercial B2B.",
  faqItems: [
    { question: "¿Qué es el BPO comercial B2B?", answer: "El BPO comercial B2B es la externalización estructurada de parte de la operación comercial, enfocada en prospección, calificación y generación de reuniones con decisores." },
    { question: "¿Cuándo aparecen los primeros resultados?", answer: "Por lo general las primeras señales de tracción aparecen entre 30 y 60 días, según ICP, oferta y madurez del proceso comercial." },
    { question: "¿Con qué tipo de empresas trabaja NORYA?", answer: "Trabajamos con empresas B2B de tecnología, consultoría y servicios que necesitan pipeline previsible y más oportunidades calificadas." },
    { question: "¿El servicio incluye estrategia y ejecución?", answer: "Sí. Combinamos definición estratégica de ICP y mensaje con ejecución continua de prospección y calificación comercial." },
  ],
  breadcrumbLabel: "Servicios",
  metadata: {
    title: "BPO Comercial B2B | NORYA",
    description: "Servicio de BPO comercial B2B con estrategia, prospección y calificación para generar reuniones con decisores y pipeline previsible.",
    alternates: { canonical: "/es/servicios", languages: { "pt-BR": "/pt/servicos", "es-AR": "/es/servicios", "x-default": "/pt/servicos" } },
    openGraph: {
      title: "BPO Comercial B2B | NORYA",
      description: "Operación comercial B2B para generar oportunidades calificadas con consistencia.",
      url: `${siteUrl}/es/servicios`,
      siteName: "NORYA Partners",
      images: [{ url: "/img/logo.webp", width: 1200, height: 630, alt: "NORYA Partners" }],
      type: "article",
      locale: "es_AR",
    },
  },
};

// ─── Prospecção / Prospección ────────────────────────────────────────

const prospeccaoPt: ServicePageData = {
  locale: "pt",
  lang: "pt-BR",
  canonicalPath: "/pt/prospeccao",
  alternates: { "pt-BR": "/pt/prospeccao", "es-AR": "/es/prospeccion", "x-default": "/pt/prospeccao" },
  tagline: "Página satélite",
  title: "Prospecção B2B orientada por ICP e contas-alvo",
  description: "Construímos cadências de prospecção para conectar sua oferta aos decisores certos com rotina comercial previsível.",
  ctaLabel: "Solicitar diagnóstico",
  ctaHref: "/pt#contact",
  secondaryLinks: [
    { href: "/pt/geracao-de-reunioes", label: "Ver geração de reuniões" },
    { href: "/pt/servicos", label: "Ver serviços" },
  ],
  stepsTitle: "Etapas da prospecção",
  steps: [
    { title: "Planejamento", text: "Definição de ICP, mercado alvo e proposta de valor por segmento." },
    { title: "Execução", text: "Cadências em canais combinados com mensagens adaptadas ao perfil do lead." },
    { title: "Otimização", text: "Ajustes semanais para elevar resposta, conversa e qualidade das oportunidades." },
  ],
  faqTitle: "FAQ",
  faqItems: [
    { question: "O que uma operação de prospecção B2B precisa ter?", answer: "Precisa de ICP definido, segmentação de contas, mensagens testadas e cadência multicanal com acompanhamento de respostas." },
    { question: "A prospecção é feita com foco em decisores?", answer: "Sim. Priorizamos contatos com influência real na compra para reduzir ciclos longos e aumentar a taxa de reuniões qualificadas." },
    { question: "Como vocês medem desempenho?", answer: "Acompanhamos indicadores de resposta, reuniões agendadas, qualidade dos leads e evolução do pipeline ao longo das sprints." },
  ],
  breadcrumbLabel: "Prospecção",
  metadata: {
    title: "Prospecção B2B | NORYA",
    description: "Serviço de prospecção B2B com ICP, segmentação e cadências multicanais para gerar oportunidades qualificadas.",
    alternates: { canonical: "/pt/prospeccao", languages: { "pt-BR": "/pt/prospeccao", "es-AR": "/es/prospeccion", "x-default": "/pt/prospeccao" } },
    openGraph: {
      title: "Prospecção B2B | NORYA",
      description: "Prospecção comercial B2B focada em decisores e previsibilidade de pipeline.",
      url: `${siteUrl}/pt/prospeccao`,
      siteName: "NORYA Partners",
      images: [{ url: "/img/logo.webp", width: 1200, height: 630, alt: "NORYA Partners" }],
      type: "article",
      locale: "pt_BR",
    },
  },
};

const prospeccionEs: ServicePageData = {
  locale: "es",
  lang: "es-AR",
  canonicalPath: "/es/prospeccion",
  alternates: { "pt-BR": "/pt/prospeccao", "es-AR": "/es/prospeccion", "x-default": "/pt/prospeccao" },
  tagline: "Página satélite",
  title: "Prospección B2B basada en ICP y cuentas objetivo",
  description: "Construimos cadencias de prospección para conectar tu propuesta con decisores y crear una operación comercial estable.",
  ctaLabel: "Solicitar diagnóstico",
  ctaHref: "/es#contact",
  secondaryLinks: [
    { href: "/es/generacion-de-reuniones", label: "Ver generación de reuniones" },
    { href: "/es/servicios", label: "Ver servicios" },
  ],
  stepsTitle: "Etapas de prospección",
  steps: [
    { title: "Planificación", text: "Definimos ICP, segmentos y mensajes para cada perfil de cuenta objetivo." },
    { title: "Ejecución", text: "Activamos cadencias multicanal con foco en conversaciones de valor con decisores." },
    { title: "Optimización", text: "Ajustes semanales para elevar respuesta, agenda comercial y conversión." },
  ],
  faqTitle: "FAQ",
  faqItems: [
    { question: "¿Qué necesita una operación de prospección B2B?", answer: "Necesita ICP definido, segmentación de cuentas, mensajes validados y cadencias multicanal con seguimiento continuo." },
    { question: "¿La prospección se enfoca en decisores?", answer: "Sí. Priorizamos contactos con influencia real en compra para acelerar conversaciones y mejorar conversión." },
    { question: "¿Cómo miden el rendimiento?", answer: "Medimos tasa de respuesta, reuniones agendadas, calidad de oportunidades y avance del pipeline por sprint." },
  ],
  breadcrumbLabel: "Prospección",
  metadata: {
    title: "Prospección B2B | NORYA",
    description: "Servicio de prospección B2B con ICP, segmentación y cadencias multicanal para generar oportunidades calificadas.",
    alternates: { canonical: "/es/prospeccion", languages: { "pt-BR": "/pt/prospeccao", "es-AR": "/es/prospeccion", "x-default": "/pt/prospeccao" } },
    openGraph: {
      title: "Prospección B2B | NORYA",
      description: "Prospección comercial B2B con foco en decisores y previsibilidad de pipeline.",
      url: `${siteUrl}/es/prospeccion`,
      siteName: "NORYA Partners",
      images: [{ url: "/img/logo.webp", width: 1200, height: 630, alt: "NORYA Partners" }],
      type: "article",
      locale: "es_AR",
    },
  },
};

// ─── Geração de Reuniões / Generación de Reuniones ──────────────────

const geracaoReunioesPt: ServicePageData = {
  locale: "pt",
  lang: "pt-BR",
  canonicalPath: "/pt/geracao-de-reunioes",
  alternates: { "pt-BR": "/pt/geracao-de-reunioes", "es-AR": "/es/generacion-de-reuniones", "x-default": "/pt/geracao-de-reunioes" },
  tagline: "Página satélite",
  title: "Geração de reuniões B2B com foco em conversão",
  description: "Transformamos prospecção em agenda comercial com reuniões qualificadas e contexto para seu time vender melhor.",
  ctaLabel: "Solicitar plano",
  ctaHref: "/pt#contact",
  secondaryLinks: [
    { href: "/pt/prospeccao", label: "Ver prospecção" },
    { href: "/pt/servicos", label: "Ver serviços" },
  ],
  stepsTitle: "Modelo de entrega",
  steps: [
    { title: "Qualificação", text: "Filtramos o perfil e contexto para garantir reuniões com real potencial comercial." },
    { title: "Agendamento", text: "Coordenamos disponibilidade e alinhamento de expectativa para reduzir faltas e no-shows." },
    { title: "Handoff", text: "Transferência estruturada com informações-chave para continuidade rápida da negociação." },
  ],
  faqTitle: "FAQ",
  faqItems: [
    { question: "O que é uma reunião qualificada?", answer: "É uma reunião com perfil aderente ao ICP, dor clara e potencial de avançar no processo comercial com seu time de vendas." },
    { question: "Vocês entregam volume ou qualidade?", answer: "Priorizamos qualidade com metas de volume saudável para gerar pipeline consistente sem comprometer aderência de oportunidades." },
    { question: "Como é feito o handoff para vendas?", answer: "Cada reunião é entregue com contexto do lead, resumo da conversa e pontos de interesse para acelerar a continuidade comercial." },
  ],
  breadcrumbLabel: "Geração de reuniões",
  metadata: {
    title: "Geração de Reuniões B2B | NORYA",
    description: "Serviço de geração de reuniões B2B com qualificação comercial para acelerar oportunidades com decisores.",
    alternates: { canonical: "/pt/geracao-de-reunioes", languages: { "pt-BR": "/pt/geracao-de-reunioes", "es-AR": "/es/generacion-de-reuniones", "x-default": "/pt/geracao-de-reunioes" } },
    openGraph: {
      title: "Geração de Reuniões B2B | NORYA",
      description: "Reuniões qualificadas com decisores para previsibilidade comercial em operações B2B.",
      url: `${siteUrl}/pt/geracao-de-reunioes`,
      siteName: "NORYA Partners",
      images: [{ url: "/img/logo.webp", width: 1200, height: 630, alt: "NORYA Partners" }],
      type: "article",
      locale: "pt_BR",
    },
  },
};

const generacionReunionesEs: ServicePageData = {
  locale: "es",
  lang: "es-AR",
  canonicalPath: "/es/generacion-de-reuniones",
  alternates: { "pt-BR": "/pt/geracao-de-reunioes", "es-AR": "/es/generacion-de-reuniones", "x-default": "/pt/geracao-de-reunioes" },
  tagline: "Página satélite",
  title: "Generación de reuniones B2B enfocada en conversión",
  description: "Convertimos prospección en agenda comercial de calidad con handoff claro para tu equipo de ventas.",
  ctaLabel: "Solicitar plan",
  ctaHref: "/es#contact",
  secondaryLinks: [
    { href: "/es/prospeccion", label: "Ver prospección" },
    { href: "/es/servicios", label: "Ver servicios" },
  ],
  stepsTitle: "Modelo de entrega",
  steps: [
    { title: "Calificación", text: "Filtramos perfil e interés para asegurar reuniones con potencial comercial." },
    { title: "Agenda", text: "Coordinamos agenda y expectativa para elevar asistencia y continuidad." },
    { title: "Handoff", text: "Transferencia con contexto para acelerar conversación comercial y cierre." },
  ],
  faqTitle: "FAQ",
  faqItems: [
    { question: "¿Qué consideran una reunión calificada?", answer: "Una reunión con perfil alineado al ICP, necesidad identificada y potencial real de avanzar en el proceso comercial." },
    { question: "¿Priorizan calidad o volumen?", answer: "Priorizamos calidad con volumen sostenible para proteger conversión y mantener pipeline saludable." },
    { question: "¿Cómo entregan la información al equipo comercial?", answer: "Cada reunión se transfiere con contexto, resumen de intereses y notas clave para continuar negociación rápidamente." },
  ],
  breadcrumbLabel: "Generación de reuniones",
  metadata: {
    title: "Generación de Reuniones B2B | NORYA",
    description: "Servicio de generación de reuniones B2B con calificación comercial para acelerar oportunidades con decisores.",
    alternates: { canonical: "/es/generacion-de-reuniones", languages: { "pt-BR": "/pt/geracao-de-reunioes", "es-AR": "/es/generacion-de-reuniones", "x-default": "/pt/geracao-de-reunioes" } },
    openGraph: {
      title: "Generación de Reuniones B2B | NORYA",
      description: "Reuniones calificadas con decisores para previsibilidad comercial en operaciones B2B.",
      url: `${siteUrl}/es/generacion-de-reuniones`,
      siteName: "NORYA Partners",
      images: [{ url: "/img/logo.webp", width: 1200, height: 630, alt: "NORYA Partners" }],
      type: "article",
      locale: "es_AR",
    },
  },
};

// ─── Lookup ─────────────────────────────────────────────────────────

export type ServiceSlug = "servicos" | "servicios" | "prospeccao" | "prospeccion" | "geracao-de-reunioes" | "generacion-de-reuniones";

const servicePageMap: Record<ServiceSlug, ServicePageData> = {
  "servicos": servicosPt,
  "servicios": serviciosEs,
  "prospeccao": prospeccaoPt,
  "prospeccion": prospeccionEs,
  "geracao-de-reunioes": geracaoReunioesPt,
  "generacion-de-reuniones": generacionReunionesEs,
};

export function getServicePageData(slug: string): ServicePageData | null {
  return servicePageMap[slug as ServiceSlug] ?? null;
}
