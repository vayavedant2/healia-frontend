"use client";

import { motion } from "framer-motion";
import {
  categoryGridReveal,
  defaultViewport,
  fadeUp,
  testimonialReveal,
} from "../../../lib/animations";
import { Container } from "../../ui/Container/Container";
import { RevealHeader } from "../../ui/Motion/RevealHeader";
import { RevealItem } from "../../ui/Motion/RevealItem";
import { Section } from "../../ui/Section/Section";
import { CategoryItem } from "./CategoryItem";
import { INCLUDED_CATEGORIES } from "./categories";
import styles from "./IncludedSection.module.scss";

export function IncludedSection() {
  return (
    <Section
      id="included"
      aria-labelledby="included-heading"
      padding="large"
      background="cream"
      className={styles.included}
    >
      <Container>
        <RevealHeader className={styles.header}>
          <RevealItem>
            <p className={styles.eyebrow}>(What&apos;s included)</p>
          </RevealItem>
          <RevealItem>
            <h2 id="included-heading" className={styles.heading}>
              What&apos;s included in your
              <br />
              <span className={styles.headingAccent}>health intelligence</span>
            </h2>
          </RevealItem>
        </RevealHeader>

        <motion.ul
          className={styles.grid}
          variants={categoryGridReveal}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {INCLUDED_CATEGORIES.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </motion.ul>

        <motion.blockquote
          className={styles.testimonial}
          variants={testimonialReveal}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.p className={styles.quote} variants={fadeUp}>
            &ldquo;I never understood my lab results before. Talking to an expert
            gave me clear answers and a plan I could follow.&rdquo;
          </motion.p>
          <motion.footer className={styles.author} variants={fadeUp}>
            James R. - Fitness trainer
          </motion.footer>
        </motion.blockquote>
      </Container>
    </Section>
  );
}
