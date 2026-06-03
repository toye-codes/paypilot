import { useStats } from "@/hooks/useStats";

import StatCard from "../global/StatCard";
import { SkeletonCard } from "../global/Skeletons";

import QuickActions from "./QuickActions";

function formatCurrency(value: number) {
  return `₦${value.toLocaleString()}`;
}

type StatsSectionProps = {
  onAddTransaction: () => void;
  onAddProduct: () => void;
};

const StatsSection = ({
  onAddTransaction,
  onAddProduct,
}: StatsSectionProps) => {
  const { data: statsData, loading: statsLoading } = useStats();

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
        {statsLoading
          ? [1, 2, 3, 4].map((i) => <SkeletonCard key={i} />)
          : statsData?.stats.map((stat) => (
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
