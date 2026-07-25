import { MessageCircle } from "lucide-react";
import { site } from "../data/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={site.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-red text-white flex items-center justify-center shadow-lg hover:bg-red-dark transition-colors"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  );
}
