import { Link } from 'react-router-dom';
import './Home.css';

const testimonials = [
  {
    quote: "I ordered one for myself, then one for each of my boys. I hope they embrace the message inscribed on the back and run2theroar.",
    name: "John H.",
  },
  {
    quote: "I wear my Bronco Buckles belt every day. It instantly became my favorite.",
    name: "Don W.",
  },
  {
    quote: "It's hard to find a gift for the guys in my life. Thanks Bronco Buckles for making it easy — something they'll cherish for years.",
    name: "Sally W.",
  },
  {
    quote: "A transplanted Texan in New York, I'm reminded of my Texas roots each time I wear my Bronco Buckles belt. Bonus: it's a conversation starter.",
    name: "Paul C.",
  },
];

export default function Home() {
  return (
    <div className="page home">

      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero__bg">
          <img
            src="https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/6796795d-7074-4af8-a557-dff021ccad24/_DSF3492.jpeg"
            alt="Bronco Buckles — Sterling Silver"
          />
          <div className="home-hero__overlay" />
        </div>
        <div className="home-hero__content">
          <div style={{ paddingLeft: '2rem', maxWidth: '680px' }}>
          <p className="overline">Dallas, Texas · Est. 2024</p>
          <h1 className="display home-hero__title">
            Hand-Crafted<br />
            <em>Sterling Silver</em><br />
            Buckles & Belts
          </h1>
          <div className="divider" />
          <p className="home-hero__sub">
            For the man who dresses with intention.
          </p>
          <Link to="/contact" className="btn">
            <span>Begin Your Order</span>
          </Link>
          </div>
        </div>
        <div className="home-hero__scroll">
          <span />
        </div>
      </section>

      {/* Brand Statement */}
      <section className="section home-brand">
        <div className="container">
          <div className="home-brand__inner">
            <div className="home-brand__text">
              <p className="overline">The Philosophy</p>
              <h2 className="headline">Worn with jeans.<br />Worn with a suit.</h2>
              <div className="divider" />
              <p className="body-text">
                Bronco Buckles draws its inspiration from the Kalo Silver Shop — the
                leading silversmith of early 20th century Chicago. A light Western motif
                carried with 21st century refinement. Your initials, hand-stamped. A piece
                that belongs in any room you walk into.
              </p>
              <Link to="/the-buckle" className="btn" style={{ marginTop: '2rem' }}>
                <span>View The Buckle</span>
              </Link>
            </div>
            <div className="home-brand__image">
              <img
                src="https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/ebf145c7-c0c9-4a4a-a397-9cdfcd8db0c6/_DSF3499.jpeg"
                alt="Bronco Buckles detail"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Run2theRoar Callout */}
      <section className="home-roar">
        <div className="home-roar__inner container">
          <p className="overline">Stamped on every buckle</p>
          <h2 className="display home-roar__title"><em>Run2theRoar</em></h2>
          <p className="home-roar__text body-text">
            On the back of every buckle, a quiet reminder. Be fearless, assertive, and
            intentional when facing the roar of the day. Not from it — toward it.
          </p>
          <Link to="/run2theroar" className="btn btn--light">
            <span>Read the Story</span>
          </Link>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section home-products">
        <div className="container">
          <div className="home-products__grid">
            <Link to="/the-buckle" className="home-product-card">
              <div className="home-product-card__image">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/8a6b54b6-acac-431a-a7f3-8014f45c73ee/WhatsApp+Image+2024-10-14+at+21.31.46+%281%29.jpg"
                  alt="The Buckle"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              <div className="home-product-card__text">
                <p className="overline">Sterling Silver</p>
                <h3>The Buckle</h3>
                <p>From $1,275 · Custom initials · Hand-crafted</p>
                <span className="home-product-card__link">Learn More →</span>
              </div>
            </Link>

            <Link to="/the-belt" className="home-product-card">
              <div className="home-product-card__image">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/6796795d-7074-4af8-a557-dff021ccad24/_DSF3492.jpeg"
                  alt="The Belt"
                />
              </div>
              <div className="home-product-card__text">
                <p className="overline">American Alligator · Cowhide</p>
                <h3>The Belt</h3>
                <p>From $150 · Multiple leathers · Made to pair</p>
                <span className="home-product-card__link">Learn More →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section home-testimonials">
        <div className="container">
          <div className="home-testimonials__header">
            <p className="overline">From Our Customers</p>
            <h2 className="headline">What they're saying</h2>
            <div className="divider--center divider" />
          </div>
          <div className="home-testimonials__grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-card__mark">"</p>
                <p className="testimonial-card__quote">{t.quote}</p>
                <p className="testimonial-card__name">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <div>
            <p className="overline">Ready to Order?</p>
            <h2 className="headline">Let's build yours.</h2>
            <p className="body-text" style={{ marginTop: '0.75rem' }}>
              Custom buckles take 4–6 weeks from start to finish.<br />Reach out and we'll guide you through every step.
            </p>
          </div>
          <Link to="/contact" className="btn">
            <span>Get In Touch</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
