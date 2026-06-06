import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <img
                src="/BB_logoe.svg"
                alt="BB"
                className="footer__logo-icon"
                style={{ height: '66px', width: 'auto', mixBlendMode: 'screen' }}
              />
              <div className="footer__logo-text">
                <span className="footer__logo-name">Bronco Buckles</span>
                <span className="footer__logo-company">Company</span>
              </div>
            </div>
            <p className="footer__tagline">Sterling Silver. Hand-Crafted. Dallas, Texas.</p>
            <p className="footer__motto">Run2theRoar</p>
          </div>

          <div className="footer__nav">
            <p className="overline" style={{ marginBottom: '1.2rem' }}>Navigate</p>
            <div className="footer__links">
              <Link to="/the-buckle">The Buckle</Link>
              <Link to="/the-belt">The Belt</Link>
              <Link to="/run2theroar">Run2theRoar</Link>
              <Link to="/our-story">Our Story</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Inquire</Link>
            </div>
          </div>

          <div className="footer__contact">
            <p className="overline" style={{ marginBottom: '1.2rem' }}>Contact</p>
            <div className="footer__contact-lines">
              <p>1901 N. Akard Street</p>
              <p>Dallas, Texas 75201</p>
              <a href="tel:2142065060">(214) 206-5060</a>
              <a href="mailto:Stocker@BroncoBuckleCompany.com">Stocker@BroncoBuckleCompany.com</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Bronco Buckles Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
