import { MessageCircle } from "lucide-react";

const PHONE = "22890782896";
const MESSAGE = encodeURIComponent(
  "Bonjour POSEÏDON MARINE WORK, je souhaite obtenir des informations sur vos services maritimes."
);

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-deep hover:scale-110 transition-transform animate-wave"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gold ring-2 ring-deep" />
    </a>
  );
}
