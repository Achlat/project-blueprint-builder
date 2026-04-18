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
    region: "Lomé",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1473042904451-00171c69419d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Nettoyage de carène pétrolier",
    type: "Nettoyage",
    region: "Cotonou",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Polissage hélices porte-conteneurs",
    type: "Propulsion",
    region: "Abidjan",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Réparation à flot remorqueur",
    type: "Réparation",
    region: "Lomé",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Audit sécurité terminal",
    type: "Sécurité",
    region: "Tema",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Coordination escale vraquier",
    type: "Logistique",
    region: "Lomé",
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
    category: "Réglementation",
    image:
      "https://images.unsplash.com/photo-1500627964684-141351970a7f?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "rov-inspection",
    title: "ROV : la révolution des inspections sous-marines",
    excerpt:
      "Comment les robots sous-marins divisent par 3 le coût des inspections de routine.",
    date: "28 février 2025",
    category: "Technologie",
    image:
      "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "port-lome",
    title: "Le port de Lomé, hub maritime ouest-africain",
    excerpt:
      "Retour sur la croissance fulgurante du premier port en eau profonde de la région.",
    date: "15 février 2025",
    category: "Actualités PMW",
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "securite-plongeurs",
    title: "Sécurité des plongeurs : protocoles HSE en milieu portuaire",
    excerpt:
      "Un guide complet des bonnes pratiques pour garantir la sécurité des équipes en intervention.",
    date: "5 janvier 2025",
    category: "Sécurité",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "digitalisation-maritime",
    title: "Digitalisation du secteur maritime en Afrique de l'Ouest",
    excerpt:
      "Comment les nouvelles technologies transforment les opérations portuaires dans la sous-région.",
    date: "20 décembre 2024",
    category: "Technologie",
    image:
      "https://images.unsplash.com/photo-1473042904451-00171c69419d?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "golfe-guinee-2025",
    title: "Perspectives maritimes 2025 pour le Golfe de Guinée",
    excerpt:
      "Analyse des tendances et opportunités pour les opérateurs maritimes en Afrique de l'Ouest.",
    date: "10 décembre 2024",
    category: "Actualités PMW",
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=900&q=80",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Intervention rapide et rapport d'inspection irréprochable. POSEÏDON est devenu notre référence sur le port de Lomé.",
    author: "Capt. M. Diallo",
    company: "MV Atlantis Shipping",
  },
  {
    quote:
      "Le nettoyage ROV nous a permis d'économiser 8% de carburant dès le premier mois. ROI immédiat, équipe sérieuse.",
    author: "S. Kone",
    company: "Armateur, Abidjan",
  },
  {
    quote:
      "Une équipe professionnelle et disponible 24/7. Indispensable lors d'une escale critique sous contrainte de temps.",
    author: "P. Adjovi",
    company: "Port Autonome de Lomé",
  },
  {
    quote:
      "Audit HSE complet réalisé en 48h avec un rapport actionnable. Équipe certifiée IMO, je recommande vivement.",
    author: "Dr. A. Sow",
    company: "DAKAR Terminal",
  },
];

export const TEAM = [
  {
    name: "Kofi Mensah",
    role: "Directeur Général",
    expertise: "Ingénierie navale • 15 ans d'expérience",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Adjoa Koffi",
    role: "Chef Plongeuse Technique",
    expertise: "Plongée profonde • ROV • Soudure subaquatique",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ibrahim Touré",
    role: "Responsable Sécurité Maritime",
    expertise: "Audit HSE • Certification IMO • Gestion des risques",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Marie-Claire Amavi",
    role: "Coordinatrice Logistique",
    expertise: "Opérations d'escale • Douanes • Ship-chandling",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
];

export const PARTNERS = [
  "Port Autonome de Lomé",
  "Bolloré Logistics",
  "ICTSI",
  "CMA CGM",
  "MSC",
  "Bureau Veritas",
  "DNV",
  "TotalEnergies",
  "ECOWAS",
  "Port de Cotonou",
];

export const TIMELINE = [
  {
    year: "2012",
    title: "Fondation",
    text: "Création de POSEÏDON MARINE WORK par des plongeurs professionnels et ingénieurs navals au Port de Lomé.",
  },
  {
    year: "2015",
    title: "Innovation ROV",
    text: "Acquisition des premiers robots ROV sous-marins de la sous-région ouest-africaine.",
  },
  {
    year: "2018",
    title: "Certification ISO",
    text: "Obtention de la certification ISO 9001:2015 et accréditation IMO. Expansion vers la Côte d'Ivoire.",
  },
  {
    year: "2021",
    title: "Expansion régionale",
    text: "Extension des opérations à 8 pays d'Afrique de l'Ouest, du Sénégal à l'Angola.",
  },
  {
    year: "2024",
    title: "150+ projets",
    text: "Franchissement du cap historique de 150 projets maritimes réalisés avec 25 experts certifiés.",
  },
];

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1920&q=80";
