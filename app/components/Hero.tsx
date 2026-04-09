import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle: string;
  cta: string;
  imageAlt: string;
  whatsappLabel: string;
  whatsappUrl: string;
};

export default function Hero({
  title,
  subtitle,
  cta,
  imageAlt,
  whatsappLabel,
  whatsappUrl
}: HeroProps) {
  return (
    <section>
      <div className="relative overflow-hidden border border-white/50 bg-norya-ink text-white shadow-soft">
        <Image
          src="/img/solucao/solucao-01.webp"
          alt={imageAlt}
          fill
          priority
          quality={75}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-norya-ink via-norya-ink/85 to-norya-tide/70" />

        <div className="relative z-10 grid gap-7 p-8 sm:p-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div className="animate-rise">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-norya-sand" aria-hidden="true" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90">NORYA Partners</p>
              <span className="hidden text-[10px] text-white/70 sm:inline">Growth, Strategy &amp; Operations</span>
            </div>
            <h1 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">{subtitle}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-norya-sand px-6 py-3 font-semibold text-norya-ink transition hover:translate-y-[-2px] hover:bg-[#ffc177]"
              >
                {cta}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                data-cta="whatsapp-hero"
                className="inline-flex items-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {whatsappLabel}
              </a>
            </div>
          </div>

          <div className="glass-panel animate-rise p-6 [animation-delay:120ms]">
            <p className="text-sm uppercase tracking-[0.18em] text-white/70">BPO Comercial</p>
            <p className="mt-3 font-display text-2xl font-semibold">Pipeline previsível com foco em decisores</p>
            <p className="mt-4 text-sm text-white/80">
              Estratégia, geração de reuniões e execução comercial contínua para empresas B2B.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
