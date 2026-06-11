import StatCard from "../global/StatCard";
import { SkeletonCard } from "../global/Skeletons";
import QuickActions from "./QuickActions";

function formatCurrency(value: number) {
  return `₦${value.toLocaleString()}`;
}

export type Stat = {
  id: string;
  label: string;
  value: number;
  trend: "up" | "down";
  trendPercent: number;
  color: "green" | "red" | "yellow" | "blue";
};

type StatsSectionProps = {
  stats: Stat[];
  statsLoading: boolean;
  onAddTransaction: () => void;
  onAddProduct: () => void;
};

const StatsSection = ({
  stats,
  statsLoading,
  onAddTransaction,
  onAddProduct,
}: StatsSectionProps) => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
        {statsLoading
          ? [1, 2, 3, 4].map((i) => <SkeletonCard key={i} />)
          : stats.map((stat) => (
              <StatCard
                key={stat.id}
                label={stat.label}
                value={formatCurrency(stat.value)}
                trend={stat.trend}
                trendPercent={stat.trendPercent}
                color={stat.color}
              />
            ))}
      </div>

      <QuickActions
        onAddTransaction={onAddTransaction}
        onAddProduct={onAddProduct}
      />
    </div>
  );
};

export default StatsSection;
