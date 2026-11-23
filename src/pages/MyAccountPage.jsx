import React from 'react';
import { handleLegacyClick, handleLegacySubmit } from '../shared/actions.js';

export default function MyAccountPage() {
  return (
    <div className="page-content" onClick={handleLegacyClick} onSubmit={handleLegacySubmit}>
<section className={"page-hero"}><div className={"eyebrow"}>Your WELSTENFORDE</div><h1 className={"page-title"}>My Account</h1></section><section className={"container account-layout"}><aside className={"account-menu"}><a className={"active"} href={"my-account.html"}>Overview</a><a href={"#orders"}>My orders</a><a href={"wishlist.html"}>Wishlist</a><a href={"#address"}>Address book</a><a href={"sign-in.html"}>Sign out</a></aside><div><h2 className={"serif"} style={{"fontSize": "38px"}}>Welcome to your space.</h2><p>Manage your details, orders and considered selections.</p><h2 className={"serif"} id={"orders"}>Recent orders</h2><p>No orders to display yet. Your next favourite piece is waiting.</p><a className={"btn"} href={"shop-all.html"}>Explore the collection</a></div></section>
    </div>
  );
}
