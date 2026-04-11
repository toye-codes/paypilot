"use client";

import { useState } from "react";

import { Button } from "@/components/global/Button";
import AppLayout from "@/components/global/AppLayout";
import TransactionsTable from "@/components/transactions/TransactionsTable";
import EmptyState from "@/components/global/EmptyState";
import { SkeletonRow } from "@/components/global/Skeletons";
import SlideOver from "@/components/global/SlideOver";
import TransactionForm from "@/components/transactions/TransactionForm";

import { useTransactions } from "@/hooks/transactions/useTransactions";
import { useTransactionFilter } from "@/hooks/transactions/useTransactionFilter";

import type { TransactionFilters } from "@/types";

import { Search, Filter, Plus, ArrowLeftRight } from "lucide-react";

export default function TransactionsPage() {
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
  const filteredTransactions = useTransactionFilter({
    data: data?.all || [],
    filters,
    search,
  });

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
              className="w-full pl-10 pr-4 py-2.5 outline-none rounded-xl text-sm shadow-xs border border-b-cyan-300 focus:ring-2 transition-all"
            />
          </div>

          {/* Inline Filters (NO SlideOver nonsense) */}
          <select
            value={filters.status || ""}
            onChange={(e) => updateFilter("status", e.target.value as any)}
            className="px-3 py-2 shadow-xs rounded-lg text-sm">
            <option value="">All Status</option>
            <option value="success">Success</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>

          <select
            value={filters.type || ""}
            onChange={(e) => updateFilter("type", e.target.value as any)}
            className="px-3 py-2 shadow-xs rounded-lg text-sm">
            <option value="">All Type</option>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>

          {/* Clear */}
          <button
            onClick={() => setFilters({})}
            className="px-3 py-2 text-sm shadow-xs rounded-lg">
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
