import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  trend: "up" | "down" | "neutral";
  trendPercent: number;
  color: "green" | "red" | "blue" | "yellow";
}

const colorMap = {
  green: { accent: "var(--green)", bg: "var(--green-bg)" },
  red: { accent: "var(--red)", bg: "var(--red-bg)" },
  blue: { accent: "var(--blue)", bg: "var(--blue-bg)" },
  yellow: { accent: "var(--yellow)", bg: "var(--yellow-bg)" },
};

export default function StatCard({
  label,
  value,
  trend,
  trendPercent,
  color,
}: StatCardProps) {
  const { accent, bg } = colorMap[color];

  const TrendIcon =
    trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  const trendColor =
    trend === "up"
      ? "var(--green)"
      : trend === "down"
        ? "var(--red)"
        : "var(--text-muted)";

  return (
    <div className="rounded-2xl p-4 sm:p- flex flex-col gap-2 sm:gap- bg-white shadow-sm w-full">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <p
          className="text-xs sm:text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}>
          {label}
        </p>

        <div
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center"
          style={{ background: bg }}>
          <div
            className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full"
            style={{ background: accent }}
          />
        </div>
      </div>

      {/* Value */}
      <p
        className="text-lg sm:text-2xl font-bold tracking-tight"
        style={{ color: "var(--text-primary)" }}>
        {value}
      </p>

      {/* Trend */}
      <div className="flex items-center gap-1 flex-wrap">
        <TrendIcon size={12} style={{ color: trendColor }} />

        <span
          className="text-[10px] sm:text-xs font-medium"
          style={{ color: trendColor }}>
          {trendPercent}%
        </span>

        <span
          className="text-[10px] sm:text-xs"
          style={{ color: "var(--text-muted)" }}>
          vs last month
        </span>
      </div>
    </div>
  );
}
