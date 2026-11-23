import { addCart, toggleWish, clearCommerceFilters, applyCommerceFilters, removeCart, qty, toast } from './commerceState.js';
export function handleLegacyClick(event) {
  const target = event.target.closest('[data-legacy-onclick]');
  if (!target) return;
  const action = target.dataset.legacyOnclick;
  let match;
  if ((match = action.match(/^toggleWish\((\d+),this\)$/))) toggleWish(Number(match[1]),target);
  else if ((match = action.match(/^addCart\((\d+)\)/))) { addCart(Number(match[1])); if(action.includes('checkout.html')) location.href='checkout.html'; }
  else if ((match = action.match(/^removeCart\((\d+)\)/))) removeCart(Number(match[1]));
  else if ((match = action.match(/^qty\((\d+),(-?\d+)\)/))) qty(Number(match[1]),Number(match[2]));
  else if (action.includes('clearCommerceFilters()')) clearCommerceFilters();
  else if (action.includes('applyCommerceFilters()')) applyCommerceFilters();
  else if (action.includes(".lc-filter-panel")) { document.querySelector('.lc-filter-panel')?.classList.toggle('open',action.includes("add('open')")); }
  else if (action.includes(".mobile-nav")) document.querySelector('.mobile-nav')?.classList.toggle('open');
  else if ((match=action.match(/location.href='([^']+)'/))) location.href=match[1];
  else if (action.includes('openSearch()')) window.openSearch?.();
  else if ((match=action.match(/quickView\((\d+)\)/))) window.quickView?.(Number(match[1]));
}
export function handleLegacySubmit(event){const form=event.target;if(form.classList.contains('newsletter')){event.preventDefault();toast('Thank you for subscribing.');form.reset();}}
