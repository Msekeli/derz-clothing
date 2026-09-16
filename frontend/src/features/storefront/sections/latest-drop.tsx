import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AppLink } from "@/components/shared/app-link";
import { SiteContainer } from "@/components/shared/site-container";
import type { StorefrontProduct } from "../types";

type LatestDropProps = {
  products: StorefrontProduct[];
  href?: string;
};

const formatPrice = (price: number, currency: string) =>
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);

export function LatestDrop({ products, href = "/shop" }: LatestDropProps) {
  return (
    <section>
      <SiteContainer className="py-16 sm:py-20 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--derz-orange)] sm:text-sm">
              Latest drop
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              The latest from DERZ.
            </h2>
          </div>

          <AppLink
            href={href}
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold sm:inline-flex"
          >
            Shop all
            <ArrowRight size={16} aria-hidden="true" />
          </AppLink>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {products.map((product) => (
            <AppLink
              key={product.id}
              href={product.href}
              className="group min-w-0"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {product.badge && (
                  <span className="absolute left-3 top-3 bg-background px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="mt-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {product.category}
                </p>

                <h3 className="mt-1 text-sm font-semibold sm:text-base">
                  {product.name}
                </h3>

                <p className="mt-1 text-sm">
                  {formatPrice(product.price, product.currency)}
                </p>
              </div>
            </AppLink>
          ))}
        </div>

        <AppLink
          href={href}
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold sm:hidden"
        >
          Shop all
          <ArrowRight size={16} aria-hidden="true" />
        </AppLink>
      </SiteContainer>
    </section>
  );
}
