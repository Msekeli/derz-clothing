# DERZ UI & Brand Design Specification

**Status:** Approved Visual Source of Truth

## 1. Purpose

This document records the approved visual and brand decisions for the DERZ Storefront.

Technical architecture and implementation sequencing remain governed by the architecture and implementation documentation.

## 2. Brand

Primary brand name: **DERZ**

Do not use “DERZ Clothing” as the primary brand identity, logo name, or customer-facing brand name.

Approved brand statement:

> Different People. Same Energy.

DERZ represents connection between people, styles, influences, culture and modernity.

## 3. Brand Positioning

DERZ is a South African youth fashion and lifestyle brand focused on contemporary casual and streetwear, with strong South African youth and amapiano cultural context.

The audience includes:

- Men
- Women
- Kids

Traditional or Xhosa-inspired pieces may exist, but DERZ is not a traditional-only clothing brand.

## 4. Logo

The approved direction is the connected DERZ wordmark.

The D-E-R-Z lettering is treated as connected blocks/forms while keeping DERZ as the central focus.

Approved applications include light-background and dark-background treatments.

The logo must remain suitable for digital use, clothing labels, embroidery, screen printing, packaging and merchandise.

## 5. Brand Colours

Current Storefront working palette:

| Token          | Value     |
| -------------- | --------- |
| Deep Brown     | `#2E1A0F` |
| Burnt Orange   | `#E05A1F` |
| Warm Cream     | `#F5E9D7` |
| Warm Off-White | `#FAF8F4` |
| Stone          | `#C9B7A0` |

Brand colours and product colours are separate systems. Garments may use any commercially appropriate colour.

## 6. Themes

The Storefront supports light and dark themes.

Light theme:

- Warm cream/off-white surfaces
- Deep brown text
- Burnt-orange accents
- Clean editorial presentation

Dark theme:

- Deep brown/dark warm surfaces
- Warm cream text
- Burnt-orange accents
- More immersive streetwear presentation

Light is the current default.

## 7. Typography

Typography should be modern, clean, bold and fashion-oriented.

The Storefront must maintain a controlled hierarchy for headings, body text, labels, captions and supporting information.

Individual pages must not independently reinvent typography.

## 8. Visual Personality

DERZ should communicate:

- Contemporary
- Confident
- Youthful
- Culturally aware
- Expressive
- Connected
- Modern
- Accessible
- Fashion-forward

Avoid generic technology styling, generic sports branding, stereotypical “African” decoration, traditional-only presentation and overcomplicated luxury styling.

## 9. UI Rules

The Storefront UI must:

- Use semantic design tokens.
- Avoid hard-coded brand colours inside individual components.
- Maintain consistent spacing and typography.
- Support light and dark themes.
- Use shadcn/ui as the primary UI foundation.
- Use Tailwind CSS for layout and utilities.
- Remain responsive across mobile, tablet and desktop.
- Maintain accessible contrast and focus states.
- Prefer purposeful interfaces over decorative complexity.

The visual system is the source of truth. New pages and components should reuse existing DERZ tokens and patterns.

## 10. E-Commerce UX Direction

Product discovery is a primary Storefront function.

Search, navigation, filtering and sorting must support efficient discovery.

Product grids should support browsing a large catalogue while maintaining DERZ's visual language.

Promotions, new arrivals, limited drops and collections should have strong visibility without making DERZ appear discount-only.

Product pages must make imagery, pricing, variants, sizes, availability and purchase actions immediately understandable.

Wishlist and bag actions should remain accessible throughout the shopping journey.

Mobile shopping is a first-class experience.

SHEIN and Temu may be used as references for interaction patterns, product discovery and shopping efficiency only. They are not references for DERZ branding, visual identity, artwork or content.

## 11. Current Status

Approved:

- DERZ as primary brand name
- Connected DERZ wordmark
- Light and dark logo applications
- Brown/orange/cream colour direction
- Light and dark Storefront themes
- “Different People. Same Energy.”
- Connection/joining as conceptual foundation
- Product colours intentionally unrestricted

Still to be refined during implementation:

- Production logo assets
- Final font selection
- Final logo colour values if artwork differs
- Detailed reusable component patterns
