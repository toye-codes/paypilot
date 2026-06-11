import { Stat } from "@/shared/components/dashboard/StatsSection";

type Summary = {
  totalCashPosition: number;
  inflow: {
    value: number;
    trend: number;
  };
  outflow: {
    value: number;
    trend: number;
  };
  netProfit: {
    value: number;
    trend: number;
  };
};

export const mapSummaryToStats = (summary: Summary): Stat[] => {
  return [
    {
      id: "cash-position",
      label: "Total Cash Position",
      value: summary.totalCashPosition || 0,
      trend: "up",
      trendPercent: 0,
      color: "blue",
    },
    {
      id: "total-inflow",
      label: "Total Inflow",
      value: summary.inflow.value || 0,
      trend: summary.inflow.trend >= 0 ? "up" : "down",
      trendPercent: Math.abs(summary.inflow.trend),
      color: "green",
    },
    {
      id: "total-outflow",
      label: "Total Outflow",
      value: summary.outflow.value || 0,
      trend: summary.outflow.trend >= 0 ? "up" : "down",
      trendPercent: Math.abs(summary.outflow.trend),
      color: "red",
    },
    {
      id: "net-profit",
      label: "Net Profit",
      value: summary.netProfit.value || 0,
      trend: summary.netProfit.trend >= 0 ? "up" : "down",
      trendPercent: Math.abs(summary.netProfit.trend),
      color: "green",
    },
  ];
};
