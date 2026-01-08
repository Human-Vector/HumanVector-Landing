import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import { useScrollToForm } from '../../hooks/useScrollToForm';
import styles from './Navigation.module.css';

/**
 * Navigation Component
 * Header navigation with logo, links, and CTA button
 */
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToForm = useScrollToForm();

  const navLinks = [
    { label: 'The Solution', href: '#solution' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' }
  ];

  // Prevent body scroll when mobile menu is open and darken background for iOS liquid glass UI
  useEffect(() => {
    // Get or create theme-color meta tag
    let themeColorMeta = document.querySelector('meta[name="theme-color"]');
    const originalThemeColor = themeColorMeta?.getAttribute('content') || '#ffffff';

    if (!themeColorMeta) {
      themeColorMeta = document.createElement('meta');
      themeColorMeta.name = 'theme-color';
      document.head.appendChild(themeColorMeta);
    }

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.backgroundColor = '#1a2b32';
      document.body.style.backgroundColor = '#1a2b32';
      themeColorMeta.setAttribute('content', '#1a2b32');
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.backgroundColor = '';
      document.body.style.backgroundColor = '';
      themeColorMeta.setAttribute('content', originalThemeColor);
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.backgroundColor = '';
      document.body.style.backgroundColor = '';
      if (themeColorMeta) {
        themeColorMeta.setAttribute('content', originalThemeColor);
      }
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCtaClick = () => {
    setIsMenuOpen(false);
    scrollToForm();
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src="/images/hero/logo.png" alt="Human Vector" />
        </div>

        {/* Desktop Navigation Links */}
        <div className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.ctaButton}>
          <Button variant="secondary" size="medium" onClick={scrollToForm}>
            See how It works
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div className={styles.mobileMenuBackdrop} />
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuLinks}>
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.mobileMenuCta}>
            <Button variant="primary" size="large" onClick={handleCtaClick}>
              See how It works
            </Button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
