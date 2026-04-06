import { create } from "zustand";
import { inventory as initialInventory } from "@/data/inventory";

type InventoryItem = (typeof initialInventory)[number];

type InventoryStoreProps = {
  inventory: InventoryItem[];
  addInventory: (inv: InventoryItem) => void;
};

export const useInventoryStore = create<InventoryStoreProps>((set) => ({
  inventory: initialInventory,

  addInventory: (newInventory) => {
    set((state) => ({
      inventory: [...state.inventory, newInventory ], 
    }));
  },
}));
