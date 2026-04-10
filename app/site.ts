import type { Metadata } from "next";
import { COMPANY, buildWhatsAppUrl } from "./lib/company";

import { contentByLocale, type Locale } from "./content";

const siteUrl = COMPANY.siteUrl;

const localePathByLocale: Record<Locale, string> = {
  pt: "/pt",
  es: "/es"
};

type LocaleMetadata = {
  title: string;
  description: string;
};

const metadataByLocale: Record<Locale, LocaleMetadata> = {
  pt: {
    title: "NORYA | Apoio comercial e geração de oportunidades B2B",
    description:
      "A NORYA atua como extensão do time comercial para gerar reuniões qualificadas e pipeline B2B consistente."
  },
  es: {
    title: "NORYA | Apoyo comercial y generación de oportunidades B2B",
    description:
      "NORYA actua como extension del equipo comercial para generar reuniones calificadas y un pipeline B2B consistente."
  }
};

export function isValidLocale(input: string): input is Locale {
  return input === "pt" || input === "es";
}

function getLocalePath(locale: Locale) {
  return localePathByLocale[locale];
}

export function getSiteMetadata(locale: Locale): Metadata {
  const meta = metadataByLocale[locale];
  const localePath = getLocalePath(locale);

  return {
    title: meta.title,
    description: meta.description,
    keywords:
      locale === "pt"
        ? ["BPO comercial", "prospeccao B2B", "geracao de oportunidades", "pipeline previsivel"]
        : ["BPO comercial", "prospeccion B2B", "generacion de oportunidades", "pipeline previsible"],
    alternates: {
      canonical: localePath,
      languages: {
        "pt-BR": getLocalePath("pt"),
        "es-AR": getLocalePath("es"),
        "x-default": getLocalePath("pt")
      }
    },
    openGraph: {
      title: meta.title,
      description:
        locale === "pt"
          ? "Estratégia, inteligência de mercado e execução para crescimento sustentável em vendas B2B."
          : "Estrategia, inteligencia de mercado y ejecucion para crecimiento sostenible en ventas B2B.",
      url: `${siteUrl}${localePath}`,
      siteName: "NORYA Partners",
      images: [
        {
          url: "/img/logo.webp",
          width: 1200,
          height: 630,
          alt: "NORYA Partners"
        }
      ],
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "es_AR"
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description:
        locale === "pt"
          ? "Estratégia e execução comercial para pipeline B2B previsível."
          : "Estrategia y ejecucion comercial para un pipeline B2B previsible.",
      images: ["/img/logo.webp"]
    }
  };
}

export function getWhatsappLabel(locale: Locale) {
  return locale === "pt" ? "Fale no WhatsApp" : "Hablar por WhatsApp";
}

export function getNavItems(locale: Locale) {
  return [
    { href: "#about", label: locale === "pt" ? "Sobre" : "Nosotros" },
    { href: "#solutions", label: locale === "pt" ? "Solucoes" : "Soluciones" },
    { href: "#process", label: locale === "pt" ? "Processo" : "Proceso" },
    { href: "#clients", label: locale === "pt" ? "Clientes" : "Clientes" },
    { href: "#contact", label: locale === "pt" ? "Contato" : "Contacto" }
  ];
}

export function getWhatsappUrls(locale: Locale) {
  const baseMessage =
    locale === "pt"
      ? "Ola! Quero entender como a NORYA pode apoiar nossa geracao de oportunidades B2B."
      : "Hola! Quiero entender como NORYA puede apoyar nuestra generacion de oportunidades B2B.";

  function withSource(_source: string) {
    return buildWhatsAppUrl(baseMessage);
  }

  return {
    navbar: withSource("navbar"),
    hero: withSource("hero"),
    solutions: withSource(locale === "pt" ? "solucoes" : "soluciones"),
    contact: withSource("contact"),
    footer: withSource("footer"),
    floating: withSource("floating-button")
  };
}

export function getOrganizationLdJson() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NORYA",
    url: siteUrl,
    contactPoint: {
      "@type": "ContactPoint",
      email: COMPANY.email,
      telephone: COMPANY.phoneDisplay,
      contactType: "sales"
    }
  };
}

export function getWebSiteLdJson(locale: Locale) {
  const localePath = getLocalePath(locale);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NORYA Partners",
    url: `${siteUrl}${localePath}`,
    inLanguage: locale === "pt" ? "pt-BR" : "es-AR"
  };
}

export function getServiceLdJson(locale: Locale) {
  const localePath = getLocalePath(locale);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NORYA Partners",
    url: `${siteUrl}${localePath}`,
    inLanguage: locale === "pt" ? "pt-BR" : "es-AR",
    areaServed: "LATAM",
    serviceType: locale === "pt" ? "BPO comercial e geração de oportunidades B2B" : "BPO comercial y generacion de oportunidades B2B",
    email: COMPANY.email,
    telephone: COMPANY.phoneDisplay
  };
}

export { contentByLocale };
export type { Locale };