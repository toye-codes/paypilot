"use client";

import { useState } from "react";

import { Button } from "@/shared/components/global/Button";
import AppLayout from "@/shared/components/global/AppLayout";
import EmptyState from "@/shared/components/global/EmptyState";
import { SkeletonInventoryCard } from "@/shared/components/global/Skeletons";
import SlideOver from "@/shared/components/global/SlideOver";
import { Search, Filter, Plus, Package } from "lucide-react";

import InventoryForm from "@/features/inventory/components/InventoryForm";
import InventoryGrid from "@/features/inventory/components/InventoryGrid";

import { useInventory } from "@/features/inventory/hooks/useInventory";
import { useInventoryFilter } from "@/features/inventory/hooks/useInventoryFilter";
import { useDebounce } from "@/hooks/useDebounce";

import type { InventoryFilters } from "@/types";

export function InventoryView() {
  const { data, loading } = useInventory();
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<InventoryFilters>({});

  //  Debounce (important for search)
  const debouncedSearch = useDebounce(search, 300);

  //  Generic filter updater
  const updateFilter = <K extends keyof InventoryFilters>(
    key: K,
    value: InventoryFilters[K] | "",
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value || undefined,
    }));
  };

  //  Apply filtering
  const filteredItems = useInventoryFilter({
    data: data?.items || [],
    filters,
    search: debouncedSearch,
  });

  return (
    <AppLayout>
      <div className="p-4 max-w-350 mx-auto">
        {/* Header */}
        <div className="flex sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-7">
          <div>
            <h1
              className="text-xl font-bold"
              style={{ color: "var(--text-primary)" }}>
              Inventory
            </h1>
            <p
              className="text-xs sm:text-sm mt-0.5"
              style={{ color: "var(--text-secondary)" }}>
              Manage your products, pricing, and stock levels
            </p>
          </div>

          <Button onClick={() => setOpen(true)}>
            <Plus size={24} />
            Add Product
          </Button>
        </div>

        {/* Stats Summary Panel */}
        {data && (
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            <div
              className="p-4 rounded-xl border"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--border)",
              }}>
              <p className="text-xs uppercase font-semibold text-gray-500 mb-1">
                Total Items
              </p>
              <p className="text-xl font-bold">{data.items.length}</p>
            </div>
            <div className="p-4 rounded-xl border bg-yellow-50 border-yellow-100">
              <p className="text-xs uppercase font-semibold text-yellow-600 mb-1">
                Low Stock
              </p>
              <p className="text-xl font-bold text-yellow-700">
                {data.lowStockCount}
              </p>
            </div>
            <div className="p-4 rounded-xl border bg-red-50 border-red-100">
              <p className="text-xs uppercase font-semibold text-red-600 mb-1">
                Out of Stock
              </p>
              <p className="text-xl font-bold text-red-700">
                {data.outOfStockCount}
              </p>
            </div>
          </div>
        )}

        {/* Toolbar */}
        <div className="flex sm:flex-row items-center gap-3 mb-6">
          {/* 🔍 Search */}
          <div className="relative flex-1 w-full max-w-sm">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border"
            />
          </div>

          {/* Stock Filter */}
          <select
            value={filters.stockStatus || ""}
            onChange={(e) => updateFilter("stockStatus", e.target.value as any)}
            className="px-3 py-2 border rounded-lg text-sm">
            <option value="">All Stock</option>
            <option value="in_stock">In Stock</option>
            <option value="low_stock">Low Stock</option>
            <option value="out_of_stock">Out of Stock</option>
          </select>

          {/* Category Filter (replaced button) */}
          <select
            value={(filters as any).category || ""}
            onChange={(e) => updateFilter("category" as any, e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm">
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="food">Food</option>
          </select>

        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <SkeletonInventoryCard key={i} />
            ))}
          </div>
        ) : data ? (
          <InventoryGrid items={filteredItems} />
        ) : (
          <div className="py-12 border rounded-2xl text-center">
            <EmptyState
              title="Inventory is empty"
              description="Start tracking your stock by adding your first product."
              icon={<Package size={22} />}
            />
          </div>
        )}
      </div>

      {/* Add Product */}
      <SlideOver open={open} onClose={() => setOpen(false)} title="Add Product">
        <InventoryForm />
      </SlideOver>
    </AppLayout>
  );
}
