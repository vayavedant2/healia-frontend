"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { defaultViewport, staggerContainer } from "../../../../lib/animations";
import { AnimatedCard } from "../../../ui/Motion/AnimatedCard";
import { RevealItem } from "../../../ui/Motion/RevealItem";
import styles from "../BenefitsSection.module.scss";

const PILLS = ["0.4 – 4.0 µIU/mL", "Energy levels", "Stable metabolism"];

export function ThyroidCard() {
  return (
    <AnimatedCard className={`${styles.card} ${styles.cardThyroid}`}>
      <div className={styles.cardMedia} aria-hidden>
        <Image
          src="/images/benefits/thyroid.jpg"
          alt=""
          fill
          priority={false}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className={styles.cardImage}
        />
      </div>

      <motion.div
        className={`${styles.cardBody} ${styles.cardThyroidContent}`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <RevealItem>
          <p className={styles.thyroidMetric}>
            <span className={styles.metricValueAccent}>21</span>
            <span> µIU/mL thyroid</span>
          </p>
        </RevealItem>
        <RevealItem>
          <p className={styles.thyroidSubtitle}>Stimulating Hormone (TSH)</p>
        </RevealItem>

        <motion.div className={styles.pillRow}>
          {PILLS.map((pill) => (
            <RevealItem key={pill}>
              <span className={styles.pill}>{pill}</span>
            </RevealItem>
          ))}
        </motion.div>
      </motion.div>
    </AnimatedCard>
  );
}
