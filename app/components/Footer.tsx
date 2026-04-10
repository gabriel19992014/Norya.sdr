import Image from "next/image";
import { COMPANY, COMPANY_LINKS } from "../lib/company";

type FooterItem = {
  href: string;
  label: string;
};

type FooterProps = {
  locale: "pt" | "es";
  whatsappUrl: string;
  items: FooterItem[];
};

export default function Footer({ locale, whatsappUrl, items }: FooterProps) {
  const title = locale === "pt" ? "Apoio comercial B2B com consistência" : "Apoyo comercial B2B con consistencia";
  const description =
    locale === "pt"
      ? "Estratégia, prospecção e qualificação para transformar previsibilidade em crescimento."
      : "Estrategia, prospeccion y calificacion para transformar previsibilidad en crecimiento.";

  return (
    <footer className="border-t border-norya-ink/10 bg-gradient-to-b from-white/85 to-norya-mist/80 pb-8 pt-12">
      <div className="section-shell grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="mb-4">
            <Image src="/img/logo.svg" alt="Logo NORYA" width={176} height={50} className="h-11 w-auto object-contain" />
          </div>
          <p className="max-w-md text-sm font-medium text-norya-ink">{title}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-norya-slate">{description}</p>
          <p className="mt-4 inline-flex rounded-full border border-norya-ink/10 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-norya-slate">
            {locale === "pt" ? "Operacao comercial LATAM" : "Operacion comercial LATAM"}
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-norya-tide">Links</p>
          <ul className="mt-3 space-y-2.5 text-sm text-norya-slate">
            <li>
              <a
                href={locale === "pt" ? "/pt/servicos" : "/es/servicios"}
                className="inline-flex transition hover:text-norya-ink"
              >
                {locale === "pt" ? "BPO Comercial B2B" : "BPO Comercial B2B"}
              </a>
            </li>
            <li>
              <a
                href={locale === "pt" ? "/pt/prospeccao" : "/es/prospeccion"}
                className="inline-flex transition hover:text-norya-ink"
              >
                {locale === "pt" ? "Prospeccao B2B" : "Prospeccion B2B"}
              </a>
            </li>
            <li>
              <a
                href={locale === "pt" ? "/pt/geracao-de-reunioes" : "/es/generacion-de-reuniones"}
                className="inline-flex transition hover:text-norya-ink"
              >
                {locale === "pt" ? "Geracao de Reunioes B2B" : "Generacion de Reuniones B2B"}
              </a>
            </li>
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex transition hover:text-norya-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-norya-tide">Contato</p>
          <ul className="mt-3 space-y-2.5 text-sm text-norya-slate">
            <li>
              <a className="transition hover:text-norya-ink" href={COMPANY_LINKS.mailto}>
                {COMPANY.email}
              </a>
            </li>
            <li>
              <a className="transition hover:text-norya-ink" href={COMPANY_LINKS.tel}>
                {COMPANY.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                className="inline-flex rounded-full border border-[#25D366] px-3 py-1.5 font-semibold text-[#128C7E] transition hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                data-cta="whatsapp-footer"
              >
                {locale === "pt" ? "Chamar no WhatsApp" : "Escribir por WhatsApp"}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="section-shell mt-10 border-t border-norya-ink/10 pt-4 text-xs text-norya-slate">
        © {new Date().getFullYear()} NORYA. {locale === "pt" ? "Todos os direitos reservados." : "Todos los derechos reservados."}
      </div>
    </footer>
  );
}
