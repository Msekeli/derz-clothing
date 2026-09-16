import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AppLink } from "@/components/shared/app-link";
import { SiteContainer } from "@/components/shared/site-container";
import type { StorefrontCollection } from "../types";

type CollectionsSectionProps = {
  collections: StorefrontCollection[];
};

export function CollectionsSection({ collections }: CollectionsSectionProps) {
  return (
    <section>
      <SiteContainer className="py-16 sm:py-20 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--derz-orange)] sm:text-sm">
              Discover
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Collections with a point of view.
            </h2>
          </div>

          <AppLink
            href="/shop"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold sm:inline-flex"
          >
            View all
            <ArrowUpRight size={16} aria-hidden="true" />
          </AppLink>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {collections.map((collection) => (
            <AppLink
              key={collection.id}
              href={collection.href}
              className="group relative min-h-[24rem] overflow-hidden bg-muted sm:min-h-[30rem]"
            >
              <Image
                src={collection.image}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {collection.name}
                </h3>

                {collection.description && (
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/80 sm:text-base">
                    {collection.description}
                  </p>
                )}

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                  Explore
                  <ArrowUpRight size={17} aria-hidden="true" />
                </span>
              </div>
            </AppLink>
          ))}
        </div>

        <AppLink
          href="/shop"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold sm:hidden"
        >
          View all
          <ArrowUpRight size={16} aria-hidden="true" />
        </AppLink>
      </SiteContainer>
    </section>
  );
}
