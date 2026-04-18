import { Search, Sparkles, Wrench, Cog, ShieldCheck, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "inspections",
    title: "Inspections & Surveying",
    short: "Inspection sous-marine, relevés techniques, rapports détaillés.",
    description:
      "Inspections visuelles et instrumentées des coques, hélices et structures portuaires. Livraison de rapports techniques certifiés conformes aux standards internationaux.",
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=1200&q=80",
    features: ["Rapport photo HD", "Diagnostic certifié", "Drone & ROV"],
  },
  {
    slug: "nettoyage-coque",
    title: "Nettoyage de coque",
    short: "Nettoyage de carène par ROV ou plongeurs, traitement anti-fouling.",
    description:
      "Nettoyage en eau des carènes pour restaurer les performances hydrodynamiques et réduire la consommation de carburant. Intervention par plongeurs ou robots ROV.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1500627964684-141351970a7f?auto=format&fit=crop&w=1200&q=80",
    features: ["Réduction conso fuel", "Anti-fouling", "Sans cale sèche"],
  },
  {
    slug: "propulsion",
    title: "Propulsion & Hélices",
    short: "Polissage des hélices, optimisation des performances.",
    description:
      "Polissage et équilibrage des hélices pour maximiser la propulsion et minimiser les vibrations. Allonge la durée de vie des arbres et roulements.",
    icon: Cog,
    image:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1200&q=80",
    features: ["Polissage miroir", "Équilibrage", "Audit performance"],
  },
  {
    slug: "reparations",
    title: "Réparations sous-marines",
    short: "Soudure, remplacement d'anodes, colmatage, à flot.",
    description:
      "Interventions de réparation à flot par soudeurs-plongeurs qualifiés : remplacement d'anodes sacrificielles, colmatage de brèches, réparations structurelles.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1200&q=80",
    features: ["Soudure subaquatique", "Anodes", "Réparation à flot"],
  },
  {
    slug: "securite-maritime",
    title: "Sécurité maritime",
    short: "Formation, audit de sécurité, gestion des risques portuaires.",
    description:
      "Audits HSE, formation des équipages, plans de gestion des risques pour terminaux portuaires et armateurs. Conformité réglementaire garantie.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1200&q=80",
    features: ["Audit HSE", "Formation IMO", "Plans d'urgence"],
  },
  {
    slug: "logistique",
    title: "Logistique & Escale",
    short: "Coordination logistique, assistance escale, avitaillement.",
    description:
      "Service complet d'assistance à l'escale : coordination des opérations portuaires, avitaillement, gestion administrative et douanière.",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=80",
    features: ["Ship-chandling", "Douanes", "24/7"],
  },
];

export const PROJECTS = [
  {
    title: "Inspection coque MV Atlantis",
    type: "Inspection",
    region: "Lomé, Togo",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1473042904451-00171c69419d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Nettoyage de carène pétrolier",
    type: "Nettoyage",
    region: "Cotonou, Bénin",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Polissage hélices porte-conteneurs",
    type: "Propulsion",
    region: "Abidjan, CI",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Réparation à flot remorqueur",
    type: "Réparation",
    region: "Lomé, Togo",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Audit sécurité terminal",
    type: "Sécurité",
    region: "Tema, Ghana",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Coordination escale vraquier",
    type: "Logistique",
    region: "Lomé, Togo",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=900&q=80",
  },
];

export const POSTS = [
  {
    slug: "anti-fouling-2025",
    title: "Anti-fouling 2025 : nouvelles normes IMO",
    excerpt:
      "Les armateurs doivent anticiper les nouvelles règles environnementales sur les revêtements de coque.",
    date: "12 mars 2025",
    image:
      "https://images.unsplash.com/photo-1500627964684-141351970a7f?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "rov-inspection",
    title: "ROV : la révolution des inspections sous-marines",
    excerpt:
      "Comment les robots sous-marins divisent par 3 le coût des inspections de routine.",
    date: "28 février 2025",
    image:
      "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "port-lome",
    title: "Le port de Lomé, hub maritime ouest-africain",
    excerpt:
      "Retour sur la croissance fulgurante du premier port en eau profonde de la région.",
    date: "15 février 2025",
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=900&q=80",
  },
];

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1920&q=80";
