import { describe, expect, it } from "vitest";
import { escapeHtml, validateEmail } from "../app/lib/validation";

describe("validateEmail", () => {
  it("aceita emails validos", () => {
    expect(validateEmail("contato@noryapartners.com")).toBe(true);
    expect(validateEmail("time+sales@norya.co")).toBe(true);
  });

  it("rejeita emails maiores que o limite", () => {
    const localPart = "a".repeat(150);
    const email = `${localPart}@noryapartners.com`;
    expect(validateEmail(email)).toBe(false);
  });

  it("rejeita formatos com ponto no inicio/fim e arroba no inicio/fim", () => {
    expect(validateEmail(".nome@norya.com")).toBe(false);
    expect(validateEmail("nome.@norya.com")).toBe(false);
    expect(validateEmail("@nome@norya.com")).toBe(false);
    expect(validateEmail("nome@norya.com@")).toBe(false);
  });

  it("rejeita emails invalidos", () => {
    expect(validateEmail("invalido")).toBe(false);
    expect(validateEmail("@norya.com")).toBe(false);
    expect(validateEmail("nome@dominio")).toBe(false);
    expect(validateEmail("nome..sobrenome@norya.com")).toBe(false);
  });
});

describe("escapeHtml", () => {
  it("escapa caracteres especiais para prevenir injecao", () => {
    const raw = `<script>alert('xss')</script> & \"ok\"`;
    expect(escapeHtml(raw)).toBe("&lt;script&gt;alert(&#039;xss&#039;)&lt;/script&gt; &amp; &quot;ok&quot;");
  });

  it("nao altera string sem caracteres especiais", () => {
    expect(escapeHtml("texto-seguro")).toBe("texto-seguro");
  });
});
