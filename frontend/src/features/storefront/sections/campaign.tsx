import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AppLink } from "@/components/shared/app-link";
import { SiteContainer } from "@/components/shared/site-container";
import type { StorefrontCampaign } from "../types";

type CampaignSectionProps = {
  campaign: StorefrontCampaign;
};

export function CampaignSection({ campaign }: CampaignSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[32rem] sm:min-h-[38rem] lg:min-h-[44rem]">
        <Image
          src={campaign.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <SiteContainer className="relative z-10 flex min-h-[32rem] items-end py-12 sm:min-h-[38rem] sm:py-16 lg:min-h-[44rem] lg:py-20">
          <div className="max-w-2xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--derz-cream)] sm:text-sm">
              {campaign.eyebrow}
            </p>

            <h2 className="mt-4 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              {campaign.title}
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/85 sm:text-lg">
              {campaign.description}
            </p>

            <AppLink
              href={campaign.cta.href}
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-[var(--derz-orange)] px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[var(--derz-brown)]"
            >
              {campaign.cta.label}
              <ArrowRight size={17} aria-hidden="true" />
            </AppLink>
          </div>
        </SiteContainer>
      </div>
    </section>
  );
}
