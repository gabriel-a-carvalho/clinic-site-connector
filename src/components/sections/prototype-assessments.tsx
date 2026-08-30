import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { AssessmentCard } from "@/components/prototype/assessment-card";
import { SectionHeading } from "@/components/prototype/section-heading";
import { assessments } from "@/data/mock-content";

export function PrototypeAssessments() {
  return (
    <section
      id="avaliacoes"
      data-lovable-target="assessments"
      aria-labelledby="assessments-title"
      className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div id="assessments-title">
          <SectionHeading
            eyebrow="Avaliações"
            title="Conheça nossas"
            italicWord="avaliações"
            description="Conheça avaliações para diferentes demandas. Cada processo é conduzido com cuidado e orientação profissional, respeitando cada necessidade."
          />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {assessments.map((assessment) => (
            <AssessmentCard key={assessment.slug} assessment={assessment} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/avaliacoes"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Ver todas as avaliações <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
