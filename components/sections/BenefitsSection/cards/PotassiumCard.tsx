import Image from "next/image";
import { AnimatedCard } from "../../../ui/Motion/AnimatedCard";
import { MotionDiv } from "../../../ui/Motion/MotionDiv";
import { RevealItem } from "../../../ui/Motion/RevealItem";
import styles from "../BenefitsSection.module.scss";

export function PotassiumCard() {
  return (
    <AnimatedCard className={`${styles.card} ${styles.cardPotassium}`}>
      <div className={styles.cardMedia} aria-hidden>
        <Image
          src="/images/benefits/potassium.jpg"
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className={styles.cardImage}
        />
        <div className={styles.cardOverlayLight} />
      </div>

      <MotionDiv className={styles.cardBody}>
        <RevealItem>
          <span className={styles.potassiumValue}>4.7</span>
        </RevealItem>
        <RevealItem>
          <span className={styles.potassiumUnit}>mmol/L Potassium (K+)</span>
        </RevealItem>
        <RevealItem>
          <p className={styles.potassiumDescription}>
            Vital for muscle, nerve, and heart activity.
          </p>
        </RevealItem>
      </MotionDiv>
    </AnimatedCard>
  );
}
