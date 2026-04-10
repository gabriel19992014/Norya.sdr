import type { MetadataRoute } from "next";
import { COMPANY } from "./lib/company";

const siteUrl = COMPANY.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/pt",
    "/es",
    "/pt/servicos",
    "/es/servicios",
    "/pt/prospeccao",
    "/es/prospeccion",
    "/pt/geracao-de-reunioes",
    "/es/generacion-de-reuniones"
  ];

  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 0.9 : 0.8
  }));
}
