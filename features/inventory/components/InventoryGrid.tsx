import Badge from "@/shared/components/global/Badge";
import { AlertTriangle, Clock } from "lucide-react";
import type { InventoryItem } from "@/types";

interface InventoryGridProps {
  items: InventoryItem[];
}

function formatCurrency(n: number) {
  return `₦${n.toLocaleString()}`;
}

export default function InventoryGrid({ items }: InventoryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((item) => {
        const isOutOfStock = item.stockQuantity === 0;
        const isLowStock = !isOutOfStock && item.stockQuantity <= item.lowStockThreshold;

        return (
          <div key={item.productId} className="rounded-2xl p-5 flex flex-col transition-colors hover:bg-gray-50"
            style={{ background: "var(--card-bg)", border: "1px solid var(--border)", boxShadow: "0 1px 3px rgba(0,0,0,0.02)" }}>
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-semibold text-sm line-clamp-2 leading-snug"
                style={{ color: "var(--text-primary)" }}>{item.name}</h3>
              {isOutOfStock ? (
                <Badge label="Out of Stock" variant="red" />
              ) : isLowStock ? (
                <Badge label="Low Stock" variant="yellow" />
              ) : (
                <Badge label={`${item.stockQuantity} in stock`} variant="green" />
              )}
            </div>

            {/* Price Details */}
            <div className="mt-auto pt-4 flex items-center justify-between"
              style={{ borderTop: "1px dashed var(--border)" }}>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Cost</span>
                <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{formatCurrency(item.costPrice)}</span>
              </div>
              <div className="flex flex-col gap-0.5 text-right">
                <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Selling</span>
                <span className="text-sm font-semibold" style={{ color: "var(--green)" }}>{formatCurrency(item.sellingPrice)}</span>
              </div>
            </div>

            {/* Warnings */}
            {(isLowStock || !item.lastActivity) && (
              <div className="mt-4 flex items-center gap-1.5 px-3 py-2 rounded-lg"
                style={{ background: isLowStock ? "var(--yellow-bg)" : "var(--blue-bg)" }}>
                {isLowStock ? (
                  <AlertTriangle size={12} style={{ color: "var(--yellow)" }} />
                ) : (
                  <Clock size={12} style={{ color: "var(--blue)" }} />
                )}
                <span className="text-xs font-medium"
                  style={{ color: isLowStock ? "var(--yellow)" : "var(--blue)" }}>
                  {isLowStock ? `Only ${item.stockQuantity} items left` : "No recent activity"}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
