import React, { useEffect, useState } from 'react';
import { applyCommerceFilters as applyThemeFilters } from './shared/commerceState.js';
import { bind, updateCount, enhanceCommerce, enhanceEditorial, TITLES } from './legacy/commerce.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './styles.css';
import HomePage from './pages/HomePage.jsx';
import ShopAllPage from './pages/ShopAllPage.jsx';
import NewArrivalsPage from './pages/NewArrivalsPage.jsx';
import ClothingPage from './pages/ClothingPage.jsx';
import JewelleryPage from './pages/JewelleryPage.jsx';
import CollectionsPage from './pages/CollectionsPage.jsx';
import LookbookPage from './pages/LookbookPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import ProductDetailsPage from './pages/ProductDetailsPage.jsx';
import ShoppingBagPage from './pages/ShoppingBagPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import SignInPage from './pages/SignInPage.jsx';
import CreateAccountPage from './pages/CreateAccountPage.jsx';
import MyAccountPage from './pages/MyAccountPage.jsx';
import WishlistPage from './pages/WishlistPage.jsx';
import FaqPage from './pages/FaqPage.jsx';
import ShippingPage from './pages/ShippingPage.jsx';
import ReturnsRefundsPage from './pages/ReturnsRefundsPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsConditionsPage from './pages/TermsConditionsPage.jsx';
import SizeGuidePage from './pages/SizeGuidePage.jsx';
const pages = {
  'home': HomePage,
  'shop-all': ShopAllPage,
  'new-arrivals': NewArrivalsPage,
  'clothing': ClothingPage,
  'jewellery': JewelleryPage,
  'collections': CollectionsPage,
  'lookbook': LookbookPage,
  'about-us': AboutUsPage,
  'contact-us': ContactUsPage,
  'product-details': ProductDetailsPage,
  'shopping-bag': ShoppingBagPage,
  'checkout': CheckoutPage,
  'sign-in': SignInPage,
  'create-account': CreateAccountPage,
  'my-account': MyAccountPage,
  'wishlist': WishlistPage,
  'faq': FaqPage,
  'shipping': ShippingPage,
  'returns-refunds': ReturnsRefundsPage,
  'privacy-policy': PrivacyPolicyPage,
  'terms-conditions': TermsConditionsPage,
  'size-guide': SizeGuidePage
};
export default function App() {
  const [revision, setRevision] = useState(0);
  const key = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') === 'index' ? 'home' : (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '');
  const Page = pages[key] || pages.home;
  useEffect(() => {
    const refresh = () => setRevision(n => n + 1);
    window.addEventListener('lc-render', refresh);
    return () => window.removeEventListener('lc-render', refresh);
  }, []);
  useEffect(() => {
    bind(); updateCount(); enhanceCommerce(); enhanceEditorial();
    if (key === "collections" && new URLSearchParams(location.search).get("theme")) applyThemeFilters();
    document.title = `${TITLES[key] || 'Home'} | WELSTENFORDE`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', `Explore ${TITLES[key] || 'WELSTENFORDE'} at WELSTENFORDE, a contemporary apparel and jewellery fashion house.`);
  }, [revision, key]);
  return <div id="app"><Header /><main><Page key={revision} /></main><Footer /></div>;
}
