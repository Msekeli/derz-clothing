import type { StorefrontData } from "../types";

export const storefrontFixture: StorefrontData = {
  hero: {
    eyebrow: "DERZ",
    title: "Different People. Same Energy.",
    description:
      "Contemporary South African fashion made for people who move differently.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    primaryCta: {
      label: "Shop New Arrivals",
      href: "/shop?collection=new-arrivals",
    },
    secondaryCta: {
      label: "Explore DERZ",
      href: "/shop",
    },
  },

  departments: [
    {
      id: "men",
      name: "Men",
      href: "/shop?department=men",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22",
    },
    {
      id: "women",
      name: "Women",
      href: "/shop?department=women",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    },
    {
      id: "kids",
      name: "Kids",
      href: "/shop?department=kids",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4",
    },
  ],

  featuredProducts: [
    {
      id: "derz-001",
      name: "DERZ Essential Tee",
      slug: "derz-essential-tee",
      category: "T-Shirts",
      price: 499,
      currency: "ZAR",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      href: "/product/derz-essential-tee",
      badge: "New",
    },
    {
      id: "derz-002",
      name: "DERZ Everyday Hoodie",
      slug: "derz-everyday-hoodie",
      category: "Hoodies",
      price: 899,
      currency: "ZAR",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
      href: "/product/derz-everyday-hoodie",
      badge: "New",
    },
    {
      id: "derz-003",
      name: "DERZ Relaxed Set",
      slug: "derz-relaxed-set",
      category: "Sets",
      price: 1199,
      currency: "ZAR",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
      href: "/product/derz-relaxed-set",
      badge: "Featured",
    },
    {
      id: "derz-004",
      name: "DERZ Street Jacket",
      slug: "derz-street-jacket",
      category: "Jackets",
      price: 1499,
      currency: "ZAR",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
      href: "/product/derz-street-jacket",
      badge: "New",
    },
  ],

  collections: [
    {
      id: "new-arrivals",
      name: "New Arrivals",
      description: "Fresh pieces from the latest DERZ release.",
      href: "/shop?collection=new-arrivals",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    },
    {
      id: "everyday-derz",
      name: "Everyday DERZ",
      description: "Pieces designed for everyday movement.",
      href: "/shop?collection=everyday-derz",
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e",
    },
  ],

  campaign: {
    eyebrow: "LIMITED DROP",
    title: "Made Different.",
    description: "Limited pieces for people who bring their own energy.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae",
    cta: {
      label: "Explore the Drop",
      href: "/shop?collection=limited-drops",
    },
  },
};
