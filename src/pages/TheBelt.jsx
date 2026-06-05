import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './PageStyles.css';
import './TheBelt.css';

const CDN = 'https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713';
const heroImg = `${CDN}/6796795d-7074-4af8-a557-dff021ccad24/_DSF3499.jpeg`;

const belts = [
  {
    name: 'Alligator',
    price: '$525 – $675',
    priceNote: 'Standard / Custom',
    description:
      'The premium choice. Genuine American alligator leather, hand-selected for grain consistency and supple texture. A statement in itself — but one that knows when to be quiet.',
    details: ['Genuine American alligator', 'Hand-selected grain', 'Brass or silver hardware', '1½" standard width', 'Custom sizing available'],
    tier: 'premium',
  },
  {
    name: 'Cowhide',
    price: '$150 – $350',
    priceNote: 'Standard / Bridal',
    description:
      'Approachable, durable, and beautifully versatile. Smooth cowhide in standard and bridal grades — the bridal leather is finer-grained, more supple, and noticeably richer.',
    details: ['Standard or bridal grade', 'Smooth finish', 'Multiple color options', '1½" standard width', 'Custom sizing available'],
    tier: 'standard',
  },
  {
    name: 'Condensed Bull Hide',
    price: '$475',
    priceNote: 'Single price',
    description:
      'A working belt with a refined character. Condensed bull hide has a density and rigidity that ages beautifully — developing a patina unique to the wearer over years of use.',
    details: ['Condensed bull hide leather', 'Rich, structured feel', 'Develops personal patina', '1½" standard width', 'Custom sizing available'],
    tier: 'mid',
  },
];

export default function TheBelt() {
  return (
    <>
      <SEO
        title="The Belt — Bronco Buckle Company"
        description="Alligator, Cowhide, and Condensed Bull Hide belts, crafted to complement the Bronco sterling silver buckle."
        path="/the-belt"
      />

      {/* ── HERO ── */}
      <section className="inner-hero">
        <div
          className="inner-hero__bg"
          style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: 'center 40%' }}
        />
        <div className="inner-hero__overlay" />
        <div className="inner-hero__content">
          <p className="eyebrow" style={{ color: 'var(--steel-blue-soft)' }}>
            Alligator · Cowhide · Bull Hide
          </p>
          <div className="gold-rule" />
          <h1>The Belt</h1>
          <p className="inner-hero__sub">Complete the look.</p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="section-light">
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow" style={{ color: 'var(--steel-blue-dim)' }}>The Pairing</p>
            <div className="steel-rule" style={{ margin: '16px auto' }} />
            <h2 style={{ color: 'var(--text-dark)', marginBottom: '20px' }}>
              Built for the Buckle
            </h2>
            <p style={{ color: 'var(--text-dark-mid)' }}>
              Each belt is selected and sized to carry the Bronco Buckle — and to last
              as long as the sterling silver it holds. Three leathers, three price points,
              one intention: worthy of the buckle.
            </p>
          </div>
        </div>
      </section>

      {/* ── BELT OPTIONS ── */}
      <section className="section-dark">
        <div className="container">
          <div className="belt-grid">
            {belts.map((belt, i) => (
              <div className={`belt-card belt-card--${belt.tier}`} key={i}>
                <div className="belt-card__image img-placeholder" style={{ minHeight: '260px' }}>
                  <span>{belt.name}</span>
                  <span style={{ fontSize: '0.6rem', opacity: 0.5 }}>Image coming soon</span>
                </div>
                <div className="belt-card__body">
                  <p className="eyebrow" style={{ color: belt.tier === 'premium' ? 'var(--gold)' : 'var(--steel-blue)' }}>
                    {belt.tier === 'premium' ? 'Premium' : belt.tier === 'mid' ? 'Mid-Grade' : 'Standard'}
                  </p>
                  <h3 className="belt-card__name">{belt.name}</h3>
                  <div className="belt-card__price">
                    <span className="price-tag">{belt.price}</span>
                    <span className="price-label">{belt.priceNote}</span>
                  </div>
                  <p className="belt-card__desc">{belt.description}</p>
                  <ul className="belt-card__details">
                    {belt.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.85rem' }}>
              All belts are custom-ordered to your waist size. We'll confirm sizing on your order call.
            </p>
            <Link to="/contact" className="btn-primary">Inquire About a Belt</Link>
          </div>
        </div>
      </section>

    </>
  );
}
