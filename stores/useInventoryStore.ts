import { create } from "zustand";
import { inventory as initialInventory, inventory } from "@/data/inventory";
import { Transaction } from "@/types";


type InventoryItem = (typeof initialInventory)[number];


type TransactionCalculation = {
  productId: string;
  quantity: number
}

type InventoryStoreProps = {
  inventory: InventoryItem[];
  addInventory: (inv: InventoryItem) => void;
  increaseInventory: ({ productId, quantity }: TransactionCalculation) => void;
  decreaseInventory: ({ productId, quantity }: TransactionCalculation) => void;
};


export const useInventoryStore = create<InventoryStoreProps>((set) => ({
  inventory: initialInventory,

  // add inventory
  addInventory: (newInventory) => {
    set((state) => ({
      inventory: [...state.inventory, newInventory],
    }));
  },

  // increase inventory
  increaseInventory: ({ productId, quantity }) => {
    console.log("STORE INCREASE CALLED", productId, quantity);

    set((state) => {
      const item = state.inventory.find((i) => i.productId === productId);
      console.log("FOUND ITEM:", item);
      if (!item) return state;

      console.log("BEFORE:", state.inventory);

      return {
        inventory: state.inventory.map((i) =>
          i.productId === productId
            ? { ...i, stockQuantity: i.stockQuantity + quantity }
            : i,
        ),
      };
    });
  },

  decreaseInventory: ({ productId, quantity }) => {
    console.log("STORE DECREASE CALLED", productId, quantity);
    set((state) => {
      const item = state.inventory.find((i) => i.productId === productId);

      if (!item) return state;
      console.log("BEFORE:", state.inventory);

      return {
        inventory: state.inventory.map((i) =>
          i.productId === productId ? { ...i, stockQuantity: i.stockQuantity - quantity } : i,
          console.log("inventory was decreased", inventory)
        ),
      };
    });
  },
}));
