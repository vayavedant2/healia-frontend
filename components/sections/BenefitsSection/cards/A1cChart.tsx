const POINTS = [
  { x: 18, height: 42, label: "Jun 21", active: true },
  { x: 58, height: 58, label: "Dec 22", active: false },
  { x: 98, height: 48, label: "Jan 23", active: false },
  { x: 138, height: 68, label: "May 24", active: false },
];

interface A1cChartProps {
  className?: string;
}

export function A1cChart({ className }: A1cChartProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 156 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {POINTS.map((point) => {
        const yTop = 52 - point.height;
        return (
          <g key={point.label}>
            <line
              x1={point.x}
              y1={yTop}
              x2={point.x}
              y2={52}
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="3 4"
              opacity={point.active ? 1 : 0.55}
            />
            <circle
              cx={point.x}
              cy={yTop}
              r="3"
              fill="white"
              opacity={point.active ? 1 : 0.7}
            />
            <text
              x={point.x}
              y={72}
              textAnchor="middle"
              fill="white"
              fontSize="9"
              opacity={point.active ? 1 : 0.45}
            >
              {point.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
