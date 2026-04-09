"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

type NavbarItem = {
  href: string;
  label: string;
};

type NavbarProps = {
  locale: "pt" | "es";
  switchLabel: string;
  ctaLabel: string;
  whatsappLabel: string;
  whatsappUrl: string;
  items: NavbarItem[];
};

export default function Navbar({
  locale,
  switchLabel,
  ctaLabel,
  whatsappLabel,
  whatsappUrl,
  items
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#about");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  function buildUrl(lang: "pt" | "es") {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    return `/${lang}${hash}`;
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 10);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const sectionIds = items
      .map((item) => item.href)
      .filter((href) => href.startsWith("#"))
      .map((href) => href.slice(1));

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) {
          return;
        }

        setActiveSection(`#${visible[0].target.id}`);
      },
      {
        root: null,
        rootMargin: "-28% 0px -52% 0px",
        threshold: [0.25, 0.45, 0.65]
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [items]);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        isScrolled
          ? "border-white/80 bg-white/95 shadow-[0_10px_30px_-22px_rgba(7,23,34,0.55)]"
          : "border-white/70 bg-white/80 shadow-[0_10px_30px_-22px_rgba(7,23,34,0.45)]"
      }`}
    >
      <div className="section-shell flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          className="inline-flex h-full items-center"
          aria-label="NORYA"
        >
          <Image
            src="/img/logo.svg"
            alt="Logo NORYA"
            width={176}
            height={50}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </a>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label={locale === "pt" ? "Navegacao principal" : "Navegacion principal"}
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                activeSection === item.href ? "text-norya-ink" : "text-norya-slate hover:text-norya-ink"
              }`}
              onClick={() => setActiveSection(item.href)}
              aria-current={activeSection === item.href ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            data-cta="whatsapp-navbar"
            className="hidden rounded-full border border-[#25D366] px-4 py-2 text-sm font-semibold text-[#128C7E] transition hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white lg:inline-flex"
          >
            {whatsappLabel}
          </a>
          <p className="hidden text-xs text-norya-slate sm:block">{switchLabel}</p>
          <div className="rounded-full border border-norya-ink/15 bg-white p-1 text-sm shadow-[0_8px_24px_-18px_rgba(7,23,34,0.35)]">
            <a
              href={buildUrl("pt")}
              onClick={() => setIsOpen(false)}
              aria-current={locale === "pt" ? "page" : undefined}
              className={`rounded-full px-3 py-1 ${locale === "pt" ? "bg-norya-ink text-white" : "text-norya-slate"}`}
            >
              PT
            </a>
            <a
              href={buildUrl("es")}
              onClick={() => setIsOpen(false)}
              aria-current={locale === "es" ? "page" : undefined}
              className={`rounded-full px-3 py-1 ${locale === "es" ? "bg-norya-ink text-white" : "text-norya-slate"}`}
            >
              ES
            </a>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-norya-tide px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0d8ea3] sm:inline-flex"
          >
            {ctaLabel}
          </a>
          <button
            type="button"
            aria-label={
              isOpen
                ? locale === "pt"
                  ? "Fechar menu"
                  : "Cerrar menu"
                : locale === "pt"
                  ? "Abrir menu"
                  : "Abrir menu"
            }
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-norya-ink/20 bg-white text-norya-ink shadow-[0_8px_18px_-16px_rgba(7,23,34,0.7)] md:hidden"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="section-shell pb-4 md:hidden">
          <nav
            className="grid gap-2 rounded-2xl border border-norya-ink/10 bg-white p-3 shadow-soft"
            aria-label={locale === "pt" ? "Menu mobile" : "Menu movil"}
          >
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.href);
                  setIsOpen(false);
                }}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  activeSection === item.href
                    ? "bg-norya-mist text-norya-ink"
                    : "text-norya-slate hover:bg-norya-mist hover:text-norya-ink"
                }`}
                aria-current={activeSection === item.href ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              data-cta="whatsapp-navbar-mobile"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white"
            >
              {whatsappLabel}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
