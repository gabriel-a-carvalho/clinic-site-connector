import { createFileRoute } from "@tanstack/react-router";
import { PrototypeAssessments } from "@/components/sections/prototype-assessments";
import { PrototypeSpaceRental } from "@/components/sections/prototype-space-rental";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <>
      <PrototypeAssessments />
      <PrototypeSpaceRental />
    </>
  );
}
