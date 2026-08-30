import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { AssessmentCard } from "@/components/prototype/assessment-card";
import { assessments } from "@/data/mock-content";

export const Route = createFileRoute("/avaliacoes/$slug")({
  beforeLoad: ({ params }) => {
    if (!assessments.some((assessment) => assessment.slug === params.slug)) throw notFound();
  },
  component: AssessmentDetail,
});

function AssessmentDetail() {
  const { slug } = Route.useParams();
  const assessment = assessments.find((item) => item.slug === slug)!;
  const related = assessments.filter((item) => item.slug !== slug).slice(0, 3);
  const processSteps = [
    "Conversa inicial e levantamento da demanda",
    "Etapas de avaliação e análise profissional",
    "Devolutiva com orientação dos próximos passos",
  ];

  return (
    <article data-lovable-target="assessment-detail" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/avaliacoes"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Todas as avaliações
        </Link>
        <header className="mt-9 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Avaliação psicológica
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground md:text-6xl">
            {assessment.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {assessment.description}
          </p>
        </header>
        <div className="mt-12 grid gap-6 md:grid-cols-[1.35fr_0.65fr]">
          <section className="rounded-2xl border bg-card p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold">Quando pode ser indicada?</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{assessment.indication}</p>
            <h2 className="mt-8 font-display text-2xl font-semibold">Como funciona o processo?</h2>
            <ol className="mt-5 flex flex-col gap-4">
              {processSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-3 text-sm leading-relaxed">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
          <aside className="rounded-2xl bg-sage-light p-6 md:p-8">
            <h2 className="font-display text-xl font-semibold">Temas observados</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {assessment.themes.map((theme) => (
                <li key={theme} className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle2 aria-hidden="true" className="size-4 text-primary" />
                  {theme}
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold">Outras avaliações</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <AssessmentCard key={item.slug} assessment={item} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
