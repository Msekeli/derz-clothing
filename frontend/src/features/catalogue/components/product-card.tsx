import Image from "next/image";
import { Heart } from "lucide-react";

import { AppLink } from "@/components/shared/app-link";
import type { CatalogueProduct } from "../types";

type ProductCardProps = {
  product: CatalogueProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group min-w-0">
      <div className="relative overflow-hidden bg-muted">
        <AppLink href={product.href} aria-label={`View ${product.name}`}>
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 30vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </AppLink>

        {product.badge ? (
          <span className="absolute left-3 top-3 bg-background px-2 py-1 text-xs font-medium">
            {product.badge}
          </span>
        ) : null}

        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-3 top-3 flex size-8 items-center justify-center bg-background/90 transition-colors hover:text-[var(--derz-orange)]"
        >
          <Heart size={16} aria-hidden="true" />
        </button>
      </div>

      <div className="pt-2">
        <AppLink
          href={product.href}
          className="block text-sm font-semibold transition-colors hover:text-[var(--derz-orange)]"
        >
          {product.name}
        </AppLink>

        <p className="mt-0.5 text-xs text-muted-foreground">
          {product.category}
        </p>

        <p className="mt-1 text-sm font-semibold">
          {new Intl.NumberFormat("en-ZA", {
            style: "currency",
            currency: product.currency,
            maximumFractionDigits: 0,
          }).format(product.price)}
        </p>
      </div>
    </article>
  );
}
