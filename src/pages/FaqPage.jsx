import React from 'react';
import { handleLegacyClick, handleLegacySubmit } from '../shared/actions.js';

export default function FaqPage() {
  return (
    <div className="page-content" onClick={handleLegacyClick} onSubmit={handleLegacySubmit}>
<section className={"page-hero"}><div className={"eyebrow"}>Client care</div><h1 className={"page-title"}>Frequently Asked Questions</h1><p>Helpful answers, thoughtfully considered.</p></section><section className={"content-narrow"}><div className={"accordion-item"}><button className={"accordion-trigger"}>How can I track my order? <span>＋</span></button><div className={"accordion-content"}>Once your order has been dispatched, you will receive an email with tracking details.</div></div><div className={"accordion-item"}><button className={"accordion-trigger"}>What is your return policy? <span>＋</span></button><div className={"accordion-content"}>Eligible pieces can be returned within 7 days of delivery, provided they are unworn and in original condition.</div></div><div className={"accordion-item"}><button className={"accordion-trigger"}>Do you ship internationally? <span>＋</span></button><div className={"accordion-content"}>International delivery options are shown at checkout when available.</div></div><div className={"accordion-item"}><button className={"accordion-trigger"}>How do I choose the right size? <span>＋</span></button><div className={"accordion-content"}>Visit our size guide or contact our client care team for assistance.</div></div><div className={"accordion-item"}><button className={"accordion-trigger"}>Can I change my order? <span>＋</span></button><div className={"accordion-content"}>Please contact client care as soon as possible. Changes cannot be guaranteed after dispatch.</div></div></section>
    </div>
  );
}
