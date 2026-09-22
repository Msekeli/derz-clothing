"use client";

import { Slider } from "@/components/ui/slider";

type PriceFilterProps = {
  min?: number;
  max?: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
};

export function PriceFilter({
  min = 200,
  max = 2000,
  value,
  onChange,
}: PriceFilterProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span>R {value[0].toLocaleString("en-ZA")}</span>
        <span>R {value[1].toLocaleString("en-ZA")}</span>
      </div>

      <Slider
        value={value}
        min={min}
        max={max}
        step={50}
        onValueChange={(nextValue) => {
          if (Array.isArray(nextValue) && nextValue.length === 2) {
            onChange([nextValue[0], nextValue[1]]);
          }
        }}
        aria-label="Price range"
        className="[&_[data-slot=slider-range]]:bg-[var(--derz-orange)] [&_[data-slot=slider-thumb]]:border-[var(--derz-orange)] [&_[data-slot=slider-thumb]]:bg-[var(--derz-orange)]"
      />

      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 border border-border px-3 py-2 text-sm">
          R {value[0].toLocaleString("en-ZA")}
        </div>

        <span className="text-sm text-muted-foreground">—</span>

        <div className="flex-1 border border-border px-3 py-2 text-sm">
          R {value[1].toLocaleString("en-ZA")}
        </div>
      </div>
    </div>
  );
}
