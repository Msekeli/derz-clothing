"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { FilterGroup } from "./filter-group";
import type { CatalogueFilter } from "../types";
import type { CatalogueFilterState } from "../catalogue-filter-state";

type MobileFilterPanelProps = {
  open: boolean;
  filters: CatalogueFilter[];
  draftFilters: CatalogueFilterState;
  onOpenChange: (open: boolean) => void;
  onFilterChange: (filterId: string, values: string[]) => void;
  onPriceRangeChange: (value: [number, number]) => void;
  onApplyFilters: () => void;
  onClearAll: () => void;
};

export function MobileFilterPanel({
  open,
  filters,
  draftFilters,
  onOpenChange,
  onFilterChange,
  onPriceRangeChange,
  onApplyFilters,
  onClearAll,
}: MobileFilterPanelProps) {
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);

  function getSelectedValues(filterId: string) {
    switch (filterId) {
      case "category":
        return draftFilters.categories;

      case "style":
        return draftFilters.styles;

      case "collection":
        return draftFilters.collections;

      default:
        return [];
    }
  }

  function toggleFilter(filterId: string) {
    setExpandedFilter((current) => (current === filterId ? null : filterId));
  }

  function handleOpenChange(nextOpen: boolean) {
    onOpenChange(nextOpen);

    if (!nextOpen) {
      setExpandedFilter(null);
    }
  }

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent
        side="right"
        className="!top-16 !bottom-auto !h-auto !w-[50vw] !max-w-[50vw] overflow-hidden rounded-bl-xl p-0 sm:!max-w-sm"
      >
        <SheetHeader className="border-b border-border px-4 py-4">
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Refine the products shown in the catalogue.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col">
          <div>
            {filters.map((filter) => {
              const isExpanded = expandedFilter === filter.id;

              return (
                <div key={filter.id} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => toggleFilter(filter.id)}
                    aria-expanded={isExpanded}
                    className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold transition-colors hover:text-[var(--derz-orange)]"
                  >
                    <span>{filter.label}</span>

                    {isExpanded ? (
                      <ChevronUp
                        size={16}
                        aria-hidden="true"
                        className="text-muted-foreground"
                      />
                    ) : (
                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        className="text-muted-foreground"
                      />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4">
                      <FilterGroup
                        filter={filter}
                        selectedValues={getSelectedValues(filter.id)}
                        onValuesChange={(values) =>
                          onFilterChange(filter.id, values)
                        }
                        priceRange={draftFilters.priceRange}
                        onPriceRangeChange={onPriceRangeChange}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="border-t border-border bg-background px-4 py-3">
            <button
              type="button"
              onClick={() => {
                onApplyFilters();
                onOpenChange(false);
              }}
              className="w-full bg-[var(--derz-orange)] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Apply filters
            </button>

            <button
              type="button"
              onClick={onClearAll}
              className="mt-2 w-full text-sm font-medium underline underline-offset-4 transition-colors hover:text-[var(--derz-orange)]"
            >
              Clear all
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
