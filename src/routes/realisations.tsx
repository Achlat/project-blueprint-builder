import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { PROJECTS, TESTIMONIALS } from "@/data/site";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — POSEÏDON MARINE WORK" },
      {
        name: "description",
        content:
          "Portfolio de projets et références clients en services maritimes.",
      },
      {
        property: "og:title",
        content: "Nos réalisations — POSEÏDON MARINE WORK",
      },
      {
        property: "og:description",
        content: "Découvrez nos projets récents et témoignages clients.",
      },
    ],
  }),
  component: RealisationsPage,
});

function RealisationsPage() {
  const types = ["Tous", ...Array.from(new Set(PROJECTS.map((p) => p.type)))];
  const regions = ["Toutes", ...Array.from(new Set(PROJECTS.map((p) => p.region)))];
  const years = ["Toutes", ...Array.from(new Set(PROJECTS.map((p) => String(p.year)))).sort((a, b) => Number(b) - Number(a))];

  const [typeFilter, setTypeFilter] = useState("Tous");
  const [regionFilter, setRegionFilter] = useState("Toutes");
  const [yearFilter, setYearFilter] = useState("Toutes");

  const filtered = PROJECTS.filter((p) => {
    if (typeFilter !== "Tous" && p.type !== typeFilter) return false;
    if (regionFilter !== "Toutes" && p.region !== regionFilter) return false;
    if (yearFilter !== "Toutes" && String(p.year) !== yearFilter) return false;
    return true;
  });

  const resetFilters = () => {
    setTypeFilter("Tous");
    setRegionFilter("Toutes");
    setYearFilter("Toutes");
  };

  const hasActiveFilters =
    typeFilter !== "Tous" || regionFilter !== "Toutes" || yearFilter !== "Toutes";

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portfolio"
        title="Nos réalisations"
        description="Plus de 150 projets livrés à des armateurs, autorités portuaires et logisticiens en Afrique de l'Ouest."
        image="https://images.unsplash.com/photo-1473042904451-00171c69419d?auto=format&fit=crop&w=1920&q=80"
      />

      {/* ── FILTRES ── */}
      <section className="container-page pt-14 pb-4 space-y-4">
        {/* Type */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide w-16 shrink-0">
            Type
          </span>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                typeFilter === t
                  ? "bg-deep text-primary-foreground border-deep"
                  : "bg-card text-deep border-border hover:border-deep/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Région */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide w-16 shrink-0">
            Région
          </span>
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setRegionFilter(r)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                regionFilter === r
                  ? "bg-ocean text-primary-foreground border-ocean"
                  : "bg-card text-deep border-border hover:border-ocean/40"
              }`}
            >
              {r !== "Toutes" && <MapPin className="h-3 w-3" />}
              {r}
            </button>
          ))}
        </div>

        {/* Année */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide w-16 shrink-0">
            Année
          </span>
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setYearFilter(y)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                yearFilter === y
                  ? "bg-gold text-gold-foreground border-gold"
                  : "bg-card text-deep border-border hover:border-gold/40"
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="text-xs text-ocean font-semibold hover:underline"
          >
            ✕ Réinitialiser les filtres
          </button>
        )}
      </section>

      {/* ── GRILLE ── */}
      <section className="container-page py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg font-semibold">Aucun projet trouvé</p>
            <p className="text-sm mt-1">Modifiez vos filtres pour voir plus de résultats.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article
                key={p.title}
                className="group rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 left-3 bg-gold text-gold-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {p.type}
                  </span>
                  <span className="absolute top-3 right-3 bg-deep/80 text-primary-foreground/80 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                    {p.year}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-deep leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    {p.region}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="bg-deep text-primary-foreground py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] text-gold uppercase mb-3">
              Témoignages
            </p>
            <h2 className="text-3xl font-extrabold">Ils nous font confiance</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.author}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/8 hover:border-gold/30 transition-all duration-300 flex flex-col"
              >
                <Quote className="h-6 w-6 text-gold mb-3 shrink-0" />
                <p className="italic text-primary-foreground/85 text-sm leading-relaxed flex-1">
                  « {t.quote} »
                </p>
                <footer className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm font-semibold text-gold">{t.author}</p>
                  <p className="text-xs text-primary-foreground/60 mt-0.5">
                    {t.company}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
