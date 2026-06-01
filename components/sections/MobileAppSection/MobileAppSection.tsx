"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  categoryGridReveal,
  defaultViewport,
  floatLabelReveal,
  mobileAppContentReveal,
  phoneReveal,
  sectionFade,
  staggerItem,
} from "../../../lib/animations";
import { Container } from "../../ui/Container/Container";
import { Section } from "../../ui/Section/Section";
import { FLOATING_LABELS, type FloatingLabelPosition } from "./labels";
import styles from "./MobileAppSection.module.scss";

const APP_STORE_URL = "https://apps.apple.com/";
const GOOGLE_PLAY_URL = "https://play.google.com/store";

const LABEL_POSITION_CLASS: Record<FloatingLabelPosition, string> = {
  thyroid: styles.labelThyroid,
  heartOne: styles.labelHeartOne,
  heartTwo: styles.labelHeartTwo,
  aging: styles.labelAging,
  metabolic: styles.labelMetabolic,
  hormone: styles.labelHormone,
  sleep: styles.labelSleep,
};

export function MobileAppSection() {
  return (
    <Section
      id="mobile-app"
      aria-labelledby="mobile-app-heading"
      padding="large"
      className={styles.mobileApp}
    >
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <Container>
        <motion.div
          className={styles.inner}
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div
            className={styles.visualStage}
            variants={{ hidden: {}, visible: {} }}
          >
            <motion.div
              className={styles.labelsLayer}
              variants={categoryGridReveal}
            >
              {FLOATING_LABELS.map((item) => (
                <motion.div
                  key={item.id}
                  className={`${styles.label} ${LABEL_POSITION_CLASS[item.position]}`}
                  variants={floatLabelReveal}
                >
                  <span className={styles.labelThumb}>
                    <Image
                      src={item.imageSrc}
                      alt=""
                      fill
                      sizes="72px"
                      className={styles.labelImage}
                    />
                  </span>
                  <span className={styles.labelText}>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className={styles.phoneLayer} variants={phoneReveal}>
              <div className={styles.phoneImageWrap}>
                <Image
                  src="/images/mobile-app/phone-hand.png"
                  alt="Healia mobile app shown on a smartphone held in hand"
                  width={559}
                  height={700}
                  sizes="(max-width: 767px) 70vw, (max-width: 1023px) 56vw, 22.5rem"
                  className={styles.phoneImage}
                />
                <div className={styles.phoneWristBlur} aria-hidden="true">
                  <Image
                    src="/images/mobile-app/phone-hand.png"
                    alt=""
                    width={559}
                    height={700}
                    sizes="(max-width: 767px) 70vw, (max-width: 1023px) 56vw, 22.5rem"
                    className={styles.phoneWristBlurImage}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className={styles.content} variants={mobileAppContentReveal}>
            <motion.div variants={staggerItem}>
              <h2 id="mobile-app-heading" className={styles.heading}>
                Expert medical guidance in the{" "}
                <span className={styles.headingAccent}>palm of your hand</span>
              </h2>
            </motion.div>

            <motion.p className={styles.subtext} variants={staggerItem}>
              Available now on iOS and Android
            </motion.p>

            <motion.div className={styles.storeButtons} variants={staggerItem}>
              <Link
                href={APP_STORE_URL}
                className={styles.storeButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/mobile-app/app-store.svg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.storeIcon}
                />
                <span className={styles.storeCopy}>
                  <span className={styles.storeEyebrow}>Download on the</span>
                  <span className={styles.storeTitle}>App Store</span>
                </span>
              </Link>

              <Link
                href={GOOGLE_PLAY_URL}
                className={styles.storeButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/mobile-app/google-play.svg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.storeIcon}
                />
                <span className={styles.storeCopy}>
                  <span className={styles.storeEyebrow}>GET IT ON</span>
                  <span className={styles.storeTitle}>Google Play</span>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
