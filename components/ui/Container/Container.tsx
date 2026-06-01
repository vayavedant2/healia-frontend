import styles from "./Container.module.scss";

type ContainerWidth = "default" | "wide" | "narrow";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  width?: ContainerWidth;
}

export function Container({
  children,
  className = "",
  width = "default",
}: ContainerProps) {
  const widthClass =
    width === "wide"
      ? styles.wide
      : width === "narrow"
        ? styles.narrow
        : styles.container;

  return (
    <div className={`${widthClass} ${className}`.trim()}>{children}</div>
  );
}
