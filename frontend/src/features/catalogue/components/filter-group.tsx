"use client";

import type { CatalogueFilter } from "../types";
import { FilterOption } from "./filter-option";
import { PriceFilter } from "./price-filter";

type FilterGroupProps = {
  filter: CatalogueFilter;
  selectedValues: string[];
  onValuesChange: (values: string[]) => void;
  priceRange: [number, number];
  onPriceRangeChange: (value: [number, number]) => void;
};

export function FilterGroup({
  filter,
  selectedValues,
  onValuesChange,
  priceRange,
  onPriceRangeChange,
}: FilterGroupProps) {
  return (
    <section className="border-b border-border/70 pb-5">
      <div className="mb-3 text-md font-semibold">{filter.label}</div>

      {filter.type === "price" ? (
        <PriceFilter value={priceRange} onChange={onPriceRangeChange} />
      ) : (
        <div className="flex flex-col">
          {filter.options?.map((option) => (
            <FilterOption
              key={option.id}
              option={option}
              checked={selectedValues.includes(option.value)}
              onCheckedChange={(checked) => {
                if (checked) {
                  onValuesChange([...selectedValues, option.value]);
                } else {
                  onValuesChange(
                    selectedValues.filter((value) => value !== option.value),
                  );
                }
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
