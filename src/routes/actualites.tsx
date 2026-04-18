import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { POSTS } from "@/data/site";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Blog & Actualités — POSEÏDON MARINE WORK" },
      { name: "description", content: "Articles, news sectorielles et mises à jour du secteur maritime." },
      { property: "og:title", content: "Blog maritime — POSEÏDON MARINE WORK" },
      { property: "og:description", content: "Toute l'actualité du secteur maritime ouest-africain." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Le blog"
        title="Actualités & expertise maritime"
        description="Veille sectorielle, retours d'expérience et innovations du monde maritime."
        image="https://images.unsplash.com/photo-1500627964684-141351970a7f?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-page py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((p) => (
          <article key={p.slug} className="group rounded-2xl overflow-hidden bg-card shadow-elegant flex flex-col">
            <div className="relative h-52 overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs text-ocean font-semibold uppercase tracking-wide">{p.date}</p>
              <h2 className="text-lg font-bold text-deep mt-2">{p.title}</h2>
              <p className="text-sm text-muted-foreground mt-2 flex-1">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-flex items-center text-deep font-semibold text-sm hover:text-ocean">
                Lire l'article <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
