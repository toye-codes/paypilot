"use client";

import AppLayout from "@/components/global/AppLayout";
import SectionHeader from "@/components/global/SectionHeader";
import EmptyState from "@/components/global/EmptyState";
import { SkeletonRow } from "@/components/global/Skeletons";
import TransactionsTable from "@/components/dashboard/TransactionsTable";
import { useTransactions } from "@/hooks/useTransactions";
import { ArrowLeftRight } from "lucide-react";

import StatsSection from "@/components/dashboard/StatsSection";
import ChartSection from "@/components/dashboard/ChartSection";



export default function DashboardPage() {
  const { data: txData, loading: txLoading } = useTransactions();

  return (
    <AppLayout>
      <div className="p-6 max-w-auto">
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
        <div className="">
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
    </AppLayout>
  );
}
