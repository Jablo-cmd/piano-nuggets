import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";

/** Floating WhatsApp shortcut. Renders nothing until an official number is configured. */
export function WhatsAppButton() {
  const href = whatsappLink();
  if (!href) return null;
  return (
    <a
      href={href}
      aria-label="Chat with Piano Nuggets on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex h-14 items-center gap-2 rounded-full border-2 border-brand-ink bg-brand-honey px-4 font-bold text-brand-ink shadow-lift transition hover:-translate-y-0.5 sm:px-5"
    >
      <MessageCircle aria-hidden className="h-6 w-6" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
