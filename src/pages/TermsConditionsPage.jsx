import React from 'react';
import { handleLegacyClick, handleLegacySubmit } from '../shared/actions.js';

export default function TermsConditionsPage() {
  return (
    <div className="page-content" onClick={handleLegacyClick} onSubmit={handleLegacySubmit}>
<section className={"page-hero"}><div className={"eyebrow"}>WELSTENFORDE / Client care</div><h1 className={"page-title"}>Terms &amp; Conditions</h1><p>By using this website, you agree to these terms and the policies referenced here.</p></section><section className={"content-narrow"}><h2>Orders &amp; payments</h2><p>All orders are subject to acceptance and product availability. Prices and details are shown at checkout.</p><h2>Intellectual property</h2><p>Website content, photography, designs and brand assets are owned by or licensed to WELSTENFORDE.</p><h2>Use of website</h2><p>Please use the website lawfully and do not interfere with its operation.</p><p className={"eyebrow"} style={{"marginTop": "50px"}}>For further assistance, please <a href={"contact-us.html"}><u>contact our team</u></a>.</p></section>
    </div>
  );
}
