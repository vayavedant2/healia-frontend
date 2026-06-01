export type TestimonialCardType =
  | "quote"
  | "video"
  | "image-quote"
  | "profile-quote"
  | "text-quote"
  | "photo";

export interface TestimonialCard {
  id: string;
  type: TestimonialCardType;
  title?: string;
  quote: string;
  name?: string;
  location?: string;
  avatarSrc?: string;
  imageSrc: string;
  imageAlt: string;
  videoSize?: "default" | "tall";
  initialVisible?: boolean;
  mobileOrder: number;
}

export const BRAND_LOGOS = [
  { id: "ey-studio", src: "/images/testimonials/logos/ey-studio.svg", alt: "eyStudio" },
  { id: "cobalto", src: "/images/testimonials/logos/cobalto.svg", alt: "Cobalto" },
  { id: "stux", src: "/images/testimonials/logos/stux.svg", alt: "Stux" },
  { id: "bz-at", src: "/images/testimonials/logos/bz-at.svg", alt: "bz@" },
  { id: "mivor", src: "/images/testimonials/logos/mivor.svg", alt: "Mivor" },
  { id: "helix", src: "/images/testimonials/logos/helix.svg", alt: "Helix" },
] as const;

/** First-row masonry set — matches desktop reference layout. */
export const INITIAL_VISIBLE_IDS = [
  "lucas",
  "photo-face",
  "isabella",
  "photo-hair",
  "omar",
  "video-woman",
] as const;

/** Explicit column stacks (avoids CSS column height-balancing). */
export const DESKTOP_INITIAL_COLUMNS: readonly (readonly string[])[] = [
  ["lucas", "photo-face"],
  ["isabella", "photo-hair"],
  ["omar"],
  ["video-woman"],
] as const;

export const TABLET_INITIAL_COLUMNS: readonly (readonly string[])[] = [
  ["lucas", "photo-face", "omar"],
  ["isabella", "photo-hair", "video-woman"],
] as const;

export const MOBILE_INITIAL_IDS = [
  "lucas",
  "video-man",
  "isabella",
  "omar",
  "video-woman",
  "photo-face",
] as const;

export const TESTIMONIALS: TestimonialCard[] = [
  {
    id: "lucas",
    type: "quote",
    title: "Stress levels finally down",
    quote:
      "I've tried different wellness apps before, but none gave me insights as personalized as Healia.",
    name: "Lucas P.",
    location: "São Paulo, Brazil",
    avatarSrc: "/images/testimonials/avatars/lucas.jpg",
    imageSrc: "/images/testimonials/avatars/lucas.jpg",
    imageAlt: "",
    initialVisible: true,
    mobileOrder: 1,
  },
  {
    id: "photo-face",
    type: "photo",
    quote: "",
    imageSrc: "/images/testimonials/photo-face.jpg",
    imageAlt: "Healia member portrait",
    initialVisible: true,
    mobileOrder: 11,
  },
  {
    id: "isabella",
    type: "quote",
    title: "Finally consistent energy",
    quote:
      "What I love most is the clarity. No confusing medical jargon—just actionable steps I can actually follow.",
    name: "Isabella C.",
    location: "Rome, Italy",
    avatarSrc: "/images/testimonials/avatars/isabella.jpg",
    imageSrc: "/images/testimonials/avatars/isabella.jpg",
    imageAlt: "",
    initialVisible: true,
    mobileOrder: 6,
  },
  {
    id: "photo-hair",
    type: "photo",
    quote: "",
    imageSrc: "/images/testimonials/photo-hair.jpg",
    imageAlt: "Healia member portrait",
    initialVisible: true,
    mobileOrder: 12,
  },
  {
    id: "omar",
    type: "image-quote",
    title: "My sleep improved drastically",
    quote:
      "My sleep improved drastically after using Healia's personalized health insights. I discovered underlying issues affecting my rest and followed simple recommendations tailored to my needs.",
    name: "Omar F",
    location: "Cairo, Egypt",
    imageSrc: "/images/testimonials/omar-runners.jpg",
    imageAlt: "Three people running outdoors at sunset",
    initialVisible: true,
    mobileOrder: 8,
  },
  {
    id: "video-woman",
    type: "video",
    quote: "",
    imageSrc: "/images/testimonials/video-woman.jpg",
    imageAlt: "Member sharing a Healia experience on video",
    videoSize: "tall",
    initialVisible: true,
    mobileOrder: 4,
  },
  {
    id: "video-man",
    type: "video",
    quote: "",
    imageSrc: "/images/testimonials/video-man.jpg",
    imageAlt: "Member sharing a Healia experience on video",
    videoSize: "tall",
    mobileOrder: 2,
  },
  {
    id: "video-sweater",
    type: "video",
    quote: "",
    imageSrc: "/images/testimonials/video-sweater.jpg",
    imageAlt: "Member sharing a Healia experience on video",
    videoSize: "tall",
    mobileOrder: 7,
  },
  {
    id: "sleep-quote",
    type: "text-quote",
    quote:
      "My sleep improved drastically after using Healia's personalized health insights. I discovered underlying issues affecting my rest and followed simple recommendations tailored to my needs.",
    imageSrc: "/images/testimonials/omar-runners.jpg",
    imageAlt: "",
    mobileOrder: 13,
  },
  {
    id: "haruto",
    type: "image-quote",
    title: "No more brain fog",
    quote: "",
    name: "Haruto S.",
    location: "Tokyo, Japan",
    imageSrc: "/images/testimonials/avatars/haruto.jpg",
    imageAlt: "Haruto S. sharing his Healia experience",
    mobileOrder: 9,
  },
  {
    id: "emily",
    type: "profile-quote",
    title: "Confidence in my health",
    quote:
      "As a busy professional, Healia makes health checkups easy and convenient.",
    name: "Emily R.",
    location: "Los Angeles, USA",
    avatarSrc: "/images/testimonials/avatars/emily.jpg",
    imageSrc: "/images/testimonials/avatars/emily.jpg",
    imageAlt: "",
    mobileOrder: 3,
  },
  {
    id: "sofia",
    type: "quote",
    title: "Hormones back in balance",
    quote:
      "Finally, an app that feels human. The encouragement and progress tracking made me feel supported like never before.",
    name: "Sofia M.",
    location: "Madrid, Spain",
    avatarSrc: "/images/testimonials/avatars/sofia.jpg",
    imageSrc: "/images/testimonials/avatars/sofia.jpg",
    imageAlt: "",
    mobileOrder: 5,
  },
  {
    id: "photo-couple",
    type: "photo",
    quote: "",
    imageSrc: "/images/testimonials/photo-couple.jpg",
    imageAlt: "Two friends using Healia together",
    mobileOrder: 10,
  },
];
