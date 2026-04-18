import { createFileRoute, Link } from "@tanstack/react-router";
import type { ComponentType } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  Globe2,
  Anchor,
  Users,
  Quote,
  Star,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SERVICES, PROJECTS, TESTIMONIALS, HERO_IMAGE } from "@/data/site";
import { useCounter } from "@/hooks/use-counter";

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
        content:
          "Solutions maritimes professionnelles : inspections, ROV, plongée technique.",
      },
      { property: "og:image", content: HERO_IMAGE },
    ],
  }),
  component: HomePage,
});

const WHY_US = [
  {
    icon: ShieldCheck,
    title: "Sécurité certifiée",
    text: "Conformité totale aux normes IMO, SOLAS et ISO 9001:2015.",
  },
  {
    icon: Zap,
    title: "Réactivité 24/7",
    text: "Intervention sous 4h au port de Lomé, 24h sur toute la côte ouest-africaine.",
  },
  {
    icon: Award,
    title: "Experts certifiés",
    text: "25 plongeurs et ingénieurs navals certifiés au standard international.",
  },
  {
    icon: Globe2,
    title: "Couverture régionale",
    text: "8 pays couverts du Sénégal à l'Angola sur l'ensemble du Golfe de Guinée.",
  },
];

function CounterItem({
  target,
  suffix,
  label,
  icon: Icon,
}: {
  target: number;
  suffix: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
}) {
  const { value, ref } = useCounter(target);
  return (
    <div ref={ref} className="text-center group">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-card mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6 text-ocean" />
      </div>
      <div className="text-3xl md:text-4xl font-extrabold text-deep tabular-nums">
        {value}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1.5 font-medium">{label}</div>
    </div>
  );
}

function HomePage() {
  return (
    <SiteLayout>
      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden bg-deep text-primary-foreground">
        <img
          src={HERO_IMAGE}
          alt="Port maritime vue aérienne"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deep via-deep/85 to-ocean/70" />

        <div className="container-page relative py-36 md:py-52">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-5 animate-fade-in-up">
            Excellence Maritime
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            L'expertise{" "}
            <span className="text-gradient-gold">sous-marine</span> au service
            de votre flotte
          </h1>
          <p
            className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Inspections, nettoyage, réparations et logistique : POSEÏDON MARINE
            WORK accompagne armateurs et autorités portuaires en Afrique de
            l'Ouest.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold shadow-md"
            >
              <Link to="/devis">
                Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground bg-transparent"
            >
              <Link to="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>

        {/* Wave → bg-foam */}
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg
            viewBox="0 0 1440 60"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 60 L0 32 Q240 4 480 22 Q720 42 960 18 Q1200 -4 1440 26 L1440 60 Z"
              fill="#eef3f8"
            />
          </svg>
        </div>
      </section>

      {/* ── ANIMATED COUNTERS ── */}
      <section className="bg-foam">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8 py-14">
          <CounterItem
            target={150}
            suffix="+"
            label="Projets réalisés"
            icon={Anchor}
          />
          <CounterItem
            target={25}
            suffix=""
            label="Experts certifiés"
            icon={Users}
          />
          <CounterItem
            target={8}
            suffix=""
            label="Pays couverts"
            icon={Globe2}
          />
          <CounterItem
            target={12}
            suffix=""
            label="Années d'expertise"
            icon={Award}
          />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="container-page py-20">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.3em] text-ocean uppercase mb-3">
            Nos prestations
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-deep">
            Une offre complète de services maritimes
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            De l'inspection à la réparation, en passant par la logistique et la
            sécurité, nous couvrons l'ensemble du cycle de vie de vos navires.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              className="group rounded-2xl border bg-card p-6 shadow-card hover:-translate-y-2 hover:shadow-elegant transition-all duration-300"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-deep text-gold mb-5 group-hover:bg-ocean group-hover:scale-110 transition-all duration-300">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-deep">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              <ul className="mt-4 space-y-1.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Star className="h-3.5 w-3.5 text-gold fill-gold shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            className="border-deep text-deep hover:bg-deep hover:text-primary-foreground"
          >
            <Link to="/services">
              Tous les services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ── POURQUOI NOUS ── */}
      <section className="bg-foam py-20">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs tracking-[0.3em] text-ocean uppercase mb-3">
              Nos atouts
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-deep">
              Pourquoi choisir POSEÏDON ?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Des arguments solides pour vous accompagner dans les conditions les
              plus exigeantes.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((w) => (
              <div
                key={w.title}
                className="bg-card rounded-2xl p-7 shadow-card text-center group hover:-translate-y-2 hover:shadow-elegant transition-all duration-300"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-deep text-gold mx-auto mb-5 group-hover:bg-ocean group-hover:scale-110 transition-all duration-300">
                  <w.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-deep text-lg">{w.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {w.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉALISATIONS APERÇU ── */}
      <section className="bg-deep text-primary-foreground py-20">
        <div className="container-page">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-xs tracking-[0.3em] text-gold uppercase mb-3">
                Portfolio
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Nos dernières réalisations
              </h2>
            </div>
            <Link
              to="/realisations"
              className="text-gold hover:underline text-sm font-semibold flex items-center gap-1"
            >
              Voir tout <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-gold font-semibold tracking-wide">
                    {p.type} · {p.year}
                  </span>
                  <h3 className="font-bold mt-1">{p.title}</h3>
                  <p className="text-xs text-primary-foreground/70 mt-0.5">
                    {p.region}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs tracking-[0.3em] text-ocean uppercase mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-deep">
            Ils nous font confiance
          </h2>
        </div>

        <div className="relative px-10 max-w-5xl mx-auto">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {TESTIMONIALS.map((t) => (
                <CarouselItem
                  key={t.author}
                  className="pl-4 md:basis-1/2 lg:basis-1/2"
                >
                  <div className="bg-card border rounded-2xl p-8 shadow-card h-full flex flex-col hover:shadow-elegant transition-shadow duration-300">
                    <Quote className="h-8 w-8 text-gold mb-4 shrink-0" />
                    <p className="italic text-muted-foreground flex-1 leading-relaxed text-sm">
                      « {t.quote} »
                    </p>
                    <div className="mt-6 pt-4 border-t flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-deep grid place-items-center shrink-0">
                        <span className="text-gold font-bold text-sm">
                          {t.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-deep text-sm">
                          {t.author}
                        </p>
                        <p className="text-xs text-ocean">{t.company}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="container-page pb-20">
        <div className="rounded-3xl bg-gradient-deep p-10 md:p-16 text-primary-foreground text-center shadow-deep relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,oklch(0.50_0.12_234/0.4)_0%,transparent_65%)]" />
          <div className="relative z-10">
            <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4">
              Prêt à collaborer ?
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold max-w-2xl mx-auto">
              Un projet maritime ? Parlons-en.
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              Devis gratuit sous 48h. Nos équipes interviennent sur l'ensemble
              du Golfe de Guinée.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold"
              >
                <Link to="/devis">Demander un devis</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              >
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
