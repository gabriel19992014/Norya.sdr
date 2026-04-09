import Image from "next/image";

type SolutionItem = {
  title: string;
  text: string;
};

const solutionImages = [
  "/img/solucao/solucao-03.webp",
  "/img/solucao/solucao-02.webp",
  "/img/solucao/solucao-01.webp"
];

type SolutionsProps = {
  title: string;
  subtitle: string;
  cta: string;
  proofPoints: string[];
  whatsappLabel: string;
  whatsappUrl: string;
  items: SolutionItem[];
};

export default function Solutions({
  title,
  subtitle,
  cta,
  proofPoints,
  whatsappLabel,
  whatsappUrl,
  items
}: SolutionsProps) {
  return (
    <section className="section-shell pt-16" id="solutions">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="#contact"
            className="inline-flex rounded-full border border-norya-ink px-5 py-2 text-sm font-semibold text-norya-ink transition hover:bg-norya-ink hover:text-white"
          >
            {cta}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            data-cta="whatsapp-solutions"
            className="inline-flex rounded-full border border-[#25D366] px-5 py-2 text-sm font-semibold text-[#128C7E] transition hover:bg-[#25D366] hover:text-white"
          >
            {whatsappLabel}
          </a>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {proofPoints.map((point) => (
          <p
            key={point}
            className="inline-flex items-center rounded-full border border-norya-ink/15 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-norya-slate"
          >
            {point}
          </p>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {items.map((item, index) => (
          <article key={item.title} className="card bg-white">
            <div className="media-zoom relative mb-4 aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={solutionImages[index] || solutionImages[0]}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 360px"
                quality={72}
                className="object-cover"
              />
            </div>
            <h3 className="font-display text-xl font-semibold text-norya-ink">{item.title}</h3>
            <p className="mt-2 text-sm text-norya-slate">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
