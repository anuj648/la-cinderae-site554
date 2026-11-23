import { PRODUCT_IMAGES, PRODUCT_VARIANTS, productImage } from '../image-settings/productImages.js';
import React, { useState, useRef } from 'react';
import { products, addCart, toggleWish } from '../legacy/commerce.js';

const image = (id, width = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const otherImages = {
  Clothing: ['photo-1529139574466-a303027c1d8b', 'photo-1534528741775-53994a69daeb', 'photo-1591047139829-d91aecb6caea'],
  Jewellery: ['photo-1611652022419-a9419f74343d', 'photo-1535632066927-ab7c9ab60908', 'photo-1605100804763-247f67b3557e'],
  Accessories: ['photo-1548036328-c9fa89d128fa', 'photo-1584917865442-de89df76afd3', 'photo-1553062407-98eeb64c6a62']
};
export default function ProductDetailsPage() {
  const id = Number(new URLSearchParams(window.location.search).get('id'));
  const product = products.find(p => p.id === id) || products[0];
  // Show only images configured for this exact product; never substitute unrelated products as alternate angles.
  const configured = (PRODUCT_IMAGES[product.id] || []).filter(Boolean);
  const gallery = configured.length ? configured : [productImage(product.id, 0, image(product.img))];
  // Always provide four navigable views. Where only one photograph exists,
  // the extra views are clearly crops of that same image, never unrelated stock photos.
  const slides = Array.from({length:4}, (_, index) => ({
    src: gallery[index] || gallery[0],
    crop: index >= gallery.length ? index : 0,
    isCrop: index >= gallery.length
  }));
  const [selected, setSelected] = useState(0);
  const [colour, setColour] = useState('');
  const [wish, setWish] = useState(() => { try { return JSON.parse(localStorage.getItem('lc-wish') || '[]').includes(product.id); } catch { return false; } });
  const swipeStart = useRef(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const go = (direction) => setSelected(index => (index + direction + slides.length) % slides.length);
  const [size, setSize] = useState('S');
  return <div className="page-content" data-editorial="WELSTENFORDE / PRODUCT ARCHIVE"><section className="container lc-detail">
    <div className="lc-gallery wel-gallery"><div className="lc-primary wel-main-image"
      onPointerDown={e => { if(slides.length < 2 || e.target.closest('button')) return; swipeStart.current = {x:e.clientX, y:e.clientY}; setDragging(true); }}
      onPointerMove={e => { if(!swipeStart.current) return; const dx=e.clientX-swipeStart.current.x; const dy=e.clientY-swipeStart.current.y; if(Math.abs(dy)>Math.abs(dx) && Math.abs(dy)>12){swipeStart.current=null;setDragging(false);setDragOffset(0);return;} setDragOffset(Math.max(-110,Math.min(110,dx))); }}
      onPointerUp={e => {if(!swipeStart.current)return; const dx=e.clientX-swipeStart.current.x; if(Math.abs(dx)>40)go(dx<0?1:-1);swipeStart.current=null;setDragging(false);setDragOffset(0);}}
      onPointerCancel={() => {swipeStart.current=null;setDragging(false);setDragOffset(0);}}>
      <div className="wel-swipe-track" style={{transform:`translate3d(calc(-${selected * 100}% + ${dragOffset}px),0,0)`,transition:dragging?'none':'transform 420ms cubic-bezier(.22,.61,.36,1)'}}>
        {slides.map((slide,index)=><div className={`wel-swipe-slide wel-crop-${slide.crop}`} key={`${product.id}-${index}`}><img src={slide.src} alt={`${product.name} ${slide.isCrop ? "detail crop" : "photo"} ${index+1}`} draggable="false" /></div>)}
      </div>
      {<><button className="wel-gallery-arrow wel-prev" type="button" onClick={()=>go(-1)} aria-label="Previous product image">‹</button><button className="wel-gallery-arrow wel-next" type="button" onClick={()=>go(1)} aria-label="Next product image">›</button><div className="wel-gallery-dots" aria-label="Product image navigation">{slides.map((_, i) => <button type="button" key={i} className={i===selected ? "active" : ""} onClick={() => setSelected(i)} aria-label={`View product image ${i+1}`} aria-current={i===selected ? "true" : undefined} />)}</div></>}
      <button type="button" className="lc-main-wish" aria-label="Toggle wishlist" onClick={e=>{toggleWish(product.id,e.currentTarget);setWish(v=>!v)}}>{wish?'♥':'♡'}</button>
    </div></div>
    <div className="lc-detail-copy"><div className="eyebrow">{product.cat} / {product.tag}</div><h1>{product.name}</h1><p className="price">₹{product.price.toLocaleString('en-IN')}</p><p>Refined forms and considered details, designed to accompany your everyday.</p>
    {product.cat === 'Clothing' && <><div className="eyebrow">Select size</div><div className="size-options">{['S','M','L','XL'].map(s => <button key={s} type="button" className={size===s?'active':''} onClick={() => setSize(s)}>{s}</button>)}</div><a href="size-guide.html">View size guide →</a></>}
    {PRODUCT_VARIANTS[product.id]?.colours?.length>0 && <><div className="eyebrow">Select colour</div><div className="wel-colour-options">{PRODUCT_VARIANTS[product.id].colours.map(c=><button type="button" key={c} className={(colour||PRODUCT_VARIANTS[product.id].colours[0])===c?"active":""} onClick={()=>setColour(c)}>{c}</button>)}</div></>}
    <button type="button" className="btn" onClick={() => addCart(product.id)}>Add to Bag</button><button type="button" className="btn outline" onClick={() => { addCart(product.id); window.location.href='checkout.html'; }}>Buy Now</button><p>Complimentary shipping on qualifying orders.</p></div>
  </section></div>;
}
