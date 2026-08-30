import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/prototype/image-placeholder";
import { TeamCard } from "@/components/prototype/team-card";
import { teamMembers, whatsappUrl } from "@/data/mock-content";

export const Route = createFileRoute("/equipe/$slug")({
  beforeLoad: ({ params }) => {
    if (!teamMembers.some((member) => member.slug === params.slug)) throw notFound();
  },
  component: TeamMemberDetail,
});

function TeamMemberDetail() {
  const { slug } = Route.useParams();
  const member = teamMembers.find((item) => item.slug === slug)!;
  const related = teamMembers.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <article data-lovable-target="team-member-detail" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/equipe"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Toda a equipe
        </Link>
        <div className="mt-9 grid overflow-hidden rounded-2xl border bg-card shadow-[0_24px_60px_-45px_rgba(44,36,33,0.8)] md:grid-cols-[0.85fr_1.15fr]">
          <ImagePlaceholder label={member.name} className="min-h-96 md:min-h-[34rem]" />
          <div className="flex flex-col justify-center p-7 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {member.role}
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-6xl">
              {member.name}
            </h1>
            <p className="mt-3 text-sm text-primary">{member.registry}</p>
            <p className="mt-6 leading-relaxed text-muted-foreground">{member.bio}</p>
            <ul className="mt-7 flex flex-col gap-3">
              {member.specialties.map((specialty) => (
                <li key={specialty} className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle2 aria-hidden="true" className="size-4 text-primary" />
                  {specialty}
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-11 w-fit items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-forest"
            >
              Conversar com a clínica
            </a>
          </div>
        </div>
        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold">Outros profissionais</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {related.map((item) => (
              <TeamCard key={item.slug} member={item} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
