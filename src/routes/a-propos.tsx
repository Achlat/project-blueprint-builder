import { createFileRoute } from "@tanstack/react-router";
import { Award, Eye, Heart, Target } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À Propos — POSEÏDON MARINE WORK" },
      { name: "description", content: "Notre histoire, nos valeurs et notre équipe d'experts maritimes." },
      { property: "og:title", content: "À Propos — POSEÏDON MARINE WORK" },
      { property: "og:description", content: "Découvrez notre équipe d'experts maritimes." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Target, title: "Précision", text: "Des interventions millimétrées, conformes aux standards internationaux." },
  { icon: Heart, title: "Engagement", text: "Une relation client fondée sur la transparence et la disponibilité 24/7." },
  { icon: Eye, title: "Innovation", text: "Drones, ROV, capteurs : nous investissons dans les meilleures technologies." },
  { icon: Award, title: "Excellence", text: "Certifications IMO, ISO 9001 et conformité RGPD." },
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

      <section className="container-page py-20 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1200&q=80"
          alt="Équipe maritime"
          className="rounded-2xl shadow-elegant w-full h-[420px] object-cover"
        />
        <div>
          <p className="text-xs tracking-[0.3em] text-ocean uppercase mb-3">Notre histoire</p>
          <h2 className="text-3xl font-extrabold text-deep">Une passion née sur les quais</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Fondée par des plongeurs professionnels et ingénieurs navals, POSEÏDON MARINE WORK est née
            de la volonté de proposer aux armateurs ouest-africains un service maritime au standard international.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Aujourd'hui, notre équipe de 25 experts certifiés intervient depuis le port de Lomé sur l'ensemble
            de la côte ouest-africaine, du Sénégal à l'Angola.
          </p>
        </div>
      </section>

      <section className="bg-foam py-20">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs tracking-[0.3em] text-ocean uppercase mb-3">Nos valeurs</p>
            <h2 className="text-3xl font-extrabold text-deep">Ce qui nous fait avancer</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-card rounded-2xl p-6 shadow-elegant text-center">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-deep text-gold mx-auto mb-4">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-deep">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs tracking-[0.3em] text-ocean uppercase mb-3">Certifications</p>
          <h2 className="text-3xl font-extrabold text-deep">Reconnu par les autorités maritimes</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {["IMO Certified", "ISO 9001:2015", "ISM Code", "RGPD Compliant", "Port de Lomé"].map((c) => (
            <span key={c} className="px-5 py-2 rounded-full border-2 border-deep text-deep font-semibold text-sm">
              {c}
            </span>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
