import type { CatalogueSort } from "./types";
import {
  DEFAULT_FILTER_STATE,
  type CatalogueFilterState,
} from "./catalogue-filter-state";

export type CatalogueUrlState = CatalogueFilterState & {
  sort: CatalogueSort;
};

export const DEFAULT_CATALOGUE_URL_STATE: CatalogueUrlState = {
  ...DEFAULT_FILTER_STATE,
  sort: "featured",
};

const VALID_SORTS: CatalogueSort[] = [
  "featured",
  "newest",
  "price-low-high",
  "price-high-low",
];

function getRepeatedValues(params: URLSearchParams, key: string) {
  return params.getAll(key).filter(Boolean);
}

function parsePrice(value: string | null) {
  if (value === null || value === "") {
    return undefined;
  }

  const parsed = Number(value);

  return Number.isFinite(parsed) ? parsed : undefined;
}

export function getCatalogueUrlState(
  params: URLSearchParams,
): CatalogueUrlState {
  const minPrice = parsePrice(params.get("minPrice"));
  const maxPrice = parsePrice(params.get("maxPrice"));
  const sort = params.get("sort");
  const search = params.get("search") ?? "";

  return {
    categories: getRepeatedValues(params, "category"),
    styles: getRepeatedValues(params, "style"),
    collections: getRepeatedValues(params, "collection"),
    priceRange: [
      minPrice ?? DEFAULT_FILTER_STATE.priceRange[0],
      maxPrice ?? DEFAULT_FILTER_STATE.priceRange[1],
    ],
    search,
    sort: VALID_SORTS.includes(sort as CatalogueSort)
      ? (sort as CatalogueSort)
      : DEFAULT_CATALOGUE_URL_STATE.sort,
  };
}

export function createCatalogueUrl(
  pathname: string,
  params: URLSearchParams,
  state: CatalogueUrlState,
) {
  const nextParams = new URLSearchParams(params);

  [
    "category",
    "style",
    "collection",
    "minPrice",
    "maxPrice",
    "sort",
    "search",
  ].forEach((key) => nextParams.delete(key));

  state.categories.forEach((value) => nextParams.append("category", value));

  state.styles.forEach((value) => nextParams.append("style", value));

  state.collections.forEach((value) => nextParams.append("collection", value));

  const [minPrice, maxPrice] = state.priceRange;
  const [defaultMinPrice, defaultMaxPrice] = DEFAULT_FILTER_STATE.priceRange;

  if (minPrice !== defaultMinPrice) {
    nextParams.set("minPrice", String(minPrice));
  }

  if (maxPrice !== defaultMaxPrice) {
    nextParams.set("maxPrice", String(maxPrice));
  }

  if (state.sort !== DEFAULT_CATALOGUE_URL_STATE.sort) {
    nextParams.set("sort", state.sort);
  }

  const trimmedSearch = state.search.trim();
  if (trimmedSearch) {
    nextParams.set("search", trimmedSearch);
  }

  const query = nextParams.toString();

  return query ? `${pathname}?${query}` : pathname;
}
