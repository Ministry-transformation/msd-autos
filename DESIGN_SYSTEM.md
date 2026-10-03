# MSD Autos web design system

Built from `MSD_AUTOS_DESIGN_SYSTEM_PACKAGE`, with `05_Docs/00_README.md` and `05_Docs/02_FILE_CAPTIONS_AND_SITE_USAGE.md` as implementation guidance. Brandbook PNGs are visual references; interface elements are rendered in HTML, CSS and SVG. The approved logo and symbol are used as brand assets.

## Foundations

- Brand red `#E11B22`, charcoal `#1F1F1F`, white `#FFFFFF`, light gray `#F4F4F4`, medium gray `#A0A0A0`.
- Montserrat throughout; 400 body, 500 supporting, 600 controls, 700 labels and buttons, 800 display.
- Display H1 scales from 46 to 64 px (48–64 px on desktop); H2 from 27 to 32 px; body 16 px; lead 17–20 px; labels 11–12 px with tracked uppercase styling. Button labels use 14 px on desktop and 12 px on small screens.
- Content width 1240 px; section vertical rhythm uses a fluid 76–124 px scale; component gaps use 13–28 px; card radius 8–10 px; controls radius 5–6 px.
- Brand red is reserved for primary actions, active states and concise emphasis. Gray surfaces and fine borders separate content. Dark panels support contrast and focal CTAs.

## Components and patterns

- Primary, dark, outline and light buttons share `.btn` dimensions and hover/focus behavior.
- `ServiceCard`, `SectionHeading`, `Button`, `Icon`, and `InquiryForm` are reusable Astro components.
- `BrandLockup` composes the approved circular mark with a responsive HTML/CSS wordmark and the approved “Driven by confidence” strapline. The emblem stays intact; the wordmark gives `MSD` a strong upright form and `Autos` a restrained red italic accent. Header and footer share this single component.
- Icons use a consistent 1.8 px outline SVG stroke. The original brand symbol is reduced to a crisp 256 px PNG for the header/footer lockup. Brand photography is used for atmospheric hero sections; all generated images are labeled illustrative and are not inventory or premises claims.
- Vehicle cards use dealer listing imagery, name, price and specifications, with a detail view and vehicle-specific enquiry route. Availability/price are time-sensitive. Cards use white surfaces, subtle borders/shadows and consistent internal padding.
- The catalogue has responsive search, fuel filtering and price sorting for six explicitly labeled listing snapshots; the complete live sales inventory links to MSD Autos' Milanuncios profile.
- Vehicle detail views pair the advert photo and verified snapshot specifications with availability disclosures and direct links to the live advert and sales phone.
- Rental enquiry planner is a demo interaction that builds a local, non-submitted preview; it does not book or send information. Rental terms remain pending business confirmation.
- Contact/location cards distinguish sales and workshop contacts. The workshop phone discrepancy is called out instead of silently choosing one number.
- Background details use CSS curves, fine-line patterns and separators inspired by the package graphics. Decorative layers stay behind readable content.

## Responsive behavior

- Navigation becomes a keyboard-accessible expandable menu below 700 px.
- The brand lockup scales its emblem and typography at the same breakpoint; its strapline remains legible without changing the approved logo artwork.
- Two-column hero, detail and contact layouts stack on narrow screens; three-card rows become one column. Heading and section spacing scale fluidly.
- Tap targets stay at least 44 px tall. Reduced-motion preference disables animated transitions and smooth scrolling.

## Content integrity

The site shows six MSD Autos listing snapshots checked on 3 October 2026; each links to its detail snapshot and original advert, which controls current price and availability. The complete sales profile links to Milanuncios. Verified public sales details and both workshop phone listings are included with clear status labels. Rental rates/terms, a canonical workshop phone, business WhatsApp number and enquiry destination remain unconfirmed; the site does not claim them or pretend an unconnected form submits. The Milanuncios WhatsApp control shares the profile rather than publishing a direct business contact.

## Languages

- English is the default. Spanish and Russian are available from the accessible header selector.
- The selected language is retained across internal navigation and refreshes. `?lang=es` and `?lang=ru` make localized pages shareable; English uses the clean URL.
- Visible copy, page titles, descriptions, form labels/placeholders, navigation labels, and accessibility names use the same phrase dictionary in `src/i18n.ts`.
