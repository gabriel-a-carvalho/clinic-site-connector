import { ArrowLeft, ArrowUpRight, CheckCircle2, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/prototype/image-placeholder";
import { TeamCard } from "@/components/prototype/team-card";
import { teamMembers } from "@/data/mock-content";

const mockSocialLinks = [
  { label: "Instagram", icon: Instagram },
  { label: "Facebook", icon: Facebook },
  { label: "LinkedIn", icon: Linkedin },
];

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
            <div className="mt-8 flex items-center gap-3" aria-label="Redes sociais de exemplo">
              {mockSocialLinks.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={`${label} de ${member.name} (conteúdo de demonstração)`}
                  title={`${label} — conteúdo de demonstração`}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-primary/45 text-primary transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <Icon aria-hidden="true" className="size-4" />
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label={`Ver disponibilidade de ${member.name} pelo WhatsApp (ação de demonstração)`}
              title="Ação de demonstração — futuramente abrirá o WhatsApp"
              data-mock-action="future-whatsapp-availability"
              className="mt-8 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Ver disponibilidade
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </button>
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
