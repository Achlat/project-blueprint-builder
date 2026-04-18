import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Anchor } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À Propos" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/actualites", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-deep/95 backdrop-blur supports-[backdrop-filter]:bg-deep/80 border-b border-white/10">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 text-primary-foreground">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-gold text-gold-foreground">
            <Anchor className="h-5 w-5" />
          </span>
          <span className="font-display font-extrabold leading-tight tracking-wide">
            POSEÏDON
            <span className="block text-[10px] font-medium tracking-[0.2em] text-gold">
              MARINE WORK
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-gold data-[status=active]:text-gold"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+22890782896"
            className="flex items-center gap-2 text-sm text-primary-foreground/90 hover:text-gold"
          >
            <Phone className="h-4 w-4" />
            +228 90 78 28 96
          </a>
          <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold">
            <Link to="/devis">Demander un devis</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-deep">
          <div className="container-page py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/90 py-1.5 hover:text-gold data-[status=active]:text-gold"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90 mt-2">
              <Link to="/devis" onClick={() => setOpen(false)}>
                Demander un devis
              </Link>
            </Button>
            <a
              href="tel:+22890782896"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 pt-2"
            >
              <Phone className="h-4 w-4" /> +228 90 78 28 96
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
