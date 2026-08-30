import { useEffect, useState } from "react";
import { whatsappUrl } from "@/data/mock-content";

function WhatsAppMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="size-7 fill-current">
      <path d="M16.04 3.2A12.75 12.75 0 0 0 5.1 22.5L3.2 29.4l7.06-1.85a12.75 12.75 0 1 0 5.78-24.35Zm0 2.16a10.58 10.58 0 0 1 9.14 15.92 10.57 10.57 0 0 1-13.76 4.12l-.5-.3-4.2 1.1 1.12-4.08-.33-.52A10.59 10.59 0 0 1 16.04 5.36Zm-5.43 4.63c-.27 0-.7.1-1.07.5-.37.4-1.4 1.36-1.4 3.32s1.43 3.85 1.63 4.12c.2.27 2.8 4.28 6.8 6 .95.4 1.7.66 2.28.84.96.3 1.83.26 2.52.16.77-.12 2.37-.97 2.7-1.9.34-.94.34-1.74.24-1.91-.1-.17-.37-.27-.77-.47-.4-.2-2.37-1.17-2.74-1.3-.37-.14-.64-.2-.9.2-.27.4-1.04 1.3-1.27 1.57-.23.27-.47.3-.87.1-.4-.2-1.69-.62-3.21-1.98a12.01 12.01 0 0 1-2.23-2.78c-.23-.4-.02-.62.18-.82.18-.18.4-.47.6-.7.2-.24.27-.4.4-.67.13-.27.07-.5-.03-.7-.1-.2-.9-2.18-1.24-2.98-.32-.78-.65-.68-.9-.69h-.74Z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const [footerNear, setFooterNear] = useState(false);
  useEffect(() => {
    const footer = document.querySelector("[data-site-footer]");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setFooterNear(entry.isIntersecting), {
      rootMargin: "0px 0px -24px 0px",
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50">
      <div className="mx-auto flex max-w-[1400px] justify-end px-4 md:px-8">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Conversar pelo WhatsApp"
          aria-hidden={footerNear}
          tabIndex={footerNear ? -1 : undefined}
          className={`relative flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${footerNear ? "pointer-events-none translate-y-3 scale-0 opacity-0" : "pointer-events-auto translate-y-0 scale-100 opacity-100"}`}
        >
          <span
            aria-hidden="true"
            className="animate-whatsapp-ring absolute inset-0 rounded-full bg-whatsapp"
          />
          <span className="relative">
            <WhatsAppMark />
          </span>
        </a>
      </div>
    </div>
  );
}
