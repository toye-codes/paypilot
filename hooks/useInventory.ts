"use client";

import { useState, useEffect } from "react";
import { useInventoryStore } from "@/stores/useInventoryStore";
import type { InventoryItem } from "@/types";

interface InventoryData {
  items: InventoryItem[];
  lowStockCount: number;
  outOfStockCount: number;
}

export function useInventory() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<InventoryData | null>(null);
  const inventory = useInventoryStore((state)=> state.inventory)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inventory.length > 0) {

        // Get low stock inventory
        const lowStockCount = inventory.filter(
          (i) => i.stockQuantity > 0 && i.stockQuantity <= i.lowStockThreshold
        ).length;

        // Get out of stock Inventory
        const outOfStockCount = inventory.filter(
          (i) => i.stockQuantity === 0
        ).length;

        setData({ items: inventory, lowStockCount, outOfStockCount });
      }
      setLoading(false);
    }, 850);

    return () => clearTimeout(timer);
  }, [data]);

  return {
    data,
    loading,
    empty: !loading && data === null,
  };
}
