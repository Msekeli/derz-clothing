import type { CatalogueProduct } from "./types";

export type CatalogueFilterState = {
  categories: string[];
  styles: string[];
  collections: string[];
  priceRange: [number, number];
};

export const DEFAULT_PRICE_RANGE: [number, number] = [200, 2000];

export const DEFAULT_FILTER_STATE: CatalogueFilterState = {
  categories: [],
  styles: [],
  collections: [],
  priceRange: DEFAULT_PRICE_RANGE,
};

export function getSelectedFilterValues(
  filterId: string,
  filters: CatalogueFilterState,
) {
  switch (filterId) {
    case "category":
      return filters.categories;

    case "style":
      return filters.styles;

    case "collection":
      return filters.collections;

    default:
      return [];
  }
}

export function updateFilterValues(
  filters: CatalogueFilterState,
  filterId: string,
  values: string[],
): CatalogueFilterState {
  switch (filterId) {
    case "category":
      return {
        ...filters,
        categories: values,
      };

    case "style":
      return {
        ...filters,
        styles: values,
      };

    case "collection":
      return {
        ...filters,
        collections: values,
      };

    default:
      return filters;
  }
}

export function filterCatalogueProducts(
  products: CatalogueProduct[],
  filters: CatalogueFilterState,
) {
  return products.filter((product) => {
    const matchesCategory =
      filters.categories.length === 0 ||
      filters.categories.includes(product.category.toLowerCase());

    const matchesStyle =
      filters.styles.length === 0 || filters.styles.includes(product.style);

    const matchesCollection =
      filters.collections.length === 0 ||
      filters.collections.includes(product.collection);

    const matchesPrice =
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1];

    return matchesCategory && matchesStyle && matchesCollection && matchesPrice;
  });
}
