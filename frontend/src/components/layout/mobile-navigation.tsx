"use client";

import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { AppLink } from "@/components/shared/app-link";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Men", href: "/shop?department=men" },
  { label: "Women", href: "/shop?department=women" },
  { label: "Kids", href: "/shop?department=kids" },
  { label: "New Arrivals", href: "/shop?collection=new-arrivals" },
];

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

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
        <div className="fixed inset-x-0 top-20 z-[var(--derz-z-overlay)]">
          {/* Click-away area */}
          <button
            type="button"
            aria-label="Close navigation"
            className="fixed inset-x-0 bottom-0 top-20 cursor-default bg-black/10"
            onClick={closeMenu}
          />

          {/* Mobile drawer */}
          <aside className="absolute right-0 top-0 w-1/2 max-w-sm border-l-2 border-border bg-background/95 shadow-lg backdrop-blur-md">
            <nav className="px-6 py-6" aria-label="Mobile navigation">
              <div className="flex flex-col gap-5">
                {navigationItems.map((item) => (
                  <AppLink
                    key={item.href}
                    href={item.href}
                    className="text-lg font-semibold transition-colors hover:text-[var(--derz-orange)]"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </AppLink>
                ))}
              </div>

              <div className="my-6 derz-divider" />

              <AppLink
                href="/wishlist"
                className="flex items-center gap-3 text-base font-medium transition-colors hover:text-[var(--derz-orange)]"
                onClick={closeMenu}
              >
                <Heart size={20} aria-hidden="true" />
                Wishlist
              </AppLink>
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  );
}
