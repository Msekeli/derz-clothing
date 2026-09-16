import { CampaignSection } from "@/features/storefront/sections/campaign";
import { CollectionsSection } from "@/features/storefront/sections/collections";
import { DepartmentsSection } from "@/features/storefront/sections/departments";
import { HeroSection } from "@/features/storefront/sections/hero";
import { LatestDrop } from "@/features/storefront/sections/latest-drop";
import { storefrontFixture } from "@/features/storefront/__fixtures__/storefront";

export default function Home() {
  return (
    <>
      <HeroSection hero={storefrontFixture.hero} />

      <LatestDrop products={storefrontFixture.featuredProducts} />

      <DepartmentsSection departments={storefrontFixture.departments} />

      {storefrontFixture.campaign && (
        <CampaignSection campaign={storefrontFixture.campaign} />
      )}

      <CollectionsSection collections={storefrontFixture.collections} />
    </>
  );
}
