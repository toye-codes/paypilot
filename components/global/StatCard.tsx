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

export default function StatCard({ label, value, trend, trendPercent, color }: StatCardProps) {
  const { accent, bg } = colorMap[color];
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;
  const trendColor = trend === "up" ? "var(--green)" : trend === "down" ? "var(--red)" : "var(--text-muted)";

  return (
    <div className="rounded-2xl p-5 flex flex-col gap-3"
      style={{ background: "var(--card-bg)", border: "1px solid var(--border)", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{label}</p>
        <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: bg }}>
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: accent }} />
        </div>
      </div>
      <p className="text-2xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>{value}</p>
      <div className="flex items-center gap-1.5">
        <TrendIcon size={13} style={{ color: trendColor }} />
        <span className="text-xs font-medium" style={{ color: trendColor }}>
          {trendPercent}%
        </span>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>vs last month</span>
      </div>
    </div>
  );
}
