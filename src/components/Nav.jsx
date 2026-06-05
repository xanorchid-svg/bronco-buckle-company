import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { to: '/',             label: 'Home' },
    { to: '/the-buckle',   label: 'The Buckle' },
    { to: '/the-belt',     label: 'The Belt' },
    { to: '/run2theroar',  label: 'Run2theRoar' },
    { to: '/our-story',    label: 'Our Story' },
    { to: '/faq',          label: 'FAQ' },
    { to: '/contact',      label: 'Inquire' },
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">

          {/* Desktop left links */}
          <ul className="nav__links nav__links--left">
            {navLinks.slice(0, 3).map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`nav__link ${location.pathname === link.to ? 'nav__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Center logo */}
          <Link to="/" className="nav__logo-wrap" aria-label="Bronco Buckle Company Home">
            <img
              src="/logo2_bb.png"
              alt="Bronco Buckle Company"
              className="nav__logo logo-on-dark"
            />
          </Link>

          {/* Desktop right links */}
          <ul className="nav__links nav__links--right">
            {navLinks.slice(3).map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`nav__link ${link.to === '/contact' ? 'nav__link--cta' : ''} ${location.pathname === link.to ? 'nav__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>

        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`nav__mobile-overlay ${menuOpen ? 'nav__mobile-overlay--open' : ''}`}>
        <div className="nav__mobile-top">
          <Link to="/" className="nav__logo-wrap" aria-label="Home">
            <img src="/logo2_bb.png" alt="Bronco Buckle Company" className="nav__logo logo-on-dark" />
          </Link>
          <button
            className="nav__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >✕</button>
        </div>
        <ul className="nav__mobile-links">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`nav__mobile-link ${location.pathname === link.to ? 'nav__mobile-link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav__mobile-footer">
          <p>Dallas, Texas · Est. 2024</p>
        </div>
      </div>
    </>
  );
}
