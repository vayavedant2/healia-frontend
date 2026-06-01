"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect } from "react";
import {
  categoryGridReveal,
  defaultViewport,
  fadeUp,
  staggerItem,
} from "../../../lib/animations";
import buttonStyles from "../../ui/Button/Button.module.scss";
import { Container } from "../../ui/Container/Container";
import { RevealHeader } from "../../ui/Motion/RevealHeader";
import { RevealItem } from "../../ui/Motion/RevealItem";
import { Section } from "../../ui/Section/Section";
import { BLOG_POSTS, type BlogPost } from "./blogData";
import styles from "./InsightsSection.module.scss";

function FlowerIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="5" r="4" fill="currentColor" />
      <circle cx="12" cy="19" r="4" fill="currentColor" />
      <circle cx="5" cy="12" r="4" fill="currentColor" />
      <circle cx="19" cy="12" r="4" fill="currentColor" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10 2L2 10L10 18"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2 2L10 10L2 18"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const isElevated = index % 2 === 0;

  return (
    <article
      className={`${styles.card} ${isElevated ? styles.cardElevated : styles.cardLight}`}
    >
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.categoryBadge}>{post.category}</span>
          <time className={styles.cardDate} dateTime={post.date}>
            {post.date}
          </time>
        </div>
        <h3 className={styles.cardTitle}>{post.title}</h3>
        <p className={styles.cardExcerpt}>{post.excerpt}</p>
      </div>
      <div className={styles.cardMedia}>
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 45vw, 28vw"
          className={styles.cardImage}
        />
      </div>
    </article>
  );
}

export function InsightsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onResize = () => {
      emblaApi.reInit();
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [emblaApi]);

  return (
    <Section
      id="insights"
      aria-labelledby="insights-heading"
      padding="large"
      background="cream"
      className={styles.insights}
    >
      <Container>
        <div className={styles.shell}>
          <div className={styles.headerGrid}>
            <RevealHeader className={styles.header}>
              <RevealItem>
                <h2 id="insights-heading" className={styles.heading}>
                  Your daily dose of
                  <br />
                  <span className={styles.headingMuted}>health insights</span>
                </h2>
              </RevealItem>
            </RevealHeader>

            <motion.div
              className={styles.headerAside}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.p className={styles.description} variants={fadeUp}>
                Stay updated with the latest breakthroughs in longevity,
                preventive health, nutrition, and wellness technology.
              </motion.p>
              <motion.div className={styles.ctaWrap} variants={fadeUp}>
                <Link
                  href="/blog"
                  className={`${buttonStyles.button} ${buttonStyles["variant-primary"]} ${buttonStyles["size-md"]} ${styles.viewAllButton}`}
                >
                  <span className={buttonStyles.text}>View all blogs</span>
                  <span className={buttonStyles.icon}>
                    <FlowerIcon />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className={styles.carouselBlock}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <div className={styles.embla}>
              <div className={styles.viewport} ref={emblaRef}>
                <motion.ul
                  className={styles.container}
                  variants={categoryGridReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={defaultViewport}
                >
                  {BLOG_POSTS.map((post, index) => (
                    <motion.li
                      key={post.id}
                      className={styles.slide}
                      variants={staggerItem}
                    >
                      <BlogCard post={post} index={index} />
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>

            <div className={styles.controls}>
              <button
                type="button"
                className={styles.navButton}
                onClick={scrollPrev}
                aria-label="Previous blog posts"
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                className={styles.navButton}
                onClick={scrollNext}
                aria-label="Next blog posts"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
