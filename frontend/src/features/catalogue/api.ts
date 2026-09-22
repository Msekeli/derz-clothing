import { catalogueFixture } from "./__fixtures__/catalogue";
import type { CatalogueResponse } from "./types";

export function getCatalogue(): Promise<CatalogueResponse> {
  return Promise.resolve(catalogueFixture);
}
