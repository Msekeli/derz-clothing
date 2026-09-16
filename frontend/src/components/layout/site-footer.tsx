import { AppLink } from "@/components/shared/app-link";

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
  return (
    <footer className="border-t bg-background">
      <div className="derz-container py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="derz-stack-sm">
            <AppLink
              href="/"
              className="w-fit text-3xl font-extrabold tracking-tight"
              aria-label="DERZ home"
            >
              <span className="derz-brand-text">DERZ</span>
            </AppLink>

            <p className="max-w-xs text-sm text-muted-foreground">
              Different People. Same Energy.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="derz-stack-sm">
              <h2 className="text-sm font-semibold">{group.title}</h2>

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
          ))}
        </div>

        <div className="mt-12 derz-divider" />

        <div className="flex flex-col gap-2 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DERZ. All rights reserved.</p>

          <p>South Africa</p>
        </div>
      </div>
    </footer>
  );
}
