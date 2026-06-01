import Image from "next/image";
import { AnimatedCard } from "../../../ui/Motion/AnimatedCard";
import { MotionDiv } from "../../../ui/Motion/MotionDiv";
import { RevealItem } from "../../../ui/Motion/RevealItem";
import { A1cChart } from "./A1cChart";
import styles from "../BenefitsSection.module.scss";

export function HemoglobinCard() {
  return (
    <AnimatedCard className={`${styles.card} ${styles.cardHemoglobin}`}>
      <div className={styles.cardMedia} aria-hidden>
        <Image
          src="/images/benefits/hemoglobin.jpg"
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className={styles.cardImage}
        />
        <div className={styles.cardOverlayDark} />
      </div>

      <MotionDiv className={styles.cardBody}>
        <RevealItem className={styles.metricStack}>
          <span className={styles.metricValueAccent}>5.2%</span>
        </RevealItem>
        <RevealItem>
          <span className={styles.metricLabelLight}>Hemoglobin A1c</span>
        </RevealItem>

        <MotionDiv className={styles.glassPanel}>
          <RevealItem>
            <A1cChart className={styles.a1cChart} />
          </RevealItem>
          <RevealItem>
            <p className={styles.glassCaption}>
              Tracks long-term blood sugar management.
            </p>
          </RevealItem>
        </MotionDiv>
      </MotionDiv>
    </AnimatedCard>
  );
}
