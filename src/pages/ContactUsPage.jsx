import { siteImage } from '../image-settings/siteImages.js';
import React from 'react';
import { handleLegacyClick, handleLegacySubmit } from '../shared/actions.js';

export default function ContactUsPage() {
  return (
    <div className="page-content" onClick={handleLegacyClick} onSubmit={handleLegacySubmit}>
<section className={"page-hero"}><div className={"eyebrow"}>We are here to help</div><h1 className={"page-title"}>Contact Us</h1><p>We would love to hear from you. Our client care team is here for every question.</p></section><section className={"container contact-layout"}><div><img className={"contact-photo"} src={siteImage("ContactUs_01", "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=850&q=85")} /><p className={"eyebrow"}>Client care · Monday to Saturday</p><p>hello@lacinderae.com<br />+91 22 4000 2026<br />Mumbai, India</p></div><div><h2 className={"page-title"}>Send us a message</h2><form data-legacy-onsubmit={"event.preventDefault();toast('Your message has been received.');this.reset()"}><div className={"form-grid"}><label><span className={"field-label"}>First name</span><input className={"field"} required={""} /></label><label><span className={"field-label"}>Last name</span><input className={"field"} required={""} /></label><label className={"full"}><span className={"field-label"}>Email address</span><input className={"field"} type={"email"} required={""} /></label><label className={"full"}><span className={"field-label"}>Subject</span><select className={"field"}><option>Order enquiry</option><option>Product information</option><option>Returns</option><option>Other</option></select></label><label className={"full"}><span className={"field-label"}>Message</span><textarea className={"field"} rows={"5"} required={""}></textarea></label><div className={"full"}><button className={"btn"}>Send message →</button></div></div></form></div></section>
    </div>
  );
}
