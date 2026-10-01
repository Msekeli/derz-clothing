"use client";

import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";

type CatalogueSearchProps = {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export function CatalogueSearch({
  id = "catalogue-search",
  value = "",
  onChange,
  placeholder = "Search products...",
  className = "",
}: CatalogueSearchProps) {
  const [prevValue, setPrevValue] = useState(value);
  const [query, setQuery] = useState(value);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  if (value !== prevValue) {
    setPrevValue(value);
    setQuery(value);
  }

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const nextValue = event.target.value;
    setQuery(nextValue);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (!nextValue) {
      onChange?.("");
      return;
    }

    debounceTimerRef.current = setTimeout(() => {
      onChange?.(nextValue);
    }, 300);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      onChange?.(query);
    }
  }

  function handleClear() {
    setQuery("");
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    onChange?.("");
  }

  return (
    <div className={`relative ${className ? className : "w-36 sm:w-52 lg:w-64"}`}>
      <label htmlFor={id} className="sr-only">
        Search products
      </label>

      <input
        id={id}
        type="search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="h-9 w-full border border-border bg-background px-3 pr-9 text-xs outline-none transition-colors placeholder:text-muted-foreground focus:border-[var(--derz-orange)] [&::-webkit-search-cancel-button]:hidden sm:h-10 sm:px-4 sm:pr-10 sm:text-sm"
      />

      {query ? (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground sm:right-3.5"
        >
          <X size={16} aria-hidden="true" />
        </button>
      ) : (
        <Search
          size={16}
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground sm:right-3.5"
        />
      )}
    </div>
  );
}
