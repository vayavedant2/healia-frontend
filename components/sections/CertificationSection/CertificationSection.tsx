"use client";

import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  categoryGridReveal,
  certificationBannerBgReveal,
  certificationBannerDescReveal,
  certificationBannerHeadingReveal,
  certificationBannerReveal,
  certificationCtaReveal,
  certificationPillsReveal,
  defaultViewport,
  staggerItem,
} from "../../../lib/animations";
import buttonStyles from "../../ui/Button/Button.module.scss";
import { Container } from "../../ui/Container/Container";
import { RevealHeader } from "../../ui/Motion/RevealHeader";
import { RevealItem } from "../../ui/Motion/RevealItem";
import styles from "./CertificationSection.module.scss";

const CERTIFICATIONS = [
  {
    id: "iso",
    label: "ISO 15189 Certified",
    iconSrc: "/images/certification/iso-certified.svg",
  },
  {
    id: "fda",
    label: "FDA Registered",
    iconSrc: "/images/certification/fda-registered.svg",
  },
  {
    id: "clia",
    label: "Certified by CLIA",
    iconSrc: "/images/certification/clia-certified.svg",
  },
] as const;

const FEATURE_PILLS = [
  {
    id: "lab-testing",
    label: "Comprehensive lab testing",
    iconSrc: "/images/certification/lab-testing.svg",
    iconSize: 40,
  },
  {
    id: "health-alerts",
    label: "Preventive health alerts",
    iconSrc: "/images/certification/preventive-alerts.svg",
    iconSize: 30,
  },
] as const;

const pillItemReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

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

export function CertificationSection() {
  const bannerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      id="certification"
      className={styles.section}
      aria-labelledby="certification-heading"
    >
      <div className={styles.certArea}>
        <Container>
          <div className={styles.certGrid}>
            <RevealHeader className={styles.certHeader}>
              <RevealItem>
                <p className={styles.eyebrow}>(Certificate)</p>
              </RevealItem>
              <RevealItem>
                <h2 id="certification-heading" className={styles.heading}>
                  Certified by leading
                  <br />
                  <span className={styles.headingMuted}>authorities</span>
                </h2>
              </RevealItem>
            </RevealHeader>

            <motion.ul
              className={styles.badges}
              variants={categoryGridReveal}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              {CERTIFICATIONS.map((cert) => (
                <motion.li
                  key={cert.id}
                  className={styles.badgeItem}
                  variants={staggerItem}
                >
                  <article className={styles.badge}>
                    <div className={styles.badgeIconWrap}>
                      <Image
                        src={cert.iconSrc}
                        alt=""
                        width={60}
                        height={60}
                        className={styles.badgeIcon}
                      />
                    </div>
                    <p className={styles.badgeLabel}>{cert.label}</p>
                  </article>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </Container>
      </div>

      <article
        ref={bannerRef}
        className={styles.banner}
        aria-labelledby="technology-cta-heading"
      >
        <motion.div
          className={styles.bannerMedia}
          variants={certificationBannerBgReveal}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div className={styles.bannerImageWrap}>
            <motion.div className={styles.bannerImageParallax} style={{ y: parallaxY }}>
              <Image
                src="/images/certification/technology-banner.jpg"
                alt=""
                fill
                sizes="100vw"
                className={styles.bannerImage}
              />
            </motion.div>
          </div>
          <div className={styles.bannerOverlay} aria-hidden="true" />
        </motion.div>

        <div className={styles.bannerContent}>
          <Container>
            <motion.div
              className={styles.bannerGrid}
              variants={certificationBannerReveal}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.div className={styles.bannerCopy}>
                <motion.h3
                  id="technology-cta-heading"
                  className={styles.bannerHeading}
                  variants={certificationBannerHeadingReveal}
                >
                  <span className={styles.bannerHeadingDesktop}>
                    <span className={styles.bannerHeadingPrimary}>
                      Advanced technology meets
                    </span>{" "}
                    <span className={styles.bannerHeadingAccent}>
                      personalized care for better outcomes
                    </span>
                  </span>
                  <span className={styles.bannerHeadingMobile}>
                    <span className={styles.bannerHeadingLine}>
                      Advanced technology
                    </span>
                    <span className={styles.bannerHeadingLine}>
                      meets{" "}
                      <span className={styles.bannerHeadingAccent}>
                        personalized
                      </span>
                    </span>
                    <span
                      className={`${styles.bannerHeadingLine} ${styles.bannerHeadingAccent}`}
                    >
                      care for better
                    </span>
                    <span
                      className={`${styles.bannerHeadingLine} ${styles.bannerHeadingAccent}`}
                    >
                      outcomes
                    </span>
                  </span>
                </motion.h3>

                <motion.p
                  className={styles.bannerDescription}
                  variants={certificationBannerDescReveal}
                >
                  Our platform brings together advanced testing, real-time
                  insights, and expert guidance to make proactive health
                  management
                </motion.p>

                <motion.ul
                  className={styles.featurePills}
                  variants={certificationPillsReveal}
                >
                  {FEATURE_PILLS.map((pill) => (
                    <motion.li
                      key={pill.id}
                      className={styles.featurePillItem}
                      variants={pillItemReveal}
                    >
                      <div className={styles.featurePill}>
                        <Image
                          src={pill.iconSrc}
                          alt=""
                          width={pill.iconSize}
                          height={pill.iconSize}
                          className={styles.pillIcon}
                        />
                        <span className={styles.featurePillLabel}>
                          {pill.label}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                className={styles.bannerCta}
                variants={certificationCtaReveal}
              >
                <Link
                  href="/included"
                  className={`${buttonStyles.button} ${buttonStyles["variant-primary"]} ${buttonStyles["size-lg"]} ${styles.joinButton}`}
                >
                  <span className={buttonStyles.text}>Join Healia</span>
                  <span className={buttonStyles.icon}>
                    <FlowerIcon />
                  </span>
                </Link>
                <p className={styles.securityText}>HIPAA-compliant security</p>
              </motion.div>
            </motion.div>
          </Container>
        </div>
      </article>
    </section>
  );
}
