"use client";

import type { CatalogueFilter } from "../types";
import { FilterGroup } from "./filter-group";

type FilterSidebarProps = {
  filters: CatalogueFilter[];
  selectedCategories: string[];
  selectedStyles: string[];
  selectedCollections: string[];
  priceRange: [number, number];
  onCategoriesChange: (values: string[]) => void;
  onStylesChange: (values: string[]) => void;
  onCollectionsChange: (values: string[]) => void;
  onPriceRangeChange: (value: [number, number]) => void;
  onClearAll: () => void;
  onApplyFilters: () => void;
};

export function FilterSidebar({
  filters,
  selectedCategories,
  selectedStyles,
  selectedCollections,
  priceRange,
  onCategoriesChange,
  onStylesChange,
  onCollectionsChange,
  onPriceRangeChange,
  onClearAll,
  onApplyFilters
}: FilterSidebarProps) {
  function getSelectedValues(filterId: string) {
    switch (filterId) {
      case "category":
        return selectedCategories;
      case "style":
        return selectedStyles;
      case "collection":
        return selectedCollections;
      default:
        return [];
    }
  }

  function handleFilterChange(filterId: string, values: string[]) {
    switch (filterId) {
      case "category":
        onCategoriesChange(values);
        break;
      case "style":
        onStylesChange(values);
        break;
      case "collection":
        onCollectionsChange(values);
        break;
    }
  }

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-20">
        <div className="flex flex-col gap-5">
          {filters.map((filter) => (
            <FilterGroup
              key={filter.id}
              filter={filter}
              selectedValues={getSelectedValues(filter.id)}
              onValuesChange={(values) => handleFilterChange(filter.id, values)}
              priceRange={priceRange}
              onPriceRangeChange={onPriceRangeChange}
            />
          ))}

          <div className="pt-1">
           <button
            type="button"
            onClick={onApplyFilters}
            className="w-full bg-[var(--derz-orange)] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Apply filters
          </button>

            <button
              type="button"
              onClick={onClearAll}
              className="mt-3 w-full text-sm font-medium underline underline-offset-4 transition-colors hover:text-[var(--derz-orange)]"
            >
              Clear all
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
