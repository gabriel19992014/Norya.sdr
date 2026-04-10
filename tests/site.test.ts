import { describe, expect, it } from "vitest";
import { getNavItems, getSiteMetadata, getWhatsappLabel, getWhatsappUrl, isValidLocale } from "../app/site";

describe("isValidLocale", () => {
  it("valida apenas locales suportados", () => {
    expect(isValidLocale("pt")).toBe(true);
    expect(isValidLocale("es")).toBe(true);
    expect(isValidLocale("en")).toBe(false);
  });
});

describe("getNavItems", () => {
  it("retorna itens de navegacao com ancora de contato", () => {
    const items = getNavItems("pt");
    expect(items.length).toBeGreaterThan(0);
    expect(items.some((item) => item.href === "#contact")).toBe(true);
  });

  it("traduz labels de navegacao para espanhol", () => {
    const items = getNavItems("es");
    expect(items.some((item) => item.label === "Nosotros")).toBe(true);
    expect(items.some((item) => item.label === "Contacto")).toBe(true);
  });
});

describe("getWhatsappUrl", () => {
  it("gera url valida com mensagem em portugues", () => {
    const url = getWhatsappUrl("pt");
    expect(url).toContain("https://wa.me/");
    expect(decodeURIComponent(url)).toContain("Olá!");
  });

  it("gera mensagem em espanhol quando locale for es", () => {
    const url = getWhatsappUrl("es");
    expect(decodeURIComponent(url)).toContain("¡Hola!");
  });
});

describe("labels e metadata", () => {
  it("retorna label do WhatsApp por locale", () => {
    expect(getWhatsappLabel("pt")).toBe("Fale no WhatsApp");
    expect(getWhatsappLabel("es")).toBe("Hablar por WhatsApp");
  });

  it("gera metadata com canonical e locale corretos", () => {
    const metadataPt = getSiteMetadata("pt");
    const metadataEs = getSiteMetadata("es");

    expect(metadataPt.alternates?.canonical).toBe("/pt");
    expect(metadataEs.alternates?.canonical).toBe("/es");
    expect(metadataPt.openGraph?.locale).toBe("pt_BR");
    expect(metadataEs.openGraph?.locale).toBe("es_AR");
  });
});
