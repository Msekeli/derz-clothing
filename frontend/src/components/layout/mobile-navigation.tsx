"use client";

import { Menu, Search, ShoppingBag, User, Heart, X } from "lucide-react";
import { useState } from "react";
import { AppLink } from "@/components/shared/app-link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navigationItems = [
  { label: "Men", href: "/shop?department=men" },
  { label: "Women", href: "/shop?department=women" },
  { label: "Kids", href: "/shop?department=kids" },
  { label: "New Arrivals", href: "/shop?collection=new-arrivals" },
];

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>

      {open ? (
        <div className="fixed inset-x-0 top-full z-[var(--derz-z-overlay)] border-b bg-background">
          <nav className="derz-container py-6" aria-label="Mobile navigation">
            <div className="derz-stack-md">
              {navigationItems.map((item) => (
                <AppLink
                  key={item.href}
                  href={item.href}
                  className="text-lg font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </AppLink>
              ))}
            </div>

            <div className="my-6 derz-divider" />

            <div className="derz-stack-sm">
              <AppLink
                href="/search"
                className="flex items-center gap-3 py-2"
                onClick={() => setOpen(false)}
              >
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium">Theme</span>
                  <ThemeToggle />
                </div>
                <div className="derz-divider" />
                <Search size={20} aria-hidden="true" />
                Search
              </AppLink>

              <AppLink
                href="/wishlist"
                className="flex items-center gap-3 py-2"
                onClick={() => setOpen(false)}
              >
                <Heart size={20} aria-hidden="true" />
                Wishlist
              </AppLink>

              <AppLink
                href="/account"
                className="flex items-center gap-3 py-2"
                onClick={() => setOpen(false)}
              >
                <User size={20} aria-hidden="true" />
                Account
              </AppLink>

              <AppLink
                href="/bag"
                className="flex items-center gap-3 py-2"
                onClick={() => setOpen(false)}
              >
                <ShoppingBag size={20} aria-hidden="true" />
                Shopping Bag
              </AppLink>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
