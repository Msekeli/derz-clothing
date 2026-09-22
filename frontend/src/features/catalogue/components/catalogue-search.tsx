import { Search } from "lucide-react";

type CatalogueSearchProps = {
  placeholder?: string;
};

export function CatalogueSearch({
  placeholder = "Search products...",
}: CatalogueSearchProps) {
  return (
    <div className="relative w-36 sm:w-52 lg:w-64">
      <label htmlFor="catalogue-search" className="sr-only">
        Search products
      </label>

      <input
        id="catalogue-search"
        type="search"
        placeholder={placeholder}
        className="h-9 w-full border border-border bg-background px-3 pr-9 text-xs outline-none transition-colors placeholder:text-muted-foreground focus:border-[var(--derz-orange)] sm:h-10 sm:px-4 sm:pr-10 sm:text-sm"
      />

      <Search
        size={16}
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground sm:right-3.5"
      />
    </div>
  );
}
