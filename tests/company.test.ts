import { describe, expect, it } from "vitest";
import { COMPANY, COMPANY_LINKS, buildWhatsAppUrl } from "../app/lib/company";

describe("company data", () => {
  it("mantem dados basicos obrigatorios", () => {
    expect(COMPANY.name).toBe("NORYA");
    expect(COMPANY.fullName).toContain("Partners");
    expect(COMPANY.siteUrl.startsWith("https://")).toBe(true);
  });

  it("monta links de contato coerentes", () => {
    expect(COMPANY_LINKS.mailto).toBe(`mailto:${COMPANY.email}`);
    expect(COMPANY_LINKS.tel).toBe(`tel:${COMPANY.phoneE164}`);
  });

  it("gera URL de WhatsApp com mensagem codificada", () => {
    const url = buildWhatsAppUrl("Ola time NORYA");
    expect(url).toContain(`https://wa.me/${COMPANY.whatsappNumber}`);
    expect(url).toContain("text=Ola%20time%20NORYA");
  });

  it("codifica caracteres especiais na mensagem de WhatsApp", () => {
    const url = buildWhatsAppUrl("Ola & vendas?");
    expect(url).toContain("text=Ola%20%26%20vendas%3F");
  });
});
