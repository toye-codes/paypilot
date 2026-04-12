import { InventoryItem, InventoryFilters } from "@/types";



type FilterFn<T> = (item: T, value: any) => boolean;

export const inventoryFilterConfig: Record< keyof InventoryFilters, FilterFn<InventoryItem> > = {
  stockStatus: (item, value) => {
    if (value === "in_stock") return item.stockQuantity > 0;
    if (value === "low_stock")
      return item.stockQuantity <= item.lowStockThreshold && item.stockQuantity > 0;
    if (value === "out_of_stock") return item.stockQuantity === 0;
    return true;
  },

  priceRange: (item, [min, max]) => {
    return item.sellingPrice >= min && item.sellingPrice <= max;
  },

  category: (item, value) => item.category === value,
};
