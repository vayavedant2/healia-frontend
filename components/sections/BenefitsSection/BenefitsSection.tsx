"use client";

import { Container } from "../../ui/Container/Container";
import { RevealHeader } from "../../ui/Motion/RevealHeader";
import { RevealItem } from "../../ui/Motion/RevealItem";
import { Section } from "../../ui/Section/Section";
import { BloodPressureCard } from "./cards/BloodPressureCard";
import { HemoglobinCard } from "./cards/HemoglobinCard";
import { PotassiumCard } from "./cards/PotassiumCard";
import { ThyroidCard } from "./cards/ThyroidCard";
import styles from "./BenefitsSection.module.scss";

export function BenefitsSection() {
  return (
    <Section
      id="benefits"
      aria-labelledby="benefits-heading"
      padding="large"
      background="cream"
      className={styles.benefits}
    >
      <Container>
        <RevealHeader className={styles.header}>
          <RevealItem>
            <h2 id="benefits-heading" className={styles.heading}>
              Be in control of your
              <br />
              <span className={styles.headingAccent}>health future</span>
            </h2>
          </RevealItem>
          <RevealItem>
            <p className={styles.supporting}>
              We&apos;re guided by an esteemed panel of physicians and scientists
              who bring decades of expertise in clinical practice.
            </p>
          </RevealItem>
        </RevealHeader>

        <div className={styles.grid}>
          <HemoglobinCard />
          <ThyroidCard />
          <BloodPressureCard />
          <PotassiumCard />
        </div>
      </Container>
    </Section>
  );
}
