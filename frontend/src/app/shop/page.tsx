import { CatalogueContent } from "@/features/catalogue/components/catalogue-content";
import { getCatalogue } from "@/features/catalogue";

export default async function ShopPage() {
  const catalogue = await getCatalogue();

  return (
    <main>
      <div className="derz-container">
        <CatalogueContent catalogue={catalogue} />
      </div>
    </main>
  );
}
