import { useMemo } from "react";
import { inventoryFilterConfig } from "@/utility/inventoryFilterConfig";
import { InventoryItem, InventoryFilters } from "@/types";

type UseInventoryFilterParams = {
  data: InventoryItem[];
  filters: InventoryFilters;
  search: string;
};

export function useInventoryFilter({
  data,
  filters,
  search,
}: UseInventoryFilterParams) {
  return useMemo(() => {
    if (!data) return [];

    const normalizedSearch = search.trim().toLowerCase();

    return data.filter((item) => {
      // Dynamic filters
      for (const key in filters) {
        const value = filters[key as keyof InventoryFilters];
        if (!value) continue;

        const fn = inventoryFilterConfig[key as keyof InventoryFilters];
        if (fn && !fn(item, value)) return false;
      }

      // Search (by name)
      if (
        normalizedSearch &&
        !item.name.toLowerCase().includes(normalizedSearch)
      ) {
        return false;
      }

      return true;
    });
  }, [data, filters, search]);
}
