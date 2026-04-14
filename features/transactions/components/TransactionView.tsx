"use client";

import { useState } from "react";

import { Button } from "@/shared/components/global/Button";
import AppLayout from "@/shared/components/global/AppLayout";
import TransactionsTable from "@/features/transactions/components/TransactionsTable";
import EmptyState from "@/shared/components/global/EmptyState";
import { SkeletonRow } from "@/shared/components/global/Skeletons";
import SlideOver from "@/shared/components/global/SlideOver";
import TransactionForm from "@/features/transactions/components/TransactionForm";

import { useTransactions } from "@/features/transactions/hooks/useTransactions";
import { useTransactionFilter } from "@/features/transactions/hooks/useTransactionFilter";

import type { TransactionFilters } from "@/types";

import { Search, Filter, Plus, ArrowLeftRight } from "lucide-react";

export function TransactionsView() {
  const { data, loading } = useTransactions();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<TransactionFilters>({});

  const updateFilter = <K extends keyof TransactionFilters>(
    key: K,
    value: TransactionFilters[K] | "",
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value || undefined,
    }));
  };

  // Apply filtering
  const filteredTransactions = useTransactionFilter({ data: data?.all || [], filters, search});

  return (
    <AppLayout>
      <div className="p-2 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-7">
          <div>
            <h1
              className="text-xl font-bold"
              style={{ color: "var(--text-primary)" }}>
              Transactions
            </h1>
            <p
              className="text-sm mt-0.5"
              style={{ color: "var(--text-secondary)" }}>
              View and manage all your inbound and outbound payments
            </p>
          </div>

          <Button onClick={() => setOpen(true)}>
            <Plus size={16} />
            Add Transaction
          </Button>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-3 mb-6">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2"
              style={{ color: "var(--text-muted)" }}
            />
            <input
              type="text"
              placeholder="Search transactions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 outline-none border-2  border-[#0f1a2a] rounded-4xl text-sm  focus:ring-2 transition-all"
            />
          </div>

          <select
            value={filters.status || ""}
            onChange={(e) => updateFilter("status", e.target.value as any)}
            className="px-3 py-2 shadow-md rounded-lg text-sm border border-[#0f1a2a]">
            <option value="">All Status</option>
            <option value="success">Success</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>

          <select
            value={filters.type || ""}
            onChange={(e) => updateFilter("type", e.target.value as any)}
            className="px-3 py-2 shadow-md rounded-lg border border-[#0f1a2a] text-sm">
            <option value="">All Type</option>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>

          {/* Clear */}
          <button
            onClick={() => setFilters({})}
            className="px-3 py-2 text-sm shadow-md border border-[#0f1a2a] rounded-xl">
            Clear
          </button>
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          {loading ? (
            <table className="w-full">
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <SkeletonRow key={i} />
                ))}
              </tbody>
            </table>
          ) : data ? (
            <TransactionsTable transactions={filteredTransactions} />
          ) : (
            <div className="py-12">
              <EmptyState
                title="No transactions yet"
                description="Your transaction history will appear here once you add a record."
                icon={<ArrowLeftRight size={22} />}
              />
            </div>
          )}
        </div>
      </div>

      {/* Add Transaction */}
      <SlideOver
        open={open}
        onClose={() => setOpen(false)}
        title="Add Transaction">
        <TransactionForm />
      </SlideOver>
    </AppLayout>
  );
}
