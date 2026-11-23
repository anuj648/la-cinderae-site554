# SEO deployment checklist

- All original layouts and CSS are preserved. Each page has a separate React component in `src/pages`.
- The shared commerce markup and behaviors are retained in `src/legacy/commerce.js` to avoid visual regressions. It is transitional code, not a complete idiomatic React rewrite.
- Every page has a title, description, robots tag, Open Graph tags, Twitter card, and manifest.
- `public/robots.txt` and `public/sitemap.xml` are supplied.
- **Before publishing:** replace `https://YOUR-DOMAIN.example` in sitemap.xml with the actual canonical domain and add the sitemap URL to robots.txt.
- Set up real canonical links, production OG image, verified business identity, and product structured data only after final domain and verified product data are available.
- This is a client-rendered Vite React app; for strongest SEO use prerendering or SSR and validate with Search Console.
- Cart, account and checkout remain front-end demos and require a backend/payment integration for production.
