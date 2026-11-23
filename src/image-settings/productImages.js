// OPTIONAL: CUSTOM PRODUCT IMAGES (all products in one place)
// Add photos to public/images/ then fill the paths below.
// The first image is the product cover. The other 3 are gallery thumbnails.
// Leave any entry as "" to use the existing photo.
// Example: 5: ["/images/earrings-front.jpg", "/images/earrings-side.jpg", "", ""],

export const PRODUCT_IMAGES = {
  1: ["", "", "", ""], // The Noir Dress
  2: ["", "", "", ""], // Sculpted Wool Coat
  3: ["", "", "", ""], // Soft Form Knit
  4: ["", "", "", ""], // The Tailored Blazer
  5: ["", "", "", ""], // Pearl Drop Earrings
  6: ["", "", "", ""], // Gold Necklace
  7: ["", "", "", ""], // Diamond Line Ring
  8: ["", "", "", ""], // Evening Mini Bag
  9: ["", "", "", ""], // The Column Skirt
  10: ["", "", "", ""], // Drape Silk Blouse
  11: ["", "", "", ""], // Sculptural Cuff
  12: ["", "", "", ""], // The Everyday Tote
  13: ["", "", "", ""], // Satin Evening Gown
  14: ["", "", "", ""], // Relaxed Linen Shirt
  15: ["", "", "", ""], // The Modern Trench
  16: ["", "", "", ""], // Sculpted Midi Dress
  17: ["", "", "", ""], // Soft Tailored Trousers
  18: ["", "", "", ""], // The Signature Blouse
  19: ["", "", "", ""], // Evening Column Dress
  20: ["", "", "", ""], // Cashmere Blend Knit
  21: ["", "", "", ""], // Gold Huggie Hoops
  22: ["", "", "", ""], // Pearl Pendant Necklace
  23: ["", "", "", ""], // Sculptural Gold Ring
  24: ["", "", "", ""], // Crystal Drop Earrings
  25: ["", "", "", ""], // Layered Chain Necklace
  26: ["", "", "", ""], // Modern Cuff Bracelet
  27: ["", "", "", ""], // Pearl Strand Bracelet
  28: ["", "", "", ""], // Mini Evening Clutch
  29: ["", "", "", ""], // Structured Leather Bag
  30: ["", "", "", ""], // Minimal Leather Belt
  31: ["", "", "", ""], // The Weekend Carryall
};

export function productImage(id, index, originalUrl) {
  return PRODUCT_IMAGES[id]?.[index] || originalUrl;
}

// Optional verified colour variants. Supply only actual inventory-backed colours.
// Example: 14: { colours: ['Ivory', 'Black'] }
export const PRODUCT_VARIANTS = {};
