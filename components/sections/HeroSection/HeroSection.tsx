import Image from "next/image";
import Link from "next/link";
import { Container } from "../../ui/Container/Container";
import styles from "./HeroSection.module.scss";

function FlowerIcon() {
  return (
    <svg
      className={styles.ctaIcon}
      width="16"
      height="16"
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

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.media}>
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <Container>
          <div className={styles.contentGrid}>
            <div className={styles.copy}>
              <h1 id="hero-heading" className={styles.heading}>
                Cellular health,
                <br />
                Redefined
              </h1>
              <p className={styles.subheading}>
                From Testing to Action — Your Health, Simplified
              </p>
            </div>

            <div className={styles.cta}>
              <Link href="/included" className={styles.ctaButton}>
                <span>See what&apos;s included</span>
                <FlowerIcon />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
