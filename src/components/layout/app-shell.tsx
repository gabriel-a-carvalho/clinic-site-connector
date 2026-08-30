import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-[72px]">{children}</main>
      <SiteFooter hasOverlappingCta={pathname === "/"} />
      <WhatsAppButton />
    </div>
  );
}
