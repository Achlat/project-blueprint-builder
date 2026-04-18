import { Link } from "@tanstack/react-router";
import { Anchor, Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-deep text-primary-foreground mt-20">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-gold text-gold-foreground">
              <Anchor className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display font-extrabold">POSEÏDON</p>
              <p className="text-[10px] tracking-[0.2em] text-gold">MARINE WORK</p>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70">
            Solutions maritimes professionnelles : inspections, nettoyage de coque,
            réparations sous-marines et logistique portuaire.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-gold">Navigation</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-gold">Accueil</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/a-propos" className="hover:text-gold">À Propos</Link></li>
            <li><Link to="/realisations" className="hover:text-gold">Réalisations</Link></li>
            <li><Link to="/actualites" className="hover:text-gold">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold" /> +228 90 78 28 96</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold" /> contact@poseidonmarine.tg</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> Port autonome de Lomé, Togo</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-gold">Suivez-nous</h4>
          <div className="flex gap-3">
            {[Linkedin, Facebook, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition-colors"
                aria-label="Réseau social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <Link
            to="/devis"
            className="inline-block mt-6 text-sm font-semibold text-gold hover:underline"
          >
            → Demander un devis
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} POSEÏDON MARINE WORK. Tous droits réservés.</p>
          <p>Mentions légales · Politique de confidentialité</p>
        </div>
      </div>
    </footer>
  );
}
