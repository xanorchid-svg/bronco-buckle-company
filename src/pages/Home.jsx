import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Home.css';

const SQUARESPACE_CDN = 'https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713';

const heroImg    = `${SQUARESPACE_CDN}/1725566392796-38I40RYLNVW9DK5LUDXC/unsplash-image-LiY9rVmDGX4.jpg`;
const brandImg   = `${SQUARESPACE_CDN}/6796795d-7074-4af8-a557-dff021ccad24/_DSF3492.jpeg`;
const beltImg    = `${SQUARESPACE_CDN}/1725570831718-W0IX1ZMW0K9ZM8FOETYK/unsplash-image-iYmBencG_KY.jpg`;

const testimonials = [
  { quote: "Great product! Enjoying my buckle & belt so much, I ordered ones for each of my boys. And secretly, I hope they embrace the message inscribed on the back and run2theroar.", author: "John H." },
  { quote: "I wear my Bronco Buckle belt every day. It instantly became my favorite.", author: "Don W." },
  { quote: "It's hard to find gifts these days for the guys in my life. Thanks Bronco Buckles for making it easy — something they'll cherish for years.", author: "Sally W." },
  { quote: "A transplanted Texan in New York, I'm reminded of my Texas roots each time I wear my Bronco Buckle belt. Bonus: it's a conversation starter.", author: "Paul C." },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Bronco Buckle Company — Sterling Silver Belt Buckles"
        description="Hand-crafted sterling silver belt buckles and belts from Dallas, Texas. Classic elegance, superb craftsmanship, defining sophistication."
        path="/"
      />

      {/* ── HERO ── */}
      <section className="home-hero">
        <div
          className="home-hero__bg"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="home-hero__overlay" />
        <div className="home-hero__content">
          <p className="eyebrow home-hero__eyebrow">Dallas, Texas · Sterling Silver</p>
          <div className="gold-rule" style={{ margin: '16px auto 24px' }} />
          <h1 className="home-hero__headline">
            Classic Elegance.<br />
            Superb Craftsmanship.
          </h1>
          <p className="home-hero__sub">Defining Sophistication</p>
          <div className="home-hero__actions">
            <Link to="/the-buckle" className="btn-primary">The Buckle</Link>
            <Link to="/contact" className="btn-steel">Inquire</Link>
          </div>
        </div>
      </section>

      {/* ── BRAND STATEMENT ── */}
      <section className="home-brand section-light">
        <div className="container">
          <div className="home-brand__grid">
            <div className="home-brand__text">
              <p className="eyebrow" style={{ color: 'var(--steel-blue-dim)' }}>The Story</p>
              <div className="steel-rule" />
              <h2 className="home-brand__heading">Inspired by the Masters</h2>
              <p>
                The Bronco Buckle Company's sterling silver buckles and belts reflect
                timeless elegance inspired by the Kalo Silver Shop in Chicago — the
                leading silversmith of the early 20th century.
              </p>
              <p style={{ marginTop: '16px' }}>
                From this inspiration, the Bronco Buckles were born — a design worn
                equally with an everyday pair of jeans or with slacks and a suit. A
                light Western motif with the subtle sophistication of a 21st century
                gentleman.
              </p>
              <Link to="/our-story" className="btn-primary" style={{ marginTop: '32px' }}>
                Our Story
              </Link>
            </div>
            <div className="home-brand__image">
              <img src={brandImg} alt="Bronco Buckle sterling silver detail" />
              <div className="home-brand__image-border" />
            </div>
          </div>
        </div>
      </section>

      {/* ── RUN2THEROAR STRIP ── */}
      <div className="home-r2r-strip">
        <div className="home-r2r-strip__inner">
          <span className="home-r2r-strip__text">
            Run<span className="run2-numeral">2</span>theRoar
          </span>
          <span className="home-r2r-strip__divider">—</span>
          <span className="home-r2r-strip__sub">
            Stamped on every buckle. A quiet encouragement.
          </span>
          <Link to="/run2theroar" className="home-r2r-strip__link">Read the story →</Link>
        </div>
      </div>

      {/* ── PRODUCTS ── */}
      <section className="home-products section-dark">
        <div className="container">
          <div className="home-products__header">
            <p className="eyebrow">Handcrafted in Sterling Silver</p>
            <div className="gold-rule" />
            <h2>The Collection</h2>
          </div>
          <div className="home-products__grid">

            <div className="home-product-card">
              <div className="home-product-card__image">
                <img src="/buckle-standalone.png" alt="The Bronco Buckle — sterling silver" />
              </div>
              <div className="home-product-card__body">
                <p className="eyebrow">The Centerpiece</p>
                <h3>The Buckle</h3>
                <p>
                  Hand-crafted in sterling silver. Block initials placed on the front.
                  "Run<span className="run2-numeral" style={{ fontSize: '1.1em' }}>2</span>theRoar"
                  stamped on the back. Custom engraving available.
                </p>
                <div className="home-product-card__price">
                  <span className="price-tag">From $895</span>
                </div>
                <Link to="/the-buckle" className="btn-primary" style={{ marginTop: '20px' }}>
                  View Details
                </Link>
              </div>
            </div>

            <div className="home-product-card">
              <div className="home-product-card__image">
                <img src={beltImg} alt="Bronco Buckle leather belts" />
              </div>
              <div className="home-product-card__body">
                <p className="eyebrow">Complete the Look</p>
                <h3>The Belt</h3>
                <p>
                  Alligator, Cowhide, or Condensed Bull Hide — each belt is selected
                  to complement the buckle and built to last a lifetime.
                </p>
                <div className="home-product-card__price">
                  <span className="price-tag">From $150</span>
                </div>
                <Link to="/the-belt" className="btn-primary" style={{ marginTop: '20px' }}>
                  View Options
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="home-testimonials section-card">
        <div className="container">
          <div className="home-testimonials__header">
            <p className="eyebrow">From Our Customers</p>
            <div className="gold-rule" />
            <h2>Worn Every Day</h2>
          </div>
          <div className="home-testimonials__grid">
            {testimonials.map((t, i) => (
              <div className="testimonial" key={i}>
                <p className="testimonial-text">"{t.quote}"</p>
                <p className="testimonial-author">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="home-cta section-deep">
        <div className="container">
          <div className="home-cta__inner">
            <p className="eyebrow">Made for You</p>
            <div className="gold-rule" />
            <h2>Begin Your Order</h2>
            <p className="home-cta__sub">
              Every buckle is made to order. We'll call you to discuss specifications,
              engraving, and delivery — because this piece is yours.
            </p>
            <Link to="/contact" className="btn-primary home-cta__btn">
              Start an Inquiry
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
