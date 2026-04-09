type AboutProps = {
  title: string;
  description: string;
  highlights: string[];
};

export default function About({ title, description, highlights }: AboutProps) {
  return (
    <section className="section-shell pt-16" id="about">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{description}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {highlights.map((item, index) => (
          <article key={item} className="card relative overflow-hidden border-norya-tide/15 bg-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-norya-tide">0{index + 1}</p>
            <p className="mt-3 font-display text-xl font-semibold text-norya-ink">{item}</p>
            <p className="mt-2 text-sm text-norya-slate">
              {index === 0
                ? "Estrutura comercial orientada a metas claras e priorizacao correta."
                : index === 1
                  ? "Mensagens, ICP e abordagem alinhados ao seu ciclo de venda."
                  : "Operacao continua para transformar planejamento em pipeline."}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
