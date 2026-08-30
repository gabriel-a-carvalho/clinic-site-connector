import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const primaryItems = [
  { label: "Serviços", href: "/#avaliacoes" },
  { label: "Avaliações", href: "/#avaliacoes" },
  { label: "Equipe", href: "/#equipe" },
  { label: "Metodologia", href: "/#equipe" },
  { label: "Espaço", href: "/#sublocacao" },
];

const moreItems = [
  { label: "Blog", href: "/" },
  { label: "Contato", href: "/#sublocacao" },
  { label: "Sublocação", href: "/#sublocacao" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!moreMenuRef.current?.contains(event.target as Node)) setMoreOpen(false);
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMoreOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setMoreOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      aria-label="Navegação principal"
      className="animate-navbar-enter fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/95 shadow-sm backdrop-blur"
    >
      <div className="relative mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-4 md:px-8">
        <a
          href="/"
          onClick={closeMenus}
          className="flex items-center gap-1 font-display text-2xl font-bold text-primary"
        >
          <img src="/logo-colored.png" alt="" className="h-10 w-auto" />
          <span>Abertamente</span>
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-8">
          {primaryItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div ref={moreMenuRef} className="relative hidden lg:block">
          <button
            type="button"
            onClick={() => setMoreOpen((open) => !open)}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-terracotta-light"
            aria-expanded={moreOpen}
            aria-haspopup="menu"
          >
            Mais
            <ChevronDown
              aria-hidden="true"
              className={`size-4 transition-transform ${moreOpen ? "rotate-180" : ""}`}
            />
          </button>
          {moreOpen ? (
            <div
              role="menu"
              className="animate-drawer-enter absolute right-0 mt-2 w-40 rounded-lg border bg-background p-2 shadow-xl"
            >
              {moreItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  role="menuitem"
                  onClick={closeMenus}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-terracotta-light hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary lg:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-navigation"
          className="animate-drawer-enter border-t bg-background px-4 pb-6 lg:hidden"
        >
          <div className="mx-auto flex max-w-md flex-col py-2">
            {primaryItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenus}
                className="rounded-md py-2.5 text-center font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-3 gap-2 rounded-lg border p-2">
              {moreItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenus}
                  className="rounded-md px-2 py-2 text-center text-xs font-medium text-foreground/70 transition-colors hover:bg-terracotta-light hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
