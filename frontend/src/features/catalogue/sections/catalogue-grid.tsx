import type { CatalogueProduct } from "../types";
import { ProductCard } from "../components/product-card";

type CatalogueGridProps = {
  products: CatalogueProduct[];
};

export function CatalogueGrid({ products }: CatalogueGridProps) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
