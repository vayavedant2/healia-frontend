"use client";

import { motion } from "framer-motion";
import {
  defaultViewport,
  fadeUp,
  staggerContainer,
  staggerItem,
} from "../../../lib/animations";
import { Container } from "../../ui/Container/Container";
import { RevealHeader } from "../../ui/Motion/RevealHeader";
import { RevealItem } from "../../ui/Motion/RevealItem";
import { Section } from "../../ui/Section/Section";
import styles from "./FinalCTASection.module.scss";

const MEMBERSHIP_HREF = "#included";
const CONSULTATION_HREF = "#experts";

function scrollToSection(
  event: React.MouseEvent<HTMLAnchorElement>,
  hash: string,
) {
  event.preventDefault();
  const id = hash.replace(/^#/, "");
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", hash);
    return;
  }

  window.location.hash = hash;
}

function CrownIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 18h16M6 18l1.2-8.4L12 11l4.8-1.4L18 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 9.5 8 6l4 2.5L16 6l1.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="m12 3.5 2.2 5.5 5.8.5-4.4 3.8 1.3 5.7L12 16.2l-5.9 2.8 1.3-5.7-4.4-3.8 5.8-.5L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CancelIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 9l6 6M15 9l-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 3.5 6 6v5.8c0 3.2 2.6 5.5 6 7.7 3.4-2.2 6-4.5 6-7.7V6l-6-2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FinalCTASection() {
  return (
    <Section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      padding="large"
      background="cream"
      className={styles.finalCta}
    >
      <Container>
        <div className={styles.shell}>
          <RevealHeader className={styles.header}>
            <RevealItem>
              <p className={styles.eyebrow}>(Start your journey)</p>
            </RevealItem>
            <RevealItem>
              <h2 id="final-cta-heading" className={styles.heading}>
                Today&apos;s choices define
                <br />
                <span className={styles.headingMuted}>tomorrow&apos;s health</span>
              </h2>
            </RevealItem>
          </RevealHeader>

          <motion.div
            className={styles.cardGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <motion.article
              className={styles.card}
              variants={staggerItem}
              aria-labelledby="final-cta-membership-title"
            >
              <div className={styles.cardTop}>
                <div className={styles.iconBlock} aria-hidden>
                  <CrownIcon />
                </div>
                <h3 id="final-cta-membership-title" className={styles.cardTitle}>
                  Your membership is more than a test.
                </h3>
              </div>
              <a
                href={MEMBERSHIP_HREF}
                className={`${styles.cardButton} ${styles.cardButtonAccent}`}
                onClick={(event) => scrollToSection(event, MEMBERSHIP_HREF)}
                aria-label="See what's included in your membership"
              >
                See what&apos;s included
              </a>
            </motion.article>

            <motion.article
              className={styles.card}
              variants={staggerItem}
              aria-labelledby="final-cta-consultation-title"
            >
              <div className={styles.cardTop}>
                <div className={styles.iconBlock} aria-hidden>
                  <StarIcon />
                </div>
                <h3
                  id="final-cta-consultation-title"
                  className={styles.cardTitle}
                >
                  Skip the confusion. Talk to a professional today.
                </h3>
              </div>
              <a
                href={CONSULTATION_HREF}
                className={`${styles.cardButton} ${styles.cardButtonDark}`}
                onClick={(event) => scrollToSection(event, CONSULTATION_HREF)}
                aria-label="Talk to a health expert"
              >
                Talk to a health expert
              </a>
            </motion.article>
          </motion.div>

          <motion.ul
            className={styles.trustRow}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            aria-label="Membership assurances"
          >
            <li className={styles.trustItem}>
              <span className={styles.trustIcon}>
                <CancelIcon />
              </span>
              <span>Cancel any time</span>
            </li>
            <li className={styles.trustItem}>
              <span className={styles.trustIcon}>
                <ShieldIcon />
              </span>
              <span>Secure payment</span>
            </li>
          </motion.ul>
        </div>
      </Container>
    </Section>
  );
}
