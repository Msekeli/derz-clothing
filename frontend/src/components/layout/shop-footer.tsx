import { AppLink } from "@/components/shared/app-link";

const desktopFooterLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Delivery", href: "/delivery" },
  { label: "Returns", href: "/returns" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const mobileFooterLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Delivery", href: "/delivery" },
  { label: "Returns", href: "/returns" },
  { label: "Size Guide", href: "/size-guide" },
];

export function ShopFooter() {
  return (
    <footer className="mt-12 border-t bg-background">
      {/* Desktop catalogue footer */}
      <div className="hidden lg:block">
        <div className="derz-container py-5">
          <div className="flex items-center justify-between gap-8">
            <nav aria-label="Shop footer links">
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {desktopFooterLinks.map((link) => (
                  <li key={link.href}>
                    <AppLink
                      href={link.href}
                      className="group inline-flex border-b border-border/60 py-0.5 text-xs text-muted-foreground transition-all duration-200 hover:border-[var(--derz-orange)] hover:text-[var(--derz-orange)]"
                    >
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:scale-[1.02]">
                        {link.label}
                      </span>
                    </AppLink>
                  </li>
                ))}
              </ul>
            </nav>

            <p className="shrink-0 text-xs text-muted-foreground">
              South Africa
            </p>
          </div>

          <div className="mt-4 derz-divider" />

          <div className="flex items-center justify-between pt-3 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} DERZ. All rights reserved.</p>

            <p>DERZ</p>
          </div>
        </div>
      </div>

      {/* Mobile footer */}
      <div className="lg:hidden">
        <div className="derz-container py-6">
          <div className="flex flex-wrap items-center gap-y-2 text-sm">
            <span className="font-semibold">Help</span>

            {mobileFooterLinks.map((link) => (
              <span key={link.href} className="flex items-center">
                <span aria-hidden="true" className="mx-3 h-4 w-px bg-border" />

                <AppLink
                  href={link.href}
                  className="group border-b border-border/60 py-1 text-muted-foreground transition-all duration-200 hover:border-[var(--derz-orange)] hover:text-[var(--derz-orange)]"
                >
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:scale-[1.02]">
                    {link.label}
                  </span>
                </AppLink>
              </span>
            ))}
          </div>

          <div className="mt-5 derz-divider" />

          <div className="flex items-center justify-between pt-3 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} DERZ. All rights reserved.</p>

            <p>South Africa</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
