export function SectionHeading({
  eyebrow,
  title,
  italicWord,
  description,
}: {
  eyebrow: string;
  title: string;
  italicWord?: string;
  description: string;
}) {
  return (
    <header className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
        {title} {italicWord ? <em className="font-medium text-primary">{italicWord}</em> : null}
      </h2>
      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {description}
      </p>
    </header>
  );
}
