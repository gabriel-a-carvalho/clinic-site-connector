import { createFileRoute } from "@tanstack/react-router";
import { PrototypeAssessments } from "@/components/sections/prototype-assessments";
import { PrototypeSpaceRental } from "@/components/sections/prototype-space-rental";
import { PrototypeTeam } from "@/components/sections/prototype-team";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Abertamente | Cuidado e acolhimento" },
      { name: "description", content: "Conheça a equipe, as avaliações e os espaços da Clínica Abertamente." },
      { property: "og:title", content: "Clínica Abertamente | Cuidado e acolhimento" },
      { property: "og:description", content: "Conheça a equipe, as avaliações e os espaços da Clínica Abertamente." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <>
      <PrototypeAssessments />
      <PrototypeTeam />
      <PrototypeSpaceRental />
    </>
  );
}
