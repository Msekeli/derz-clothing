"use client";

import { useMemo, useState } from "react";

import { CatalogueGrid } from "../sections/catalogue-grid";
import type { CatalogueResponse, CatalogueSort } from "../types";
import {
  DEFAULT_FILTER_STATE,
  filterCatalogueProducts,
  updateFilterValues,
  type CatalogueFilterState,
} from "../catalogue-filter-state";
import { CatalogueToolbar } from "./catalogue-toolbar";
import { FilterSidebar } from "./filter-sidebar";
import { MobileFilterPanel } from "./mobile-filter-panel";

type CatalogueContentProps = {
  catalogue: CatalogueResponse;
};

export function CatalogueContent({ catalogue }: CatalogueContentProps) {
  const [draftFilters, setDraftFilters] =
    useState<CatalogueFilterState>(DEFAULT_FILTER_STATE);

  const [appliedFilters, setAppliedFilters] =
    useState<CatalogueFilterState>(DEFAULT_FILTER_STATE);

  const [sort, setSort] = useState<CatalogueSort>("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let products = filterCatalogueProducts(catalogue.products, appliedFilters);

    switch (sort) {
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
  }, [catalogue.products, appliedFilters, sort]);

  function handleFilterChange(filterId: string, values: string[]) {
    setDraftFilters((current) => updateFilterValues(current, filterId, values));
  }

  function handlePriceRangeChange(value: [number, number]) {
    setDraftFilters((current) => ({
      ...current,
      priceRange: value,
    }));
  }

  function applyFilters() {
    setAppliedFilters(draftFilters);
  }

  function clearAll() {
    setDraftFilters(DEFAULT_FILTER_STATE);
    setAppliedFilters(DEFAULT_FILTER_STATE);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-10">
      <FilterSidebar
        filters={catalogue.filters}
        selectedCategories={draftFilters.categories}
        selectedStyles={draftFilters.styles}
        selectedCollections={draftFilters.collections}
        priceRange={draftFilters.priceRange}
        onCategoriesChange={(values) => handleFilterChange("category", values)}
        onStylesChange={(values) => handleFilterChange("style", values)}
        onCollectionsChange={(values) =>
          handleFilterChange("collection", values)
        }
        onPriceRangeChange={handlePriceRangeChange}
        onApplyFilters={applyFilters}
        onClearAll={clearAll}
      />

      <MobileFilterPanel
        open={mobileFiltersOpen}
        filters={catalogue.filters}
        draftFilters={draftFilters}
        onOpenChange={setMobileFiltersOpen}
        onFilterChange={handleFilterChange}
        onPriceRangeChange={handlePriceRangeChange}
        onApplyFilters={applyFilters}
        onClearAll={clearAll}
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
              sort={sort}
              onSortChange={setSort}
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
