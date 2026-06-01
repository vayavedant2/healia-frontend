export type FloatingLabelPosition =
  | "thyroid"
  | "heartOne"
  | "heartTwo"
  | "aging"
  | "metabolic"
  | "hormone"
  | "sleep";

export type FloatingHealthLabel = {
  id: string;
  label: string;
  imageSrc: string;
  position: FloatingLabelPosition;
};

export const FLOATING_LABELS: FloatingHealthLabel[] = [
  {
    id: "thyroid-health",
    label: "Thyroid health",
    imageSrc: "/images/mobile-app/labels/thyroid-health.webp",
    position: "thyroid",
  },
  {
    id: "heart-health-1",
    label: "Heart health",
    imageSrc: "/images/mobile-app/labels/heart-health-1.webp",
    position: "heartOne",
  },
  {
    id: "heart-health-2",
    label: "Heart health",
    imageSrc: "/images/mobile-app/labels/heart-health-2.webp",
    position: "heartTwo",
  },
  {
    id: "aging-longevity",
    label: "Aging & longevity",
    imageSrc: "/images/mobile-app/labels/aging-longevity.webp",
    position: "aging",
  },
  {
    id: "metabolic-health",
    label: "Metabolic health",
    imageSrc: "/images/mobile-app/labels/metabolic-health.webp",
    position: "metabolic",
  },
  {
    id: "hormone-balance",
    label: "Hormone balance",
    imageSrc: "/images/mobile-app/labels/hormone-balance.webp",
    position: "hormone",
  },
  {
    id: "sleep-recovery",
    label: "Sleep & recovery",
    imageSrc: "/images/mobile-app/labels/sleep-recovery.webp",
    position: "sleep",
  },
];
