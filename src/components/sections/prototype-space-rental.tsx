import { ArrowUpRight, DoorOpen } from "lucide-react";
import { whatsappUrl } from "@/data/mock-content";

export function PrototypeSpaceRental() {
  return (
    <section
      id="sublocacao"
      aria-labelledby="space-rental-title"
      className="relative z-10 -mt-12 translate-y-1/2 px-4 md:-mt-16 md:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl border bg-card px-5 py-7 shadow-[0_18px_44px_-20px_rgba(87,61,52,0.55)] md:px-8 md:py-9">
          <span
            aria-hidden="true"
            className="absolute -top-20 -right-20 size-64 rounded-full bg-sage-light"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-24 right-24 size-48 rounded-full border border-accent/15"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <span className="flex size-8 items-center justify-center rounded-full bg-primary/10">
                <DoorOpen aria-hidden="true" className="size-4" />
              </span>
              Sublocação de salas
            </p>
            <h2
              id="space-rental-title"
              className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl"
            >
              Um espaço acolhedor para quem também cuida.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Também recebemos profissionais que procuram um lugar para realizar seus atendimentos.
              Se tiver interesse, basta entrar em contato.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mx-auto mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-accent px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Saber mais <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
