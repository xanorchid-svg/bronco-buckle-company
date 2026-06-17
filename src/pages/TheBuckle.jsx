import { Link } from 'react-router-dom';
import './PageStyles.css';
import SEO from '../components/SEO';

export default function TheBuckle() {
  return (
    <div className="page inner-page">
      <SEO
        title="The Buckle — Custom Sterling Silver Belt Buckles"
        description="Custom sterling silver belt buckles handcrafted in Dallas, Texas. Your initials, your design, built to last a lifetime. From $1,275."
        path="/the-buckle"
      />

      {/* ── Hero ── */}
      <div className="inner-hero">
        <div className="inner-hero__bg">
          <img
            src="/buckle-hero.png"
            alt="Bronco Buckles sterling silver belt buckle"
            style={{ objectPosition: 'center 60%' }}
          />
          <div className="inner-hero__overlay" />
        </div>
        <div className="inner-hero__content container">
          <p className="overline">Sterling Silver · Dallas, Texas</p>
          <h1 className="display">The Buckle</h1>
        </div>
      </div>

      <div className="section container">

        {/* ── Craft Section ── */}
        <div className="section--steel-light" style={{ padding: '3rem', margin: '0 -2rem 3rem' }}>
          <p className="overline">The Craft</p>
          <h2 className="headline">Cast in .925 sterling silver.<br />Built to outlast you.</h2>
          <div className="divider" />
          <p className="body-text" style={{ maxWidth: '680px' }}>
            Each Bronco Buckles buckle is cast from solid .925 sterling silver — not plated,
            not filled, not simulated. Your initials or monogram are placed on the front.
            The Run2theRoar phrase is stamped on the back. Custom engraving is available
            for an additional fee. This is a piece that carries meaning.
          </p>
        </div>

        {/* ── Spec Grid ── */}
        <div className="section--steel" style={{ padding: '3rem', margin: '0 -2rem 3rem' }}>
          <p className="overline">Specifications</p>
          <h2 className="headline" style={{ marginBottom: '2rem' }}>What's included</h2>
          <div className="spec-grid">
            <div className="spec-item">
              <span className="spec-label">Material</span>
              <span className="spec-value">.925 Sterling Silver</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Front</span>
              <span className="spec-value">Custom monogram or initials placed on front</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Back</span>
              <span className="spec-value">Run2theRoar stamped on back</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Standard Price</span>
              <span className="spec-value">$1,275</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Special Order</span>
              <span className="spec-value">$1,425 — unique designs, non-standard dimensions</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Lead Time</span>
              <span className="spec-value">8–12 weeks from confirmed order</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Sizing</span>
              <span className="spec-value">Standard western (1.5") — discuss at inquiry</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Finish</span>
              <span className="spec-value">Polished sterling — no black oxidation by default</span>
            </div>
          </div>
        </div>

        {/* ── Engraving ── */}
        <div className="section--steel-mid" style={{ padding: '3rem', margin: '0 -2rem 3rem' }}>
          <div className="two-col" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <p className="overline">Optional Add-On</p>
              <h2 className="headline">Custom Engraving</h2>
              <div className="divider" />
              <p className="body-text">
                Add custom engraving to your buckle — a phrase, a date, a name, or a mark
                that means something to you. Engraving is done by hand and adds depth and
                permanence to the piece.
              </p>
              <p className="body-text" style={{ marginTop: '1rem' }}>
                <strong style={{ color: 'var(--gold-light)' }}>+ $50</strong> added to your buckle order.
                Discuss specifics at the time of inquiry.
              </p>
            </div>
            <div>
              <img
                src="/buckle-engraving-back.png"
                alt="Custom engraving on back of Bronco Buckles buckle"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* ── Gallery ── */}
        <div style={{ padding: '3rem 0', marginBottom: '3rem', background: 'var(--blue-deep)' }}>
          <p className="overline" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>The Work</p>
          <h2 className="headline" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            Recent buckles
          </h2>
          <div className="gallery-grid">
            <img src="/buckle-texas-2025.png" alt="Texas 2025 Bronco Buckle" />
            <img src="/buckle-brass-initials.png" alt="Brass monogram buckles" />
            <img src="/buckle-jj-silver.png" alt="JS monogram silver buckle" />
            <img src="/buckle-gallery-4.png" alt="WHB buckle on belt" />
          </div>
        </div>

        {/* ── Pricing Block ── */}
        <div className="pricing-block" style={{ marginBottom: '3rem' }}>
          <p className="overline">Pricing</p>
          <h2 className="headline" style={{ marginBottom: '1.5rem' }}>Investment</h2>
          <div className="pricing-row">
            <span>Standard Buckle</span>
            <span>$1,275</span>
          </div>
          <div className="pricing-row">
            <span>Special Order</span>
            <span>$1,425</span>
          </div>
          <div className="pricing-row">
            <span>Custom Engraving</span>
            <span>+ $50</span>
          </div>
          <p className="pricing-note" style={{ marginTop: '1.5rem' }}>
            All prices plus applicable sales tax. Belt sold separately.
            Payment due at time of order. No refunds — each piece is made to order.
          </p>
        </div>

        {/* ── CTA ── */}
        <div className="page-cta">
          <p className="overline">Ready to Start?</p>
          <h2 className="headline">Your initials. Sterling silver.<br />Made for you.</h2>
          <Link to="/contact" className="btn" style={{ marginTop: '2rem' }}>
            <span>Inquire Now</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
