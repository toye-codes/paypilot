"use client";

import AppLayout from "@/shared/components/global/AppLayout";
import SectionHeader from "@/shared/components/global/SectionHeader";
import EmptyState from "@/shared/components/global/EmptyState";
import { SkeletonRow } from "@/shared/components/global/Skeletons";
import TransactionsTable from "@/features/transactions/components/TransactionsTable";
import { useTransactions } from "@/features/transactions/hooks/useTransactions";
import { ArrowLeftRight } from "lucide-react";

import RightPanel from "@/shared/components/dashboard/RightPanel";
import StatsSection from "@/shared/components/dashboard/StatsSection";
import ChartSection from "@/shared/components/dashboard/ChartSection";

export default function DashboardPage() {
  const { data: txData, loading: txLoading } = useTransactions();

  return (
    <AppLayout>
      {/* GRID WRAPPER */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_297px] gap- h-full">
        {/* MAIN CONTENT */}
        <div className="p-2 max-w-auto overflow-y-auto">
          {/* Page Header */}
          <div className="mb-7">
            <h1
              className="text-xl font-bold"
              style={{ color: "var(--text-primary)" }}>
              Dashboard
            </h1>
            <p
              className="text-sm mt-0.5"
              style={{ color: "var(--text-secondary)" }}>
              Your financial overview for March 2026
            </p>
          </div>

          {/* Stats Row */}
          <div>
            <StatsSection />
          </div>

          {/* Chart Section */}
          <ChartSection />

          {/* Recent Transactions */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}>
            <div className="px-5 pt-5 pb-3">
              <SectionHeader
                title="Recent Transactions"
                subtitle="Last 5 transactions"
              />
            </div>

            {txLoading ? (
              <table className="w-full">
                <tbody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <SkeletonRow key={i} />
                  ))}
                </tbody>
              </table>
            ) : txData ? (
              <TransactionsTable transactions={txData.recent} />
            ) : (
              <EmptyState
                title="No transactions yet"
                description="Add your first transaction using Quick Actions"
                icon={
                  <ArrowLeftRight
                    size={22}
                    style={{ color: "var(--text-muted)" }}
                  />
                }
              />
            )}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <aside className="hidden lg:block h-full overflow-y-auto">
          <RightPanel />
        </aside>
      </div>
    </AppLayout>
  );
}
