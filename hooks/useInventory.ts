"use client";

import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";
import type { InventoryItem } from "@/types";

interface InventoryData {
  items: InventoryItem[];
  lowStockCount: number;
  outOfStockCount: number;
}

export function useInventory() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<InventoryData | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inventory.length > 0) {
        const lowStockCount = inventory.filter(
          (i) => i.stockQuantity > 0 && i.stockQuantity <= i.lowStockThreshold
        ).length;
        const outOfStockCount = inventory.filter(
          (i) => i.stockQuantity === 0
        ).length;

        setData({ items: inventory, lowStockCount, outOfStockCount });
      }
      setLoading(false);
    }, 850);

    return () => clearTimeout(timer);
  }, []);

  return {
    data,
    loading,
    empty: !loading && data === null,
  };
}
