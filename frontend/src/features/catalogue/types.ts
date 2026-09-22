export type CatalogueProduct = {
  id: string;
  name: string;
  slug: string;
  category: string;
  style: string;
  collection: string;
  price: number;
  currency: string;
  image: string;
  href: string;
  badge?: string;
};

export type CatalogueFilterOption = {
  id: string;
  label: string;
  value: string;
};

export type CatalogueFilter = {
  id: string;
  label: string;
  type: "checkbox" | "price";
  options?: CatalogueFilterOption[];
};

export type CatalogueSort =
  | "featured"
  | "newest"
  | "price-low-high"
  | "price-high-low";

export type CatalogueQuery = {
  department?: string;
  category?: string;
  style?: string;
  collection?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sort?: CatalogueSort;
  page?: number;
  pageSize?: number;
};

export type CatalogueResponse = {
  title: string;
  products: CatalogueProduct[];
  total: number;
  page: number;
  pageSize: number;
  filters: CatalogueFilter[];
};
