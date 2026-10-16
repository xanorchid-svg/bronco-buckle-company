import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import './PageStyles.css';
import './Contact.css';
import DiscountPopup from '../components/DiscountPopup';

const CONTACT_EMAIL = 'stocker@broncobuckles.com';

// ─── PRICING DATA ────────────────────────────
const PRICES = {
  buckle: 1275,
  specialOrder: 530, // delta to get to 1425
  belts: [
    { id: 'none',             label: 'No Belt',                   price: 0   },
    { id: 'cowhide-s',        label: 'Cowhide — Standard',        price: 150 },
    { id: 'cowhide-bridal',   label: 'Cowhide — Bridal',          price: 350 },
    { id: 'bullhide',         label: 'Condensed Bull Hide',        price: 475 },
    { id: 'alligator-std',    label: 'Alligator — Standard',      price: 525 },
    { id: 'alligator-custom', label: 'Alligator — Custom',        price: 675 },
  ],
  engraving: 50,
  taxRate: 0.0825,
};

// Accessories — sterling silver, three initials. Money clip engraving is quoted at inquiry.
const ACCESSORIES = [
  { id: 'money-clip', label: 'Money Clip', fullLabel: 'Sterling Silver Money Clip', price: 525, engraving: true,  fontChoice: true  },
  { id: 'key-chain',  label: 'Key Chain',  fullLabel: 'Sterling Silver Key Chain',  price: 185, engraving: false, fontChoice: false },
];

function formatCurrency(n) {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

// Three-letter initials inputs — one per piece
function InitialsInputs({ qty, values, onChange, itemLabel }) {
  return (
    <div className="calc__initials">
      {Array.from({ length: qty }).map((_, i) => (
        <input
          key={i}
          type="text"
          inputMode="text"
          autoComplete="off"
          maxLength={3}
          value={values[i] || ''}
          placeholder="ABC"
          aria-label={`${itemLabel} ${i + 1} initials`}
          onChange={e => {
            const next = [...values];
            next[i] = e.target.value.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 3);
            onChange(next);
          }}
        />
      ))}
    </div>
  );
}

