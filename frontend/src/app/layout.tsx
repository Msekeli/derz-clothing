import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DERZ",
  description: "DERZ Clothing — contemporary South African fashion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
