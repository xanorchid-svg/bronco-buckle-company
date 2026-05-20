import { Link } from 'react-router-dom';
import './PageStyles.css';

export default function TheBuckle() {
  return (
    <div className="page inner-page">
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
              Each Bronco Buckles buckle is hand-crafted in sterling silver by skilled craftsmen,
              made entirely to your specifications. The design draws from the legacy of the
              Kalo Silver Shop — the premier silversmith of early 20th century Chicago — and
              carries that tradition forward into a piece built for the modern gentleman.
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

        <div className="spec-grid">
          <div className="spec-item">
            <p className="overline">Material</p>
            <h3>Sterling Silver</h3>
            <p className="body-text">Pure .925 sterling, polished to a warm, lasting finish.</p>
          </div>
          <div className="spec-item">
            <p className="overline">Personalization</p>
            <h3>Block Initials</h3>
            <p className="body-text">Your initials, hand-stamped into the silver. Custom logos and brands also available.</p>
          </div>
          <div className="spec-item">
            <p className="overline">Philosophy</p>
            <h3>Run2theRoar</h3>
            <p className="body-text">Stamped on the back of every buckle — a quiet reminder to face the day with intention.</p>
          </div>
          <div className="spec-item">
            <p className="overline">Timing</p>
            <h3>4–6 Weeks</h3>
            <p className="body-text">Custom work takes time. We'll help you plan to meet your occasion.</p>
          </div>
        </div>

        <hr />

        <div className="pricing-block">
          <p className="overline">Pricing</p>
          <div className="pricing-row">
            <span className="pricing-label">Standard Buckle (with initials)</span>
            <span className="pricing-price">$1,275</span>
          </div>
          <div className="pricing-row">
            <span className="pricing-label">Special Order (logos, brands, custom designs)</span>
            <span className="pricing-price">~$1,400</span>
          </div>
          <p className="pricing-note">Plus applicable sales tax.</p>
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