function Calculator({ onBuildOrder, initialItem }) {
  const startsWithAccessory = ACCESSORIES.some(a => a.id === initialItem);
  const [buckleQty,    setBuckleQty]    = useState(startsWithAccessory ? 0 : 1);
  const [accQty,       setAccQty]       = useState(() =>
    Object.fromEntries(ACCESSORIES.map(a => [a.id, a.id === initialItem ? 1 : 0]))
  );
  const [accInitials,  setAccInitials]  = useState(() =>
    Object.fromEntries(ACCESSORIES.map(a => [a.id, []]))
  );
  const [clipEngraving, setClipEngraving] = useState(false);
  const [specialOrder, setSpecialOrder] = useState(false);
  const [beltId,       setBeltId]       = useState('none');
  const [beltQty,      setBeltQty]      = useState(1);
  const [engraving,    setEngraving]    = useState(false);
  const [applyTax,     setApplyTax]     = useState(false);
  const [promoCode,    setPromoCode]    = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError,   setPromoError]   = useState(false);
  const [finish,       setFinish]       = useState('classic'); // 'classic' | 'elegante'

  const belt = PRICES.belts.find(b => b.id === beltId);
  const buckleUnitPrice = specialOrder ? 1425 : PRICES.buckle;
  const buckleTotal    = buckleQty * buckleUnitPrice;
  const promoRate     = promoApplied === "friends&family" ? 0.20 : promoApplied === "fall2026" ? 0.30 : promoApplied ? 0.22 : 0;
  const promoSavings   = promoRate ? Math.round(buckleTotal * promoRate) : 0;
  const beltTotal    = beltId !== 'none' ? beltQty * belt.price : 0;
  const engravingTotal = engraving && buckleQty > 0 ? PRICES.engraving : 0;
  const hasAccessories = ACCESSORIES.some(a => accQty[a.id] > 0);
  const clipEngravingRequested = clipEngraving && accQty['money-clip'] > 0;
  const nothingSelected = buckleQty === 0 && beltId === 'none' && !hasAccessories;

  function setQty(id, qty) {
    setAccQty(prev => ({ ...prev, [id]: Math.max(0, qty) }));
  }
  const accTotal     = ACCESSORIES.reduce((sum, a) => sum + accQty[a.id] * a.price, 0);
  const subtotal     = buckleTotal - promoSavings + beltTotal + engravingTotal + accTotal;
  const tax          = applyTax ? subtotal * PRICES.taxRate : 0;
  const total        = subtotal + tax;

  function buildSummary() {
    const lines = [];
    const finishLabel = finish === 'elegante' ? 'Elegante (No Black Background)' : 'Classic (Black Background)';
    if (buckleQty > 0) lines.push(`${buckleQty}x Buckle${specialOrder ? ' (special order)' : ' (standard)'}, ${finishLabel} — ${formatCurrency(buckleTotal)}`);
    if (beltId !== 'none') lines.push(`${beltQty}x ${belt.label} Belt — ${formatCurrency(beltTotal)}`);
    if (promoApplied) lines.push(`Promo "${promoCode}" — Buckle discount: -${formatCurrency(promoSavings)}`);
    if (engravingTotal) lines.push(`Custom Engraving — ${formatCurrency(engravingTotal)}`);
    ACCESSORIES.forEach(a => {
      const qty = accQty[a.id];
      if (!qty) return;
      const initials = Array.from({ length: qty }, (_, i) => {
        const v = accInitials[a.id][i];
        return v && v.length === 3 ? v : 'TBD';
      });
      const extras = [`initials: ${initials.join(', ')}`];
      if (a.fontChoice) extras.push('font to discuss');
      if (a.engraving && clipEngraving) extras.push('engraving requested');
      lines.push(`${qty}x ${a.fullLabel} (${extras.join('; ')}) — ${formatCurrency(qty * a.price)}`);
    });
    if (applyTax) lines.push(`Texas Sales Tax (8.25%) — ${formatCurrency(tax)}`);
    lines.push(`Estimated Total${clipEngravingRequested ? ' (excl. money clip engraving)' : ''}: ${formatCurrency(total)}`);
    return lines.join('\n');
  }

  return (
    <div className="calc">
      <p className="overline" style={{ marginBottom: '2rem' }}>Build Your Order</p>

      {/* BUCKLE */}
      <div className="calc__section">
        <div className="calc__section-header">
          <div>
            <h3 className="calc__label">The Buckle</h3>
            <p className="calc__sublabel">Sterling silver, hand-crafted</p>
          </div>
          <span className="calc__base-price">{formatCurrency(buckleUnitPrice)} ea.</span>
        </div>
        <div className="calc__row">
          <label>Quantity</label>
          <div className="calc__stepper">
            <button onClick={() => setBuckleQty(Math.max(0, buckleQty - 1))}>−</button>
            <span>{buckleQty}</span>
            <button onClick={() => setBuckleQty(buckleQty + 1)}>+</button>
          </div>
        </div>
        {buckleQty > 0 && (<>
        <div className="calc__row">
          <div>
            <label>Finish</label>
            <p className="calc__hint">Classic · Black Background &nbsp;|&nbsp; Elegante · No Black Background</p>
          </div>
          <div className="calc__toggle-group">
            <button
              className={`calc__toggle ${finish === 'classic' ? 'calc__toggle--active' : ''}`}
              onClick={() => setFinish('classic')}
            >Classic</button>
            <button
              className={`calc__toggle ${finish === 'elegante' ? 'calc__toggle--active' : ''}`}
              onClick={() => setFinish('elegante')}
            >Elegante</button>
          </div>
        </div>
        <div className="calc__row">
          <div>
            <label>Order Type</label>
            <p className="calc__hint">Standard $1275 · Special Order $1,425</p>
          </div>
          <div className="calc__toggle-group">
            <button
              className={`calc__toggle ${!specialOrder ? 'calc__toggle--active' : ''}`}
              onClick={() => setSpecialOrder(false)}
            >Standard</button>
            <button
              className={`calc__toggle ${specialOrder ? 'calc__toggle--active' : ''}`}
              onClick={() => setSpecialOrder(true)}
            >Special Order</button>
          </div>
        </div>
        </>)}
        {buckleQty === 0 && (
          <p className="calc__hint" style={{ paddingTop: '0.5rem' }}>No buckle selected — tap + to add one.</p>
        )}
      </div>

      {/* BELT */}
      <div className="calc__section">
        <div className="calc__section-header">
          <div>
            <h3 className="calc__label">The Belt</h3>
            <p className="calc__sublabel">Optional — pairs with your buckle</p>
          </div>
        </div>
        <div className="calc__belt-options">
          {PRICES.belts.map(b => (
            <button
              key={b.id}
              className={`calc__belt-btn ${beltId === b.id ? 'calc__belt-btn--active' : ''}`}
              onClick={() => setBeltId(b.id)}
            >
              <span className="calc__belt-name">{b.label}</span>
              <span className="calc__belt-price">{b.price === 0 ? '—' : formatCurrency(b.price)}</span>
            </button>
          ))}
        </div>
        {promoApplied && (
          <div className="calc__total-row" style={{ color: "var(--gold)" }}>
            <span>Promo discount ({promoCode})</span>
            <span>-{formatCurrency(promoSavings)}</span>
          </div>
        )}
        {beltId !== 'none' && (
          <div className="calc__row" style={{ marginTop: '1.25rem' }}>
            <label>Belt Quantity</label>
            <div className="calc__stepper">
              <button onClick={() => setBeltQty(Math.max(1, beltQty - 1))}>−</button>
              <span>{beltQty}</span>
              <button onClick={() => setBeltQty(beltQty + 1)}>+</button>
            </div>
          </div>
        )}
      </div>

      {/* ACCESSORIES */}
      <div className="calc__section">
        <div className="calc__section-header">
          <div>
            <h3 className="calc__label">Accessories</h3>
            <p className="calc__sublabel">Sterling silver · three initials · <Link to="/accessories" className="calc__link">see the pieces</Link></p>
          </div>
        </div>
        {ACCESSORIES.map(a => (
          <div key={a.id} className="calc__acc">
            <div className="calc__row">
              <div>
                <label>{a.label}</label>
                <p className="calc__hint">{formatCurrency(a.price)} ea. · {a.fontChoice ? 'three initials · font of your choice' : 'three initials'}</p>
              </div>
              <div className="calc__stepper">
                <button onClick={() => setQty(a.id, accQty[a.id] - 1)} aria-label={`Fewer ${a.label}s`}>−</button>
                <span>{accQty[a.id]}</span>
                <button onClick={() => setQty(a.id, accQty[a.id] + 1)} aria-label={`More ${a.label}s`}>+</button>
              </div>
            </div>
            {accQty[a.id] > 0 && (
              <div className="calc__acc-detail">
                <label>Initials{accQty[a.id] > 1 ? ' — one set per piece' : ''}</label>
                <InitialsInputs
                  qty={accQty[a.id]}
                  values={accInitials[a.id]}
                  itemLabel={a.label}
                  onChange={vals => setAccInitials(prev => ({ ...prev, [a.id]: vals }))}
                />
                {a.fontChoice && (
                  <p className="calc__hint">We'll walk through font options with you on your call.</p>
                )}
                {a.engraving && (
                  <div className="calc__row calc__row--flush">
                    <div>
                      <label>Add Engraving</label>
                      <p className="calc__hint">A date, name, or message · priced at inquiry</p>
                    </div>
                    <button
                      className={`calc__tax-toggle ${clipEngraving ? 'calc__tax-toggle--on' : ''}`}
                      onClick={() => setClipEngraving(!clipEngraving)}
                      aria-label="Toggle money clip engraving"
                    >
                      <span />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ENGRAVING (buckle) */}
      {buckleQty > 0 && (
      <div className="calc__section">
        <div className="calc__row">
          <div>
            <label>Buckle Engraving</label>
            <p className="calc__hint">Inscription on back of buckle · +{formatCurrency(PRICES.engraving)} each</p>
          </div>
          <button
            className={`calc__tax-toggle ${engraving ? 'calc__tax-toggle--on' : ''}`}
            onClick={() => setEngraving(!engraving)}
            aria-label="Toggle engraving"
          >
            <span />
          </button>
        </div>
        {engraving && (
          <div className="calc__row" style={{ marginTop: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>+$50 added to total</span>
          </div>
        )}
      </div>
      )}

      {/* TAX */}
      <div className="calc__section calc__section--slim">
        <div className="calc__row">
          <label>Apply Texas Sales Tax (8.25%)</label>
          <button
            className={`calc__tax-toggle ${applyTax ? 'calc__tax-toggle--on' : ''}`}
            onClick={() => setApplyTax(!applyTax)}
            aria-label="Toggle tax"
          >
            <span />
          </button>
        </div>
      </div>

      {/* PROMO CODE */}
      <div className="calc__row" style={{ marginTop: "1rem" }}>
        <label>Promo Code</label>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
          <input
            type="text"
            value={promoCode}
            onChange={e => { setPromoCode(e.target.value); setPromoError(false); }}
            placeholder="Enter code"
            style={{ padding: "0.4rem 0.75rem", background: "var(--charcoal)", border: "1px solid var(--gold)", color: "var(--silver-light)", fontFamily: "var(--font-body)", width: "140px" }}
          />
          <button className="btn" style={{ padding: "0.4rem 1rem", fontSize: "0.85rem" }} onClick={() => { const c = promoCode.trim().toLowerCase(); if (c === "running2theroar!") { setPromoApplied("running2theroar!"); setPromoError(false); } else if (c === "friends&family") { setPromoApplied("friends&family"); setPromoError(false); } else if (c === "fall2026") { setPromoApplied("fall2026"); setPromoError(false); } else { setPromoError(true); setPromoApplied(false); } }}>
            <span>Apply</span>
          </button>
          {promoApplied && <span style={{ color: "var(--gold)", fontSize: "0.85rem" }}>✓ {promoApplied === "friends&family" ? "20%" : promoApplied === "fall2026" ? "30%" : "22%"} off buckles</span>}
          {promoError && <span style={{ color: "#e07070", fontSize: "0.85rem" }}>Invalid code</span>}
        </div>
      </div>

      {/* TOTALS */}
      <div className="calc__totals">
        {buckleQty > 0 && (
        <div className="calc__total-row">
          <span>Buckles ({buckleQty}× {formatCurrency(buckleUnitPrice)})</span>
          <span>{formatCurrency(buckleTotal)}</span>
        </div>
        )}
        {promoApplied && (
          <div className="calc__total-row" style={{ color: "var(--gold)" }}>
            <span>Promo "{promoCode}" — {promoApplied === "friends&family" ? "20%" : promoApplied === "fall2026" ? "30%" : "22%"} off buckles</span>
            <span>-{formatCurrency(promoSavings)}</span>
          </div>
        )}
        {beltId !== 'none' && (
          <div className="calc__total-row">
            <span>Belt ({beltQty}× {belt.label})</span>
            <span>{formatCurrency(beltTotal)}</span>
          </div>
        )}
        {ACCESSORIES.filter(a => accQty[a.id] > 0).map(a => (
          <div key={a.id} className="calc__total-row">
            <span>{a.label} ({accQty[a.id]}× {formatCurrency(a.price)})</span>
            <span>{formatCurrency(accQty[a.id] * a.price)}</span>
          </div>
        ))}
        {clipEngravingRequested && (
          <div className="calc__total-row">
            <span>Money Clip Engraving</span>
            <span className="calc__inquire">Quoted at inquiry</span>
          </div>
        )}
        {engravingTotal > 0 && (
          <div className="calc__total-row">
            <span>Buckle Engraving</span>
            <span>{formatCurrency(engravingTotal)}</span>
          </div>
        )}
        {applyTax && (
          <div className="calc__total-row calc__total-row--tax">
            <span>Texas Sales Tax</span>
            <span>{formatCurrency(tax)}</span>
          </div>
        )}
        <div className="calc__total-row calc__total-row--final">
          <span>Estimated Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
        <p className="calc__disclaimer">
          Prices are estimates. Final quote confirmed at inquiry. Lead time: 4–6 weeks.
        </p>
      </div>

      <button
        className="btn calc__cta"
        onClick={() => onBuildOrder(buildSummary())}
        disabled={nothingSelected}
        style={nothingSelected ? { opacity: 0.45, cursor: 'not-allowed' } : undefined}
      >
        <span>Start My Order →</span>
      </button>
      {nothingSelected && (
        <p className="calc__hint" style={{ marginTop: '0.75rem' }}>Add a buckle, belt, or accessory to start your order.</p>
      )}
    </div>
  );
}


// ─── CONTACT FORM (mailto-based — no backend needed) ────────────────────────────
function ContactForm({ prefill }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', interest: '', message: prefill || '',
  });
  const [launched, setLaunched] = useState(false);

  // Keep message in sync if prefill changes (user hits "Start My Order")
  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  function handleSend() {
    const subject = encodeURIComponent(
      `Bronco Buckles Inquiry${form.name ? ' — ' + form.name : ''}${form.interest ? ' (' + form.interest + ')' : ''}`
    );

    const body = encodeURIComponent(
      [
        form.name    ? `Name: ${form.name}`    : '',
        form.email   ? `Email: ${form.email}`  : '',
        form.phone   ? `Phone: ${form.phone}`  : '',
        form.interest ? `Interested in: ${form.interest}` : '',
        '',
        form.message || '',
      ].filter(l => l !== undefined).join('\n').trim()
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setLaunched(true);
  }

  return (
    <div className="contact-form">
      <div className="form-field">
        <label htmlFor="name">Your Name</label>
        <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="First and last name" />
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="email">Your Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(000) 000-0000" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="interest">I'm interested in</label>
        <select id="interest" name="interest" value={form.interest} onChange={handleChange}>
          <option value="">Select one</option>
          <option>Buckle only</option>
          <option>Belt only</option>
          <option>Buckle and Belt</option>
          <option>Money Clip / Key Chain</option>
          <option>Gift / Special Occasion</option>
          <option>Corporate / Custom Logo</option>
          <option>Just have questions</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="message">Order details / message</label>
        <textarea id="message" name="message" rows={6} value={form.message} onChange={handleChange} placeholder="Any occasion, timeline, or details…" />
      </div>

      <button type="button" className="btn" onClick={handleSend}>
        <span>Send Inquiry →</span>
      </button>

      {launched && (
        <p style={{ marginTop: '1rem', color: 'var(--gold)', fontSize: '0.9rem' }}>
          Your email app should have opened with this inquiry pre-filled. If it didn't,{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--gold-light)' }}>
            email us directly
          </a>.
        </p>
      )}

      <p style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--silver)', lineHeight: 1.5 }}>
        Clicking "Send Inquiry" opens your email app with this message pre-filled.
        Hit send from there — your email, your inbox.
      </p>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────
export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialItem = searchParams.get('item');
  const [formPrefill, setFormPrefill] = useState('');
  const [activeTab, setActiveTab] = useState('calculator'); // 'calculator' | 'form'

  function handleBuildOrder(summary) {
    setFormPrefill(summary);
    setActiveTab('form');
    setTimeout(() => {
      document.getElementById('contact-form-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  return (
    <div className="page inner-page">
      <DiscountPopup />
      <SEO
        title="Inquire — Start Your Custom Order"
        description="Ready to order your Bronco Buckles sterling silver belt buckle, money clip, or key chain? Use our price calculator and send an inquiry. Custom pieces take 4-6 weeks. Dallas, Texas."
        path="/contact"
      />
      <div className="inner-hero inner-hero--short">
        <div className="inner-hero__bg">
          <img src="https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/1725566392796-38I40RYLNVW9DK5LUDXC/unsplash-image-LiY9rVmDGX4.jpg" alt="Inquire" />
          <div className="inner-hero__overlay" />
        </div>
        <div className="inner-hero__content container">
          <p className="overline">Let's Talk</p>
          <h1 className="display">Inquire</h1>
        </div>
      </div>

      <div className="section container" style={{ paddingTop: '3rem' }}>

        {/* Process steps */}
        <div className="contact-steps-strip">
          {[
            ['01', 'Build your order', 'Use the calculator to price out exactly what you want.'],
            ['02', 'Send your inquiry', "We'll call you personally to discuss your order — initials, engraving, belt size, and timeline. Nothing goes into production until you've said yes."],
            ['03', 'Crafting begins', "Your piece goes into production. 4\u20136 weeks start to finish."],
            ['04', 'It arrives', 'Sterling silver, stamped with your initials, ready to wear.'],
          ].map(([num, title, desc]) => (
            <div key={num} className="contact-step">
              <span className="contact-step__num">{num}</span>
              <div>
                <h4>{title}</h4>
                <p className="body-text">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tab switcher */}
        <div className="contact-tabs" id="contact-form-anchor">
          <button
            className={`contact-tab ${activeTab === 'calculator' ? 'contact-tab--active' : ''}`}
            onClick={() => setActiveTab('calculator')}
          >Price Calculator</button>
          <button
            className={`contact-tab ${activeTab === 'form' ? 'contact-tab--active' : ''}`}
            onClick={() => setActiveTab('form')}
          >Send Inquiry</button>
        </div>

        <div className="contact-panel">
          {activeTab === 'calculator'
            ? <Calculator onBuildOrder={handleBuildOrder} initialItem={initialItem} />
            : (
              <div className="contact-form-wrap">
                {formPrefill && (
                  <div className="contact-prefill-notice">
                    <p className="overline">From your calculator</p>
                    <pre className="contact-prefill-text">{formPrefill}</pre>
                    <p className="body-text" style={{ marginTop: '1rem' }}>
                      Your selections are pre-filled below. Add any additional details and send.
                    </p>
                  </div>
                )}
                <ContactForm prefill={formPrefill} />
              </div>
            )
          }
        </div>

        {/* Direct contact */}
        <div className="contact-direct-strip">
          <p className="body-text">Prefer to call or email directly?</p>
          <div className="contact-direct-links">
            <a href="tel:2142065060">(214) 206-5060</a>
            <span>·</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>

      </div>
    </div>
  );
}
