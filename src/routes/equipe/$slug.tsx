import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  CircleCheck,
  Instagram,
  Linkedin,
} from "lucide-react";
import { findTeamMember, teamMembers, type TeamMember } from "@/data/team-members";
import { whatsappUrl } from "@/data/mock-content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/equipe/$slug")({
  loader: ({ params }) => {
    const member = findTeamMember(params.slug);
    if (!member) throw notFound();
    return member;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Equipe"} | Clínica Abertamente` },
      {
        name: "description",
        content: `${loaderData?.name ?? "Profissional"} — ${loaderData?.role ?? "Equipe"} na Clínica Abertamente. ${loaderData?.focus ?? ""}`,
      },
      { property: "og:title", content: `${loaderData?.name ?? "Equipe"} | Clínica Abertamente` },
      {
        property: "og:description",
        content: `${loaderData?.role ?? "Equipe"} — ${loaderData?.focus ?? ""}`,
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MemberProfile,
});

function MemberProfile() {
  const member = Route.useLoaderData();
  const others = teamMembers.filter((m) => m.slug !== member.slug).slice(0, 3);

  return (
    <>
      <ProfileHero member={member} />
      <ProfileBio member={member} />
      <OtherMembers others={others} />
    </>
  );
}

function BackLink({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      hash="equipe"
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
        className,
      )}
    >
      <ArrowLeft
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
      />
      Toda a equipe
    </Link>
  );
}

function ProfileHero({ member }: { member: TeamMember }) {
  return (
    <section aria-labelledby="member-name" className="relative overflow-hidden px-4 pt-14 pb-16 md:px-8 md:pt-20 md:pb-24">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-24 hidden size-[28rem] rounded-full bg-sage-light/70 lg:block"
      />
      <div className="relative mx-auto max-w-6xl">
        <BackLink />
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className={cn("relative aspect-[4/5] overflow-hidden rounded-[2.5rem]", member.tone)}>
            <img
              src={member.photo}
              alt={`Retrato de ${member.name}`}
              width={640}
              height={800}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>

          <div className="flex flex-col lg:pt-6">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">{member.role}</p>
            <h1
              id="member-name"
              className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-foreground md:text-6xl"
            >
              {member.name}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
                <BadgeCheck aria-hidden="true" className="size-3.5 text-primary" />
                {member.crp}
              </p>
              <ul className="flex items-center gap-2" aria-label={`Redes sociais de ${member.name}`}>
                {member.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="flex size-10 items-center justify-center rounded-full border border-primary/25 text-primary transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {social.label === "Instagram" ? (
                        <Instagram aria-hidden="true" className="size-4" />
                      ) : (
                        <Linkedin aria-hidden="true" className="size-4" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <h2 className="text-sm font-semibold text-foreground">Áreas de atuação</h2>
              <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {member.areas.map((area) => (
                  <li key={area} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <CircleCheck aria-hidden="true" className="size-4 shrink-0 text-primary" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-accent/40 px-6 py-3.5 text-sm font-medium text-accent transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                Ver disponibilidade
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileBio({ member }: { member: TeamMember }) {
  return (
    <section aria-label={`Sobre ${member.name}`} className="px-4 pb-20 md:px-8 md:pb-28">
      <div className="mx-auto max-w-3xl">
        <div className="space-y-10">
          {member.bio.map((section, index) => (
            <div key={section.heading ?? `intro-${index}`}>
              {section.heading ? (
                <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                  {section.heading}
                </h2>
              ) : null}
              <div className={cn("space-y-5", section.heading ? "mt-4" : undefined)}>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
              {index === 0 ? (
                <blockquote className="mt-10 border-l-2 border-accent pl-6">
                  <p className="font-display text-xl italic leading-snug text-foreground md:text-2xl">
                    “{member.quote}”
                  </p>
                </blockquote>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OtherMembers({ others }: { others: TeamMember[] }) {
  return (
    <section aria-labelledby="others-title" className="relative overflow-hidden px-4 pb-24 md:px-8 md:pb-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 hidden size-[26rem] rounded-full bg-terracotta-light/60 lg:block"
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="others-title" className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            Outros <em className="font-medium text-primary">profissionais</em>
          </h2>
          <BackLink />
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((member) => (
            <Link
              key={member.slug}
              to="/equipe/$slug"
              params={{ slug: member.slug }}
              className="group block"
            >
              <div className={cn("relative aspect-[4/5] overflow-hidden rounded-[2rem]", member.tone)}>
                <img
                  src={member.photo}
                  alt={`Retrato de ${member.name}`}
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
          ))}
        </div>
      </div>
    </section>
  );
}
