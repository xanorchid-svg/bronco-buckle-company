import { Link } from 'react-router-dom';
import './PageStyles.css';
import SEO from '../components/SEO';

export default function TheBuckle() {
  return (
    <div className="page inner-page">
      <SEO
        title="The Buckle — Sterling Silver Belt Buckles"
        description="Each Bronco Buckles buckle is hand-crafted in .925 sterling silver with your custom block initials or logo. Inspired by the Kalo Silver Shop. From $1,275. Dallas, Texas."
        path="/the-buckle"
      />
      <div className="inner-hero">
        <div className="inner-hero__bg">
          <img
            src="https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/8a6b54b6-acac-431a-a7f3-8014f45c73ee/WhatsApp+Image+2024-10-14+at+21.31.46+%281%29.jpg"
            alt="The Bronco Buckles Buckle"
          />
          <div className="inner-hero__overlay" />
        </div>
        <div className="inner-hero__content container">
          <p className="overline">Hand-Crafted · Sterling Silver</p>
          <h1 className="display">The Buckle</h1>
        </div>
      </div>

      <div className="section container">
        <div className="two-col">
          <div className="two-col__text">
            <p className="overline">The Craft</p>
            <h2 className="headline">Made to your specifications.</h2>
            <div className="divider" />
            <p className="body-text">
              Each Bronco Buckles buckle is hand-crafted in sterling silver by a 3rd generation
              silversmith, made entirely to your specifications. The design draws from the legacy
              of the Kalo Silver Shop — the premier silversmith of early 20th century Chicago —
              and carries that tradition forward into a piece built for the modern gentleman.
            </p>
            <p className="body-text" style={{ marginTop: '1rem' }}>
              A light Western motif, refined for versatility. Wear it with denim. Wear it
              with a suit. The block initials give this piece an ageless quality — personal
              without being precious. Masculine without being loud.
            </p>
          </div>
          <div className="two-col__image">
            <img
              src="https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/ebf145c7-c0c9-4a4a-a397-9cdfcd8db0c6/_DSF3499.jpeg"
              alt="Buckle detail"
            />
          </div>
        </div>

        <hr />

        <div className="section--steel" style={{ padding: '3rem', margin: '0 -2rem' }}>
          <div className="spec-grid">
          <div className="spec-item">
            <p className="overline">Material</p>
            <h3>Sterling Silver</h3>
            <p className="body-text">Pure .925 sterling, polished to a warm, lasting finish.</p>
          </div>
          <div className="spec-item">
            <p className="overline">Personalization</p>
            <h3>Block Initials</h3>
            <p className="body-text">Your initials placed on the front of the buckle. Custom logos and brands also available.</p>
          </div>
          <div className="spec-item">
            <p className="overline">Philosophy</p>
            <h3>Run2theRoar</h3>
            <p className="body-text">Stamped on the back of every buckle — a quiet reminder to face the day with courage and intention.</p>
          </div>
          <div className="spec-item">
            <p className="overline">Timing</p>
            <h3>4–6 Weeks</h3>
            <p className="body-text">Custom work takes time. We'll help you plan to meet your occasion.</p>
          </div>
        </div>
        </div>

        <hr />
          <p className="overline">Pricing</p>
          <div className="pricing-row">
            <span className="pricing-label">Standard Buckle (with initials)</span>
            <span className="pricing-price">$895</span>
          </div>
          <div className="pricing-row">
            <span className="pricing-label">Special Order (logos, brands, custom designs)</span>
            <span className="pricing-price">$1,425</span>
          </div>
          <div className="pricing-row">
            <span className="pricing-label">Custom Engraving (back of buckle)</span>
            <span className="pricing-price">+$50</span>
          </div>
          <p className="pricing-note">Plus applicable sales tax.</p>
        </div>

        <hr />

        <div className="two-col" style={{ alignItems: 'flex-start' }}>
          <div className="two-col__text">
            <p className="overline">Personal Touch</p>
            <h2 className="headline">The Engraving</h2>
            <div className="divider" />
            <p className="body-text">
              Many — if not most — of the people who buy these buckles make them even more
              personal with a custom engraving on the back. A celebration, an exclamation,
              a bible verse, a name, a date. Whatever carries meaning.
            </p>
            <p className="body-text" style={{ marginTop: '1rem' }}>
              The shorter the better. Four lines maximum. The engraving is the final step
              of the making process — the last thing our silversmith does before the buckle
              leaves his hands.
            </p>
            <p className="body-text" style={{ marginTop: '1rem', color: 'var(--gold)' }}>
              Additional $50 for engraving.
            </p>
          </div>
          <div className="two-col__image" style={{ background: 'var(--blue-mid)', minHeight: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p className="overline" style={{ textAlign: 'center', opacity: 0.5 }}>Engraving image coming soon</p>
          </div>
        </div>

        <hr />

        <div>
          <p className="overline" style={{ marginBottom: '1.5rem' }}>The Collection</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            <div>
              <img src="/buckle-standalone.png" alt="Texas 2025 — Standard" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', background: 'var(--blue-mid)' }} />
              <p className="overline" style={{ marginTop: '0.75rem', fontSize: '0.6rem' }}>Standard</p>
            </div>
            <div>
              <div style={{ width: '100%', aspectRatio: '3/4', background: 'var(--blue-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p className="overline" style={{ opacity: 0.4, fontSize: '0.6rem', textAlign: 'center', padding: '1rem' }}>JJS Custom — Image coming soon</p>
              </div>
              <p className="overline" style={{ marginTop: '0.75rem', fontSize: '0.6rem' }}>JJS Custom</p>
            </div>
            <div>
              <div style={{ width: '100%', aspectRatio: '3/4', background: 'var(--blue-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p className="overline" style={{ opacity: 0.4, fontSize: '0.6rem', textAlign: 'center', padding: '1rem' }}>No-Black Finish — Image coming soon</p>
              </div>
              <p className="overline" style={{ marginTop: '0.75rem', fontSize: '0.6rem' }}>No-Black Finish</p>
            </div>
            <div>
              <div style={{ width: '100%', aspectRatio: '3/4', background: 'var(--blue-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p className="overline" style={{ opacity: 0.4, fontSize: '0.6rem', textAlign: 'center', padding: '1rem' }}>Engraving — Image coming soon</p>
              </div>
              <p className="overline" style={{ marginTop: '0.75rem', fontSize: '0.6rem' }}>Custom Engraving</p>
            </div>
          </div>
        </div>

        <div className="page-cta">
          <p className="overline">Ready to Start?</p>
          <h2 className="headline">Let's build your buckle.</h2>
          <Link to="/contact" className="btn" style={{ marginTop: '2rem' }}>
            <span>Begin Your Order</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
