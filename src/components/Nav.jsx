import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo-link" onClick={close}>
          <span className="nav__logo-pill">
            <img
              src="/bblogo.png"
              alt="Bronco Buckles"
              className="nav__logo"
            />
          </span>
        </Link>

        <nav className={`nav__links${open ? ' nav__links--open' : ''}`}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/the-buckle" onClick={close}>The Buckle</NavLink>
          <NavLink to="/the-belt" onClick={close}>The Belt</NavLink>
          <NavLink to="/run2theroar" onClick={close}>Run2theRoar</NavLink>
          <NavLink to="/our-story" onClick={close}>Our Story</NavLink>
          <NavLink to="/faq" onClick={close}>FAQ</NavLink>
          <NavLink to="/contact" onClick={close} className="nav__cta">Inquire</NavLink>
        </nav>

        <button
          className={`nav__burger${open ? ' nav__burger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && <div className="nav__backdrop" onClick={close} />}
    </header>
  );
}
