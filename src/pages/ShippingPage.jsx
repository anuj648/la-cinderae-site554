import React from 'react';
import { handleLegacyClick, handleLegacySubmit } from '../shared/actions.js';

export default function ShippingPage() {
  return (
    <div className="page-content" onClick={handleLegacyClick} onSubmit={handleLegacySubmit}>
<section className={"page-hero"}><div className={"eyebrow"}>WELSTENFORDE / Client care</div><h1 className={"page-title"}>Shipping Information</h1><p>Complimentary standard shipping is available on qualifying orders.</p></section><section className={"content-narrow"}><h2>Delivery options</h2><p>Estimated delivery timelines are displayed at checkout. Orders are processed during business days.</p><h2>Tracking your order</h2><p>A dispatch confirmation with tracking information will be sent to your email address.</p><p className={"eyebrow"} style={{"marginTop": "50px"}}>For further assistance, please <a href={"contact-us.html"}><u>contact our team</u></a>.</p></section>
    </div>
  );
}
