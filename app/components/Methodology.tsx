type MethodologyProps = {
  title: string;
  text: string;
  nodes: string[];
};

export default function Methodology({ title, text, nodes }: MethodologyProps) {
  return (
    <section className="section-shell pt-16" id="methodology">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{text}</p>

      <div className="mt-8 card bg-white p-8">
        <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {nodes.map((node, index) => (
            <div key={node} className="contents">
              <div className="rounded-xl bg-norya-mist px-4 py-5 text-center font-display font-semibold text-norya-ink">
                {node}
              </div>
              {index < nodes.length - 1 ? (
                <div className="mx-auto hidden h-0.5 w-10 bg-norya-tide/40 md:block" aria-hidden />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
