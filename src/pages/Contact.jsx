import { useState } from 'react';
import SEO from '../components/SEO';
import './PageStyles.css';
import './Contact.css';

const CDN = 'https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713';
const heroImg = `${CDN}/unsplash-image-LiY9rVmDGX4.jpg`;

const BUCKLE_OPTIONS = [
  { id: 'standard',  label: 'Buckle — Standard',         price: 895  },
  { id: 'special',   label: 'Buckle — Special Order',     price: 1425 },
];

const BELT_OPTIONS = [
  { id: 'none',              label: 'No belt',                         price: 0   },
  { id: 'cowhide_std',       label: 'Cowhide — Standard',              price: 150 },
  { id: 'cowhide_bridal',    label: 'Cowhide — Bridal',                price: 350 },
  { id: 'bullhide',          label: 'Condensed Bull Hide',             price: 475 },
  { id: 'alligator_std',     label: 'Alligator — Standard',            price: 525 },
  { id: 'alligator_custom',  label: 'Alligator — Custom',              price: 675 },
];

const TX_TAX = 0.0825;

export default function Contact() {
  const [buckleType,   setBuckleType]   = useState('standard');
  const [buckleQty,    setBuckleQty]    = useState(1);
  const [beltType,     setBeltType]     = useState('none');
  const [beltQty,      setBeltQty]      = useState(1);
  const [addEngraving, setAddEngraving] = useState(false);
  const [engravingQty, setEngravingQty] = useState(1);
  const [texasTax,     setTexasTax]     = useState(false);
  const [formSent,     setFormSent]     = useState(false);
  const [formError,    setFormError]    = useState(false);

  const bucklePrice = (BUCKLE_OPTIONS.find(o => o.id === buckleType)?.price ?? 895) * buckleQty;
  const beltPrice   = (BELT_OPTIONS.find(o => o.id === beltType)?.price ?? 0) * (beltType !== 'none' ? beltQty : 1);
  const engravingPrice = addEngraving ? 50 * engravingQty : 0;
  const subtotal    = bucklePrice + beltPrice + engravingPrice;
  const tax         = texasTax ? subtotal * TX_TAX : 0;
  const total       = subtotal + tax;

  const summaryText = [
    `${buckleQty}x ${BUCKLE_OPTIONS.find(o => o.id === buckleType)?.label} — $${bucklePrice.toLocaleString()}`,
    beltType !== 'none' ? `${beltQty}x ${BELT_OPTIONS.find(o => o.id === beltType)?.label} — $${beltPrice.toLocaleString()}` : null,
    addEngraving ? `${engravingQty}x Custom Engraving — $${engravingPrice}` : null,
    texasTax ? `Texas Sales Tax (8.25%) — $${tax.toFixed(2)}` : null,
    `Estimated Total: $${total.toFixed(2)}`,
  ].filter(Boolean).join('\n');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    data.set('order_summary', summaryText);

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setFormSent(true);
      } else {
        setFormError(true);
      }
    } catch {
      setFormError(true);
    }
  };

  return (
    <>
      <SEO
        title="Inquire — Bronco Buckle Company"
        description="Start your Bronco Buckle order. Use our price calculator, then submit your inquiry. We'll call you to confirm every detail."
        path="/contact"
      />

      {/* ── HERO ── */}
      <section className="inner-hero">
        <div
          className="inner-hero__bg"
          style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: 'center 60%' }}
        />
        <div className="inner-hero__overlay" />
        <div className="inner-hero__content">
          <p className="eyebrow" style={{ color: 'var(--steel-blue-soft)' }}>Made to Order</p>
          <div className="gold-rule" />
          <h1>Inquire</h1>
          <p className="inner-hero__sub">Every order begins with a conversation.</p>
        </div>
      </section>

      {/* ── PERSONAL ORDER NOTE ── */}
      <section className="section-light">
        <div className="container">
          <div className="contact-intro">
            <div className="contact-intro__icon">✦</div>
            <div className="contact-intro__text">
              <h3>We Make It for You</h3>
              <p>
                Before your order begins, we'll call you personally to discuss every
                detail — your initials, your engraving, your belt size, your finish
                preference, and your timeline. Nothing goes into production until
                you've said yes to everything.
              </p>
              <p style={{ marginTop: '12px' }}>
                This isn't e-commerce. It's a conversation between you and the people
                who will make your buckle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALCULATOR + FORM ── */}
      <section className="section-dark">
        <div className="container">
          <div className="contact-layout">

            {/* ── CALCULATOR ── */}
            <div className="calc-panel">
              <div className="calc-panel__header">
                <p className="eyebrow">Estimate Your Order</p>
                <div className="steel-rule" />
                <h2>Price Calculator</h2>
              </div>

              {/* Buckle */}
              <div className="calc-section">
                <label className="calc-label">Buckle</label>
                <div className="calc-row">
                  <select
                    className="calc-select"
                    value={buckleType}
                    onChange={e => setBuckleType(e.target.value)}
                  >
                    {BUCKLE_OPTIONS.map(o => (
                      <option key={o.id} value={o.id}>
                        {o.label} — ${o.price.toLocaleString()}
                      </option>
                    ))}
                  </select>
                  <div className="calc-qty">
                    <button onClick={() => setBuckleQty(Math.max(1, buckleQty - 1))}>−</button>
                    <span>{buckleQty}</span>
                    <button onClick={() => setBuckleQty(buckleQty + 1)}>+</button>
                  </div>
                </div>
              </div>

              {/* Belt */}
              <div className="calc-section">
                <label className="calc-label">Belt <span style={{ color: 'var(--text-muted)', fontWeight: 300 }}>(optional)</span></label>
                <div className="calc-row">
                  <select
                    className="calc-select"
                    value={beltType}
                    onChange={e => setBeltType(e.target.value)}
                  >
                    {BELT_OPTIONS.map(o => (
                      <option key={o.id} value={o.id}>
                        {o.label}{o.price > 0 ? ` — $${o.price}` : ''}
                      </option>
                    ))}
                  </select>
                  {beltType !== 'none' && (
                    <div className="calc-qty">
                      <button onClick={() => setBeltQty(Math.max(1, beltQty - 1))}>−</button>
                      <span>{beltQty}</span>
                      <button onClick={() => setBeltQty(beltQty + 1)}>+</button>
                    </div>
                  )}
                </div>
              </div>

              {/* Engraving */}
              <div className="calc-section">
                <div className="calc-toggle-row">
                  <label className="calc-label">Custom Engraving (+$50 each)</label>
                  <label className="calc-toggle">
                    <input
                      type="checkbox"
                      checked={addEngraving}
                      onChange={e => setAddEngraving(e.target.checked)}
                    />
                    <span className="calc-toggle__track" />
                  </label>
                </div>
                {addEngraving && (
                  <div className="calc-row" style={{ marginTop: '10px' }}>
                    <span className="calc-note">Number of engravings:</span>
                    <div className="calc-qty">
                      <button onClick={() => setEngravingQty(Math.max(1, engravingQty - 1))}>−</button>
                      <span>{engravingQty}</span>
                      <button onClick={() => setEngravingQty(engravingQty + 1)}>+</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Texas Tax */}
              <div className="calc-section">
                <div className="calc-toggle-row">
                  <label className="calc-label">Texas Sales Tax (8.25%)</label>
                  <label className="calc-toggle">
                    <input
                      type="checkbox"
                      checked={texasTax}
                      onChange={e => setTexasTax(e.target.checked)}
                    />
                    <span className="calc-toggle__track" />
                  </label>
                </div>
              </div>

              {/* Total */}
              <div className="calc-total">
                <div className="calc-total__rows">
                  <div className="calc-total__line">
                    <span>Buckle{buckleQty > 1 ? ` ×${buckleQty}` : ''}</span>
                    <span>${bucklePrice.toLocaleString()}</span>
                  </div>
                  {beltType !== 'none' && (
                    <div className="calc-total__line">
                      <span>Belt{beltQty > 1 ? ` ×${beltQty}` : ''}</span>
                      <span>${beltPrice.toLocaleString()}</span>
                    </div>
                  )}
                  {addEngraving && (
                    <div className="calc-total__line">
                      <span>Engraving{engravingQty > 1 ? ` ×${engravingQty}` : ''}</span>
                      <span>${engravingPrice}</span>
                    </div>
                  )}
                  {texasTax && (
                    <div className="calc-total__line calc-total__line--tax">
                      <span>Texas Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  )}
                </div>
                <div className="calc-total__sum">
                  <span>Estimated Total</span>
                  <span className="price-tag">${total.toFixed(2)}</span>
                </div>
                <p className="calc-total__note">
                  Final pricing confirmed on your order call.
                </p>
              </div>
            </div>

            {/* ── INQUIRY FORM ── */}
            <div className="form-panel">
              <div className="form-panel__header">
                <p className="eyebrow">Your Details</p>
                <div className="steel-rule" />
                <h2>Start Your Order</h2>
              </div>

              {formSent ? (
                <div className="form-success">
                  <div className="form-success__icon">✦</div>
                  <h3>Inquiry Received</h3>
                  <p>
                    We'll be in touch shortly — a real person will call you to discuss
                    your order, confirm the details, and answer any questions.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name *</label>
                      <input type="text" name="first_name" required placeholder="John" />
                    </div>
                    <div className="form-group">
                      <label>Last Name *</label>
                      <input type="text" name="last_name" required placeholder="Smith" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" required placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input type="tel" name="phone" required placeholder="(214) 555-0000" />
                  </div>
                  <div className="form-group">
                    <label>Best Time to Call</label>
                    <select name="call_time">
                      <option value="">No preference</option>
                      <option>Morning (8am – 12pm)</option>
                      <option>Afternoon (12pm – 5pm)</option>
                      <option>Evening (5pm – 7pm)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Your Initials (for the buckle front)</label>
                    <input type="text" name="initials" placeholder="e.g. JJS" maxLength={3} />
                  </div>
                  <div className="form-group">
                    <label>Engraving Text (if applicable)</label>
                    <textarea name="engraving_text" rows={3} placeholder="Up to 4 lines. Shorter is more elegant." />
                  </div>
                  <div className="form-group">
                    <label>Message / Questions</label>
                    <textarea name="message" rows={4} placeholder="Anything else you'd like us to know." />
                  </div>
                  <input type="hidden" name="order_summary" value={summaryText} />
                  {formError && (
                    <p className="form-error">Something went wrong. Please email us directly at Stocker@BroncoBuckleCompany.com</p>
                  )}
                  <button type="submit" className="btn-primary form-submit">
                    Send Inquiry
                  </button>
                  <p className="form-disclaimer">
                    We'll call you before anything is made. This is an inquiry, not a charge.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
