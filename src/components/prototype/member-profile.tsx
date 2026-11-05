import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  Share2,
} from "lucide-react";
import EditorialImage, { SafeImage } from "./profile-image";

import type { TeamMember } from "@/data/team-members";

type MemberProfileProps = {
  member: TeamMember;
  biography: string;
  availabilityUrl: string;
};

const socialFallbackIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
};

function MemberSocialLinks({ member }: { member: TeamMember }) {
  if (!member.socialLinks?.length) {
    return null;
  }

  return (
    <div className="mt-3 flex flex-wrap items-center gap-1.5" aria-label="Redes sociais">
      {member.socialLinks.map((socialLink) => {
        const SocialIcon =
          socialFallbackIcons[
            socialLink.sourceId.toLowerCase() as keyof typeof socialFallbackIcons
          ] ?? Share2;

        const icon = (
          <SafeImage
            src={socialLink.icon?.url}
            alt=""
            className="size-3.5"
            fallback={<SocialIcon aria-hidden="true" className="size-3.5" />}
          />
        );
        const className =
          "inline-flex size-8 items-center justify-center rounded-full border border-primary/45 text-primary transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary active:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

        return socialLink.url ? (
          <a
            key={socialLink.sourceId}
            href={socialLink.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${socialLink.label} de ${member.name}`}
            className={className}
          >
            {icon}
          </a>
        ) : (
          <span
            key={socialLink.sourceId}
            role="img"
            aria-label={`${socialLink.label} de ${member.name} (indisponível)`}
            className={className}
          >
            {icon}
          </span>
        );
      })}
    </div>
  );
}

export default function MemberProfile({ member, biography, availabilityUrl }: MemberProfileProps) {
  const biographyParagraphs = biography
    .split(/\r?\n\s*\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <section
      aria-labelledby="member-profile-name"
      className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6 lg:p-8"
    >
      <div className="grid gap-6 md:grid-cols-[16.5rem_minmax(0,1fr)] lg:gap-8">
        <div className="relative mx-auto aspect-square w-full max-w-[16.5rem] self-start overflow-hidden rounded-2xl bg-secondary md:aspect-[4/5] md:max-w-none">
          <EditorialImage
            src={member.photo}
            alt={member.photoAlt || member.name}
            className="absolute inset-0 h-full w-full object-cover object-[50%_38%]"
            fallbackClassName="absolute inset-0 h-full w-full bg-secondary"
            loading="eager"
          />
        </div>
        <div className="flex min-w-0 flex-col">
          <header>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              {member.role}
            </p>
            <h1
              id="member-profile-name"
              className="mt-2 break-words font-display tracking-[-0.025em] [text-wrap:balance] text-[32px] font-semibold leading-[1.12] text-foreground sm:text-4xl lg:text-[40px]"
            >
              {member.name}
            </h1>
            {member.crp && (
              <p className="mt-2.5 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground">
                <BadgeCheck aria-hidden="true" className="size-3.5 shrink-0 text-primary" />
                {member.crp}
              </p>
            )}
            <MemberSocialLinks member={member} />
          </header>

          {member.specialties.length > 0 && (
            <section aria-labelledby="member-specialties-title" className="mt-4">
              <h2
                id="member-specialties-title"
                className="font-body text-sm font-medium tracking-normal text-foreground"
              >
                Áreas de atuação
              </h2>
              <ul
                className="mt-3 grid auto-cols-fr grid-flow-col gap-x-4 gap-y-2"
                style={{
                  gridTemplateRows: `repeat(${Math.min(member.specialties.length, 3)}, auto)`,
                }}
              >
                {member.specialties.map((specialty) => (
                  <li
                    key={specialty.id}
                    className="flex min-w-0 items-start gap-2 text-sm leading-5 text-muted-foreground"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-3.5 shrink-0 text-primary"
                    />
                    <span className="min-w-0 break-words">{specialty.title}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <div className="mt-auto pt-5">
            <a
              href={availabilityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 w-fit items-center justify-center gap-2 rounded-lg border border-accent bg-transparent px-5 py-2.5 text-sm font-normal text-accent transition-colors hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Ver disponibilidade
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3.5 text-[14.5px] leading-[1.75] text-foreground/75 sm:text-[15px]">
        {biographyParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
