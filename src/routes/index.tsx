import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Anchor, Globe2, Users, Award } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { SERVICES, PROJECTS, HERO_IMAGE } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "POSEÏDON MARINE WORK — Solutions maritimes professionnelles" },
      {
        name: "description",
        content:
          "Inspections, nettoyage de coque, réparations sous-marines et logistique portuaire. Expertise maritime en Afrique de l'Ouest.",
      },
      { property: "og:title", content: "POSEÏDON MARINE WORK" },
      {
        property: "og:description",
        content: "Solutions maritimes professionnelles : inspections, ROV, plongée technique.",
      },
      { property: "og:image", content: HERO_IMAGE },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-deep text-primary-foreground">
        <img src={HERO_IMAGE} alt="Port maritime" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-deep via-deep/85 to-ocean/70" />
        <div className="container-page relative py-28 md:py-40">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-5">Excellence Maritime</p>
          <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight">
            L'expertise <span className="text-gradient-gold">sous-marine</span> au service de votre flotte
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl">
            Inspections, nettoyage, réparations et logistique : POSEÏDON MARINE WORK accompagne armateurs et autorités portuaires en Afrique de l'Ouest.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold">
              <Link to="/devis">
                Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground bg-transparent">
              <Link to="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="bg-foam">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {[
            { v: "150+", l: "Projets réalisés", i: Anchor },
            { v: "25", l: "Experts certifiés", i: Users },
            { v: "8", l: "Pays couverts", i: Globe2 },
            { v: "12", l: "Années d'expertise", i: Award },
          ].map(({ v, l, i: Icon }) => (
            <div key={l} className="text-center">
              <Icon className="h-7 w-7 mx-auto text-ocean mb-2" />
              <div className="text-3xl md:text-4xl font-extrabold text-deep">{v}</div>
              <div className="text-sm text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-20">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.3em] text-ocean uppercase mb-3">Nos prestations</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-deep">
            Une offre complète de services maritimes
          </h2>
          <p className="mt-4 text-muted-foreground">
            De l'inspection à la réparation, en passant par la logistique et la sécurité, nous couvrons l'ensemble du cycle de vie de vos navires.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              className="group rounded-2xl border bg-card p-6 shadow-elegant hover:-translate-y-1 transition-transform"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-deep text-gold mb-5 group-hover:bg-ocean transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-deep">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              <ul className="mt-4 space-y-1.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-ocean" /> {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-deep text-deep hover:bg-deep hover:text-primary-foreground">
            <Link to="/services">Tous les services</Link>
          </Button>
        </div>
      </section>

      {/* REALISATIONS APERÇU */}
      <section className="bg-deep text-primary-foreground py-20">
        <div className="container-page">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-xs tracking-[0.3em] text-gold uppercase mb-3">Portfolio</p>
              <h2 className="text-3xl md:text-4xl font-extrabold">Nos dernières réalisations</h2>
            </div>
            <Link to="/realisations" className="text-gold hover:underline text-sm font-semibold">
              Voir tout →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p) => (
              <div key={p.title} className="group relative overflow-hidden rounded-2xl">
                <img src={p.image} alt={p.title} className="h-64 w-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-xs text-gold font-semibold tracking-wide">{p.type} · {p.year}</span>
                  <h3 className="font-bold mt-1">{p.title}</h3>
                  <p className="text-xs text-primary-foreground/70">{p.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div className="rounded-3xl bg-gradient-deep p-10 md:p-16 text-primary-foreground text-center shadow-deep">
          <h2 className="text-3xl md:text-4xl font-extrabold max-w-2xl mx-auto">
            Un projet maritime ? Parlons-en.
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Devis gratuit sous 48h. Nos équipes interviennent sur l'ensemble du Golfe de Guinée.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold">
              <Link to="/devis">Demander un devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
