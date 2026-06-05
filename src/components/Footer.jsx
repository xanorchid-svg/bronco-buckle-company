import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__top-inner">
          <div className="footer__brand">
            <img
              src="/logo2_bb.png"
              alt="Bronco Buckle Company"
              className="footer__logo logo-on-dark"
            />
            <p className="footer__brand-name">Bronco Buckle Company</p>
            <p className="footer__tagline">Sterling Silver · Dallas, Texas</p>
          </div>
          <div className="footer__nav">
            <div className="footer__nav-col">
              <p className="footer__nav-heading">The Products</p>
              <ul>
                <li><Link to="/the-buckle">The Buckle</Link></li>
                <li><Link to="/the-belt">The Belt</Link></li>
                <li><Link to="/contact">Inquire</Link></li>
              </ul>
            </div>
            <div className="footer__nav-col">
              <p className="footer__nav-heading">The Brand</p>
              <ul>
                <li><Link to="/run2theroar">Run2theRoar</Link></li>
                <li><Link to="/our-story">Our Story</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>
            <div className="footer__nav-col">
              <p className="footer__nav-heading">Contact</p>
              <ul>
                <li><a href="tel:+12142065060">(214) 206-5060</a></li>
                <li><a href="mailto:Stocker@BroncoBuckleCompany.com">Stocker@BroncoBuckleCompany.com</a></li>
                <li>1901 N. Akard Street</li>
                <li>Dallas, Texas 75201</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Bronco Buckle Company. All rights reserved.</p>
          <p className="footer__credit">Dallas, Texas · Est. 2024</p>
        </div>
      </div>
    </footer>
  );
}
