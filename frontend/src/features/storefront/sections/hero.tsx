import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AppLink } from "@/components/shared/app-link";
import { SiteContainer } from "@/components/shared/site-container";
import type { StorefrontHero } from "../types";

type HeroSectionProps = {
  hero: StorefrontHero;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden">
      <Image
        src={hero.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <SiteContainer className="relative z-10 flex min-h-[calc(100svh-5rem)] items-end py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--derz-cream)] sm:text-sm">
            {hero.eyebrow}
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <AppLink
              href={hero.primaryCta.href}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-[var(--derz-orange)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--derz-brown)]"
            >
              {hero.primaryCta.label}
              <ArrowRight size={17} aria-hidden="true" />
            </AppLink>

            {hero.secondaryCta && (
              <AppLink
                href={hero.secondaryCta.href}
                className="inline-flex h-11 items-center rounded-md border border-white/70 px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[var(--derz-brown)]"
              >
                {hero.secondaryCta.label}
              </AppLink>
            )}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
