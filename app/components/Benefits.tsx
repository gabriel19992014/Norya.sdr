type BenefitsProps = {
  title: string;
  items: string[];
};

export default function Benefits({ title, items }: BenefitsProps) {
  return (
    <section className="section-shell pt-16" id="benefits">
      <h2 className="section-title">{title}</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <article key={item} className="card bg-white">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-norya-tide text-sm font-semibold text-white">
              ✓
            </div>
            <p className="mt-4 font-display text-lg font-semibold text-norya-ink">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
