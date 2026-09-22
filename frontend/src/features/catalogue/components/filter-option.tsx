"use client";

import type { CatalogueFilterOption } from "../types";

type FilterOptionProps = {
  option: CatalogueFilterOption;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

export function FilterOption({
  option,
  checked,
  onCheckedChange,
}: FilterOptionProps) {
  return (
    <label className="group flex cursor-pointer items-center gap-3 py-1.5 text-sm">
      <input
        type="checkbox"
        value={option.value}
        checked={checked}
        onChange={(event) => onCheckedChange(event.target.checked)}
        className="size-4 accent-[var(--derz-orange)]"
      />

      <span className="text-muted-foreground transition-colors group-hover:text-foreground">
        {option.label}
      </span>
    </label>
  );
}
