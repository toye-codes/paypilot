"use client";

import { useState } from "react";
import AppLayout from "@/components/global/AppLayout";
import TransactionsTable from "@/components/dashboard/TransactionsTable";
import EmptyState from "@/components/global/EmptyState";
import { SkeletonRow } from "@/components/global/Skeletons";
import SlideOver from "@/components/global/SlideOver";
import { TransactionForm } from "@/components/global/Forms";
import { useTransactions } from "@/hooks/useTransactions";
import { Search, Filter, Plus, ArrowLeftRight } from "lucide-react";

export default function TransactionsPage() {
  const { data, loading } = useTransactions();
  const [open, setOpen] = useState(false);

  return (
    <AppLayout>
      <div className="p-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-7">
          <div>
            <h1 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Transactions</h1>
            <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>
              View and manage all your inbound and outbound payments
            </p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}>
            <Plus size={16} />
            Add Transaction
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "var(--text-muted)" }} />
            <input
              type="text"
              placeholder="Search transactions..."
              className="w-full pl-10 pr-4 py-2.5 outline-none rounded-xl text-sm border focus:ring-2 transition-all"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-colors hover:bg-gray-50"
            style={{ background: "var(--card-bg)", borderColor: "var(--border)", color: "var(--text-primary)" }}>
            <Filter size={15} style={{ color: "var(--text-muted)" }} />
            Filters
          </button>
        </div>

        {/* Table Container */}
        <div className="rounded-2xl overflow-hidden"
          style={{ background: "var(--card-bg)", border: "1px solid var(--border)", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          {loading ? (
            <table className="w-full">
              <tbody>{[1, 2, 3, 4, 5, 6, 7].map((i) => <SkeletonRow key={i} />)}</tbody>
            </table>
          ) : data ? (
            <TransactionsTable transactions={data.all} />
          ) : (
            <div className="py-12">
              <EmptyState
                title="No transactions yet"
                description="Your transaction history will appear here once you add a record."
                icon={<ArrowLeftRight size={22} style={{ color: "var(--text-muted)" }} />}
              />
            </div>
          )}
        </div>
      </div>

      <SlideOver open={open} onClose={() => setOpen(false)} title="Add Transaction">
        <TransactionForm />
      </SlideOver>
    </AppLayout>
  );
}
