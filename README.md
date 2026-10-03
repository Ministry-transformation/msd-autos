# MSD Autos website

Standalone Astro site based on the MSD Autos design-system package.

## Start

Install dependencies with `npm install`, then run `npm run dev`. Build static pages with `npm run build`.

## Deployment

The public demo is deployed to GitHub Pages at <https://ministry-transformation.github.io/msd-autos/>. Pushes to `main` build and deploy through `.github/workflows/deploy.yml`. The workflow sets `PUBLIC_BASE_PATH=/msd-autos` for the project-site URL.

## Pages

- `/` home
- `/cars/` three demonstration listing snapshots with search, fuel filter, price sorting and a link to the complete active sales profile
- `/cars/detail/?vehicle=<id>` individual vehicle snapshot, specifications, source advert and enquiry action
- `/rental/` interactive enquiry planner preview; no reservation or submission is made, and unconfirmed terms are clearly called out
- `/service/` verified workshop capabilities and both conflicting public phones
- `/contact/` sales and workshop locations, public contact details and business profiles
- `/instagram/` a compact landing page for social-media traffic
- `/design-system/` visual foundations and reusable components

The site is available in English, Spanish and Russian. Vehicle card information is copied from six MSD Autos listings checked 3 October 2026. Listings are a time-sensitive snapshot; each original advert remains the source of truth for availability, price and full details. The complete active sales profile is [MSD Autos on Milanuncios](https://www.milanuncios.com/tiendas-profesionales/msd-autos-222741?utm_medium=social-media&utm_source=general&utm_campaign=send_friend-profile). Vehicle images are served by the listing provider.

The public sales phone and dealership address are shown on the site. Automoción REACTOR's two public workshop phones conflict, so both are shown with their source status. No public email, rental-specific number or direct business WhatsApp number was confirmed in the business dossier. The WhatsApp control on Milanuncios shares the profile; it is not a published MSD Autos WhatsApp contact. The inquiry form component is not connected to a submission destination and is therefore not shown as a working contact channel.

Before launch, connect inventory to a maintained data source, confirm rental terms and workshop contact details, and connect a verified enquiry destination. See the supplied business dossier for owner-confirmation questions and evidence status.
