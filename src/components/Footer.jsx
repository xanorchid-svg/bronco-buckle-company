import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <svg width="54" height="44" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4 L4 32 L14 32 C19 32 22 29 22 25 C22 22 20 20 17.5 19 C19.5 18 21 16 21 13 C21 8.5 18 4 13 4 Z" fill="none" stroke="#b8924a" strokeWidth="2.2" strokeLinejoin="round"/>
                <path d="M4 19 L14 19" stroke="#b8924a" strokeWidth="2.2"/>
                <path d="M40 4 L40 32 L30 32 C25 32 22 29 22 25 C22 22 24 20 26.5 19 C24.5 18 23 16 23 13 C23 8.5 26 4 31 4 Z" fill="none" stroke="#b8924a" strokeWidth="2.2" strokeLinejoin="round"/>
                <path d="M40 19 L30 19" stroke="#b8924a" strokeWidth="2.2"/>
              </svg>
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
