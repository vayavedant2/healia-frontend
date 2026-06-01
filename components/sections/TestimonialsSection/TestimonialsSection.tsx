"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";
import {
  defaultViewport,
  sectionFade,
  testimonialsCardReveal,
  testimonialsGridReveal,
  testimonialsHeadingReveal,
  testimonialsMarqueeReveal,
} from "../../../lib/animations";
import { Button } from "../../ui/Button/Button";
import { Container } from "../../ui/Container/Container";
import { Section } from "../../ui/Section/Section";
import {
  BRAND_LOGOS,
  DESKTOP_INITIAL_COLUMNS,
  MOBILE_INITIAL_IDS,
  TABLET_INITIAL_COLUMNS,
  TESTIMONIALS,
  type TestimonialCard,
} from "./testimonialsData";
import styles from "./TestimonialsSection.module.scss";

function PlayIcon() {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M1 1.25L12.5 8L1 14.75V1.25Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogoMarquee() {
  const logos = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.marqueeTrack}>
        {logos.map((logo, index) => (
          <div key={`${logo.id}-${index}`} className={styles.marqueeLogo}>
            <Image
              src={logo.src}
              alt=""
              width={480}
              height={112}
              className={styles.marqueeLogoImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialProfile({
  name,
  location,
  avatarSrc,
}: {
  name: string;
  location: string;
  avatarSrc: string;
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.avatarWrap}>
        <Image
          src={avatarSrc}
          alt=""
          width={48}
          height={48}
          className={styles.avatar}
        />
      </div>
      <div className={styles.profileText}>
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileLocation}>{location}</p>
      </div>
    </div>
  );
}

function QuoteCard({ card }: { card: TestimonialCard }) {
  return (
    <article className={`${styles.card} ${styles.cardQuote}`}>
      {card.title ? (
        <h3 className={styles.cardTitle}>&ldquo;{card.title}&rdquo;</h3>
      ) : null}
      {card.name && card.location && card.avatarSrc ? (
        <TestimonialProfile
          name={card.name}
          location={card.location}
          avatarSrc={card.avatarSrc}
        />
      ) : null}
      <p className={styles.cardBody}>{card.quote}</p>
    </article>
  );
}

function ProfileQuoteCard({ card }: { card: TestimonialCard }) {
  return (
    <article className={`${styles.card} ${styles.cardQuote}`}>
      {card.title ? (
        <h3 className={styles.cardTitle}>{card.title}</h3>
      ) : null}
      {card.name && card.location && card.avatarSrc ? (
        <TestimonialProfile
          name={card.name}
          location={card.location}
          avatarSrc={card.avatarSrc}
        />
      ) : null}
      <p className={styles.cardBody}>{card.quote}</p>
    </article>
  );
}

function TextQuoteCard({ card }: { card: TestimonialCard }) {
  return (
    <article
      className={`${styles.card} ${styles.cardQuote} ${styles.cardTextOnly}`}
    >
      <p className={styles.cardBody}>{card.quote}</p>
    </article>
  );
}

function ImageQuoteCard({ card }: { card: TestimonialCard }) {
  return (
    <article className={`${styles.card} ${styles.cardImageQuote}`}>
      <div className={styles.imageQuoteMedia}>
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
          className={styles.cardImage}
        />
        {card.name && card.location ? (
          <div className={styles.imageOverlay}>
            <span className={styles.overlayName}>{card.name}</span>
            <span className={styles.overlayLocation}>{card.location}</span>
          </div>
        ) : null}
      </div>
      {card.title || card.quote ? (
        <div className={styles.imageQuoteContent}>
          {card.title ? (
            <h3 className={styles.cardTitle}>&ldquo;{card.title}&rdquo;</h3>
          ) : null}
          {card.quote ? <p className={styles.cardBody}>{card.quote}</p> : null}
        </div>
      ) : null}
    </article>
  );
}

function VideoCard({ card }: { card: TestimonialCard }) {
  const isTall = card.videoSize === "tall";

  return (
    <article
      className={`${styles.card} ${styles.cardVideo} ${isTall ? styles.cardVideoTall : ""}`}
      data-card-id={card.id}
    >
      <div className={styles.videoMedia}>
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
          className={styles.cardImage}
        />
        <button
          type="button"
          className={styles.playButton}
          aria-label="Play testimonial video"
          tabIndex={-1}
        >
          <span className={styles.playIcon}>
            <PlayIcon />
          </span>
        </button>
      </div>
    </article>
  );
}

function PhotoCard({ card }: { card: TestimonialCard }) {
  return (
    <article
      className={`${styles.card} ${styles.cardPhoto}`}
      data-card-id={card.id}
    >
      <div className={styles.photoMedia}>
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
          className={styles.cardImage}
        />
      </div>
    </article>
  );
}

function TestimonialCardView({ card }: { card: TestimonialCard }) {
  switch (card.type) {
    case "quote":
      return <QuoteCard card={card} />;
    case "profile-quote":
      return <ProfileQuoteCard card={card} />;
    case "text-quote":
      return <TextQuoteCard card={card} />;
    case "image-quote":
      return <ImageQuoteCard card={card} />;
    case "video":
      return <VideoCard card={card} />;
    case "photo":
      return <PhotoCard card={card} />;
    default:
      return null;
  }
}

function MasonryCard({
  card,
}: {
  card: TestimonialCard;
}) {
  return (
    <motion.li
      className={styles.masonryItem}
      data-card-id={card.id}
      variants={testimonialsCardReveal}
    >
      <TestimonialCardView card={card} />
    </motion.li>
  );
}

function MasonryColumns({
  columns,
  cardsById,
  className,
}: {
  columns: readonly (readonly string[])[];
  cardsById: Map<string, TestimonialCard>;
  className: string;
}) {
  return (
    <motion.ul
      className={className}
      variants={testimonialsGridReveal}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      {columns.map((columnIds, columnIndex) => (
        <li key={`col-${columnIndex}`} className={styles.masonryColumn}>
          <ul className={styles.masonryColumnList}>
            {columnIds.map((id) => {
              const card = cardsById.get(id);
              if (!card) return null;
              return <MasonryCard key={card.id} card={card} />;
            })}
          </ul>
        </li>
      ))}
    </motion.ul>
  );
}

export function TestimonialsSection() {
  const cardsById = useMemo(
    () => new Map(TESTIMONIALS.map((card) => [card.id, card])),
    [],
  );

  const mobileCards = useMemo(
    () =>
      MOBILE_INITIAL_IDS.map((id) => cardsById.get(id)).filter(
        (card): card is TestimonialCard => Boolean(card),
      ),
    [cardsById],
  );

  return (
    <Section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      padding="large"
      background="cream"
      className={styles.testimonials}
    >
      <Container>
        <motion.div
          className={styles.shell}
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <header className={styles.header}>
            <motion.p
              className={styles.eyebrow}
              variants={testimonialsHeadingReveal}
            >
              (Testimonials)
            </motion.p>

            <div className={styles.headingRow}>
              <motion.h2
                id="testimonials-heading"
                className={styles.heading}
                variants={testimonialsHeadingReveal}
              >
                Hear from those who
                <br />
                <span className={styles.headingMuted}>choose Healia</span>
              </motion.h2>

              <motion.div
                className={styles.marqueeWrap}
                variants={testimonialsMarqueeReveal}
              >
                <LogoMarquee />
              </motion.div>
            </div>
          </header>

          <motion.ul
            className={styles.masonryMobile}
            variants={testimonialsGridReveal}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {mobileCards.map((card) => (
              <MasonryCard key={card.id} card={card} />
            ))}
          </motion.ul>

          <MasonryColumns
            className={styles.masonryTablet}
            columns={TABLET_INITIAL_COLUMNS}
            cardsById={cardsById}
          />

          <MasonryColumns
            className={styles.masonryDesktop}
            columns={DESKTOP_INITIAL_COLUMNS}
            cardsById={cardsById}
          />

          <div className={styles.loadMoreWrap}>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className={styles.loadMore}
              disabled
              aria-disabled="true"
              tabIndex={-1}
            >
              Load more
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
