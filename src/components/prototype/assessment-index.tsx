import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { AssessmentMock } from "@/data/mock-content";

function ReadingPanel({
  assessment,
  showTitle = true,
}: {
  assessment: AssessmentMock;
  showTitle?: boolean;
}) {
  return (
    <div key={assessment.slug} className="animate-drawer-enter">
      {showTitle ? (
        <h3 className="font-display text-2xl font-medium italic leading-snug text-primary md:text-3xl">
          {assessment.title}
        </h3>
      ) : null}
      <p className=" max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
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
  );
}

export function AssessmentIndex({ assessments }: { assessments: AssessmentMock[] }) {
  const [activeSlug, setActiveSlug] = useState(assessments[0]?.slug ?? "");
  const active = assessments.find((item) => item.slug === activeSlug) ?? assessments[0];

  return (
    <div>
      <ol className="border-t">
        {assessments.map((assessment, index) => {
          const isActive = assessment.slug === active?.slug;
          return (
            <li key={assessment.slug} className="border-b">
              <button
                type="button"
                onMouseEnter={() => setActiveSlug(assessment.slug)}
                onFocus={() => setActiveSlug(assessment.slug)}
                onClick={() => setActiveSlug(assessment.slug)}
                aria-expanded={isActive}
                className="group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-baseline gap-4 py-4 text-left transition-[padding,color] duration-300 hover:pl-2 md:py-5"
              >
                <span
                  aria-hidden="true"
                  className={`font-display text-sm tabular-nums transition-colors ${
                    isActive ? "text-accent" : "text-foreground/25"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`truncate font-display text-lg leading-snug transition-colors md:text-xl ${
                    isActive ? "text-primary" : "text-foreground/75"
                  }`}
                >
                  {assessment.title}
                </span>
                <span
                  aria-hidden="true"
                  className={`h-px self-center bg-accent transition-all duration-300 ${
                    isActive ? "w-8 opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </button>

              {/* Painel em acordeão no mobile/tablet */}
              {isActive && active ? (
                <div className="pb-8 lg:hidden">
                  <ReadingPanel assessment={active} showTitle={false} />
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>

      {/* Painel de leitura fixo no desktop */}
      {active ? (
        <div className="mt-10 hidden lg:block">
          <ReadingPanel assessment={active} />
        </div>
      ) : null}
    </div>
  );
}
