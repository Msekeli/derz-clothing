"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { CatalogueGrid } from "../sections/catalogue-grid";
import type { CatalogueResponse, CatalogueSort } from "../types";
import {
  filterCatalogueProducts,
  updateFilterValues,
} from "../catalogue-filter-state";
import {
  createCatalogueUrl,
  getCatalogueUrlState,
  type CatalogueUrlState,
} from "../catalogue-url-state";
import { CatalogueToolbar } from "./catalogue-toolbar";
import { FilterSidebar } from "./filter-sidebar";
import { MobileFilterPanel } from "./mobile-filter-panel";

type CatalogueContentProps = {
  catalogue: CatalogueResponse;
};

export function CatalogueContent({ catalogue }: CatalogueContentProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const catalogueState = useMemo(
    () => getCatalogueUrlState(new URLSearchParams(searchParams.toString())),
    [searchParams],
  );

  function updateCatalogueState(nextState: CatalogueUrlState) {
    const nextUrl = createCatalogueUrl(
      pathname,
      new URLSearchParams(searchParams.toString()),
      nextState,
    );

    router.replace(nextUrl, { scroll: false });
  }

  function handleFilterChange(filterId: string, values: string[]) {
    updateCatalogueState({
      ...updateFilterValues(catalogueState, filterId, values),
      sort: catalogueState.sort,
    });
  }

  function handlePriceRangeChange(value: [number, number]) {
    updateCatalogueState({
      ...catalogueState,
      priceRange: value,
    });
  }

  function clearFilters() {
    updateCatalogueState({
      ...catalogueState,
      categories: [],
      styles: [],
      collections: [],
      priceRange: [200, 2000],
    });
  }

  function handleSortChange(sort: CatalogueSort) {
    updateCatalogueState({
      ...catalogueState,
      sort,
    });
  }

  const filteredProducts = useMemo(() => {
    let products = filterCatalogueProducts(catalogue.products, catalogueState);

    switch (catalogueState.sort) {
      case "price-low-high":
        products = [...products].sort((a, b) => a.price - b.price);
        break;

      case "price-high-low":
        products = [...products].sort((a, b) => b.price - a.price);
        break;

      case "newest":
        products = [...products].reverse();
        break;

      case "featured":
      default:
        break;
    }

    return products;
  }, [catalogue.products, catalogueState]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-10">
      <FilterSidebar
        filters={catalogue.filters}
        selectedCategories={catalogueState.categories}
        selectedStyles={catalogueState.styles}
        selectedCollections={catalogueState.collections}
        priceRange={catalogueState.priceRange}
        onCategoriesChange={(values) => handleFilterChange("category", values)}
        onStylesChange={(values) => handleFilterChange("style", values)}
        onCollectionsChange={(values) =>
          handleFilterChange("collection", values)
        }
        onPriceRangeChange={handlePriceRangeChange}
        onClearAll={clearFilters}
      />

      <MobileFilterPanel
        open={mobileFiltersOpen}
        filters={catalogue.filters}
        draftFilters={catalogueState}
        onOpenChange={setMobileFiltersOpen}
        onFilterChange={handleFilterChange}
        onPriceRangeChange={handlePriceRangeChange}
        onClearAll={clearFilters}
      />

      <section className="min-w-0">
        <div className="sticky top-16 z-20 -mx-4 border-b border-border/70 bg-background/95 px-4 py-3 backdrop-blur lg:top-20 lg:mx-0 lg:px-0 lg:py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="hidden text-xs text-muted-foreground sm:block">
                Shop <span className="mx-1.5">/</span> {catalogue.title}
              </p>

              <div className="flex items-baseline gap-2 sm:mt-0.5">
                <h1 className="text-lg font-semibold tracking-tight sm:text-xl">
                  {catalogue.title}
                </h1>

                <span className="text-xs text-muted-foreground sm:text-sm">
                  {filteredProducts.length} products
                </span>
              </div>
            </div>

            <CatalogueToolbar
              sort={catalogueState.sort}
              onSortChange={handleSortChange}
              onFilterClick={() => setMobileFiltersOpen(true)}
            />
          </div>
        </div>

        <div className="pt-4 lg:pt-5">
          <CatalogueGrid products={filteredProducts} />
        </div>
      </section>
    </div>
  );
}
