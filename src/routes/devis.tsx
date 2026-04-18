import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  User,
  Layers,
  FileText,
  Send,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES } from "@/data/site";

export const Route = createFileRoute("/devis")({
  head: () => ({
    meta: [
      { title: "Demander un devis — POSEÏDON MARINE WORK" },
      {
        name: "description",
        content:
          "Recevez un devis personnalisé sous 48h pour vos besoins en services maritimes.",
      },
      {
        property: "og:title",
        content: "Devis maritime gratuit — POSEÏDON MARINE WORK",
      },
      { property: "og:description", content: "Devis personnalisé sous 48h." },
    ],
  }),
  component: DevisPage,
});

const STEPS = [
  { id: 1, label: "Contact", icon: User },
  { id: 2, label: "Prestations", icon: Layers },
  { id: 3, label: "Projet", icon: FileText },
  { id: 4, label: "Envoi", icon: Send },
];

const BUDGETS = [
  "< 500 000 XOF",
  "500 000 – 2 000 000 XOF",
  "2 000 000 – 5 000 000 XOF",
  "> 5 000 000 XOF",
  "À définir",
];

type FormData = {
  company: string;
  name: string;
  email: string;
  phone: string;
  services: string[];
  vessel: string;
  port: string;
  calendar: string;
  budget: string;
  message: string;
};

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {STEPS.map((s, i) => {
        const done = s.id < current;
        const active = s.id === current;
        return (
          <div key={s.id} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                  done
                    ? "bg-ocean border-ocean text-primary-foreground"
                    : active
                      ? "bg-deep border-deep text-primary-foreground scale-110 shadow-md"
                      : "bg-card border-border text-muted-foreground"
                }`}
              >
                {done ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <s.icon className="h-4 w-4" />
                )}
              </div>
              <span
                className={`text-xs font-semibold hidden sm:block ${
                  active ? "text-deep" : "text-muted-foreground"
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`h-0.5 w-12 sm:w-20 mx-1 mb-5 transition-all duration-500 ${
                  s.id < current ? "bg-ocean" : "bg-border"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function DevisPage() {
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [data, setData] = useState<FormData>({
    company: "",
    name: "",
    email: "",
    phone: "",
    services: [],
    vessel: "",
    port: "",
    calendar: "",
    budget: "",
    message: "",
  });

  const refNum = useRef(
    `PMW-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
  );

  const set = (k: keyof FormData, v: string) =>
    setData((d) => ({ ...d, [k]: v }));

  const toggleService = (slug: string) =>
    setData((d) => ({
      ...d,
      services: d.services.includes(slug)
        ? d.services.filter((s) => s !== slug)
        : [...d.services, slug],
    }));

  const canNext = () => {
    if (step === 1) return data.company && data.name && data.email && data.phone;
    if (step === 2) return data.services.length > 0;
    if (step === 3) return data.message.trim().length > 0;
    return true;
  };

  if (sent) {
    return (
      <SiteLayout>
        <section className="container-page py-32 text-center max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl p-12 shadow-elegant border">
            <div className="h-20 w-20 rounded-full bg-ocean/10 grid place-items-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-ocean" />
            </div>
            <h1 className="text-3xl font-extrabold text-deep">
              Demande envoyée !
            </h1>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Merci pour votre confiance. Nos experts vous recontactent{" "}
              <strong>sous 48h ouvrées</strong> avec un devis personnalisé.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-foam rounded-xl px-5 py-3 border">
              <span className="text-xs text-muted-foreground">
                N° de dossier
              </span>
              <span className="font-mono font-bold text-deep">
                {refNum.current}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Une confirmation a été envoyée à{" "}
              <strong>{data.email}</strong>
            </p>
            <Button
              onClick={() => {
                setSent(false);
                setStep(1);
                setData({
                  company: "",
                  name: "",
                  email: "",
                  phone: "",
                  services: [],
                  vessel: "",
                  port: "",
                  calendar: "",
                  budget: "",
                  message: "",
                });
              }}
              variant="outline"
              className="mt-8 border-deep text-deep hover:bg-deep hover:text-primary-foreground"
            >
              Nouvelle demande
            </Button>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Devis en ligne"
        title="Recevez un devis sous 48h"
        description="Décrivez votre besoin en 4 étapes simples. Nos experts maritimes vous répondent rapidement."
        image="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="container-page py-14 max-w-3xl">
        <StepIndicator current={step} />

        <div className="bg-card rounded-3xl p-8 shadow-elegant border">
          {/* ── Étape 1 : Contact ── */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-extrabold text-deep mb-6 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-deep text-gold text-sm font-bold">
                  1
                </span>
                Vos coordonnées
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Entreprise *</Label>
                  <Input
                    id="company"
                    required
                    value={data.company}
                    onChange={(e) => set("company", e.target.value)}
                    className="mt-1.5"
                    placeholder="Nom de votre société"
                  />
                </div>
                <div>
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    required
                    value={data.name}
                    onChange={(e) => set("name", e.target.value)}
                    className="mt-1.5"
                    placeholder="Prénom Nom"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={data.email}
                    onChange={(e) => set("email", e.target.value)}
                    className="mt-1.5"
                    placeholder="contact@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={data.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className="mt-1.5"
                    placeholder="+228 90 00 00 00"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── Étape 2 : Prestations ── */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-extrabold text-deep mb-2 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-deep text-gold text-sm font-bold">
                  2
                </span>
                Type de prestation
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Sélectionnez une ou plusieurs prestations souhaitées.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => {
                  const selected = data.services.includes(s.slug);
                  return (
                    <button
                      type="button"
                      key={s.slug}
                      onClick={() => toggleService(s.slug)}
                      className={`text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all duration-200 flex items-center gap-3 group ${
                        selected
                          ? "border-deep bg-deep text-primary-foreground"
                          : "border-border hover:border-ocean/50 bg-card"
                      }`}
                    >
                      <div
                        className={`grid h-9 w-9 place-items-center rounded-lg shrink-0 transition-colors ${
                          selected
                            ? "bg-gold text-gold-foreground"
                            : "bg-foam text-ocean group-hover:bg-ocean/10"
                        }`}
                      >
                        <s.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-semibold">{s.title}</p>
                        <p
                          className={`text-xs mt-0.5 ${selected ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                        >
                          {s.short}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
              {data.services.length === 0 && (
                <p className="text-xs text-amber-600 mt-3">
                  Veuillez sélectionner au moins une prestation.
                </p>
              )}
            </div>
          )}

          {/* ── Étape 3 : Détails projet ── */}
          {step === 3 && (
            <div className="animate-fade-in space-y-4">
              <h2 className="text-2xl font-extrabold text-deep mb-6 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-deep text-gold text-sm font-bold">
                  3
                </span>
                Détails du projet
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="vessel">Type de navire</Label>
                  <Input
                    id="vessel"
                    value={data.vessel}
                    onChange={(e) => set("vessel", e.target.value)}
                    className="mt-1.5"
                    placeholder="ex. porte-conteneurs, pétrolier…"
                  />
                </div>
                <div>
                  <Label htmlFor="port">Port d'intervention</Label>
                  <Input
                    id="port"
                    value={data.port}
                    onChange={(e) => set("port", e.target.value)}
                    className="mt-1.5"
                    placeholder="ex. Lomé, Togo"
                  />
                </div>
                <div>
                  <Label htmlFor="calendar">Calendrier souhaité</Label>
                  <Input
                    id="calendar"
                    value={data.calendar}
                    onChange={(e) => set("calendar", e.target.value)}
                    className="mt-1.5"
                    placeholder="ex. Juillet 2025"
                  />
                </div>
                <div>
                  <Label>Budget estimé</Label>
                  <div className="mt-1.5 grid grid-cols-1 gap-1.5">
                    <select
                      value={data.budget}
                      onChange={(e) => set("budget", e.target.value)}
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-ring"
                    >
                      <option value="">Sélectionner…</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="message">Description du projet *</Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={data.message}
                  onChange={(e) => set("message", e.target.value)}
                  placeholder="Décrivez votre besoin, contraintes, délais, toute information utile…"
                  className="mt-1.5"
                />
              </div>
            </div>
          )}

          {/* ── Étape 4 : Récapitulatif ── */}
          {step === 4 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-extrabold text-deep mb-6 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-deep text-gold text-sm font-bold">
                  4
                </span>
                Récapitulatif & envoi
              </h2>

              <div className="space-y-3 text-sm">
                {[
                  { label: "Entreprise", value: data.company },
                  { label: "Contact", value: data.name },
                  { label: "Email", value: data.email },
                  { label: "Téléphone", value: data.phone },
                  {
                    label: "Prestations",
                    value:
                      data.services
                        .map(
                          (sl) =>
                            SERVICES.find((s) => s.slug === sl)?.title ?? sl,
                        )
                        .join(", ") || "—",
                  },
                  { label: "Navire", value: data.vessel || "—" },
                  { label: "Port", value: data.port || "—" },
                  { label: "Calendrier", value: data.calendar || "—" },
                  { label: "Budget", value: data.budget || "—" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex gap-3 py-2 border-b last:border-b-0"
                  >
                    <span className="text-muted-foreground w-28 shrink-0">
                      {label}
                    </span>
                    <span className="font-medium text-deep">{value}</span>
                  </div>
                ))}

                {data.message && (
                  <div className="pt-2">
                    <p className="text-muted-foreground mb-1">Description</p>
                    <p className="font-medium text-deep bg-foam rounded-xl p-3 text-sm leading-relaxed">
                      {data.message}
                    </p>
                  </div>
                )}
              </div>

              <p className="text-xs text-muted-foreground mt-6">
                En soumettant ce formulaire, vous acceptez d'être recontacté par
                POSEÏDON MARINE WORK pour le traitement de votre demande de
                devis.
              </p>
            </div>
          )}

          {/* ── Navigation ── */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            {step > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep((s) => s - 1)}
                className="border-deep text-deep hover:bg-deep hover:text-primary-foreground"
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> Précédent
              </Button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <Button
                type="button"
                disabled={!canNext()}
                onClick={() => setStep((s) => s + 1)}
                className="bg-deep hover:bg-ocean text-primary-foreground font-semibold disabled:opacity-40"
              >
                Suivant <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={() => setSent(true)}
                className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold"
              >
                Envoyer la demande <Send className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5 h-1.5 rounded-full bg-border overflow-hidden">
          <div
            className="h-full bg-gold rounded-full transition-all duration-500"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2">
          Étape {step} sur 4
        </p>
      </section>
    </SiteLayout>
  );
}
