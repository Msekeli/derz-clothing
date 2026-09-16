"use client";

import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { AppLink } from "@/components/shared/app-link";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const navigationItems = [
  { label: "Men", href: "/shop?department=men" },
  { label: "Women", href: "/shop?department=women" },
  { label: "Kids", href: "/shop?department=kids" },
  { label: "New Arrivals", href: "/shop?collection=new-arrivals" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[var(--derz-z-sticky)] border-b bg-background/95 backdrop-blur">
      <div className="derz-container">
        <div className="flex min-h-16 items-center justify-between gap-6">
          <div className="lg:hidden">
            <MobileNavigation />
          </div>
          <ThemeToggle />
          <AppLink
            href="/"
            className="shrink-0 text-2xl font-extrabold tracking-tight"
            aria-label="DERZ home"
          >
            <span className="derz-brand-text">DERZ</span>
          </AppLink>

          <nav
            className="hidden flex-1 items-center justify-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {navigationItems.map((item) => (
              <AppLink
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-[var(--derz-orange)]"
              >
                {item.label}
              </AppLink>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <AppLink
              href="/search"
              className="flex size-10 items-center justify-center rounded-md hover:bg-muted"
              aria-label="Search"
            >
              <Search size={20} aria-hidden="true" />
            </AppLink>

            <AppLink
              href="/wishlist"
              className="hidden size-10 items-center justify-center rounded-md hover:bg-muted sm:flex"
              aria-label="Wishlist"
            >
              <Heart size={20} aria-hidden="true" />
            </AppLink>

            <AppLink
              href="/account"
              className="hidden size-10 items-center justify-center rounded-md hover:bg-muted sm:flex"
              aria-label="Account"
            >
              <User size={20} aria-hidden="true" />
            </AppLink>

            <AppLink
              href="/bag"
              className="flex size-10 items-center justify-center rounded-md hover:bg-muted"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={20} aria-hidden="true" />
            </AppLink>
          </div>
        </div>
      </div>
    </header>
  );
}
