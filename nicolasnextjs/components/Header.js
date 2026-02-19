'use client';

import Image from 'next/image';
import { useEffect, useLayoutEffect, useState } from 'react';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#s3-urls' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ profileImageUrl = '' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoLoadFailed, setLogoLoadFailed] = useState(false);

  useEffect(() => {
    setLogoLoadFailed(false);
  }, [profileImageUrl]);

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
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
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
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
          {profileImageUrl && !logoLoadFailed ? (
            <Image
              src={profileImageUrl}
              alt="Nicolas Landscaping logo"
              width={32}
              height={32}
              className="logo-image"
              onError={() => setLogoLoadFailed(true)}
            />
          ) : (
            <span className="logo-mark">N</span>
          )}
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
