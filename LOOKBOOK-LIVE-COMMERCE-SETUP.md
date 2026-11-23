# WELSTENFORDE Lookbook — production integration checklist

The eight sticky editorial sections, hotspot drawers, look-level selection, dynamic totals and existing browser-local cart are included. The original campaign hero image key and copy are preserved.

## Still requires real business assets and services
- Add the actual exact-product front/back/side/detail images to `public/images` and configure `src/image-settings/productImages.js`. No other-product photographs are used to imitate missing angles.
- Confirm the editorial image for each look really features the mapped product IDs. Hotspot coordinates are editorial estimates and must be calibrated against final supplied photos.
- Add confirmed colours to `PRODUCT_VARIANTS` in the same file; do not invent inventory options. Size options are UI choices, not stock validation.
- Connect a real inventory/order/payment provider. This project currently uses `localStorage` cart and a **demo checkout**. Do not accept live payments or orders until replaced and tested.
- Verify actual product prices, materials, variants and image rights with the merchant. Existing catalogue data is illustrative and is not verified against a merchant backend.
- Test all devices, actual stock validation, shipping, taxes, checkout, and order confirmation before launch.
