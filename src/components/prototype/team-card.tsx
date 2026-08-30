import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { TeamMemberMock } from "@/data/mock-content";
import { ImagePlaceholder } from "@/components/prototype/image-placeholder";

export function TeamCard({ member }: { member: TeamMemberMock }) {
  return (
    <article className="group overflow-hidden rounded-xl border bg-card shadow-[0_18px_38px_-30px_rgba(44,36,33,0.75)]">
      <ImagePlaceholder
        label={member.name}
        className="aspect-[4/5] min-h-0 transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="flex items-start justify-between gap-3 p-5">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
          <p className="mt-1 text-sm text-primary">{member.role}</p>
        </div>
        <Link
          to="/equipe/$slug"
          params={{ slug: member.slug }}
          aria-label={`Conhecer ${member.name}`}
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </article>
  );
}
