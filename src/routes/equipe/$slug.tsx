import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { findTeamMember, teamMembers } from "@/data/team-members";
import { whatsappUrl } from "@/data/mock-content";
import MemberProfile from "@/components/prototype/member-profile";
import MemberCard from "@/components/prototype/member-card";
export const Route = createFileRoute("/equipe/$slug")({
  loader: ({ params }) => {
    const member = findTeamMember(params.slug);
    if (!member) throw notFound();
    return member;
  },
  head: ({ loaderData: m }) => ({
    meta: [
      { title: (m?.name ?? "Equipe") + " | Clínica Abertamente" },
      { name: "description", content: m?.focus ?? "" },
      { property: "og:title", content: (m?.name ?? "Equipe") + " | Clínica Abertamente" },
      { property: "og:description", content: m?.focus ?? "" },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: (m?.name ?? "Equipe") + " | Clínica Abertamente" },
      { name: "twitter:description", content: m?.focus ?? "" },
    ],
  }),
  component: ProfilePage,
});
function ProfilePage() {
  const member = Route.useLoaderData();
  const others = teamMembers.filter((m) => m.slug !== member.slug).slice(0, 3);
  const url = new URL(whatsappUrl);
  url.searchParams.set(
    "text",
    "Olá! Gostaria de saber mais sobre a disponibilidade de " + member.name + ".",
  );
  const availabilityUrl = url.toString();
  return (
    <div className="px-4 pb-24 pt-10 md:px-8">
      <article className="mx-auto max-w-[58rem]">
        <MemberProfile
          member={member}
          biography={member.biography}
          availabilityUrl={availabilityUrl}
        />

        <section
          className="mt-16"
          aria-labelledby={others.length > 0 ? "related-team-title" : undefined}
        >
          <div className="flex flex-wrap items-end justify-between gap-6">
            {others.length > 0 && (
              <h2
                id="related-team-title"
                className="font-display text-2xl font-semibold tracking-[-0.025em] [text-wrap:balance]"
              >
                Outros profissionais
              </h2>
            )}
            <Link
              to="/"
              hash="equipe"
              className="group ml-auto inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              <ArrowLeft
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
              />
              Toda a equipe
            </Link>
          </div>

          {others.length > 0 && (
            <div className="mt-5 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((relatedMember) => (
                <MemberCard key={relatedMember.id} member={relatedMember} />
              ))}
            </div>
          )}
        </section>
      </article>
    </div>
  );
}
