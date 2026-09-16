import { AppLink } from "@/components/shared/app-link";
import { BrandLogo } from "@/components/shared/brand-logo";

const footerGroups = [
  {
    title: "Shop",
    links: [
      { label: "Men", href: "/shop?department=men" },
      { label: "Women", href: "/shop?department=women" },
      { label: "Kids", href: "/shop?department=kids" },
      { label: "New Arrivals", href: "/shop?collection=new-arrivals" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Delivery", href: "/delivery" },
      { label: "Returns", href: "/returns" },
      { label: "Size Guide", href: "/size-guide" },
    ],
  },
  {
    title: "DERZ",
    links: [
      { label: "About DERZ", href: "/about" },
      { label: "Collections", href: "/collections" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export function SiteFooter() {
  const helpGroup = footerGroups.find((group) => group.title === "Help");

  return (
    <footer className="border-t bg-background">
      <div className="derz-container py-6 lg:py-8">
        {/* Desktop footer */}
        <div className="hidden lg:grid lg:grid-cols-4">
          <div className="border-border/70 pr-8">
            <BrandLogo />
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="border-l border-border/70 px-8">
              <div className="derz-stack-xs">
                <h2 className="text-base font-semibold">{group.title}</h2>

                <nav aria-label={`${group.title} links`}>
                  <ul className="derz-stack-xs">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <AppLink
                          href={link.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </AppLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile footer */}
        <div className="lg:hidden">
          <div className="flex flex-wrap items-center text-sm">
            <span className="font-semibold">Help</span>

            {helpGroup?.links.map((link) => (
              <span key={link.href} className="flex items-center">
                <span aria-hidden="true" className="mx-3 h-4 w-px bg-border" />

                <AppLink
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </AppLink>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 derz-divider" />

        <div className="flex items-center justify-between pt-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} DERZ. All rights reserved.</p>

          <p>South Africa</p>
        </div>
      </div>
    </footer>
  );
}
