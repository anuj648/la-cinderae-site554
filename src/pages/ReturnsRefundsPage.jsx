import React from 'react';
import { handleLegacyClick, handleLegacySubmit } from '../shared/actions.js';

export default function ReturnsRefundsPage() {
  return (
    <div className="page-content" onClick={handleLegacyClick} onSubmit={handleLegacySubmit}>
<section className={"page-hero"}><div className={"eyebrow"}>WELSTENFORDE / Client care</div><h1 className={"page-title"}>Returns &amp; Refunds</h1><p>We want every piece to feel right. If it does not, our client care team is here to help.</p></section><section className={"content-narrow"}><h2>Return policy</h2><p>Eligible unworn items may be returned within 7 days of delivery with original tags and packaging.</p><h2>Refund process</h2><p>Approved refunds are issued to the original payment method. Processing times depend on your payment provider.</p><p className={"eyebrow"} style={{"marginTop": "50px"}}>For further assistance, please <a href={"contact-us.html"}><u>contact our team</u></a>.</p></section>
    </div>
  );
}
