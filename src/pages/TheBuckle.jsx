import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './PageStyles.css';
import './TheBuckle.css';

const CDN = 'https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713';

// Hero — zoomed on Run2theRoar stamp
const heroImg = `${CDN}/1725566392796-38I40RYLNVW9DK5LUDXC/unsplash-image-LiY9rVmDGX4.jpg`;

// 4-image grid — placeholders where new images are pending
const galleryImages = [
  {
    src: '/buckle-standalone.png',
    label: 'Texas 2025 — Standard',
    caption: 'Sterling silver, block initials placed on front',
    isPlaceholder: false,
  },
  {
    src: null,
    label: 'JJS Custom',
    caption: 'Custom initials — personalized to order',
    isPlaceholder: true,
  },
  {
    src: null,
    label: 'No-Black Finish',
    caption: 'Clean sterling silver, no oxidized fill',
    isPlaceholder: true,
  },
  {
    src: null,
    label: 'Custom Engraving',
    caption: 'Back of buckle — personal inscription',
    isPlaceholder: true,
  },
];

const specs = [
  { label: 'Material',     value: 'Sterling Silver (.925)' },
  { label: 'Initials',     value: 'Placed on front — up to 3 letters' },
  { label: 'Back Stamp',   value: '"Run²theRoar" stamped on reverse' },
  { label: 'Engraving',    value: 'Custom inscription — additional $50' },
  { label: 'Fit',          value: 'Standard 1½" belt width' },
  { label: 'Craftsmanship','value': '3rd generation silversmith' },
];

