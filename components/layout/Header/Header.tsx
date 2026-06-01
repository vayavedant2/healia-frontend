"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { Container } from '../../ui/Container/Container';
import { NavigationItem } from '../../ui/NavigationItem/NavigationItem';
import { Button } from '../../ui/Button/Button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="5" r="4" fill="#ea8a64"/>
              <circle cx="12" cy="19" r="4" fill="#ea8a64"/>
              <circle cx="5" cy="12" r="4" fill="#ea8a64"/>
              <circle cx="19" cy="12" r="4" fill="#ea8a64"/>
            </svg>
            <span>Healia™</span>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            <NavigationItem href="/" isActive>Home</NavigationItem>
            <NavigationItem href="/about">About</NavigationItem>
            <NavigationItem href="/included">What&apos;s Included</NavigationItem>
            <NavigationItem href="/pages">Pages</NavigationItem>
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <Link href="/login" className={styles.loginLink}>Login</Link>
            <Button size="sm">Start testing</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={styles.mobileToggle} 
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}
