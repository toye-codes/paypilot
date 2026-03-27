"use client";

import { useState } from "react";
import AppLayout from "@/components/global/AppLayout";
import StatCard from "@/components/global/StatCard";
import SectionHeader from "@/components/global/SectionHeader";
import SlideOver from "@/components/global/SlideOver";
import EmptyState from "@/components/global/EmptyState";
import { SkeletonCard, SkeletonRow } from "@/components/global/Skeletons";
import { TransactionForm, InventoryForm } from "@/components/global/Forms";
import TransactionsTable from "@/components/dashboard/TransactionsTable";
import InflowOutflowChart from "@/components/dashboard/InflowOutflowChart";
import AlertsPanel from "@/components/dashboard/AlertsPanel";
import AISummaryCard from "@/components/dashboard/AISummaryCard";
import QuickActions from "@/components/dashboard/QuickActions";
import { useStats } from "@/hooks/useStats";
import { useTransactions } from "@/hooks/useTransactions";
import { useAlerts } from "@/hooks/useAlerts";
import { BarChart2, ArrowLeftRight } from "lucide-react";

function formatCurrency(value: number) {
  return `₦${value.toLocaleString()}`;
}

function RightPanel() {
  const [txOpen, setTxOpen] = useState(false);
  const [invOpen, setInvOpen] = useState(false);
  const { data: alertData, loading: alertLoading } = useAlerts();

  return (
    <div className="p-5 flex flex-col gap-6">

      {/* 1. Alerts */}
      {alertLoading ? (
        <div className="flex flex-col gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton h-11 w-full rounded-xl" />
          ))}
        </div>
      ) : alertData ? (
        <AlertsPanel
          groups={alertData.groups}
          totalCount={alertData.totalCount}
        />
      ) : (
        <EmptyState title="No alerts" description="Everything looks good!" />
      )}

      <div style={{ borderTop: "1px solid var(--border)" }} />

      {/* 2. AI Summary */}
      {alertLoading ? (
        <div className="skeleton h-32 w-full rounded-xl" />
      ) : alertData ? (
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wide mb-3"
            style={{ color: "var(--text-muted)" }}>
            AI Summary
          </p>
          {/* We'll use stats hook for summary */}
        </div>
      ) : null}
      <AISummaryCardWrapper />

      <div style={{ borderTop: "1px solid var(--border)" }} />

      {/* 3. Quick Actions */}
      <QuickActions
        onAddTransaction={() => setTxOpen(true)}
        onAddProduct={() => setInvOpen(true)}
        onLogExpense={() => setTxOpen(true)}
      />

      {/* Slide-Overs */}
      <SlideOver
        open={txOpen}
        onClose={() => setTxOpen(false)}
        title="Add Transaction">
        <TransactionForm />
      </SlideOver>
      
      <SlideOver
        open={invOpen}
        onClose={() => setInvOpen(false)}
        title="Add Product">
        <InventoryForm />
      </SlideOver>
    </div>
  );
}

function AISummaryCardWrapper() {
  const { data, loading } = useStats();
  if (loading) return <div className="skeleton h-32 w-full rounded-xl" />;
  if (!data) return null;
  return <AISummaryCard summary={data.aiSummary} />;
}

export default function DashboardPage() {
  const { data: statsData, loading: statsLoading } = useStats();
  const { data: txData, loading: txLoading } = useTransactions();

  return (
    <AppLayout threeColumn rightPanel={<RightPanel />}>
      <div className="p-6 max-w-full">
        {/* Page Header */}
        <div className="mb-7">
          <h1 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Dashboard</h1>
          <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>
            Your financial overview for March 2026
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-4 mb-6">
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

        {/* Chart Section */}
        <div className="rounded-2xl p-5 mb-6"
          style={{ background: "var(--card-bg)", border: "1px solid var(--border)", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <SectionHeader title="Inflow vs Outflow" subtitle="Last 6 months" />
          {statsLoading ? (
            <div className="skeleton h-52 w-full rounded-xl" />
          ) : statsData ? (
            <InflowOutflowChart
              data={statsData.chartData}
              summary="Outflow spiked in March due to the ₦450,000 salary batch and ₦320,000 supplier payment. Inflow remains stable — keep monitoring for further divergence."
            />
          ) : (
            <EmptyState title="No chart data" icon={<BarChart2 size={22} style={{ color: "var(--text-muted)" }} />} />
          )}
        </div>

        {/* Recent Transactions */}
        <div className="rounded-2xl overflow-hidden"
          style={{ background: "var(--card-bg)", border: "1px solid var(--border)", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <div className="px-5 pt-5 pb-3">
            <SectionHeader title="Recent Transactions" subtitle="Last 5 transactions" />
          </div>
          {txLoading ? (
            <table className="w-full">
              <tbody>{[1, 2, 3, 4, 5].map((i) => <SkeletonRow key={i} />)}</tbody>
            </table>
          ) : txData ? (
            <TransactionsTable transactions={txData.recent} />
          ) : (
            <EmptyState
              title="No transactions yet"
              description="Add your first transaction using Quick Actions"
              icon={<ArrowLeftRight size={22} style={{ color: "var(--text-muted)" }} />}
            />
          )}
        </div>
      </div>
    </AppLayout>
  );
}
