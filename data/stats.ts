import type { Stat, ChartDataPoint, AISummary } from "@/types";

export const stats: Stat[] = [
  {
    id: "cash-position",
    label: "Total Cash Position",
    value: 1340000,
    trend: "up",
    trendPercent: 12.4,
    color: "blue",
  },
  {
    id: "total-inflow",
    label: "Total Inflow",
    value: 435000,
    trend: "up",
    trendPercent: 8.2,
    color: "green",
  },
  {
    id: "total-outflow",
    label: "Total Outflow",
    value: 840500,
    trend: "down",
    trendPercent: 3.1,
    color: "red",
  },
  {
    id: "net-profit",
    label: "Net Profit",
    value: 499500,
    trend: "up",
    trendPercent: 21.7,
    color: "green",
  },
];

export const chartData: ChartDataPoint[] = [
  { month: "Oct", inflow: 280000, outflow: 410000 },
  { month: "Nov", inflow: 320000, outflow: 390000 },
  { month: "Dec", inflow: 510000, outflow: 470000 },
  { month: "Jan", inflow: 390000, outflow: 520000 },
  { month: "Feb", inflow: 460000, outflow: 480000 },
  { month: "Mar", inflow: 435000, outflow: 840500 },
];

export const aiSummary: AISummary = {
  headline: "Outflow spike detected this month",
  body: "Your outflow for March (₦840,500) nearly doubled compared to February (₦480,000), driven largely by the ₦450,000 salary batch and a ₦320,000 supplier payment. Inflow remains steady at ₦435,000, keeping net profit positive at ₦499,500. Review the flagged duplicate transactions to avoid further losses.",
  generatedAt: "2026-03-26T06:00:00Z",
};
