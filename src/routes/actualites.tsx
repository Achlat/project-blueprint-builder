import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { POSTS } from "@/data/site";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Blog & Actualités — POSEÏDON MARINE WORK" },
      {
        name: "description",
        content:
          "Articles, news sectorielles et mises à jour du secteur maritime.",
      },
      {
        property: "og:title",
        content: "Blog maritime — POSEÏDON MARINE WORK",
      },
      {
        property: "og:description",
        content: "Toute l'actualité du secteur maritime ouest-africain.",
      },
    ],
  }),
  component: BlogPage,
});

const CATEGORIES = [
  "Tous",
  "Technologie",
  "Sécurité",
  "Réglementation",
  "Actualités PMW",
];

const CATEGORY_COLORS: Record<string, string> = {
  Technologie: "bg-ocean/10 text-ocean border-ocean/30",
  Sécurité: "bg-red-50 text-red-600 border-red-200",
  Réglementation: "bg-amber-50 text-amber-700 border-amber-200",
  "Actualités PMW": "bg-gold/10 text-deep border-gold/40",
};

function BlogPage() {
  const [filter, setFilter] = useState("Tous");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered =
    filter === "Tous" ? POSTS : POSTS.filter((p) => p.category === filter);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Le blog"
        title="Actualités & expertise maritime"
        description="Veille sectorielle, retours d'expérience et innovations du monde maritime."
        image="https://images.unsplash.com/photo-1500627964684-141351970a7f?auto=format&fit=crop&w=1920&q=80"
      />

      {/* ── FILTRES CATÉGORIES ── */}
      <section className="container-page pt-14 pb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                filter === cat
                  ? "bg-deep text-primary-foreground border-deep shadow-md"
                  : "bg-card text-deep border-border hover:border-deep/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── GRILLE ARTICLES ── */}
      <section className="container-page py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 ? (
          <div className="col-span-3 text-center py-20 text-muted-foreground">
            Aucun article dans cette catégorie.
          </div>
        ) : (
          filtered.map((p) => (
            <article
              key={p.slug}
              className="group rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full border ${
                    CATEGORY_COLORS[p.category] ?? "bg-foam text-deep border-border"
                  }`}
                >
                  {p.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs text-ocean font-semibold uppercase tracking-wide">
                  {p.date}
                </p>
                <h2 className="text-lg font-bold text-deep mt-2 leading-snug">
                  {p.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-2 flex-1 leading-relaxed">
                  {p.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1 text-deep font-semibold text-sm hover:text-ocean transition-colors"
                >
                  Lire l'article <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))
        )}
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="bg-foam py-16">
        <div className="container-page max-w-2xl mx-auto text-center">
          <div className="bg-deep rounded-3xl p-10 shadow-deep relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.50_0.12_234/0.35)_0%,transparent_60%)]" />
            <div className="relative z-10">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-gold-foreground mx-auto mb-5">
                <Mail className="h-7 w-7" />
              </div>

              {subscribed ? (
                <div className="animate-fade-in">
                  <CheckCircle2 className="h-12 w-12 text-gold mx-auto mb-4" />
                  <h2 className="text-2xl font-extrabold text-primary-foreground">
                    Merci pour votre inscription !
                  </h2>
                  <p className="text-primary-foreground/75 mt-2 text-sm">
                    Vous recevrez nos prochaines actualités maritimes directement
                    dans votre boîte mail.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-extrabold text-primary-foreground">
                    Restez informé
                  </h2>
                  <p className="text-primary-foreground/75 mt-2 text-sm">
                    Recevez nos actualités maritimes, veille réglementaire et
                    retours d'expérience chaque mois.
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubscribed(true);
                    }}
                    className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  >
                    <Input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="flex-1 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-gold"
                    />
                    <Button
                      type="submit"
                      className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold shrink-0"
                    >
                      S'abonner
                    </Button>
                  </form>
                  <p className="text-xs text-primary-foreground/50 mt-3">
                    Désinscription possible à tout moment. Aucun spam.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
