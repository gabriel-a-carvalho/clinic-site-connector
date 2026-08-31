import { useId, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Brain,
  Fingerprint,
  Focus,
  Lightbulb,
  Waypoints,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { AssessmentMock } from "@/data/mock-content";
import { cn } from "@/lib/utils";

const iconBySlug: Record<string, LucideIcon> = {
  "investigacao-de-tdah": Focus,
  "avaliacao-neuropsicologica": Brain,
  "investigacao-de-tea": Waypoints,
  "avaliacao-de-aprendizagem": BookOpen,
  "avaliacao-de-personalidade": Fingerprint,
  "avaliacao-cognitiva": Lightbulb,
};

export function AssessmentIndex({ assessments }: { assessments: AssessmentMock[] }) {
  const baseId = useId();
  const [openSlug, setOpenSlug] = useState(assessments[0]?.slug ?? "");

  return (
    <ol className="border-y border-foreground/10">
      {assessments.map((assessment) => {
        const isOpen = assessment.slug === openSlug;
        const Icon = iconBySlug[assessment.slug] ?? Brain;
        const panelId = `${baseId}-${assessment.slug}`;

        return (
          <li
            key={assessment.slug}
            className="border-b border-foreground/10 last:border-b-0"
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenSlug(isOpen ? "" : assessment.slug)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="group grid w-full grid-cols-[1.75rem_minmax(0,1fr)_2.5rem] items-center gap-4 py-6 text-left outline-none md:py-7"
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className={cn(
                    "size-[19px] transition-colors duration-300",
                    isOpen
                      ? "text-primary"
                      : "text-foreground/55 group-hover:text-foreground/80 group-focus-visible:text-foreground/80",
                  )}
                />
                <span
                  className={cn(
                    "font-display text-lg leading-snug transition-colors duration-300 md:text-xl",
                    isOpen
                      ? "text-primary"
                      : "text-foreground/80 group-hover:text-foreground group-focus-visible:text-foreground group-focus-visible:underline group-focus-visible:decoration-accent group-focus-visible:decoration-2 group-focus-visible:underline-offset-8",
                  )}
                >
                  {assessment.title}
                </span>
                <span
                  aria-hidden="true"
                  className="relative flex h-5 items-center justify-self-end"
                  style={{ width: 34 }}
                >
                  {/* barra horizontal: vira o traço "−" quando aberto */}
                  <span
                    className={cn(
                      "absolute right-0 h-[2px] rounded-full transition-all duration-300 motion-reduce:transition-none",
                      isOpen ? "w-[34px] bg-accent" : "w-3 bg-foreground/40",
                    )}
                  />
                  {/* barra vertical: some ao abrir, formando o "+" quando fechado */}
                  <span
                    className={cn(
                      "absolute right-[5px] h-3 w-[2px] rounded-full bg-foreground/40 transition-all duration-300 motion-reduce:transition-none",
                      isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100",
                    )}
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              hidden={!isOpen}
              className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-4"
            >
              <div />
              <div className="animate-drawer-enter pb-8 motion-reduce:animate-none">
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {assessment.description}
                </p>
                <p className="mt-4 text-xs leading-relaxed text-foreground/60">
                  {assessment.themes.join(" · ")}
                </p>
                <Link
                  to="/avaliacoes/$slug"
                  params={{ slug: assessment.slug }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary"
                >
                  Mais sobre esta avaliação
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
