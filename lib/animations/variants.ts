import type { Variants } from "framer-motion";
import { easeOutExpo } from "./easing";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

/** Card shell fades up first; inner children rise in sequence afterward. */
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
      when: "beforeChildren",
      staggerChildren: 0.11,
      delayChildren: 0.28,
    },
  },
};

/** Section headers: container staggers eyebrow, title lines, and body copy. */
export const headerReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easeOutExpo,
      when: "beforeChildren",
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

/** Health category chips: stagger bottom-to-top inside a feature card. */
export const chipStackReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1,
      delayChildren: 0.06,
    },
  },
};

/** Category grid: stagger each item when the grid enters the viewport. */
export const categoryGridReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
};

/** Single category item: circle rises, then label. */
export const categoryItemReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.02,
    },
  },
};

/** Testimonial card rises from below; quote and author follow. */
export const testimonialReveal: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
      when: "beforeChildren",
      staggerChildren: 0.14,
      delayChildren: 0.22,
    },
  },
};
