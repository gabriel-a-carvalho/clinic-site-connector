import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/prototype/section-heading";
import { TeamCard } from "@/components/prototype/team-card";
import { teamMembers } from "@/data/mock-content";

export function PrototypeTeam() {
  return (
    <section
      id="equipe"
      data-lovable-target="team"
      aria-labelledby="team-title"
      className="scroll-mt-24 bg-sage-light/45 px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div id="team-title">
          <SectionHeading
            eyebrow="Equipe"
            title="Nossa"
            italicWord="Equipe"
            description="Profissionais qualificados, acolhedores e comprometidos com seu bem-estar emocional."
          />
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/equipe"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Conhecer toda a equipe <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
