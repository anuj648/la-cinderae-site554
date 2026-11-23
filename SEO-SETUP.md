# WELSTENFORDE SEO setup

The React UI is written in JSX in `src/pages/` and `src/components/`. `index.html` is only the standard Vite mounting shell. Styles are preserved from the supplied project.

## Before production
1. Replace the example domain in `public/sitemap.xml` with the actual domain; do not publish a sitemap pointing at a placeholder.
2. Add verified canonical URLs, social preview image, and business contact details.
3. Implement prerendering or SSR for crawlable page-specific HTML and dynamic product metadata. Client-side title updates alone are not complete technical SEO.
4. Connect real checkout, authentication, product inventory, email signup, and policies before launch. Current flows are demo UI, not a production backend.
5. Run `npm install`, `npm run build`, and visual regression tests on every route. Build and visual parity are not verified in this environment.
