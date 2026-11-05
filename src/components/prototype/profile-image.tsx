import type { ReactNode } from "react";
export function SafeImage({
  src,
  alt,
  className,
  fallback,
}: {
  src?: string | null | undefined;
  alt: string;
  className: string;
  fallback?: ReactNode;
}) {
  return src ? <img src={src} alt={alt} className={className} /> : fallback;
}
export default function EditorialImage({
  src,
  alt,
  className,
  loading = "lazy",
}: {
  src?: string | null | undefined;
  alt: string;
  className: string;
  loading?: "eager" | "lazy";
  fallbackClassName?: string;
}) {
  return src ? (
    <img src={src} alt={alt} className={className} loading={loading} />
  ) : (
    <div role="img" aria-label={alt} className={className} />
  );
}
