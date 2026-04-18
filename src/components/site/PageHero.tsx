import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-deep text-primary-foreground">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/85 to-deep" />
      <div className="container-page relative py-24 md:py-32">
        {eyebrow && (
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4">{eyebrow}</p>
        )}
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl">{title}</h1>
        {description && (
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-2xl">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
