import Image from "next/image";

type ChallengeItem = {
  title: string;
  text: string;
};

type ChallengesProps = {
  title: string;
  challengeLabel: string;
  items: ChallengeItem[];
};

export default function Challenges({ title, challengeLabel, items }: ChallengesProps) {
  const challengeImageByIndex = ["/img/desafio/tempo.webp", "/img/desafio/decisores.webp", "/img/desafio/estrutura.webp"];

  return (
    <section className="section-shell pt-16" id="challenges">
      <h2 className="section-title">{title}</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {items.map((item, index) => (
          <article key={item.title} className="card border-white bg-white/95">
            <div className="relative h-40 overflow-hidden rounded-2xl bg-norya-mist">
              <Image
                src={challengeImageByIndex[index] ?? "/img/desafio/tempo.webp"}
                alt={item.title}
                fill
                quality={75}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 360px"
              />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-norya-slate">{challengeLabel} 0{index + 1}</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-norya-ink">{item.title}</h3>
            <p className="mt-2 text-sm text-norya-slate">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
