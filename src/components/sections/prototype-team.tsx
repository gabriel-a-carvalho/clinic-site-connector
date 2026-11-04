import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/data/mock-content";
import { cn } from "@/lib/utils";

type Member = { name: string; role: string; focus: string; tone: string };

const team: Member[] = [
  { name: "Kawana Silva", role: "Psicóloga Clínica", focus: "Adolescentes e adultos", tone: "bg-sage-light" },
  { name: "Luana Aires", role: "Psicóloga Clínica", focus: "Avaliação neuropsicológica", tone: "bg-terracotta-light" },
  { name: "Mariana Sartorelli", role: "Psicóloga Clínica", focus: "Terapia de casal e família", tone: "bg-warm" },
  { name: "Maria Leticia", role: "Psicóloga Clínica", focus: "Infância e desenvolvimento", tone: "bg-warm" },
  { name: "Layna Gimenes", role: "Psicóloga Clínica", focus: "Ansiedade e autoconhecimento", tone: "bg-sage-light" },
  { name: "Gabriel Naim", role: "Psicólogo Clínico", focus: "Investigação de TDAH e TEA", tone: "bg-terracotta-light" },
];

const initials = (n: string) => n.split(" ").map((p) => p[0]).slice(0, 2).join("");

function Portrait({ member, index }: { member: Member; index: number }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className={cn("group block", index % 3 === 1 && "lg:mt-16", index % 3 === 2 && "lg:mt-8")}
    >
      <div
        role="img"
        aria-label={`Retrato de ${member.name}`}
        className={cn(
          "relative aspect-[4/5] overflow-hidden rounded-[2rem] rounded-tl-[6rem] transition-[border-radius] duration-500 group-hover:rounded-tl-[2rem]",
          member.tone,
        )}
      >
        <span className="absolute inset-0 flex items-center justify-center font-display text-7xl italic text-primary/25 transition-transform duration-700 group-hover:scale-110">
          {initials(member.name)}
        </span>
        <span className="absolute -right-10 -bottom-10 size-40 rounded-full border border-primary/10" />
        <span className="absolute top-5 right-5 font-display text-sm text-foreground/40">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="absolute inset-x-4 bottom-4 translate-y-3 rounded-2xl bg-background/90 px-4 py-3 opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-accent">Atende</p>
          <p className="mt-1 text-sm text-foreground">{member.focus}</p>
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4 px-1">
        <div className="min-w-0">
          <h3 className="truncate font-display text-xl text-foreground">{member.name}</h3>
          <p className="mt-1 text-sm text-primary">{member.role}</p>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-accent/30 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </span>
      </div>
    </a>
  );
}

export function PrototypeTeam() {
  return (
    <section id="equipe" aria-labelledby="team-title" className="relative overflow-hidden px-4 py-20 md:px-8 md:py-28">
      <span aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 hidden size-[30rem] rounded-full bg-terracotta-light/60 lg:block" />
      <div className="relative mx-auto max-w-6xl">
        <header className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Equipe</p>
            <h2 id="team-title" className="mt-5 max-w-lg font-display text-4xl font-semibold leading-[1.08] text-foreground md:text-5xl">
              Pessoas que <em className="font-medium text-primary">escutam</em> antes de qualquer resposta.
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
              Profissionais qualificados, acolhedores e comprometidos com o seu bem-estar emocional — cada um com um olhar próprio, todos com o mesmo cuidado.
            </p>
            <dl className="mt-6 flex gap-10 border-t border-foreground/10 pt-5">
              <div><dt className="text-xs text-muted-foreground">Psicólogos</dt><dd className="font-display text-3xl text-primary">06</dd></div>
              <div><dt className="text-xs text-muted-foreground">Abordagens</dt><dd className="font-display text-3xl text-primary">04</dd></div>
            </dl>
          </div>
        </header>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => <Portrait key={m.name} member={m} index={i} />)}
        </div>
      </div>
    </section>
  );
}
