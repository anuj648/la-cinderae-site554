import React, { useEffect, useRef, useState } from 'react';

/** Each slide includes its own image, copy and hotspots so they always travel together. */
export default function EditorialSlider({ slides, className, renderSlide, label }) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const touchStart = useRef(null);
  const resetTimer = useRef(null);
  const count = slides.length;
  useEffect(() => {
    const timer = window.setInterval(() => setIndex(i => i + 1), 2000);
    return () => window.clearInterval(timer);
  }, []);
  useEffect(() => () => window.clearTimeout(resetTimer.current), []);
  const onEnd = () => {
    if (index >= count) {
      setAnimate(false);
      setIndex(0);
      // Wait for the browser to paint the reset before enabling the next glide.
      resetTimer.current = window.setTimeout(() => setAnimate(true), 60);
    }
  };
  const swipeEnd = (x) => {
    if (touchStart.current === null) return;
    const delta = touchStart.current - x;
    touchStart.current = null;
    if (Math.abs(delta) > 45) setIndex(i => Math.max(0, Math.min(count, i + (delta > 0 ? 1 : -1))));
  };
  return <div className={`wf-editorial-slider ${className || ''}`} aria-label={label}
    onTouchStart={e => { touchStart.current = e.touches[0].clientX; }}
    onTouchEnd={e => swipeEnd(e.changedTouches[0].clientX)}
    onTouchCancel={() => { touchStart.current = null; }}>
    <div className="wf-editorial-track" style={{ transform: `translate3d(-${index * 100}%,0,0)`, transition: animate ? 'transform 1200ms cubic-bezier(.45,0,.2,1)' : 'none' }} onTransitionEnd={onEnd}>
      {[...slides, slides[0]].map((slide, i) => <div className="wf-editorial-slide" key={i}>{renderSlide(slide, i % count)}</div>)}
    </div>
    <div className="wf-slide-controls" aria-label="Campaign slide navigation">
      <span className="wf-slide-count">{String(index % count + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span>
      <div className="wf-slide-dots">{slides.map((_, i) => <button type="button" key={i} className={index % count === i ? 'active' : ''} aria-label={`Show slide ${i + 1}`} aria-current={index % count === i ? 'true' : undefined} onClick={() => { setAnimate(true); setIndex(i); }} />)}</div>
      <div className="wf-slide-arrows"><button type="button" aria-label="Previous slide" onClick={() => setIndex(i => (i % count + count - 1) % count)}>←</button><button type="button" aria-label="Next slide" onClick={() => setIndex(i => (i + 1) % count)}>→</button></div>
    </div>
  </div>;
}
