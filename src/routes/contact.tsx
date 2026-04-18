import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — POSEÏDON MARINE WORK" },
      { name: "description", content: "Contactez nos équipes maritimes : téléphone, email et formulaire en ligne." },
      { property: "og:title", content: "Contact — POSEÏDON MARINE WORK" },
      { property: "og:description", content: "Joignez-nous : +228 90 78 28 96 — Port autonome de Lomé." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Restons en contact"
        title="Une équipe à votre écoute, 24/7"
        description="Notre équipe répond à toute demande sous 24h ouvrées."
        image="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-page py-16 grid lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          {[
            { i: Phone, t: "Téléphone", v: "+228 90 78 28 96", h: "tel:+22890782896" },
            { i: Mail, t: "Email", v: "contact@poseidonmarine.tg", h: "mailto:contact@poseidonmarine.tg" },
            { i: MapPin, t: "Adresse", v: "Port autonome de Lomé, Togo" },
            { i: Clock, t: "Horaires", v: "Lun–Sam 7h–19h · Urgences 24/7" },
          ].map(({ i: Icon, t, v, h }) => (
            <div key={t} className="bg-card rounded-2xl p-5 shadow-elegant flex gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-deep text-gold shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{t}</p>
                {h ? (
                  <a href={h} className="font-semibold text-deep hover:text-ocean">{v}</a>
                ) : (
                  <p className="font-semibold text-deep">{v}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2">
          {sent ? (
            <div className="bg-card rounded-2xl p-10 shadow-elegant text-center">
              <CheckCircle2 className="h-14 w-14 text-ocean mx-auto mb-4" />
              <h2 className="text-2xl font-extrabold text-deep">Message envoyé</h2>
              <p className="text-muted-foreground mt-2">Nous vous répondons sous 24h ouvrées.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="bg-card rounded-2xl p-8 shadow-elegant space-y-5"
            >
              <h2 className="text-2xl font-extrabold text-deep">Envoyez-nous un message</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstname">Prénom *</Label>
                  <Input id="firstname" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="lastname">Nom *</Label>
                  <Input id="lastname" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" type="tel" className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Sujet *</Label>
                <Input id="subject" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" required rows={5} className="mt-1.5" />
              </div>
              <Button type="submit" size="lg" className="bg-deep hover:bg-ocean text-primary-foreground font-semibold">
                Envoyer le message
              </Button>
            </form>
          )}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-2xl overflow-hidden shadow-elegant border">
          <iframe
            title="Carte Port de Lomé"
            src="https://www.openstreetmap.org/export/embed.html?bbox=1.27%2C6.12%2C1.30%2C6.15&layer=mapnik&marker=6.135%2C1.285"
            className="w-full h-[400px] border-0"
            loading="lazy"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
