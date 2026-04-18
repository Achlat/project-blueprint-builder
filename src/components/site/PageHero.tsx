import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  children?: ReactNode;
  waveFill?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
  waveFill = "#ffffff",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-deep text-primary-foreground">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep/60 via-deep/80 to-deep" />

      <div className="container-page relative py-24 md:py-32">
        {eyebrow && (
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4 animate-fade-in-up">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {description}
          </p>
        )}
        {children && (
          <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {children}
          </div>
        )}
      </div>

      {/* Wave SVG divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg
          viewBox="0 0 1440 56"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 56 L0 28 Q240 0 480 20 Q720 40 960 16 Q1200 -4 1440 24 L1440 56 Z"
            fill={waveFill}
          />
        </svg>
      </div>
    </section>
  );
}