export default function TheBuckle() {
  return (
    <>
      <SEO
        title="The Buckle — Bronco Buckle Company"
        description="Hand-crafted sterling silver belt buckles. Block initials placed on front, Run2theRoar stamped on back. Custom engraving available."
        path="/the-buckle"
      />

      {/* ── HERO ── */}
      <section className="inner-hero">
        <div
          className="inner-hero__bg"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundPosition: 'center 60%', // zoomed into stamp area
          }}
        />
        <div className="inner-hero__overlay" />
        <div className="inner-hero__content">
          <p className="eyebrow" style={{ color: 'var(--steel-blue-soft)' }}>
            Sterling Silver · Hand-Crafted
          </p>
          <div className="gold-rule" />
          <h1>The Buckle</h1>
          <p className="inner-hero__sub">
            Made for you. Built to last a lifetime.
          </p>
        </div>
      </section>

      {/* ── MAIN DESCRIPTION ── */}
      <section className="section-light">
        <div className="container">
          <div className="buckle-intro__grid">
            <div className="buckle-intro__text">
              <p className="eyebrow" style={{ color: 'var(--steel-blue-dim)' }}>Craftsmanship</p>
              <div className="steel-rule" />
              <h2>A Buckle Worth Passing Down</h2>
              <p>
                Each Bronco Buckles buckle is hand-crafted in sterling silver by a
                3rd generation silversmith — a craftsman whose family has worked
                the metal for over a century.
              </p>
              <p style={{ marginTop: '16px' }}>
                The design reflects timeless elegance inspired by the Kalo Silver Shop
                in Chicago, the leading silversmith of the early 20th century. A light
                Western motif with the sophisticated restraint of a 21st century gentleman.
                Block initials <strong>placed on the front</strong>. "Run<span className="run2-numeral">2</span>theRoar"
                <strong> stamped on the back</strong>.
              </p>
              <p style={{ marginTop: '16px' }}>
                The classic style with block initials gives this piece an ageless feel
                with a modern flair — worn equally with jeans or a suit.
              </p>
            </div>
            <div className="buckle-intro__specs">
              <h4 style={{ marginBottom: '20px', color: 'var(--text-dark)', fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                Specifications
              </h4>
              {specs.map(s => (
                <div className="spec-row" key={s.label}>
                  <span className="spec-label">{s.label}</span>
                  <span className="spec-value">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4-IMAGE GALLERY ── */}
      <section className="section-dark">
        <div className="container">
          <div className="buckle-gallery__header">
            <p className="eyebrow">Made for Your Specifications</p>
            <div className="gold-rule" />
            <h2>Every Buckle, Unique</h2>
          </div>
          <div className="buckle-gallery__grid">
            {galleryImages.map((img, i) => (
              <div className="buckle-gallery__item" key={i}>
                {img.isPlaceholder ? (
                  <div className="img-placeholder buckle-gallery__image">
                    <span>{img.label}</span>
                    <span style={{ fontSize: '0.6rem', opacity: 0.5 }}>Image coming soon</span>
                  </div>
                ) : (
                  <div className="buckle-gallery__image">
                    <img src={img.src} alt={img.label} />
                  </div>
                )}
                <div className="buckle-gallery__caption">
                  <span className="buckle-gallery__caption-title">{img.label}</span>
                  <span className="buckle-gallery__caption-sub">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGRAVING SECTION ── */}
      <section className="section-card">
        <div className="container">
          <div className="buckle-engraving__grid">
            <div className="buckle-engraving__text">
              <p className="eyebrow">Personal Touch</p>
              <div className="steel-rule" />
              <h2>The Engraving</h2>
              <p>
                Many — if not most — of the people who buy these buckles make them
                even more personal with a custom engraving on the back. A celebration,
                an exclamation, a bible verse, a name, a date. Whatever carries meaning.
              </p>
              <p style={{ marginTop: '16px' }}>
                The shorter the better. Four lines maximum. The engraving is the final
                step of the making process — the last thing our silversmith does before
                the buckle leaves his hands.
              </p>
              <div className="buckle-engraving__callout">
                <span className="eyebrow" style={{ color: 'var(--gold)' }}>Custom Engraving</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginTop: '8px' }}>
                  <span className="price-tag">+$50</span>
                  <span className="price-label">Added at checkout</span>
                </div>
                <p style={{ marginTop: '12px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  We'll discuss your engraving during your personal order call.
                </p>
              </div>
            </div>
            <div className="buckle-engraving__image img-placeholder" style={{ minHeight: '360px' }}>
              <span>Engraving Photo</span>
              <span style={{ fontSize: '0.6rem', opacity: 0.5 }}>Image coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── RUN2THEROAR PHILOSOPHY ── */}
      <section className="section-deep buckle-r2r">
        <div className="container">
          <div className="buckle-r2r__inner">
            <p className="eyebrow" style={{ color: 'var(--steel-blue)' }}>On Every Buckle</p>
            <div className="gold-rule" />
            <h2>
              Run<span className="run2-numeral">2</span>theRoar
            </h2>
            <p className="buckle-r2r__quote">
              Stamped on the back of every buckle — a quiet encouragement to live
              with courage and intention.
            </p>
            <Link to="/run2theroar" className="btn-steel" style={{ marginTop: '28px' }}>
              Read the Story
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="section-card">
        <div className="container">
          <div className="buckle-pricing__header">
            <p className="eyebrow">Investment</p>
            <div className="gold-rule" />
            <h2>Pricing</h2>
          </div>
          <div className="buckle-pricing__grid">
            <div className="buckle-pricing__item">
              <p className="eyebrow" style={{ color: 'var(--steel-blue)' }}>Standard Order</p>
              <div className="price-tag" style={{ fontSize: '2.8rem', marginTop: '12px' }}>$895</div>
              <div className="price-label">Sterling silver buckle · Your initials</div>
              <ul className="buckle-pricing__list">
                <li>Block initials placed on front</li>
                <li>"Run²theRoar" stamped on back</li>
                <li>Standard finish</li>
                <li>Fits 1½" belt width</li>
              </ul>
            </div>
            <div className="buckle-pricing__item buckle-pricing__item--featured">
              <p className="eyebrow" style={{ color: 'var(--gold)' }}>Special Order</p>
              <div className="price-tag" style={{ fontSize: '2.8rem', marginTop: '12px' }}>$1,425</div>
              <div className="price-label">Custom specifications</div>
              <ul className="buckle-pricing__list">
                <li>Everything in Standard</li>
                <li>Custom design consultation</li>
                <li>Unique finish options</li>
                <li>Priority crafting time</li>
              </ul>
            </div>
            <div className="buckle-pricing__item">
              <p className="eyebrow" style={{ color: 'var(--steel-blue)' }}>Add Engraving</p>
              <div className="price-tag" style={{ fontSize: '2.8rem', marginTop: '12px' }}>+$50</div>
              <div className="price-label">Custom inscription on back</div>
              <ul className="buckle-pricing__list">
                <li>Any text up to 4 lines</li>
                <li>Bible verse, name, date, quote</li>
                <li>Shorter is more elegant</li>
                <li>Discussed on your order call</li>
              </ul>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/contact" className="btn-primary">Begin an Inquiry</Link>
          </div>
        </div>
      </section>

    </>
  );
}
