"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  cardReveal,
  categoryGridReveal,
  defaultViewport,
  fadeUp,
  staggerContainer,
  staggerItem,
} from "../../../lib/animations";
import buttonStyles from "../../ui/Button/Button.module.scss";
import { Container } from "../../ui/Container/Container";
import { Section } from "../../ui/Section/Section";
import {
  LEFT_COLUMN_CATEGORIES,
  RIGHT_COLUMN_CATEGORIES,
  ROOT_CAUSE_CATEGORIES,
  type RootCauseCategory,
} from "./categories";
import { HealthCategoryPill } from "./HealthCategoryPill";
import styles from "./RootCauseSection.module.scss";

const FEATURES = [
  {
    id: "proactive-care",
    title: "Proactive care",
    description: "Catch imbalances before they become conditions.",
    Icon: ProactiveCareIcon,
  },
  {
    id: "actionable-guidance",
    title: "Actionable guidance",
    description: "Receive clear steps tailored to your unique biology.",
    Icon: ActionableGuidanceIcon,
  },
] as const;

const METRICS = [
  {
    id: "lab-reports",
    value: "2X",
    label: "Lab reports delivered annually",
  },
  {
    id: "progress-tracking",
    value: "6-month",
    label: "Progress tracking intervals",
  },
] as const;

type MobilePillGroup =
  | { type: "single"; category: RootCauseCategory }
  | { type: "pair"; categories: [RootCauseCategory, RootCauseCategory] };

function getCategory(id: string): RootCauseCategory {
  const category = ROOT_CAUSE_CATEGORIES.find((item) => item.id === id);
  if (!category) {
    throw new Error(`Unknown category: ${id}`);
  }
  return category;
}

const MOBILE_PILL_GROUPS: MobilePillGroup[] = [
  { type: "single", category: getCategory("heart-health") },
  { type: "single", category: getCategory("bone-joint-health") },
  { type: "single", category: getCategory("skin-hair-health") },
  { type: "single", category: getCategory("heavy-metal-burden") },
  { type: "single", category: getCategory("sleep-recovery") },
  { type: "single", category: getCategory("male-hormones") },
  { type: "single", category: getCategory("female-hormones") },
  {
    type: "pair",
    categories: [getCategory("toxin-testing"), getCategory("stress")],
  },
  {
    type: "pair",
    categories: [getCategory("gut-health"), getCategory("aging-longevity")],
  },
  { type: "single", category: getCategory("immune-health") },
];

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

function HealiaMarkIcon() {
  return (
    <svg
      className={styles.metricsLogo}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="5" r="3.25" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="12" cy="19" r="3.25" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="5" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="19" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function ProactiveCareIcon() {
  return (
    <svg
      className={styles.featureIcon}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8.5 16.5c-1.2-2.1-.5-4.8 1.6-6.1 1.4-.8 3.1-.8 4.4 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 18.5 14 21l4-2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8.5c2.2 0 4 1.8 4 4 0 1.5-.8 2.8-2 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.5 12.5c.8-1.2 2.4-1.6 3.6-.8 1.2.8 1.5 2.4.7 3.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ActionableGuidanceIcon() {
  return (
    <svg
      className={styles.featureIcon}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M7.5 14.5c1.2-1.2 2.6-2 4.2-2.3M20.5 14.5c-1.2-1.2-2.6-2-4.2-2.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 11.5 7 9.5M19 11.5l2-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.5 17.5 8.5 19.5M17.5 17.5l2 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11 14.5h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RootCauseSection() {
  return (
    <Section
      id="root-cause"
      aria-labelledby="root-cause-heading"
      padding="large"
      background="cream"
      className={styles.rootCause}
    >
      <Container>
        <div className={styles.layout}>
          <motion.div
            className={styles.content}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <motion.h2
              id="root-cause-heading"
              className={styles.heading}
              variants={staggerItem}
            >
              <span className={styles.headingPrimary}>Connecting</span>
              <br />
              <span className={styles.headingAccent}>symptoms to science</span>
            </motion.h2>

            <motion.p className={styles.lead} variants={staggerItem}>
              We investigate them at their root, combining advanced lab
              diagnostics with clinical expertise to bring you clarity.
            </motion.p>

            <motion.div className={styles.whyBlock} variants={staggerItem}>
              <p className={styles.whyLabel}>Why this matters:</p>
              <div className={styles.features}>
                {FEATURES.map((feature) => (
                  <article key={feature.id} className={styles.feature}>
                    <feature.Icon />
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureText}>{feature.description}</p>
                  </article>
                ))}
              </div>
            </motion.div>

            <motion.div className={styles.ctaWrap} variants={staggerItem}>
              <Link
                href="/about"
                className={`${buttonStyles.button} ${buttonStyles["variant-primary"]} ${buttonStyles["size-lg"]} ${styles.cta}`}
              >
                <span className={buttonStyles.text}>More about us</span>
                <span className={buttonStyles.icon}>
                  <FlowerIcon />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.aside
            className={styles.card}
            variants={cardReveal}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            aria-labelledby="root-cause-card-heading"
          >
            <motion.h3
              id="root-cause-card-heading"
              className={styles.cardTitle}
              variants={fadeUp}
            >
              Decoding the story your body tells
            </motion.h3>

            <motion.div
              className={styles.pillsMobile}
              variants={categoryGridReveal}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              {MOBILE_PILL_GROUPS.map((group) =>
                group.type === "single" ? (
                  <HealthCategoryPill
                    key={group.category.id}
                    category={group.category}
                  />
                ) : (
                  <div key={group.categories[0].id} className={styles.pillRow}>
                    <HealthCategoryPill category={group.categories[0]} />
                    <HealthCategoryPill category={group.categories[1]} />
                  </div>
                ),
              )}
            </motion.div>

            <motion.div
              className={styles.pillsDesktop}
              variants={categoryGridReveal}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <div className={styles.pillColumn}>
                {LEFT_COLUMN_CATEGORIES.map((category) => (
                  <HealthCategoryPill key={category.id} category={category} />
                ))}
              </div>
              <div className={`${styles.pillColumn} ${styles.pillColumnRight}`}>
                {RIGHT_COLUMN_CATEGORIES.map((category) => (
                  <HealthCategoryPill key={category.id} category={category} />
                ))}
              </div>
            </motion.div>
          </motion.aside>
        </div>

        <motion.div
          className={styles.metrics}
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          role="list"
        >
          <div className={styles.metric} role="listitem">
            <p className={styles.metricValue}>{METRICS[0].value}</p>
            <p className={styles.metricLabel}>{METRICS[0].label}</p>
          </div>
          <div className={styles.metricLogo} aria-hidden="true">
            <HealiaMarkIcon />
          </div>
          <div className={styles.metric} role="listitem">
            <p className={styles.metricValue}>{METRICS[1].value}</p>
            <p className={styles.metricLabel}>{METRICS[1].label}</p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
