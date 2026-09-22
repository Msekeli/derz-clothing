import { ShopFooter } from "@/components/layout/shop-footer";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <ShopFooter />
    </>
  );
}
