import React from 'react';
import { handleLegacyClick, handleLegacySubmit } from '../shared/actions.js';

export default function PrivacyPolicyPage() {
  return (
    <div className="page-content" onClick={handleLegacyClick} onSubmit={handleLegacySubmit}>
<section className={"page-hero"}><div className={"eyebrow"}>WELSTENFORDE / Client care</div><h1 className={"page-title"}>Privacy Policy</h1><p>Your privacy matters. We collect only the information needed to provide and improve your experience.</p></section><section className={"content-narrow"}><h2>Information we collect</h2><p>Contact, delivery and order details supplied when you interact with WELSTENFORDE.</p><h2>How we use it</h2><p>To fulfil orders, provide support, communicate updates and maintain website security.</p><h2>Your choices</h2><p>You may contact our team to request access, correction or deletion where applicable.</p><p className={"eyebrow"} style={{"marginTop": "50px"}}>For further assistance, please <a href={"contact-us.html"}><u>contact our team</u></a>.</p></section>
    </div>
  );
}
