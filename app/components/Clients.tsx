type ClientItem = {
  title: string;
  text: string;
};

type ClientsProps = {
  title: string;
  subtitle: string;
  items: ClientItem[];
};

export default function Clients({ title, subtitle, items }: ClientsProps) {
  return (
    <section className="section-shell pt-16" id="clients">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="card bg-white">
            <p className="inline-flex rounded-full bg-norya-mist px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-norya-tide">
              {item.title}
            </p>
            <p className="mt-2 text-sm text-norya-slate">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
