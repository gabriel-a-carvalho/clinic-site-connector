import { createFileRoute } from "@tanstack/react-router";
import { AssessmentCard } from "@/components/prototype/assessment-card";
import { SectionHeading } from "@/components/prototype/section-heading";
import { assessments } from "@/data/mock-content";

export const Route = createFileRoute("/avaliacoes/")({ component: AssessmentsCatalog });

function AssessmentsCatalog() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Avaliações"
          title="Encontre a avaliação"
          italicWord="adequada"
          description="Esta rota e seus dados estão preparados para o Lovable reconstruir a experiência completa de descoberta e orientação."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {assessments.map((assessment) => (
            <AssessmentCard key={assessment.slug} assessment={assessment} />
          ))}
        </div>
      </div>
    </section>
  );
}
