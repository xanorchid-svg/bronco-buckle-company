import { Link } from 'react-router-dom';
import './Home.css';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="page">
      <SEO
        title="Bronco Buckles — Hand-Crafted Sterling Silver Buckles & Belts"
        description="Custom sterling silver belt buckles and premium leather belts, handcrafted in Dallas, Texas. For the man who dresses with intention."
        path="/"
      />

      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="home-hero__bg">
          <img
            src="https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/6796795d-7074-4af8-a557-dff021ccad24/_DSF3492.jpeg"
            alt="Bronco Buckles sterling silver belt buckle"
          />
          <div className="home-hero__overlay" />
        </div>
        <div className="home-hero__content container">
          <p className="overline">Dallas, Texas · Est. 2024</p>
          <h1 className="home-hero__title">
            Hand-Crafted<br />
            <em>Sterling Silver</em><br />
            Buckles &amp; Belts
          </h1>
          <div className="home-hero__divider" />
          <p className="home-hero__sub">For the man who dresses with intention.</p>
          <Link to="/contact" className="btn">
            <span>Begin Your Order</span>
          </Link>
        </div>
      </section>

      {/* ── Brand Statement ── */}
      <section className="home-brand">
        <div className="container">
          <div className="two-col">
            <div>
              <p className="overline">The Standard</p>
              <h2 className="headline">Not a buckle.<br />A statement.</h2>
              <div className="divider" />
              <p className="body-text">
                Every Bronco Buckles piece is cast in sterling silver, built to outlast trends, and
                made to carry your initials — or your family's — for generations. This is not
                fashion. This is heirloom.
              </p>
              <p className="body-text" style={{ marginTop: '1rem' }}>
                We work with a small number of clients at a time. Each order is a conversation.
                Each piece is singular.
              </p>
            </div>
            <div className="home-brand__image">
              <img
                src="https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/ebf145c7-c0c9-4a4a-a397-9cdfcd8db0c6/_DSF3499.jpeg"
                alt="Bronco Buckles craftsmanship"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Run2theRoar Strip ── */}
      <section className="home-roar-strip">
        <div className="container">
          <p className="overline" style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
            The Philosophy
          </p>
          <h2>
            Run<span className="roar-numeral">2</span>theRoar
          </h2>
          <p>Every buckle carries the Run2theRoar stamp on the back — a reminder to run toward what frightens you.</p>
          <Link to="/run2theroar" className="btn btn--ghost">
            <span>Read the Story</span>
          </Link>
        </div>
      </section>

      {/* ── Product Cards ── */}
      <section className="home-products">
        <div className="container">
          <p className="overline" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            The Collection
          </p>
          <h2 className="headline" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Built to last. Made for you.
          </h2>

          <div className="home-products__grid">
            {/* Buckle Card */}
            <div className="product-card">
              <div className="product-card__image">
                <img
                  src="/buckle-texas-2025.png"
                  alt="Bronco Buckles sterling silver belt buckle"
                />
              </div>
              <div className="product-card__body">
                <p className="overline">Sterling Silver</p>
                <h3>The Buckle</h3>
                <p>
                  Cast in .925 sterling silver. Custom monogram placed on front.
                  Run2theRoar stamped on the back. Made to your specifications.
                </p>
                <span className="product-card__price">From $1,275</span>
                <Link to="/the-buckle" className="btn">
                  <span>Learn More</span>
                </Link>
              </div>
            </div>

            {/* Belt Card */}
            <div className="product-card">
              <div className="product-card__image">
                <img
                  src="/belt-home.jpg"
                  alt="Bronco Buckles premium leather belt"
                />
              </div>
              <div className="product-card__body">
                <p className="overline">Premium Leather</p>
                <h3>The Belt</h3>
                <p>
                  American alligator, cowhide, and condensed bull hide. Each belt
                  sized and paired to your buckle. The other half of the piece.
                </p>
                <span className="product-card__price">From $150</span>
                <Link to="/the-belt" className="btn">
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="home-testimonials">
        <div className="container">
          <h2>What our clients say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"The buckle is unlike anything I've ever owned. It's the first thing people notice and the first thing they ask about."</p>
              <cite>— J.W., Dallas TX</cite>
            </div>
            <div className="testimonial-card">
              <p>"Wore it to a black tie event. Three people asked where I got it. I gave them Bronco Buckles' card every time."</p>
              <cite>— R.M., Fort Worth TX</cite>
            </div>
            <div className="testimonial-card">
              <p>"It's not a buckle — it's a family piece. My initials, my way, built to pass down. Couldn't be happier."</p>
              <cite>— T.B., Houston TX</cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home-cta">
        <div className="container">
          <p className="overline">Ready to Start?</p>
          <h2>Your buckle. Your initials.<br />Your legacy.</h2>
          <p>Every order begins with a conversation. Tell us what you have in mind.</p>
          <Link to="/contact" className="btn">
            <span>Begin Your Order</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
