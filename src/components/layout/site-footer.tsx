import { Facebook, FlaskConical, Instagram, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  ["Serviços", "/#avaliacoes"],
  ["Avaliações", "/#avaliacoes"],
  ["Equipe", "/#equipe"],
  ["Metodologia", "/#equipe"],
  ["Espaço", "/#sublocacao"],
  ["Blog", "/"],
  ["Contato", "/#sublocacao"],
  ["Sublocação", "/#sublocacao"],
] as const;

const socialItems = [
  {
    label: "Instagram da Clínica Abertamente",
    href: "https://www.instagram.com/clinicaabertamente/",
    icon: Instagram,
  },
  {
    label: "Facebook da Clínica Abertamente",
    href: "https://www.facebook.com/clinicaAbertamente/?locale=pt_BR",
    icon: Facebook,
  },
  {
    label: "LinkedIn da Clínica Abertamente",
    href: "https://www.linkedin.com/company/cl%C3%ADnica-abertamente/",
    icon: Linkedin,
  },
];

export function SiteFooter({ hasOverlappingCta }: { hasOverlappingCta: boolean }) {
  return (
    <footer
      data-site-footer
      className={cn(
        "bg-foreground pb-12 text-primary-foreground",
        hasOverlappingCta ? "pt-52 md:pt-48" : "pt-12",
      )}
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="text-center md:max-w-sm md:text-left">
            <a
              href="/"
              className="flex flex-col items-center font-display text-2xl font-bold text-primary-foreground md:items-start"
            >
              <img src="/logo-white.png" alt="" className="h-14 w-auto lg:mb-1" />
              <span>Clínica Abertamente</span>
            </a>
            <p className="mt-2 mb-3 text-sm text-primary-foreground/50">
              Cuidando da sua saúde mental com acolhimento e profissionalismo.
            </p>
            <div className="flex items-center justify-center gap-3 md:justify-start">
              {socialItems.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/50 transition-colors hover:border-primary-foreground/40 hover:text-primary-foreground"
                >
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-center text-sm md:ml-auto md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-6"
          >
            {navigationItems.map(([label, href], index) => (
              <a
                key={label}
                href={href}
                className={cn(
                  "text-primary-foreground/60 transition-colors hover:text-primary-foreground",
                  index % 2 === 0 ? "md:text-right" : "md:text-left",
                )}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/40">
            © 2026 Clínica Abertamente. Todos os direitos reservados.
          </p>
          <a
            href="https://github.com/gcarvalho-labs"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground"
          >
            Desenvolvido por{" "}
            <span className="flex items-center gap-1 font-medium">
              GCarvalho Labs <FlaskConical aria-hidden="true" className="size-3 text-accent" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
