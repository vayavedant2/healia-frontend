import styles from "./Section.module.scss";

type SectionPadding = "default" | "large" | "none";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
  padding?: SectionPadding;
  background?: "cream" | "none";
}

export function Section({
  children,
  className = "",
  id,
  "aria-labelledby": ariaLabelledBy,
  padding = "default",
  background = "none",
}: SectionProps) {
  const paddingClass =
    padding === "large"
      ? styles.paddingLarge
      : padding === "default"
        ? styles.paddingDefault
        : "";

  const backgroundClass =
    background === "cream" ? styles.backgroundCream : "";

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`${styles.section} ${paddingClass} ${backgroundClass} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
