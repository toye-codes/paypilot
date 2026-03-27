"use client";

import { useState } from "react";
import AppLayout from "@/components/global/AppLayout";
import EmptyState from "@/components/global/EmptyState";
import { SkeletonInventoryCard } from "@/components/global/Skeletons";
import SlideOver from "@/components/global/SlideOver";
import { InventoryForm } from "@/components/global/Forms";
import InventoryGrid from "@/components/inventory/InventoryGrid";
import { useInventory } from "@/hooks/useInventory";
import { Search, Filter, Plus, Package } from "lucide-react";

export default function InventoryPage() {
  const { data, loading } = useInventory();
  const [open, setOpen] = useState(false);

  return (
    <AppLayout>
      <div className="p-6 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
          <div>
            <h1 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Inventory</h1>
            <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>
              Manage your products, pricing, and stock levels
            </p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #10b981, #3b82f6)" }}>
            <Plus size={16} />
            Add Product
          </button>
        </div>

        {/* Stats Summary Panel */}
        {data && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
             <div className="p-4 rounded-xl border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
               <p className="text-xs uppercase font-semibold text-gray-500 mb-1">Total Items</p>
               <p className="text-xl font-bold">{data.items.length}</p>
             </div>
             <div className="p-4 rounded-xl border bg-yellow-50 border-yellow-100">
               <p className="text-xs uppercase font-semibold text-yellow-600 mb-1">Low Stock</p>
               <p className="text-xl font-bold text-yellow-700">{data.lowStockCount}</p>
             </div>
             <div className="p-4 rounded-xl border bg-red-50 border-red-100">
               <p className="text-xs uppercase font-semibold text-red-600 mb-1">Out of Stock</p>
               <p className="text-xl font-bold text-red-700">{data.outOfStockCount}</p>
             </div>
          </div>
        )}

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
          <div className="relative flex-1 w-full max-w-sm">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "var(--text-muted)" }} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2.5 outline-none rounded-xl text-sm border focus:ring-2 transition-all"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 w-full sm:w-auto rounded-xl text-sm font-medium border transition-colors hover:bg-gray-50"
            style={{ background: "var(--card-bg)", borderColor: "var(--border)", color: "var(--text-primary)" }}>
            <Filter size={15} style={{ color: "var(--text-muted)" }} />
            Categories
          </button>
        </div>

        {/* Grid Container */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => <SkeletonInventoryCard key={i} />)}
          </div>
        ) : data ? (
          <InventoryGrid items={data.items} />
        ) : (
          <div className="py-12 border rounded-2xl bg-white text-center">
            <EmptyState
              title="Inventory is empty"
              description="Start tracking your stock by adding your first product."
              icon={<Package size={22} style={{ color: "var(--text-muted)" }} />}
            />
          </div>
        )}
      </div>

      <SlideOver open={open} onClose={() => setOpen(false)} title="Add Product">
        <InventoryForm />
      </SlideOver>
    </AppLayout>
  );
}
