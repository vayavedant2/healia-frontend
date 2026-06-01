import Link from 'next/link';
import styles from './Footer.module.scss';
import { Container } from '../../ui/Container/Container';

const NAV_COLUMN_1 = [
  { label: 'Home', href: '/' },
  { label: 'Home 2', href: '/home-2', isActive: true },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: "What's Included", href: '/included' },
] as const;

const NAV_COLUMN_2 = [
  { label: 'List Of Labs', href: '/labs' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
] as const;

const NAV_COLUMN_3 = [
  { label: 'Style Guide', href: '/style-guide' },
  { label: 'Instructions', href: '/instructions' },
  { label: 'Licenses', href: '/licenses' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Error 404', href: '/404' },
  { label: 'Password Protected', href: '/password' },
] as const;

const MOBILE_NAV_LEFT = [...NAV_COLUMN_1, ...NAV_COLUMN_3];
const MOBILE_NAV_RIGHT = [...NAV_COLUMN_2];

function HealiaLogo() {
  return (
    <svg
      className={styles.logoIcon}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="5" r="4" fill="currentColor" />
      <circle cx="12" cy="19" r="4" fill="currentColor" />
      <circle cx="5" cy="12" r="4" fill="currentColor" />
      <circle cx="19" cy="12" r="4" fill="currentColor" />
    </svg>
  );
}

function NavColumn({
  links,
  className,
}: {
  links: readonly { label: string; href: string; isActive?: boolean }[];
  className?: string;
}) {
  return (
    <ul className={`${styles.navColumn} ${className ?? ''}`}>
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className={link.isActive ? styles.navLinkActive : styles.navLink}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SocialIconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SocialIconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function SocialIconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 012.063-2.063 2.062 2.062 0 012.063 2.065 2.062 2.062 0 01-2.063 2.063zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <section className={styles.topSection} aria-label="Newsletter and navigation">
            <div className={styles.ctaSection}>
              <h2 className={styles.heading}>Stay ahead of your health journey</h2>
              <p className={styles.subtext}>
                Get expert tips, health insights, and the latest in longevity science delivered
                monthly.
              </p>

              <form className={styles.subscribeForm} action="#" method="post">
                <label htmlFor="footer-email" className={styles.visuallyHidden}>
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={styles.emailInput}
                  autoComplete="email"
                />
                <button type="submit" className={styles.subscribeButton}>
                  Subscribe
                </button>
              </form>

              <div className={styles.socialRow} aria-label="Social media">
                <a href="https://x.com" className={styles.socialLink} aria-label="X (Twitter)">
                  <SocialIconX />
                </a>
                <a href="https://instagram.com" className={styles.socialLink} aria-label="Instagram">
                  <SocialIconInstagram />
                </a>
                <a href="https://linkedin.com" className={styles.socialLink} aria-label="LinkedIn">
                  <SocialIconLinkedIn />
                </a>
              </div>
            </div>

            <nav className={styles.navPanel} aria-label="Footer navigation">
              <div className={styles.navColumnsMobile}>
                <NavColumn links={MOBILE_NAV_LEFT} />
                <NavColumn links={MOBILE_NAV_RIGHT} />
              </div>
              <div className={styles.navColumnsDesktop}>
                <NavColumn links={NAV_COLUMN_1} />
                <NavColumn links={NAV_COLUMN_2} />
                <NavColumn links={NAV_COLUMN_3} />
              </div>
            </nav>
          </section>

          <section className={styles.brandRow} aria-label="Branding">
            <Link href="/" className={styles.logoBlock}>
              <HealiaLogo />
              <span className={styles.logoText}>Healia™</span>
            </Link>
            <p className={styles.credits}>
              Designed by{' '}
              <a href="https://webestica.com" target="_blank" rel="noopener noreferrer">
                Webestica
              </a>
              , Powered by{' '}
              <a href="https://webflow.com" target="_blank" rel="noopener noreferrer">
                Webflow
              </a>
            </p>
          </section>

          <p className={styles.disclaimer}>
            *Membership also includes ongoing access to personalized dashboards, biomarker
            tracking, and physician-reviewed insights at no extra cost. For members in regulated
            states, Healia Health remains committed to transparency and ensures that any
            additional fees are clearly communicated prior to testing.
          </p>
        </div>
      </Container>
    </footer>
  );
}
