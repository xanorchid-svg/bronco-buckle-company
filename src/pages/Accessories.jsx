import { Link } from 'react-router-dom';
import './PageStyles.css';
import './Accessories.css';
import SEO from '../components/SEO';

const accessories = [
  {
    id: 'money-clip',
    overline: 'Sterling Silver',
    name: 'The Money Clip',
    price: 525,
    image: '/accessories-money-clip-cash.jpg',
    imageAlt: 'Bronco Buckles sterling silver money clip with three initials, holding folded bills and cards',
    paragraphs: [
      'Three initials, raised on sterling silver, carried in the front pocket every day. The same metal and the same hand as our buckles — made for the man who keeps things simple and keeps them close.',
      'Choose the font for your initials, and add an engraving if you like: a date, a name, a line that means something to him.',
    ],
    details: [
      ['Material', 'Sterling silver'],
      ['Initials', 'Three letters'],
      ['Font', 'Your choice'],
      ['Engraving', 'Available'],
    ],
  },
  {
    id: 'key-chain',
    overline: 'Sterling Silver',
    name: 'The Key Chain',
    price: 185,
    image: '/accessories-keychains.jpg',
    imageAlt: 'Two Bronco Buckles sterling silver key chains with three linked initials',
    paragraphs: [
      'Three initials in sterling silver, each letter its own piece, linked one above the other on a sterling ring. Small enough to carry everywhere. Substantial enough to notice.',
      'An easy way into the Bronco Buckles collection — and one of the best gifts we make.',
    ],
    details: [
      ['Material', 'Sterling silver'],
      ['Initials', 'Three letters'],
    ],
  },
];

const occasions = [
  ['Groomsmen', 'A matching set, each with his own initials.'],
  ["Father's Day", 'Something he will carry every day.'],
  ['Graduations', 'A first piece of real silver.'],
  ['The Holidays', 'Order early — every piece is made to order.'],
];

const accessoriesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Bronco Buckles Sterling Silver Accessories',
  itemListElement: accessories.map((a, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: `Sterling Silver ${a.name.replace('The ', '')}`,
      description: a.paragraphs[0],
      image: `https://www.broncobuckles.com${a.image}`,
      material: 'Sterling Silver',
      offers: {
        '@type': 'Offer',
        price: `${a.price}.00`,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      brand: { '@type': 'Brand', name: 'Bronco Buckles Company' },
    },
  })),
};

export default function Accessories() {
  return (
    <div className="page inner-page">
      <SEO
        title="Accessories — Sterling Silver Money Clip & Key Chain"
        description="Sterling silver money clips and key chains with your three initials, hand-crafted by Bronco Buckles in Dallas, Texas. Engraving available. Made to order — the perfect gift."
        path="/accessories"
        schema={accessoriesSchema}
        keywords="sterling silver money clip, monogram money clip, initial key chain, sterling silver key chain, engraved money clip Dallas, groomsmen gifts Texas, personalized gifts for men"
      />

      <div className="inner-hero">
        <div className="inner-hero__bg">
          <img
            src="/accessories-hero.jpg"
            alt="Bronco Buckles sterling silver money clip and initial key chains"
            style={{ objectPosition: 'center 50%' }}
          />
          <div className="inner-hero__overlay" />
        </div>
        <div className="inner-hero__content container">
          <p className="overline">Money Clip · Key Chain</p>
          <h1 className="display">Accessories</h1>
        </div>
      </div>

      <div className="section container">

        {/* Intro */}
        <div className="accessories-intro">
          <p className="overline">Everyday Silver</p>
          <h2 className="headline">The same silver.<br />Carried every day.</h2>
          <div className="divider" style={{ margin: '1.5rem auto' }} />
          <p className="body-text">
            Smaller pieces, made with the same care as every Bronco Buckles buckle. Each one
            carries your initials, and each one is made to order for you.
          </p>
        </div>

        {/* Product blocks */}
        {accessories.map((a, i) => (
          <div
            key={a.id}
            className={`accessory-block two-col${i % 2 === 1 ? ' accessory-block--reverse' : ''}`}
          >
            <div className="accessory-block__image">
              <img src={a.image} alt={a.imageAlt} loading="lazy" />
            </div>
            <div className="accessory-block__text">
              <p className="overline">{a.overline}</p>
              <h2 className="headline">{a.name}</h2>
              <div className="divider" />
              {a.paragraphs.map((p, j) => (
                <p key={j} className="body-text" style={{ marginTop: j ? '1rem' : 0 }}>{p}</p>
              ))}

              <dl className="accessory-details">
                {a.details.map(([label, value]) => (
                  <div key={label} className="accessory-details__row">
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
                <div className="accessory-details__row accessory-details__row--price">
                  <dt>Price</dt>
                  <dd>${a.price.toLocaleString('en-US')}</dd>
                </div>
              </dl>

              <Link to={`/contact?item=${a.id}`} className="btn">
                <span>Inquire About {a.name.replace('The ', 'the ')}</span>
              </Link>
            </div>
          </div>
        ))}

        {/* Gifting */}
        <div className="accessories-gifting section--steel-light">
          <p className="overline">Made to Give</p>
          <h2 className="headline">A gift that carries his name.</h2>
          <div className="accessories-gifting__grid">
            {occasions.map(([title, desc]) => (
              <div key={title} className="accessories-gifting__item">
                <h3>{title}</h3>
                <p className="body-text">{desc}</p>
              </div>
            ))}
          </div>
          <p className="body-text accessories-gifting__pair">
            Pair a money clip or key chain with <Link to="/the-buckle">a buckle</Link> for
            a complete set — all in sterling silver, all with the same initials.
          </p>
        </div>

        <div className="page-cta">
          <p className="overline">Ready to Start?</p>
          <h2 className="headline">Your initials. In silver.</h2>
          <Link to="/contact" className="btn" style={{ marginTop: '2rem' }}>
            <span>Inquire Now</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
