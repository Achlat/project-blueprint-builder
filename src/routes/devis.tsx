import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES } from "@/data/site";

export const Route = createFileRoute("/devis")({
  head: () => ({
    meta: [
      { title: "Demander un devis — POSEÏDON MARINE WORK" },
      { name: "description", content: "Recevez un devis personnalisé sous 48h pour vos besoins en services maritimes." },
      { property: "og:title", content: "Devis maritime gratuit — POSEÏDON MARINE WORK" },
      { property: "og:description", content: "Devis personnalisé sous 48h." },
    ],
  }),
  component: DevisPage,
});

function DevisPage() {
  const [sent, setSent] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (s: string) =>
    setSelected((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  if (sent) {
    return (
      <SiteLayout>
        <section className="container-page py-32 text-center">
          <CheckCircle2 className="h-16 w-16 text-ocean mx-auto mb-6" />
          <h1 className="text-3xl font-extrabold text-deep">Demande envoyée !</h1>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Merci pour votre confiance. Nos équipes vous recontactent sous 48h ouvrées avec un devis personnalisé.
          </p>
          <Button onClick={() => setSent(false)} className="mt-8 bg-deep hover:bg-ocean">
            Nouvelle demande
          </Button>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Devis en ligne"
        title="Recevez un devis sous 48h"
        description="Décrivez votre besoin, nos experts maritimes vous répondent rapidement."
        image="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-page py-16 max-w-3xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="bg-card rounded-2xl p-8 shadow-elegant space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company">Entreprise *</Label>
              <Input id="company" required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="name">Nom complet *</Label>
              <Input id="name" required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="phone">Téléphone *</Label>
              <Input id="phone" type="tel" required className="mt-1.5" />
            </div>
          </div>

          <div>
            <Label>Services concernés *</Label>
            <div className="mt-2 grid sm:grid-cols-2 gap-2">
              {SERVICES.map((s) => (
                <button
                  type="button"
                  key={s.slug}
                  onClick={() => toggle(s.slug)}
                  className={`text-left px-4 py-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                    selected.includes(s.slug)
                      ? "border-deep bg-deep text-primary-foreground"
                      : "border-input hover:border-ocean"
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="vessel">Type de navire</Label>
              <Input id="vessel" placeholder="ex. porte-conteneurs" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="port">Port d'intervention</Label>
              <Input id="port" placeholder="ex. Lomé, Togo" className="mt-1.5" />
            </div>
          </div>

          <div>
            <Label htmlFor="message">Détails du projet *</Label>
            <Textarea
              id="message"
              required
              rows={5}
              placeholder="Décrivez votre besoin, échéance, contraintes…"
              className="mt-1.5"
            />
          </div>

          <Button type="submit" size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold w-full sm:w-auto">
            Envoyer la demande
          </Button>

          <p className="text-xs text-muted-foreground">
            En envoyant ce formulaire, vous acceptez d'être recontacté par POSEÏDON MARINE WORK.
          </p>
        </form>
      </section>
    </SiteLayout>
  );
}
