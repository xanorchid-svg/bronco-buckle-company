import { useEffect, useRef, useState } from 'react';
import './DiscountPopup.css';

// ── Easy-edit settings ─────────────────────────────────────
const PHONE_DISPLAY = '+1 (214) 206-5060';
const PHONE_HREF = 'tel:+12142065060';
const IMAGE = '/buckle-hero.png';
const DELAY_MS = 800;              // wait before the popup appears
const SHOW_ONCE_PER_SESSION = true; // false = show every time the page opens
const STORAGE_KEY = 'bb_discount_popup_seen';

// Holiday offer: 30% through Nov 15, 2026 (Dallas time — ends midnight CST = 06:00 UTC Nov 16),
// then the popup automatically goes back to 20%.
const PROMO_ENDS = Date.UTC(2026, 10, 16, 6, 0, 0);
const PROMO_PERCENT = 30;
const DEFAULT_PERCENT = 20;
// ───────────────────────────────────────────────────────────

function markSeen() {
  try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch (e) { /* storage blocked — ignore */ }
}

function alreadySeen() {
  if (!SHOW_ONCE_PER_SESSION) return false;
  try { return sessionStorage.getItem(STORAGE_KEY) === '1'; } catch (e) { return false; }
}

export default function DiscountPopup() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);
  const percent = Date.now() < PROMO_ENDS ? PROMO_PERCENT : DEFAULT_PERCENT;

  // Open after a short delay (unless already seen this session)
  useEffect(() => {
    if (alreadySeen()) return;
    const t = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    markSeen();
  };

  // While open: Escape closes, page behind doesn't scroll, focus the close button
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="bb-popup-backdrop" onClick={close}>
      <div
        className="bb-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bb-popup-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          className="bb-popup__close"
          onClick={close}
          aria-label="Close"
        >
          ×
        </button>

        <div className="bb-popup__image">
          <img src={IMAGE} alt="Bronco Buckles sterling silver buckle" />
        </div>

        <div className="bb-popup__content">
          <p className="bb-popup__overline">By Invitation</p>
          <h2 id="bb-popup-title" className="bb-popup__title">{percent}% OFF</h2>
          <div className="bb-popup__divider" />
          <p className="bb-popup__text">
            Call to see if you qualify for {percent}% off&nbsp;— or more.
          </p>

          <a href={PHONE_HREF} className="bb-popup__call" onClick={markSeen}>
            <span className="bb-popup__call-label">Call Now</span>
            <span className="bb-popup__call-number">{PHONE_DISPLAY}</span>
          </a>

          <button className="bb-popup__dismiss" onClick={close}>
            Continue to inquiry
          </button>
        </div>
      </div>
    </div>
  );
}
