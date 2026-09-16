"use client";

import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { AppLink } from "@/components/shared/app-link";
import { BrandLogo } from "@/components/shared/brand-logo";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const navigationItems = [
  { label: "Men", href: "/shop?department=men" },
  { label: "Women", href: "/shop?department=women" },
  { label: "Kids", href: "/shop?department=kids" },
  { label: "New Arrivals", href: "/shop?collection=new-arrivals" },
  { label: "Collections", href: "/shop?view=collections" },
  { label: "Drops", href: "/shop?collection=limited-drops" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[var(--derz-z-sticky)] border-b bg-background/95 backdrop-blur">
      <div className="derz-container">
        <div className="flex min-h-20 items-center justify-between gap-4 lg:gap-6">
          <BrandLogo />

          <nav
            className="hidden flex-1 items-center justify-center gap-6 lg:flex"
            aria-label="Main navigation"
          >
            {navigationItems.map((item) => (
              <AppLink
                key={item.href}
                href={item.href}
                className="group border-b border-border/60 py-2 text-sm font-medium transition-all duration-200 hover:border-[var(--derz-orange)] hover:text-[var(--derz-orange)]"
              >
                <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-[1.03]">
                  {item.label}
                </span>
              </AppLink>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <AppLink
              href="/search"
              className="flex size-10 items-center justify-center rounded-md border border-transparent transition-colors hover:border-[var(--derz-orange)] hover:bg-[var(--derz-orange)]/5 hover:text-[var(--derz-orange)]"
              aria-label="Search"
            >
              <Search size={20} aria-hidden="true" />
            </AppLink>

            <AppLink
              href="/wishlist"
              className="hidden size-10 items-center justify-center rounded-md border border-transparent transition-colors hover:border-[var(--derz-orange)] hover:bg-[var(--derz-orange)]/5 hover:text-[var(--derz-orange)] sm:flex"
              aria-label="Wishlist"
            >
              <Heart size={20} aria-hidden="true" />
            </AppLink>

            <AppLink
              href="/account"
              className="flex size-10 items-center justify-center rounded-md border border-transparent transition-colors hover:border-[var(--derz-orange)] hover:bg-[var(--derz-orange)]/5 hover:text-[var(--derz-orange)]"
              aria-label="Account"
            >
              <User size={20} aria-hidden="true" />
            </AppLink>

            <ThemeToggle />

            <AppLink
              href="/bag"
              className="flex size-10 items-center justify-center rounded-md border border-transparent transition-colors hover:border-[var(--derz-orange)] hover:bg-[var(--derz-orange)]/5 hover:text-[var(--derz-orange)]"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={20} aria-hidden="true" />
            </AppLink>

            <div className="lg:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
