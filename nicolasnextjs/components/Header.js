'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#s3-urls' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    const onScroll = () => {
      setIsVisible(window.scrollY > 40);
    };

    window.addEventListener('keydown', onEscape);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('keydown', onEscape);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className={`site-header ${isVisible ? 'visible' : ''}`}>
      <div className="header-shell">
        <button
          type="button"
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <a href="#top" className="header-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-mark">N</span>
          <span className="logo-text">Nicolas Landscaping</span>
        </a>

        <a className="rating-pill" href="#contact">
          <span className="rating-stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span className="rating-value">4.9</span>
        </a>
      </div>

      <nav className={`mobile-menu ${menuOpen ? 'show' : ''}`} aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
