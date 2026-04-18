import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — POSEÏDON MARINE WORK" },
      { name: "description", content: "Inspections, nettoyage de coque, propulsion, réparations sous-marines, sécurité, logistique." },
      { property: "og:title", content: "Services maritimes — POSEÏDON MARINE WORK" },
      { property: "og:description", content: "Notre catalogue complet de prestations maritimes." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Nos services"
        title="Solutions maritimes sur-mesure"
        description="Six pôles d'expertise pour répondre à toutes les exigences opérationnelles de votre flotte ou de votre terminal."
        image="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-page py-20 space-y-16">
        {SERVICES.map((s, i) => (
          <article
            key={s.slug}
            className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
          >
            <div className="lg:[direction:ltr]">
              <img src={s.image} alt={s.title} className="rounded-2xl shadow-elegant w-full h-[360px] object-cover" />
            </div>
            <div className="lg:[direction:ltr]">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-deep text-gold mb-5">
                <s.icon className="h-7 w-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-deep">{s.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.description}</p>
              <ul className="mt-5 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-ocean" />
                    <span className="text-sm font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 bg-deep hover:bg-ocean text-primary-foreground">
                <Link to="/devis">
                  Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
