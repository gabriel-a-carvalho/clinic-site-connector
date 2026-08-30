import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImagePlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex min-h-52 flex-col items-center justify-center gap-3 bg-sage-light text-primary",
        className,
      )}
      role="img"
      aria-label={`Espaço reservado para imagem de ${label}`}
    >
      <span className="flex size-12 items-center justify-center rounded-full border border-primary/15 bg-background/80">
        <ImageIcon aria-hidden="true" />
      </span>
      <span className="px-5 text-center text-xs font-medium text-primary/70">
        Imagem de {label}
      </span>
    </div>
  );
}
