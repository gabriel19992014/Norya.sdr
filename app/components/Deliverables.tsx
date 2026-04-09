type Deliverable = {
  title: string;
  text: string;
};

type DeliverablesProps = {
  title: string;
  items: Deliverable[];
};

export default function Deliverables({ title, items }: DeliverablesProps) {
  return (
    <section className="section-shell pt-16" id="deliverables">
      <h2 className="section-title">{title}</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <article key={item.title} className="card bg-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-norya-tide">Entrega 0{index + 1}</p>
            <h3 className="font-display text-lg font-semibold text-norya-ink">{item.title}</h3>
            <p className="mt-2 text-sm text-norya-slate">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
