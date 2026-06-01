import Image from "next/image";
import { AnimatedCard } from "../../../ui/Motion/AnimatedCard";
import { MotionDiv } from "../../../ui/Motion/MotionDiv";
import { RevealItem } from "../../../ui/Motion/RevealItem";
import { ThyroxineChart } from "./ThyroxineChart";
import styles from "../BenefitsSection.module.scss";

export function BloodPressureCard() {
  return (
    <AnimatedCard className={`${styles.card} ${styles.cardBloodPressure}`}>
      <div className={styles.cardMedia} aria-hidden>
        <Image
          src="/images/benefits/blood-pressure.jpg"
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className={`${styles.cardImage} ${styles.cardImageBlur}`}
        />
        <div className={styles.cardOverlayWarm} />
      </div>

      <MotionDiv className={styles.cardBody}>
        <RevealItem className={styles.bpMetric}>
          <span className={styles.bpValue}>110/70 mmHg</span>
          <span className={styles.bpLabel}>blood pressure</span>
        </RevealItem>

        <MotionDiv className={styles.bpVisuals}>
          <RevealItem className={styles.bpColumn}>
            <span className={styles.bpConnector} aria-hidden />
            <div className={styles.circleThumb}>
              <Image
                src="/images/benefits/cell.jpg"
                alt=""
                width={56}
                height={56}
                className={styles.circleImage}
              />
            </div>
          </RevealItem>

          <RevealItem className={styles.bpColumn}>
            <div className={styles.circleThumb}>
              <Image
                src="/images/benefits/profile.jpg"
                alt=""
                width={56}
                height={56}
                className={styles.circleImage}
              />
            </div>
            <span className={styles.bpConnector} aria-hidden />
          </RevealItem>

          <RevealItem className={styles.thyroxineMetric}>
            <span className={styles.bpValue}>1.2 ng/dL</span>
            <span className={styles.bpLabel}>Thyroxine</span>
          </RevealItem>
        </MotionDiv>

        <RevealItem className={styles.chartBottom}>
          <ThyroxineChart className={styles.thyroxineChart} />
        </RevealItem>
      </MotionDiv>
    </AnimatedCard>
  );
}
