import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { PROJECTS } from "@/data/site";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — POSEÏDON MARINE WORK" },
      { name: "description", content: "Portfolio de projets et références clients en services maritimes." },
      { property: "og:title", content: "Nos réalisations — POSEÏDON MARINE WORK" },
      { property: "og:description", content: "Découvrez nos projets récents et témoignages clients." },
    ],
  }),
  component: RealisationsPage,
});

function RealisationsPage() {
  const types = ["Tous", ...Array.from(new Set(PROJECTS.map((p) => p.type)))];
  const [filter, setFilter] = useState("Tous");
  const filtered = filter === "Tous" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portfolio"
        title="Nos réalisations"
        description="Plus de 150 projets livrés à des armateurs, autorités portuaires et logisticiens en Afrique de l'Ouest."
        image="https://images.unsplash.com/photo-1473042904451-00171c69419d?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-page py-16">
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                filter === t
                  ? "bg-deep text-primary-foreground"
                  : "bg-foam text-deep hover:bg-muted"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden bg-card shadow-elegant">
              <div className="relative h-60 overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                <span className="absolute top-3 left-3 bg-gold text-gold-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {p.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-deep">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {p.region} · {p.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-deep text-primary-foreground py-20">
        <div className="container-page text-center">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-3">Témoignages</p>
          <h2 className="text-3xl font-extrabold">Ils nous font confiance</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { q: "Intervention rapide et rapport d'inspection irréprochable. Notre référence sur Lomé.", a: "Capt. M. Diallo, MV Atlantis" },
              { q: "Le nettoyage ROV nous a fait économiser 8% de carburant dès le premier mois.", a: "S. Kone, Armateur" },
              { q: "Une équipe pro et disponible 24/7. Indispensable lors d'une escale critique.", a: "P. Adjovi, Port Autonome" },
            ].map((t) => (
              <blockquote key={t.a} className="bg-white/5 rounded-2xl p-6 text-left border border-white/10">
                <p className="italic text-primary-foreground/90">« {t.q} »</p>
                <footer className="mt-4 text-sm text-gold font-semibold">— {t.a}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
