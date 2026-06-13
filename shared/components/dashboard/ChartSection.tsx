import SectionHeader from "../global/SectionHeader";
import InflowOutflowChart from "./InflowOutflowChart";
import EmptyState from "../global/EmptyState";
import { BarChart2 } from "lucide-react";

import { useDashboardOverview } from "@/hooks/dashboard/useDashboardOverview";

const ChartSection = () => {
  const {
    data: chartData,
    isPending: chartLoading,
    isError: chartError,
  } = useDashboardOverview();

  const cashflowGraph = chartData?.data?.cashflowGraph || [];

  console.log("dashboard chart data:", cashflowGraph);

  return (
    <div
      className="rounded-2xl p-5 mb-6"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}>
      <SectionHeader title="Inflow vs Outflow" subtitle="Last 6 months" />

      {chartLoading ? (
        <div className="skeleton h-52 w-full rounded-xl" />
      ) : chartError ? (
        <EmptyState
          title="Unable to load chart data"
          icon={<BarChart2 size={22} style={{ color: "var(--text-muted)" }} />}
        />
      ) : cashflowGraph.length ? (
        <InflowOutflowChart
          data={cashflowGraph}
          summary="Outflow spiked in March due to the ₦450,000 salary batch and ₦320,000 supplier payment. Inflow remains stable — keep monitoring for further divergence."
        />
      ) : (
        <EmptyState
          title="No chart data"
          icon={<BarChart2 size={22} style={{ color: "var(--text-muted)" }} />}
        />
      )}
    </div>
  );
};

export default ChartSection;
