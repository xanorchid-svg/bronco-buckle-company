import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const touchStartY = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  function handleTouchStart(e) {
    touchStartY.current = e.touches[0].clientY;
  }

  function handleTouchEnd(e) {
    if (touchStartY.current === null) return;
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    if (diff > 50) setMenuOpen(false);
    touchStartY.current = null;
  }

  const links = [
    { to: '/the-buckle', label: 'The Buckle' },
    { to: '/the-belt', label: 'The Belt' },
    { to: '/run2theroar', label: 'Run2theRoar' },
    { to: '/our-story', label: 'Our Story' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Inquire' },
  ];

  const LogoIcon = () => (
    <img
      src="/BB_logoe.svg"
      alt="BB"
      className="nav__logo-icon"
      style={{ height: '51px', width: 'auto', mixBlendMode: 'screen' }}
    />
  );

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <button
            className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>

          <Link to="/" className="nav__logo">
            <LogoIcon />
            <span className="nav__logo-text">
              <span className="nav__logo-name">Bronco Buckles</span>
              <span className="nav__logo-sub">Company</span>
            </span>
          </Link>

          <div className="nav__links--desktop">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav__link ${location.pathname === link.to ? 'nav__link--active' : ''} ${link.to === '/contact' ? 'nav__link--cta' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav__spacer" />
        </div>
      </nav>

      {menuOpen && (
        <div
          className="nav__mobile-overlay"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="nav__mobile-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          <div className="nav__mobile-links">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav__mobile-link ${link.to === '/contact' ? 'nav__mobile-link--cta' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
