type ProcessStep = {
  title: string;
  text: string;
};

type ProcessProps = {
  title: string;
  steps: ProcessStep[];
};

export default function Process({ title, steps }: ProcessProps) {
  return (
    <section className="section-shell pt-16" id="process">
      <h2 className="section-title">{title}</h2>

      <div className="mt-8 grid gap-5 md:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.title} className="card relative bg-white">
            <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-norya-tide font-display text-sm font-semibold text-white">
              {index + 1}
            </span>
            <h3 className="font-display text-lg font-semibold text-norya-ink">{step.title}</h3>
            <p className="mt-2 text-sm text-norya-slate">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
