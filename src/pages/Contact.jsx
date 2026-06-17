import { useState } from 'react';
import './Contact.css';
import SEO from '../components/SEO';

// ── Pricing constants ──
const BUCKLE_PRICE = 1275;
const BUCKLE_SPECIAL_PRICE = 1425;
const ENGRAVING_PRICE = 50;
const PROMO_CODE = 'broncobuddy';
const PROMO_DISCOUNT = 0.22;

const BELT_PRICES = {
  none: 0,
  alligator_standard: 525,
  alligator_custom: 675,
  cowhide_standard: 150,
  cowhide_bridal: 350,
  bullhide: 475,
};

const BELT_LABELS = {
  none: 'No belt',
  alligator_standard: 'American Alligator — Standard ($525)',
  alligator_custom: 'American Alligator — Custom ($675)',
  cowhide_standard: 'Cowhide — Standard ($150)',
  cowhide_bridal: 'Cowhide — Bridal ($350)',
  bullhide: 'Condensed Bull Hide ($475)',
};

const TX_TAX_RATE = 0.0825;

export default function Contact() {
  // ── Calculator state ──
  const [buckleQty, setBuckleQty] = useState(1);
  const [specialOrder, setSpecialOrder] = useState(false);
  const [engraving, setEngraving] = useState(false);
  const [beltType, setBeltType] = useState('none');
  const [beltQty, setBeltQty] = useState(1);
  const [texasTax, setTexasTax] = useState(false);
  const [promoInput, setPromoInput] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState(false);

  // ── Form state ──
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // ── Calculation ──
  const unitBucklePrice = specialOrder ? BUCKLE_SPECIAL_PRICE : BUCKLE_PRICE;
  const buckleSubtotal = unitBucklePrice * buckleQty;
  const promoSavings = promoApplied ? buckleSubtotal * PROMO_DISCOUNT : 0;
  const buckleAfterPromo = buckleSubtotal - promoSavings;
  const engravingSubtotal = engraving ? ENGRAVING_PRICE * buckleQty : 0;
  const beltSubtotal = beltType !== 'none' ? BELT_PRICES[beltType] * beltQty : 0;
  const subtotal = buckleAfterPromo + engravingSubtotal + beltSubtotal;
  const taxAmount = texasTax ? subtotal * TX_TAX_RATE : 0;
  const total = subtotal + taxAmount;

  const fmt = (n) =>
    n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });

  // ── Promo code handler ──
  const handlePromoApply = () => {
    if (promoInput.trim().toLowerCase() === PROMO_CODE) {
      setPromoApplied(true);
      setPromoError(false);
    } else {
      setPromoError(true);
      setPromoApplied(false);
    }
  };

  const handlePromoKeyDown = (e) => {
    if (e.key === 'Enter') handlePromoApply();
  };

  const removePromo = () => {
    setPromoApplied(false);
    setPromoError(false);
    setPromoInput('');
  };

  // ── Build summary for form message pre-fill ──
  const buildSummary = () => {
    const lines = [
      `Buckles: ${buckleQty}x ${specialOrder ? 'Special Order' : 'Standard'} @ ${fmt(unitBucklePrice)}`,
    ];
    if (promoApplied) lines.push(`Promo code "broncobuddy" applied — ${fmt(promoSavings)} off buckles`);
    if (engraving) lines.push(`Custom Engraving: ${buckleQty}x @ $50`);
    if (beltType !== 'none') lines.push(`Belt: ${beltQty}x ${BELT_LABELS[beltType]}`);
    if (texasTax) lines.push(`Texas Tax (8.25%): ${fmt(taxAmount)}`);
    lines.push(`Estimated Total: ${fmt(total)}`);
    return lines.join('\n');
  };

  // ── Form handlers ──
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleStartOrder = () => {
    setFormData((prev) => ({
      ...prev,
      message: buildSummary() + (prev.message ? '\n\n' + prev.message : ''),
    }));
    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // silent fail — user can email directly
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page inner-page">
      <SEO
        title="Inquire — Bronco Buckles"
        description="Start your Bronco Buckles order. Use the price calculator to build your buckle and belt package, then send us your inquiry."
        path="/contact"
      />

      {/* ── Hero ── */}
      <div className="inner-hero">
        <div className="inner-hero__bg">
          <img
            src="https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/LiY9rVmDGX4.jpg"
            alt="Inquire"
          />
          <div className="inner-hero__overlay" />
        </div>
        <div className="inner-hero__content container">
          <p className="overline">Let's Build Yours</p>
          <h1 className="display">Inquire</h1>
        </div>
      </div>

      <div className="section container">

        {/* ── Intro ── */}
        <div className="section--steel-light" style={{ padding: '2.5rem 3rem', marginBottom: '3rem' }}>
          <p className="overline">How It Works</p>
          <h2 className="headline" style={{ marginBottom: '1.5rem' }}>
            Every order starts with a conversation.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              ['01', 'Use the calculator below to estimate your order.'],
              ['02', 'Click "Start My Order" to pre-fill the inquiry form.'],
              ['03', 'We\'ll call or email within 1 business day to confirm details.'],
              ['04', 'Payment is due at time of order. Lead time is 8–12 weeks.'],
            ].map(([num, text]) => (
              <div key={num}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--gold)', marginBottom: '0.4rem' }}>{num}</div>
                <p className="body-text">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Price Calculator ── */}
        <div className="section--steel" style={{ padding: '3rem', marginBottom: '3rem' }}>
          <p className="overline">Price Calculator</p>
          <h2 className="headline" style={{ marginBottom: '2rem' }}>Build your order</h2>

          <div className="calc-grid">

            {/* ── Buckle section ── */}
            <div className="calc-section">
              <h3 className="calc-heading">The Buckle</h3>

              <label className="calc-label">
                Quantity
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={buckleQty}
                  onChange={(e) => setBuckleQty(Math.max(1, parseInt(e.target.value) || 1))}
                  className="calc-input"
                />
              </label>

              <label className="calc-toggle">
                <input
                  type="checkbox"
                  checked={specialOrder}
                  onChange={(e) => setSpecialOrder(e.target.checked)}
                />
                <span>Special Order (+$150) — unique design or non-standard dimensions</span>
              </label>

              <label className="calc-toggle">
                <input
                  type="checkbox"
                  checked={engraving}
                  onChange={(e) => setEngraving(e.target.checked)}
                />
                <span>Custom Engraving (+$50 per buckle)</span>
              </label>
            </div>

            {/* ── Belt section ── */}
            <div className="calc-section">
              <h3 className="calc-heading">The Belt <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--silver)', fontWeight: 400 }}>(optional)</span></h3>

              <label className="calc-label">
                Belt Type
                <select
                  value={beltType}
                  onChange={(e) => setBeltType(e.target.value)}
                  className="calc-select"
                >
                  {Object.entries(BELT_LABELS).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </label>

              {beltType !== 'none' && (
                <label className="calc-label">
                  Belt Quantity
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={beltQty}
                    onChange={(e) => setBeltQty(Math.max(1, parseInt(e.target.value) || 1))}
                    className="calc-input"
                  />
                </label>
              )}
            </div>

            {/* ── Promo + Tax ── */}
            <div className="calc-section">
              <h3 className="calc-heading">Promo Code</h3>

              {!promoApplied ? (
                <div className="calc-promo-row">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    value={promoInput}
                    onChange={(e) => {
                      setPromoInput(e.target.value);
                      setPromoError(false);
                    }}
                    onKeyDown={handlePromoKeyDown}
                    className={`calc-input calc-promo-input${promoError ? ' calc-promo-input--error' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={handlePromoApply}
                    className="calc-promo-btn"
                  >
                    Apply
                  </button>
                </div>
              ) : null}

              {promoError && (
                <p className="calc-promo-error">Invalid promo code. Please try again.</p>
              )}

              {promoApplied && (
                <div className="calc-promo-success">
                  <span>✓ <strong>"broncobuddy"</strong> applied — 22% off buckles</span>
                  <button type="button" onClick={removePromo} className="calc-promo-remove">Remove</button>
                </div>
              )}

              <label className="calc-toggle" style={{ marginTop: '1.5rem' }}>
                <input
                  type="checkbox"
                  checked={texasTax}
                  onChange={(e) => setTexasTax(e.target.checked)}
                />
                <span>Add Texas Sales Tax (8.25%)</span>
              </label>
            </div>

          </div>

          {/* ── Totals ── */}
          <div className="calc-totals">
            <div className="calc-row">
              <span>Buckles ({buckleQty}x {specialOrder ? 'Special Order' : 'Standard'})</span>
              <span>{fmt(buckleSubtotal)}</span>
            </div>
            {promoApplied && (
              <div className="calc-row calc-row--discount">
                <span>Promo discount (22% off buckles)</span>
                <span>− {fmt(promoSavings)}</span>
              </div>
            )}
            {engraving && (
              <div className="calc-row">
                <span>Custom Engraving ({buckleQty}x)</span>
                <span>{fmt(engravingSubtotal)}</span>
              </div>
            )}
            {beltType !== 'none' && (
              <div className="calc-row">
                <span>Belt ({beltQty}x {BELT_LABELS[beltType].split('(')[0].trim()})</span>
                <span>{fmt(beltSubtotal)}</span>
              </div>
            )}
            {texasTax && (
              <div className="calc-row">
                <span>Texas Tax (8.25%)</span>
                <span>{fmt(taxAmount)}</span>
              </div>
            )}
            <div className="calc-row calc-row--total">
              <span>Estimated Total</span>
              <span>{fmt(total)}</span>
            </div>
          </div>

          <button type="button" onClick={handleStartOrder} className="btn" style={{ marginTop: '2rem' }}>
            <span>Start My Order →</span>
          </button>
        </div>

        {/* ── Inquiry Form ── */}
        <div id="inquiry-form" className="section--steel-light" style={{ padding: '3rem', marginBottom: '3rem' }}>
          <p className="overline">Get In Touch</p>
          <h2 className="headline" style={{ marginBottom: '2rem' }}>Send your inquiry</h2>

          {submitted ? (
            <div className="form-success">
              <h3>We received your inquiry.</h3>
              <p>Expect a call or email within 1 business day. Thank you for choosing Bronco Buckles.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="inquiry-form">
              <div className="form-row">
                <label>
                  Full Name *
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Email *
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </label>
              </div>
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(optional)"
                />
              </label>
              <label>
                Message / Order Details
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you have in mind — initials, design ideas, belt preferences, or questions."
                />
              </label>
              <button type="submit" className="btn" disabled={submitting}>
                <span>{submitting ? 'Sending…' : 'Send Inquiry'}</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
