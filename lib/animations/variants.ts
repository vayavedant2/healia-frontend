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

/** Floating health labels: rise 40px into place (MobileAppSection). */
export const floatLabelReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

/** Phone mockup scales in after floating labels begin (MobileAppSection). */
export const phoneReveal: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: easeOutExpo,
      delay: 0.32,
    },
  },
};

/** Section shell fades in before children animate (MobileAppSection). */
export const sectionFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: easeOutExpo, when: "beforeChildren" },
  },
};

/** Headline, subtext, and store buttons after the phone reveal. */
export const mobileAppContentReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.82,
      staggerChildren: 0.12,
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

/** Testimonials section heading (y: 40 → 0). */
export const testimonialsHeadingReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

/** Testimonials logo marquee fade-in. */
export const testimonialsMarqueeReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.65, ease: easeOutExpo, delay: 0.12 },
  },
};

/** Testimonials masonry grid stagger (0.08s). */
export const testimonialsGridReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

/** Testimonials card item (y: 60 → 0). */
export const testimonialsCardReveal: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

/** Certification banner background (scale 1.08 → 1, opacity fade). */
export const certificationBannerBgReveal: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: easeOutExpo },
  },
};

/** Certification banner heading (y: 60 → 0). */
export const certificationBannerHeadingReveal: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

/** Certification banner content shell (staggers children). */
export const certificationBannerReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

/** Certification banner description (delay 0.1s). */
export const certificationBannerDescReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo, delay: 0.1 },
  },
};

/** Certification feature pills (delay 0.2s, stagger). */
export const certificationPillsReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

/** Certification CTA (delay 0.3s). */
export const certificationCtaReveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo, delay: 0.3 },
  },
};
