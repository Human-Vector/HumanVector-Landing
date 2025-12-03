import React, { useState } from 'react';
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <div className={styles.mobileMenu}>
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
      )}
    </nav>
  );
};

export default Navigation;
