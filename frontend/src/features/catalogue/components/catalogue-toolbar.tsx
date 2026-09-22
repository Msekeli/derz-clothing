"use client";

import { ArrowDownUp, SlidersHorizontal } from "lucide-react";

import type { CatalogueSort } from "../types";
import { CatalogueSearch } from "./catalogue-search";

type CatalogueToolbarProps = {
  sort: CatalogueSort;
  onSortChange: (sort: CatalogueSort) => void;
  onFilterClick: () => void;
};

export function CatalogueToolbar({
  sort,
  onSortChange,
  onFilterClick,
}: CatalogueToolbarProps) {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <div className="hidden sm:block">
        <CatalogueSearch />
      </div>

      <button
        type="button"
        onClick={onFilterClick}
        className="flex h-9 items-center gap-2 border border-border bg-background px-3 text-sm font-medium transition-colors hover:border-[var(--derz-orange)] hover:text-[var(--derz-orange)] sm:hidden"
      >
        <SlidersHorizontal size={15} aria-hidden="true" />
        <span>Filters</span>
      </button>

      <div className="relative hidden sm:block">
        <select
          value={sort}
          onChange={(event) =>
            onSortChange(event.target.value as CatalogueSort)
          }
          aria-label="Sort products"
          className="h-9 min-w-24 appearance-none border border-border bg-background px-3 pr-8 text-sm font-medium outline-none transition-colors focus:border-[var(--derz-orange)] sm:h-10 sm:min-w-32"
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="price-low-high">Price: Low to high</option>
          <option value="price-high-low">Price: High to low</option>
        </select>

        <ArrowDownUp
          size={15}
          aria-hidden="true"
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
      </div>
    </div>
  );
}
