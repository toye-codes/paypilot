import SectionHeader from "../global/SectionHeader";
import InflowOutflowChart from "./InflowOutflowChart";
import EmptyState from "../global/EmptyState";
import { BarChart2 } from "lucide-react";

import { useStats } from "@/hooks/useStats";



const ChartSection = () => {
    const { data: statsData, loading: statsLoading } = useStats();


  return (
    <div
      className="rounded-2xl p-5 mb-6"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}>
      <SectionHeader title="Inflow vs Outflow" subtitle="Last 6 months" />
      {statsLoading ? (
        <div className="skeleton h-52 w-full rounded-xl" />
      ) : statsData ? (
        <InflowOutflowChart
          data={statsData.chartData}
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
}

export default ChartSection