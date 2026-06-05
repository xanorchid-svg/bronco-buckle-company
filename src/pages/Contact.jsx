import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './PageStyles.css';
import './Contact.css';

// ─── PRICING DATA ────────────────────────────
const PRICES = {
  buckle: 895,
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

function formatCurrency(n) {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function Calculator({ onBuildOrder }) {
  const [buckleQty,    setBuckleQty]    = useState(1);
  const [specialOrder, setSpecialOrder] = useState(false);
  const [beltId,       setBeltId]       = useState('none');
  const [beltQty,      setBeltQty]      = useState(1);
  const [engraving,    setEngraving]    = useState(false);
  const [engravingQty, setEngravingQty] = useState(1);
  const [applyTax,     setApplyTax]     = useState(false);

  const belt = PRICES.belts.find(b => b.id === beltId);
  const buckleUnitPrice = specialOrder ? 1425 : PRICES.buckle;
  const buckleTotal  = buckleQty * buckleUnitPrice;
  const beltTotal    = beltId !== 'none' ? beltQty * belt.price : 0;
  const engravingTotal = engraving ? engravingQty * PRICES.engraving : 0;
  const subtotal     = buckleTotal + beltTotal + engravingTotal;
  const tax          = applyTax ? subtotal * PRICES.taxRate : 0;
  const total        = subtotal + tax;

  function buildSummary() {
    const lines = [];
    lines.push(`${buckleQty}x Buckle${specialOrder ? ' (special order)' : ' (standard)'} — ${formatCurrency(buckleTotal)}`);
    if (beltId !== 'none') lines.push(`${beltQty}x ${belt.label} Belt — ${formatCurrency(beltTotal)}`);
    if (engraving) lines.push(`${engravingQty}x Custom Engraving — ${formatCurrency(engravingTotal)}`);
    if (applyTax) lines.push(`Texas Sales Tax (8.25%) — ${formatCurrency(tax)}`);
    lines.push(`Estimated Total: ${formatCurrency(total)}`);
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
            <button onClick={() => setBuckleQty(Math.max(1, buckleQty - 1))}>−</button>
            <span>{buckleQty}</span>
            <button onClick={() => setBuckleQty(buckleQty + 1)}>+</button>
          </div>
        </div>
        <div className="calc__row">
          <div>
            <label>Order Type</label>
            <p className="calc__hint">Standard $895 · Special Order $1,425</p>
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

      {/* ENGRAVING */}
      <div className="calc__section">
        <div className="calc__row">
          <div>
            <label>Custom Engraving</label>
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
          <div className="calc__row" style={{ marginTop: '1.25rem' }}>
            <label>Engraving Quantity</label>
            <div className="calc__stepper">
              <button onClick={() => setEngravingQty(Math.max(1, engravingQty - 1))}>−</button>
              <span>{engravingQty}</span>
              <button onClick={() => setEngravingQty(engravingQty + 1)}>+</button>
            </div>
          </div>
        )}
      </div>

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

      {/* TOTALS */}
      <div className="calc__totals">
        <div className="calc__total-row">
          <span>Buckles ({buckleQty})</span>
          <span>{formatCurrency(buckleTotal)}</span>
        </div>
        {beltId !== 'none' && (
          <div className="calc__total-row">
            <span>Belts ({beltQty})</span>
            <span>{formatCurrency(beltTotal)}</span>
          </div>
        )}
        {engraving && (
          <div className="calc__total-row">
            <span>Engraving ({engravingQty})</span>
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

      <button className="btn calc__cta" onClick={() => onBuildOrder(buildSummary())}>
        <span>Start My Order →</span>
      </button>
    </div>
  );
}


// ─── CONTACT FORM ────────────────────────────
function ContactForm({ prefill }) {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({
    name: '', email: '', phone: '', interest: '', message: prefill || '',
  });

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm({ name: '', email: '', phone: '', interest: '', message: '' });
    } catch { setStatus('error'); }
  };

  if (status === 'success') return (
    <div className="contact-success">
      <p className="overline">Message Received</p>
      <h3 className="headline">We'll be in touch.</h3>
      <div className="divider" />
      <p className="body-text">Thank you for reaching out. We typically respond within one business day.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-field">
        <label htmlFor="name">Your Name</label>
        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="First and last name" />
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(000) 000-0000" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="interest">I'm interested in</label>
        <select id="interest" name="interest" value={form.interest} onChange={handleChange} required>
          <option value="">Select one</option>
          <option>Buckle only</option>
          <option>Belt only</option>
          <option>Buckle and Belt</option>
          <option>Gift / Special Occasion</option>
          <option>Corporate / Custom Logo</option>
          <option>Just have questions</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="message">Order details / message</label>
        <textarea id="message" name="message" rows={6} value={form.message} onChange={handleChange} placeholder="Any occasion, timeline, or details…" />
      </div>
      <button type="submit" className="btn" disabled={status === 'sending'}>
        <span>{status === 'sending' ? 'Sending…' : 'Send Inquiry'}</span>
      </button>
      {status === 'error' && <p className="form-error">Something went wrong. Please email us directly.</p>}
    </form>
  );
}

// ─── PAGE ────────────────────────────────────
export default function Contact() {
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
      <SEO
        title="Inquire — Start Your Custom Order"
        description="Ready to order your Bronco Buckles sterling silver belt buckle? Use our price calculator and send an inquiry. Custom buckles take 4-6 weeks. Dallas, Texas."
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

      <div className="section container">

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
            ? <Calculator onBuildOrder={handleBuildOrder} />
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
            <a href="mailto:Stocker@BroncoBuckleCompany.com">Stocker@BroncoBuckleCompany.com</a>
          </div>
        </div>

      </div>
    </div>
  );
}
