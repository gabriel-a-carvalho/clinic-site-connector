import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { AssessmentMock } from "@/data/mock-content";

export function AssessmentCard({ assessment }: { assessment: AssessmentMock }) {
  return (
    <article className="flex h-full flex-col rounded-xl border bg-card p-5 shadow-[0_14px_34px_-30px_rgba(44,36,33,0.7)] md:p-6">
      <h3 className="font-display text-xl font-semibold leading-snug text-foreground">
        {assessment.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{assessment.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Temas relacionados">
        {assessment.themes.map((theme) => (
          <li
            key={theme}
            className="rounded-full bg-sage-light px-3 py-1 text-xs font-medium text-primary"
          >
            {theme}
          </li>
        ))}
      </ul>
      <Link
        to="/avaliacoes/$slug"
        params={{ slug: assessment.slug }}
        className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary transition-colors hover:text-accent"
      >
        Mais sobre <ArrowUpRight aria-hidden="true" className="size-4" />
      </Link>
    </article>
  );
}
