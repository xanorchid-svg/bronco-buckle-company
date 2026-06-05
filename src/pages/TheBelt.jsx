import { Link } from 'react-router-dom';
import './PageStyles.css';
import SEO from '../components/SEO';

const belts = [
  {
    name: 'American Alligator',
    price: '$525 – $675',
    description: 'The finest option in our collection. American alligator leather, supple and distinctive, with a natural grain that deepens over time. An heirloom in its own right.',
    note: 'Standard $525 · Custom $675. Limited availability. Allow additional lead time.',
  },
  {
    name: 'Cowhide',
    price: '$150 – $350',
    description: 'Two cowhide grades available — standard and bridal. The bridal grade is finer-grained, more supple, and noticeably richer. Durable, versatile, and refined.',
    note: 'Standard $150 · Bridal $350. Discuss options at inquiry.',
  },
  {
    name: 'Condensed Bull Hide',
    price: '$475',
    description: 'For the man who wants something different. Dense, structured, and built to last decades. Available by special request.',
    note: 'Single price: $475.',
  },
];

export default function TheBelt() {
  return (
    <div className="page inner-page">
      <SEO
        title="The Belt — American Alligator, Cowhide & Bull Hide"
        description="Pair your Bronco Buckles sterling silver buckle with an American alligator, cowhide, or condensed bull hide belt. Made to your specifications. Dallas, Texas."
        path="/the-belt"
      />
      <div className="inner-hero">
        <div className="inner-hero__bg">
          <img
            src="https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/ebf145c7-c0c9-4a4a-a397-9cdfcd8db0c6/_DSF3499.jpeg"
            alt="The Belt"
          />
          <div className="inner-hero__overlay" />
        </div>
        <div className="inner-hero__content container">
          <p className="overline">American Alligator · Cowhide · Bull Hide</p>
          <h1 className="display">The Belt</h1>
        </div>
      </div>

      <div className="section container">
        <div className="section-intro">
          <p className="overline">The Foundation</p>
          <h2 className="headline">A buckle isn't much use<br />without a belt.</h2>
          <div className="divider" />
          <p className="body-text">
            We offer several belt options to pair with your Bronco Buckles buckle — each selected
            for quality, longevity, and character. The belt is not an afterthought. It is
            the other half of the piece.
          </p>
        </div>

        <div className="belt-grid">
          {belts.map((belt, i) => (
            <div key={i} className="belt-card">
              <div className="belt-card__header">
                <div>
                  <p className="overline">{i === 0 ? 'Premium' : i === 1 ? 'Classic' : 'Special Order'}</p>
                  <h3>{belt.name}</h3>
                </div>
                <span className="belt-card__price">{belt.price}</span>
              </div>
              <div className="divider" style={{ margin: '1.2rem 0' }} />
              <p className="body-text">{belt.description}</p>
              <p className="belt-card__note">{belt.note}</p>
            </div>
          ))}
        </div>

        <div className="pricing-block" style={{ marginTop: '4rem' }}>
          <p className="pricing-note">All prices plus applicable sales tax. Belts are made to pair with your Bronco Buckles buckle and are sized to your specifications.</p>
        </div>

        <div className="page-cta">
          <p className="overline">Ready to Start?</p>
          <h2 className="headline">Find your perfect pair.</h2>
          <Link to="/contact" className="btn" style={{ marginTop: '2rem' }}>
            <span>Inquire Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
