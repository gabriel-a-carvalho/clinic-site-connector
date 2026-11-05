import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { teamMembers, type TeamMember } from "@/data/team-members";
import { cn } from "@/lib/utils";

function Portrait({ member }: { member: TeamMember }) {
  return (
    <Link
      to="/equipe/$slug"
      params={{ slug: member.slug }}
      className="group block"
    >
      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden rounded-[2rem]",
          member.tone,
        )}
      >
        <img
          src={member.photo}
          alt={`Retrato da equipe — ${member.name} (nome fictício)`}
          width={640}
          height={800}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 motion-safe:group-hover:scale-105"
        />
        <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-background/95 px-4 py-3 ring-1 ring-foreground/5 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <h3 className="truncate font-display text-xl text-foreground">{member.name}</h3>
              <p className="mt-1 text-sm text-primary">{member.role}</p>
            </div>
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-accent/30 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-focus-visible:bg-accent group-focus-visible:text-accent-foreground">
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function PrototypeTeam() {
  return (
    <section id="equipe" aria-labelledby="team-title" className="relative overflow-hidden px-4 py-20 md:px-8 md:py-28">
      <span aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 hidden size-[30rem] rounded-full bg-terracotta-light/60 lg:block" />
      <div className="relative mx-auto max-w-6xl">
        <header className="flex justify-center text-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Equipe</p>
            <h2 id="team-title" className="mx-auto mt-5 max-w-lg font-display text-4xl font-semibold leading-[1.08] text-foreground md:text-5xl">
              Nossa&nbsp;<em className="font-medium text-primary">Equipe</em>&nbsp;
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Profissionais qualificados, acolhedores e comprometidos com seu bem-estar emocional.
            </p>
          </div>
        </header>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((m) => <Portrait key={m.slug} member={m} />)}
        </div>
      </div>
    </section>
  );
}
