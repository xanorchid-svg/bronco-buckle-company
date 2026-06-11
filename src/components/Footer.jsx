import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="footer__logo-pill">
            <img
              src="/bblogo.png"
              alt="Bronco Buckles"
              className="footer__logo"
            />
          </span>
          <p className="footer__tagline">Sterling Silver · Dallas, Texas</p>
        </div>

        <nav className="footer__nav">
          <Link to="/the-buckle">The Buckle</Link>
          <Link to="/the-belt">The Belt</Link>
          <Link to="/run2theroar">Run2theRoar</Link>
          <Link to="/our-story">Our Story</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Inquire</Link>
        </nav>

        <p className="footer__copy">
          © {new Date().getFullYear()} Bronco Buckles Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
