import { createFileRoute } from "@tanstack/react-router";
import { Award, Eye, Heart, Target } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { TEAM, PARTNERS, TIMELINE } from "@/data/site";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À Propos — POSEÏDON MARINE WORK" },
      {
        name: "description",
        content: "Notre histoire, nos valeurs et notre équipe d'experts maritimes.",
      },
      { property: "og:title", content: "À Propos — POSEÏDON MARINE WORK" },
      {
        property: "og:description",
        content: "Découvrez notre équipe d'experts maritimes.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Target,
    title: "Précision",
    text: "Des interventions millimétrées, conformes aux standards internationaux.",
  },
  {
    icon: Heart,
    title: "Engagement",
    text: "Une relation client fondée sur la transparence et la disponibilité 24/7.",
  },
  {
    icon: Eye,
    title: "Innovation",
    text: "Drones, ROV, capteurs : nous investissons dans les meilleures technologies.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "Certifications IMO, ISO 9001 et conformité aux normes SOLAS.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Qui sommes-nous"
        title="L'expertise maritime, ancrée en Afrique de l'Ouest"
        description="Depuis plus de 12 ans, POSEÏDON MARINE WORK accompagne armateurs, ports et logisticiens sur l'ensemble du Golfe de Guinée."
        image="https://images.unsplash.com/photo-1473042904451-00171c69419d?auto=format&fit=crop&w=1920&q=80"
      />

      {/* ── HISTOIRE + IMAGE ── */}
      <section className="container-page py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1200&q=80"
            alt="Équipe maritime"
            className="rounded-2xl shadow-elegant w-full h-[420px] object-cover"
          />
          <div className="absolute -bottom-5 -right-5 bg-gold text-gold-foreground rounded-2xl p-5 shadow-deep hidden md:block">
            <p className="text-3xl font-extrabold">12+</p>
            <p className="text-xs font-semibold mt-0.5">Ans d'expertise</p>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] text-ocean uppercase mb-3">
            Notre histoire
          </p>
          <h2 className="text-3xl font-extrabold text-deep">
            Une passion née sur les quais
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Fondée par des plongeurs professionnels et ingénieurs navals,
            POSEÏDON MARINE WORK est née de la volonté de proposer aux armateurs
            ouest-africains un service maritime au standard international.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Aujourd'hui, notre équipe de 25 experts certifiés intervient depuis
            le port de Lomé sur l'ensemble de la côte ouest-africaine, du
            Sénégal à l'Angola.
          </p>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="bg-foam py-20">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs tracking-[0.3em] text-ocean uppercase mb-3">
              Notre parcours
            </p>
            <h2 className="text-3xl font-extrabold text-deep">
              12 ans d'histoire maritime
            </h2>
          </div>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-deep/15 hidden md:block" />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative grid md:grid-cols-2 gap-6 items-center ${
                    i % 2 === 0 ? "" : "md:[direction:rtl]"
                  }`}
                >
                  {/* card */}
                  <div className="md:[direction:ltr] bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-shadow duration-300">
                    <span className="inline-block bg-deep text-gold text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-deep">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  {/* center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-gold border-4 border-white shadow-md items-center justify-center" />

                  {/* spacer */}
                  <div />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs tracking-[0.3em] text-ocean uppercase mb-3">
            Nos valeurs
          </p>
          <h2 className="text-3xl font-extrabold text-deep">
            Ce qui nous fait avancer
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="bg-card rounded-2xl p-7 shadow-card text-center hover:-translate-y-1.5 hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-deep text-gold mx-auto mb-5 group-hover:bg-ocean group-hover:scale-110 transition-all duration-300">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-deep text-lg">{v.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section className="bg-foam py-20">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs tracking-[0.3em] text-ocean uppercase mb-3">
              Notre équipe
            </p>
            <h2 className="text-3xl font-extrabold text-deep">
              Des experts à votre service
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-deep">{member.name}</h3>
                  <p className="text-sm text-ocean font-semibold mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {member.expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs tracking-[0.3em] text-ocean uppercase mb-3">
            Certifications
          </p>
          <h2 className="text-3xl font-extrabold text-deep">
            Reconnu par les autorités maritimes
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "IMO Certified",
            "ISO 9001:2015",
            "ISM Code",
            "SOLAS Compliant",
            "RGPD",
            "Port de Lomé",
          ].map((c) => (
            <span
              key={c}
              className="px-5 py-2.5 rounded-full border-2 border-deep text-deep font-semibold text-sm hover:bg-deep hover:text-primary-foreground transition-colors duration-200 cursor-default"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ── PARTENAIRES MARQUEE ── */}
      <section className="bg-deep py-14 overflow-hidden">
        <div className="container-page mb-8 text-center">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">
            Ils nous font confiance
          </p>
        </div>
        <div className="relative overflow-hidden">
          {/* fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-deep to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-deep to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee gap-6 py-2">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <span
                key={i}
                className="whitespace-nowrap shrink-0 text-sm font-semibold text-primary-foreground/70 border border-white/15 rounded-full px-5 py-2.5 hover:border-gold hover:text-gold transition-colors duration-200 cursor-default mx-3"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
