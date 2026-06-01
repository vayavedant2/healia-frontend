"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { categoryItemReveal, fadeUp } from "../../../lib/animations";
import type { IncludedCategory } from "./categories";
import styles from "./IncludedSection.module.scss";

interface CategoryItemProps {
  category: IncludedCategory;
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <motion.li
      className={styles.item}
      variants={categoryItemReveal}
    >
      <motion.div className={styles.circle} variants={fadeUp}>
        <Image
          src={category.imageSrc}
          alt=""
          fill
          sizes="(max-width: 767px) 42vw, (max-width: 1023px) 22vw, 15vw"
          className={styles.circleBg}
        />
        <div className={styles.iconSquare}>
          <Image
            src={category.imageSrc}
            alt=""
            fill
            sizes="(max-width: 767px) 18vw, (max-width: 1023px) 10vw, 7vw"
            className={styles.iconImage}
          />
        </div>
      </motion.div>
      <motion.p className={styles.label} variants={fadeUp}>
        {category.label}
      </motion.p>
    </motion.li>
  );
}
