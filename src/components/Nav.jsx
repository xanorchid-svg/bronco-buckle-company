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
    <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav__logo-icon">
      <path d="M4 4 L4 32 L14 32 C19 32 22 29 22 25 C22 22 20 20 17.5 19 C19.5 18 21 16 21 13 C21 8.5 18 4 13 4 Z" fill="none" stroke="#b8924a" strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M4 19 L14 19" stroke="#b8924a" strokeWidth="2.2"/>
      <path d="M40 4 L40 32 L30 32 C25 32 22 29 22 25 C22 22 24 20 26.5 19 C24.5 18 23 16 23 13 C23 8.5 26 4 31 4 Z" fill="none" stroke="#b8924a" strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M40 19 L30 19" stroke="#b8924a" strokeWidth="2.2"/>
    </svg>
  );

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          {/* Hamburger — left on mobile */}
          <button
            className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>

          {/* Logo — center on mobile, left on desktop */}
          <Link to="/" className="nav__logo">
            <LogoIcon />
            <span className="nav__logo-text">
              <span className="nav__logo-name">Bronco Buckles</span>
              <span className="nav__logo-sub">Company</span>
            </span>
          </Link>

          {/* Desktop links */}
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

          {/* Spacer so logo stays centered on mobile when hamburger is left */}
          <div className="nav__spacer" />
        </div>
      </nav>

      {/* Mobile menu overlay — outside nav, z-index 9999 */}
      {menuOpen && (
        <div
          className="nav__mobile-overlay"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button top-right */}
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
