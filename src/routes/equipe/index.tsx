import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/prototype/section-heading";
import { TeamCard } from "@/components/prototype/team-card";
import { teamMembers } from "@/data/mock-content";

export const Route = createFileRoute("/equipe/")({ component: TeamCatalog });

function TeamCatalog() {
  return (
    <section
      data-lovable-target="team-catalog"
      className="bg-sage-light/35 px-4 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Equipe"
          title="Encontre um cuidado"
          italicWord="próximo"
          description="Esta rota está preparada para o Lovable criar a experiência completa de descoberta dos profissionais."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
