import type { Metadata } from "next";
import { COMPANY, buildWhatsAppUrl } from "./lib/company";

import { contentByLocale, type Locale } from "./content";

const siteUrl = COMPANY.siteUrl;

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
      "NORYA actúa como extensión del equipo comercial para generar reuniones calificadas y un pipeline B2B consistente."
  }
};

export function isValidLocale(input: string): input is Locale {
  return input === "pt" || input === "es";
}

export function getSiteMetadata(locale: Locale): Metadata {
  const meta = metadataByLocale[locale];
  const localePath = `/${locale}`;

  return {
    title: meta.title,
    description: meta.description,
    keywords:
      locale === "pt"
        ? ["BPO comercial", "prospecção B2B", "geração de oportunidades", "pipeline previsível"]
        : ["BPO comercial", "prospección B2B", "generación de oportunidades", "pipeline previsible"],
    alternates: {
      canonical: localePath,
      languages: {
        "pt-BR": "/pt",
        "es-AR": "/es",
        "x-default": "/pt"
      }
    },
    openGraph: {
      title: meta.title,
      description:
        locale === "pt"
          ? "Estratégia, inteligência de mercado e execução para crescimento sustentável em vendas B2B."
          : "Estrategia, inteligencia de mercado y ejecución para crecimiento sostenible en ventas B2B.",
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
          : "Estrategia y ejecución comercial para un pipeline B2B previsible.",
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
    { href: "#solutions", label: locale === "pt" ? "Soluções" : "Soluciones" },
    { href: "#process", label: locale === "pt" ? "Processo" : "Proceso" },
    { href: "#clients", label: locale === "pt" ? "Clientes" : "Clientes" },
    { href: "#contact", label: locale === "pt" ? "Contato" : "Contacto" }
  ];
}

export function getWhatsappUrl(locale: Locale) {
  const message =
    locale === "pt"
      ? "Olá! Quero entender como a NORYA pode apoiar nossa geração de oportunidades B2B."
      : "¡Hola! Quiero entender cómo NORYA puede apoyar nuestra generación de oportunidades B2B.";
  return buildWhatsAppUrl(message);
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
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NORYA Partners",
    url: `${siteUrl}/${locale}`,
    inLanguage: locale === "pt" ? "pt-BR" : "es-AR"
  };
}

export function getServiceLdJson(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NORYA Partners",
    url: `${siteUrl}/${locale}`,
    inLanguage: locale === "pt" ? "pt-BR" : "es-AR",
    areaServed: "LATAM",
    serviceType: locale === "pt" ? "BPO comercial e geração de oportunidades B2B" : "BPO comercial y generación de oportunidades B2B",
    email: COMPANY.email,
    telephone: COMPANY.phoneDisplay
  };
}

export { contentByLocale };
export type { Locale };