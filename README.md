# WELSTENFORDE — React + Vite

Luxury editorial fashion-house storefront, migrated to a React + Vite project while preserving the supplied 21-page design, styles, page content, and browser-side demo interactions.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- npm

## Install and run
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```
The production website is generated in `dist/`.

## Pages
Home, Shop All, New Arrivals, Clothing, Jewellery, Collections, About Us, Contact Us, Product Details, Shopping Bag, Checkout, Sign In, Create Account, My Account & Orders, Wishlist, FAQ, Shipping, Returns & Refunds, Privacy Policy, Terms & Conditions, Size Guide.

## Notes
- All page links remain connected through the included HTML page routes.
- The supplied CSS palette, page layouts, and responsive styles are retained.
- Cart and wishlist are browser-local demo features using localStorage.
- Forms and checkout are demonstrations only. There is no live payment gateway, inventory, authentication, customer database, or order backend.
- Fashion photography and Google Fonts are loaded from remote services and need an internet connection.

## Premium commerce additions
- Added a campaign-style Lookbook page with clickable product hotspots.
- Added Quick View overlays to product cards.
- Added Complete the Look recommendations and Recently Viewed products on product detail pages.
- Added a back-to-top control, premium page entrance transitions, and a saved region/currency display preference selector.
- Added responsive styling for these interactions across desktop and mobile, while retaining the existing CSS variables and palette.
- Existing localStorage cart and wishlist behavior remains in place.

The region selector currently saves a display preference only; international pricing, currency conversion, duties, shipping rules and payment processing require an international commerce backend before international selling begins.

## Editorial upgrade
- Distinct Collections landing page with four campaign-led stories and separate editorial composition.
- Separate Lookbook visual journal with a typographic cover, asymmetric magazine spreads, shoppable hotspots and links into Apparel and Jewellery.
- Expanded homepage with Apparel and Jewellery discovery, seasonal campaign, New Arrivals, Signature Pieces, Shop the Look, Recently Viewed and editorial newsletter.
- Added product-suggestion search overlay and Quick Add to Bag controls while retaining existing Quick View and Wishlist interactions.
- Added responsive desktop, tablet, mobile and touch-device layouts for the new editorial experiences.
- Existing brand colour tokens are retained; the upgrade does not introduce a new palette.

## Verification
- `node --check public/assets/js/app.js` passes.
- Run `npm install` and `npm run build` locally to generate the production build.


## Latest requested update
- About Us now includes Our Story, Philosophy, Vision & Mission, What Defines Us, Our World, and a campaign closing statement.
- Navigation follows: New In, Shop All, Clothing, Jewellery, Collections, Lookbook, About Us, Contact Us.
- Product cards include interactive wishlist hearts.
- Product detail pages use a focused four-image editorial gallery.
- Expanded the demo catalogue with additional apparel, jewellery and accessories.
- Existing React/Vite setup and other pages are retained.

Run locally:
```bash
npm install
npm run dev
```
