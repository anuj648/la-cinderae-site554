# WELSTENFORDE — Apni images kaise change karein

## 1. Sabhi page images (Home, Collections, About, Lookbook, etc.)

VS Code me **src/image-settings/siteImages.js** kholo.
Har image ke samne page name aur image description hai.
Apni photo **public/images/** me paste karo, jaise `my-collection.jpg`.
Us entry me `""` ko `"/images/my-collection.jpg"` se replace karo.

Example:
```js
"Collections_01": "/images/my-collection.jpg",
```
(Actual entry ke key ko change mat karna; uski existing key use karo.)

## 2. Product images aur product details ke 4 gallery photos

**src/image-settings/productImages.js** kholo. Product name aur ID clearly likhe hain.
Example:
```js
5: ["/images/earrings-front.jpg", "/images/earrings-side.jpg", "/images/earrings-back.jpg", "/images/earrings-detail.jpg"],
```
Pehli image main image, baaki 3 gallery photos hain. Khali string se existing photo rahegi.

## 3. Run

VS Code terminal: `npm install` (pehli baar), phir `npm run dev`.
Deploy ke liye `npm run build`, phir Vercel par project redeploy.

**Sirf quoted paths change karo. Image names case-sensitive hain. Layout/CSS ko touch mat karo.**

Note: Existing static product cards on catalog pages have their own page-image entries in siteImages.js. Product gallery images are configured in productImages.js.
