"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerItem } from "../../../lib/animations";
import type { RootCauseCategory } from "./categories";
import styles from "./RootCauseSection.module.scss";

interface HealthCategoryPillProps {
  category: RootCauseCategory;
  className?: string;
}

export function HealthCategoryPill({
  category,
  className = "",
}: HealthCategoryPillProps) {
  return (
    <motion.div
      className={`${styles.pill} ${className}`.trim()}
      variants={staggerItem}
    >
      <span className={styles.pillThumb}>
        <Image
          src={category.imageSrc}
          alt=""
          fill
          sizes="(max-width: 767px) 48px, 56px"
          className={styles.pillImage}
        />
      </span>
      <span className={styles.pillLabel}>{category.label}</span>
    </motion.div>
  );
}
