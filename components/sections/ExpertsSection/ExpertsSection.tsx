"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  categoryGridReveal,
  defaultViewport,
  staggerItem,
} from "../../../lib/animations";
import { Container } from "../../ui/Container/Container";
import { RevealHeader } from "../../ui/Motion/RevealHeader";
import { RevealItem } from "../../ui/Motion/RevealItem";
import { Section } from "../../ui/Section/Section";
import styles from "./ExpertsSection.module.scss";

const EXPERTS = [
  {
    id: "andrew-weil",
    name: "Dr. Andrew Weil",
    title: "Pioneer of integrative medicine",
    handle: "@mindful_health",
    imageSrc: "/images/experts/andrew-weil.jpg",
  },
  {
    id: "dean-ornish",
    name: "Dr. Dean Ornish",
    title: "Founder of Ornish Lifestyle Medicine",
    handle: "@mindful_health",
    imageSrc: "/images/experts/dean-ornish.jpg",
  },
  {
    id: "david-sinclair",
    name: "Dr. David Sinclair",
    title: "Harvard Medical School professor",
    handle: "@mindful_health",
    imageSrc: "/images/experts/david-sinclair.jpg",
  },
  {
    id: "valter-longo",
    name: "Dr. Valter Longo",
    title: "Director of the USC Longevity Institute",
    handle: "@mindful_health",
    imageSrc: "/images/experts/valter-longo.jpg",
  },
  {
    id: "frank-lipman",
    name: "Dr. Frank Lipman",
    title: "Leader in functional and integrative medicine",
    handle: "@mindful_health",
    imageSrc: "/images/experts/frank-lipman.jpg",
  },
] as const;

function InstagramIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.25" cy="6.75" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function ExpertsSection() {
  return (
    <Section
      id="experts"
      aria-labelledby="experts-heading"
      padding="large"
      background="cream"
      className={styles.experts}
    >
      <Container>
        <RevealHeader className={styles.header}>
          <RevealItem>
            <p className={styles.eyebrow}>
              (Leadership Team, Advisors, Investors)
            </p>
          </RevealItem>
          <RevealItem>
            <h2 id="experts-heading" className={styles.heading}>
              Your health, backed by
              <br />
              <span className={styles.headingAccent}>world-class experts</span>
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
          {EXPERTS.map((expert) => (
            <motion.li
              key={expert.id}
              className={styles.gridItem}
              variants={staggerItem}
            >
              <article className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={expert.imageSrc}
                    alt={expert.name}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 33vw, 20vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.name}>{expert.name}</h3>
                  <p className={styles.title}>{expert.title}</p>
                  <span className={styles.socialPill}>
                    <InstagramIcon />
                    <span>{expert.handle}</span>
                  </span>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
}
