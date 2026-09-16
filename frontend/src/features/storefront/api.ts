import { apiClient } from "@/services/api/client";
import type { StorefrontData } from "./types";

export function getStorefront() {
  return apiClient.get<StorefrontData>("/api/storefront");
}
