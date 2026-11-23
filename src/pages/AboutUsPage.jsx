import { siteImage } from '../image-settings/siteImages.js';
import React from 'react';
import { handleLegacyClick, handleLegacySubmit } from '../shared/actions.js';

export default function AboutUsPage() {
  return (
    <div className="page-content" onClick={handleLegacyClick} onSubmit={handleLegacySubmit}>

<section className={"about-masthead"}>
<img src={siteImage("AboutUs_01", "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85")} alt={"WELSTENFORDE editorial fashion campaign"} />
<div className={"about-masthead-copy"}><div className={"eyebrow"}>WELSTENFORDE / A contemporary fashion house</div><h1>Style, with<br /><em>intention.</em></h1><p>Considered pieces. Enduring presence.</p></div>
</section>
<section className={"about-story section container"}><div className={"about-kicker"}>01 / Our Story</div><div className={"about-story-copy"}><h2>A point of view<br />that feels like you.</h2><p>WELSTENFORDE is a contemporary fashion house shaped by a belief in thoughtful design, confident individuality and the beauty of pieces chosen with care. We bring apparel and jewellery together in a considered world where personal style always comes first.</p></div><img src={siteImage("AboutUs_02", "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85")} alt={"Editorial portrait from the WELSTENFORDE world"} /></section>
<section className={"about-philosophy"}><img src={siteImage("AboutUs_03", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1100&q=85")} alt={"Contemporary fashion editorial"} /><div><div className={"eyebrow"}>02 / Our Philosophy</div><h2>Less, but<br /><em>more meaningful.</em></h2><p>We believe in a wardrobe built around feeling, form and versatility. Pieces should move with you, express something true and remain relevant beyond a single moment.</p><blockquote>“Wear what feels like you. Keep what feels timeless.”</blockquote></div></section>
<section className={"about-vision section container"}><div className={"eyebrow"}>03 / Our Vision &amp; Mission</div><div className={"about-vision-grid"}><article><span>OUR VISION</span><h2>A world where personal style is both effortless and individual.</h2></article><article><span>OUR MISSION</span><h2>To bring together considered apparel and jewellery through quality, contemporary design and thoughtful detail.</h2></article></div></section>
<section className={"about-defines"}><div className={"eyebrow"}>04 / What Defines Us</div><h2>Our signature, in every detail.</h2><div className={"about-values"}>
<article><b>01</b><h3>Quality</h3><p>Thoughtful materials, careful construction and considered finishing.</p></article>
<article><b>02</b><h3>Contemporary Design</h3><p>Modern silhouettes and refined details with a lasting point of view.</p></article>
<article><b>03</b><h3>Versatility</h3><p>Pieces designed to move naturally between moments and occasions.</p></article>
<article><b>04</b><h3>Individuality</h3><p>Personal expression over passing rules. Your style, your signature.</p></article>
</div></section>
<section className={"about-world section container"}><div className={"section-head"}><div><div className={"eyebrow"}>05 / Our World</div><h2>Two expressions.<br />One point of view.</h2></div><p>Explore the considered world of WELSTENFORDE, from modern apparel to the finishing touch of jewellery.</p></div><div className={"about-world-grid"}><a href={"clothing.html"}><img src={siteImage("AboutUs_04", "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=85")} alt={"WELSTENFORDE apparel collection"} /><span>APPAREL <b>Shop clothing ↗</b></span></a><a href={"jewellery.html"}><img src={siteImage("AboutUs_05", "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1100&q=85")} alt={"WELSTENFORDE jewellery collection"} /><span>JEWELLERY <b>Shop jewellery ↗</b></span></a></div></section>
<section className={"about-closing"}><img src={siteImage("AboutUs_06", "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1800&q=85")} alt={"WELSTENFORDE campaign"} /><div><div className={"eyebrow"}>06 / WELSTENFORDE</div><h2>Considered pieces.<br /><em>Enduring presence.</em></h2><a className={"btn light"} href={"shop-all.html"}>Discover the collection →</a></div></section>
    </div>
  );
}
