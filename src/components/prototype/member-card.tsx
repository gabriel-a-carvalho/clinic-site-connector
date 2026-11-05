import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import EditorialImage from "./profile-image";
import type { TeamMember } from "@/data/team-members";

type MemberCardProps = {
  member: TeamMember;
};

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <Link
      to="/equipe/$slug"
      params={{ slug: member.slug }}
      aria-label={`Conhecer mais sobre ${member.name}`}
      className="group block h-full w-full rounded-[2rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      <article className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary">
        <EditorialImage
          src={member.photo}
          alt={member.photoAlt || member.name}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 motion-safe:group-hover:scale-105 motion-reduce:transition-none"
          fallbackClassName="absolute inset-0 h-full w-full bg-secondary"
        />

        <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-background/95 px-4 py-3 ring-1 ring-foreground/5 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <h3 className="truncate font-display text-xl font-normal tracking-normal text-foreground">
                {member.name}
              </h3>
              {member.role && <p className="mt-1 text-sm text-primary">{member.role}</p>}
            </div>

            <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-accent/30 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-focus-visible:bg-accent group-focus-visible:text-accent-foreground motion-reduce:transition-none">
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MemberCard;
