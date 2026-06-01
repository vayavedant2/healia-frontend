export type RootCauseCategory = {
  id: string;
  label: string;
  imageSrc: string;
  desktopColumn: "left" | "right";
};

export const ROOT_CAUSE_CATEGORIES: RootCauseCategory[] = [
  {
    id: "heart-health",
    label: "Heart health",
    imageSrc: "/images/root-cause/heart-health.png",
    desktopColumn: "left",
  },
  {
    id: "bone-joint-health",
    label: "Bone & Joint health",
    imageSrc: "/images/root-cause/bone-joint-health.png",
    desktopColumn: "right",
  },
  {
    id: "skin-hair-health",
    label: "Skin & hair health",
    imageSrc: "/images/root-cause/skin-hair-health.png",
    desktopColumn: "left",
  },
  {
    id: "heavy-metal-burden",
    label: "Heavy metal burden",
    imageSrc: "/images/root-cause/heavy-metal-burden.png",
    desktopColumn: "right",
  },
  {
    id: "sleep-recovery",
    label: "Sleep & recovery",
    imageSrc: "/images/root-cause/sleep-recovery.png",
    desktopColumn: "left",
  },
  {
    id: "male-hormones",
    label: "Male hormones",
    imageSrc: "/images/root-cause/male-hormones.png",
    desktopColumn: "right",
  },
  {
    id: "female-hormones",
    label: "Female hormones",
    imageSrc: "/images/root-cause/female-hormones.png",
    desktopColumn: "left",
  },
  {
    id: "toxin-testing",
    label: "Toxin testing",
    imageSrc: "/images/root-cause/toxin-testing.png",
    desktopColumn: "right",
  },
  {
    id: "stress",
    label: "Stress",
    imageSrc: "/images/root-cause/stress.jpg",
    desktopColumn: "left",
  },
  {
    id: "gut-health",
    label: "Gut health",
    imageSrc: "/images/root-cause/gut-health.png",
    desktopColumn: "right",
  },
  {
    id: "aging-longevity",
    label: "Aging & longevity",
    imageSrc: "/images/root-cause/aging-longevity.jpg",
    desktopColumn: "left",
  },
  {
    id: "immune-health",
    label: "Immune health",
    imageSrc: "/images/root-cause/immune-health.png",
    desktopColumn: "right",
  },
];

export const LEFT_COLUMN_CATEGORIES = ROOT_CAUSE_CATEGORIES.filter(
  (category) => category.desktopColumn === "left",
);

export const RIGHT_COLUMN_CATEGORIES = ROOT_CAUSE_CATEGORIES.filter(
  (category) => category.desktopColumn === "right",
);
