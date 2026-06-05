import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import './PageStyles.css';
import './Run2theRoar.css';

const CDN = 'https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713';
const heroImg = `${CDN}/unsplash-image-367bjtF6fmw.jpg`;

export default function Run2theRoar() {
  return (
    <>
      <SEO
        title="Run2theRoar — Bronco Buckle Company"
        description="A quiet encouragement for the man who dresses with purpose. The story behind Run2theRoar, stamped on every Bronco Buckle."
        path="/run2theroar"
      />

      {/* ── HERO ── */}
      <section className="inner-hero r2r-hero">
        <div
          className="inner-hero__bg"
          style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: 'center 35%' }}
        />
        <div className="inner-hero__overlay" style={{ background: 'linear-gradient(180deg, rgba(22,36,58,0.4) 0%, rgba(22,36,58,0.65) 100%)' }} />
        <div className="inner-hero__content">
          <p className="eyebrow" style={{ color: 'var(--steel-blue-soft)' }}>On Every Buckle</p>
          <div className="gold-rule" />
          <h1 className="r2r-hero__title">
            Run<span className="r2r-numeral">2</span>theRoar
          </h1>
          {/* Updated subline — "encouragement" not "instruction" */}
          <p className="r2r-hero__sub">
            A quiet encouragement for the man who dresses with purpose.
          </p>
        </div>
      </section>

      {/* ── THE STORY ── */}
      <section className="section-light r2r-story">
        <div className="container">
          <div className="r2r-story__grid">
            <div className="r2r-story__text">
              <p className="eyebrow" style={{ color: 'var(--steel-blue-dim)' }}>The Parable</p>
              <div className="steel-rule" />
              <h2 style={{ color: 'var(--text-dark)', marginBottom: '28px' }}>
                What Does It Mean to Run Toward the Roar?
              </h2>
              <p style={{ color: 'var(--text-dark-mid)' }}>
                In the wild, a pride of lions hunts with division of labor. The older
                lions — slower, less agile — position themselves downwind and roar.
                The prey hears the roar and flees in the opposite direction — directly
                into the waiting young lions hidden in the tall grass.
              </p>
              <p style={{ color: 'var(--text-dark-mid)', marginTop: '16px' }}>
                The lesson is counterintuitive: run toward the roar. What seems like
                danger is often not the real threat. The thing that looks safe, the
                easy path away from fear — that is often where the real danger lies.
              </p>
              <p style={{ color: 'var(--text-dark-mid)', marginTop: '16px' }}>
                Run<span className="run2-numeral" style={{ color: 'var(--steel-blue-dim)' }}>2</span>theRoar
                is a quiet reminder stamped on the back of every buckle — a message
                between the craftsman and the man who wears it.
              </p>
            </div>
            <div className="r2r-story__aside">
              <div className="r2r-stamp-card">
                <p className="eyebrow" style={{ color: 'var(--steel-blue)', marginBottom: '12px' }}>
                  Stamped on the back of every buckle
                </p>
                <div className="r2r-stamp-display">
                  Run<span className="r2r-stamp-numeral">2</span>theRoar
                </div>
                <div className="gold-rule" style={{ margin: '20px 0' }} />
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Not printed. Not engraved digitally. Stamped by hand —
                  the way things were made to last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTENTION SECTION ── */}
      <section className="section-deep r2r-intention">
        <div className="container">
          <div className="r2r-intention__inner">
            <p className="eyebrow" style={{ color: 'var(--steel-blue)' }}>The Philosophy</p>
            <div className="gold-rule" />
            <h2 style={{ marginBottom: '24px' }}>
              Dress with Courage and Intention
            </h2>
            <p className="r2r-intention__body">
              The man who chooses a hand-crafted sterling silver buckle isn't making
              an impulsive purchase. He's making a statement about permanence — about
              preferring the thing built to last over the thing built to be replaced.
            </p>
            <p className="r2r-intention__body" style={{ marginTop: '16px' }}>
              That same disposition — choosing depth over convenience, quality over
              quantity, meaning over noise — is what Run<span className="run2-numeral">2</span>theRoar
              is about. It's not decoration. It's a quiet encouragement to carry into the day.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-card">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="eyebrow">Make It Yours</p>
          <div className="gold-rule" />
          <h2 style={{ marginBottom: '16px' }}>Carry the Message</h2>
          <p style={{ maxWidth: '480px', margin: '0 auto 32px', color: 'var(--text-secondary)' }}>
            Every Bronco Buckle carries Run<span className="run2-numeral">2</span>theRoar
            on its back. Add your own engraving to make it completely yours.
          </p>
          <Link to="/contact" className="btn-primary">Begin an Inquiry</Link>
        </div>
      </section>

    </>
  );
}
