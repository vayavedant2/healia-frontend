interface ThyroxineChartProps {
  className?: string;
}

export function ThyroxineChart({ className }: ThyroxineChartProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 280 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0 36 C 35 8, 70 48, 105 28 S 175 12, 210 32 S 250 44, 280 24"
        stroke="white"
        strokeWidth="1.5"
        strokeDasharray="4 5"
        fill="none"
        opacity="0.9"
      />
      <circle cx="210" cy="32" r="4" fill="white" />
      <text x="210" y="52" textAnchor="middle" fill="white" fontSize="10" opacity="0.85">
        Jun &apos;24
      </text>
    </svg>
  );
}
