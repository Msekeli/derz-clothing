export type StorefrontLink = {
  label: string;
  href: string;
};

export type StorefrontHero = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryCta: StorefrontLink;
  secondaryCta?: StorefrontLink;
};

export type StorefrontDepartment = {
  id: string;
  name: string;
  href: string;
  image: string;
};

export type StorefrontCollection = {
  id: string;
  name: string;
  description?: string;
  href: string;
  image: string;
};

export type StorefrontProduct = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  currency: string;
  image: string;
  href: string;
  badge?: string;
};

export type StorefrontCampaign = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  cta: StorefrontLink;
};

export type StorefrontData = {
  hero: StorefrontHero;
  departments: StorefrontDepartment[];
  featuredProducts: StorefrontProduct[];
  collections: StorefrontCollection[];
  campaign?: StorefrontCampaign;
};
