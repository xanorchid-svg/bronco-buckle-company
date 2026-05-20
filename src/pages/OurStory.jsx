import { Link } from 'react-router-dom';
import './PageStyles.css';

export default function OurStory() {
  return (
    <div className="page inner-page">
      <div className="inner-hero">
        <div className="inner-hero__bg">
          <img
            src="https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/4b221421-a6d2-49ff-9e46-55b8a166ea8f/bronson-boys.jpg"
            alt="The Bronson Boys"
          />
          <div className="inner-hero__overlay" />
        </div>
        <div className="inner-hero__content container">
          <p className="overline">Dallas, Texas · Est. 2024</p>
          <h1 className="display">Our Story</h1>
        </div>
      </div>

      <div className="section container">
        <div className="story-body">

          <div className="story-founding">
            <div className="story-founding__text">
              <p className="overline">The Beginning</p>
              <h2 className="headline">A father and his two sons.</h2>
              <div className="divider" />
              <p className="body-text">
                Bronco Buckles Company was founded in 2024 by a father and his two sons.
                With a great idea and indefatigable energy, they set out to make something
                worth making — a belt buckle that could hold its own in any room, on any
                occasion, for any man who cared to wear it with intention.
              </p>
              <p className="body-text" style={{ marginTop: '1rem' }}>
                The inspiration came from the Kalo Silver Shop — the leading silversmith of
                early 20th century Chicago. The craft, the elegance, the refusal to cut
                corners. That's the lineage Bronco Buckles was born from.
              </p>
            </div>
            <div className="story-founding__image">
              <img
                src="https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/4b221421-a6d2-49ff-9e46-55b8a166ea8f/bronson-boys.jpg"
                alt="The founding family"
              />
            </div>
          </div>

          <div className="story-guarantee">
            <p className="overline">Our Promise</p>
            <h2 className="headline" style={{ marginTop: '0.5rem' }}>We keep your pants on.</h2>
            <div className="divider" />
            <p className="body-text">
              It is our belief that in a man's wardrobe, nothing is more important than a
              functioning belt and buckle. They keep his pants on. So accordingly, Bronco
              Buckle Company provides a 100% guarantee that our buckles and belts will do
              exactly that.
            </p>
            <p className="body-text" style={{ marginTop: '1rem' }}>
              Beyond the guarantee, we stand behind the craftsmanship, the materials, and
              the experience of working with us. We're a small company. We pick up the phone.
              We'll guide you from first question to finished piece.
            </p>
          </div>

          <div className="story-contact-strip">
            <div>
              <p className="overline">Reach Us</p>
              <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <p className="body-text">1901 N. Akard Street, Dallas, Texas 75201</p>
                <a href="tel:2142065060" className="body-text story-link">(214) 206-5060</a>
                <a href="mailto:Stocker@BroncoBuckleCompany.com" className="body-text story-link">Stocker@BroncoBuckleCompany.com</a>
              </div>
            </div>
            <Link to="/contact" className="btn">
              <span>Get In Touch</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
