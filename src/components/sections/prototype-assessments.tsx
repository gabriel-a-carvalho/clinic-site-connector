import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { AssessmentIndex } from "@/components/prototype/assessment-index";
import { assessments } from "@/data/mock-content";

export function PrototypeAssessments() {
  return (
    <section
      id="avaliacoes"
      data-lovable-target="assessments"
      aria-labelledby="assessments-title"
      className="relative scroll-mt-24 overflow-hidden px-4 py-20 md:px-8 md:py-28"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-32 size-[26rem] rounded-full bg-sage-light/70"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-10 size-40 rounded-full border border-accent/15"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <header className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Avaliações</p>
          <h2
            id="assessments-title"
            className="mt-5 max-w-md font-display text-4xl font-semibold leading-[1.08] text-foreground md:text-5xl"
          >
            Cada percurso começa com uma{" "}
            <em className="font-medium text-primary">boa pergunta</em>.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
            Reunimos processos de avaliação conduzidos com escuta, tempo e cuidado. Percorra o
            índice ao lado para entender do que se trata cada um.
          </p>
          <Link
            to="/avaliacoes"
            className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-primary/40 pb-1 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
          >
            Ver todas as avaliações <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </header>

        <AssessmentIndex assessments={assessments} />
      </div>
    </section>
  );
}
