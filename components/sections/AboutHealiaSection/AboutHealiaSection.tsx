"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  defaultViewport,
  staggerContainer,
  staggerItem,
} from "../../../lib/animations";
import buttonStyles from "../../ui/Button/Button.module.scss";
import { Container } from "../../ui/Container/Container";
import styles from "./AboutHealiaSection.module.scss";

const STATS = [
  { value: "5M", label: "Data points collected" },
  { value: "125+", label: "Annual lab tests" },
  { value: "5M", label: "Lab reports delivered" },
] as const;

function FlowerIcon() {
  return (
    <svg
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

export function AboutHealiaSection() {
  return (
    <section
      id="about-healia"
      className={styles.about}
      aria-labelledby="about-healia-heading"
    >
      <div className={styles.media}>
        <Image
          src="/images/about/background.jpg"
          alt=""
          fill
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <Container>
          <motion.div
            className={styles.stack}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <motion.p className={styles.eyebrow} variants={staggerItem}>
              (About Healia)
            </motion.p>

            <motion.h2
              id="about-healia-heading"
              className={styles.heading}
              variants={staggerItem}
            >
              We&apos;re redefining what it means to take charge of your health.
              Our approach is rooted in science, precision, and proactive care.
            </motion.h2>

            <motion.div
              className={styles.statsPanel}
              variants={staggerItem}
              role="list"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className={styles.stat} role="listitem">
                  <p className={styles.statValue}>{stat.value}</p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.p className={styles.body} variants={staggerItem}>
              We&apos;re not just another health service. We&apos;re a movement
              toward{" "}
              <span className={styles.bodyAccent}>
                proactive, preventative, and precision-driven wellness.
              </span>{" "}
              With access to 100+ advanced lab tests, expert medical guidance,
              and cutting-edge technology.
            </motion.p>

            <motion.div className={styles.ctaWrap} variants={staggerItem}>
              <Link
                href="/included"
                className={`${buttonStyles.button} ${buttonStyles["variant-primary"]} ${buttonStyles["size-lg"]} ${styles.cta}`}
              >
                <span className={buttonStyles.text}>See what&apos;s included</span>
                <span className={buttonStyles.icon}>
                  <FlowerIcon />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
