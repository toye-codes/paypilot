import { checkInventoryItem } from "@/lib/checkInventoryItem";
import { useInventoryStore } from "@/stores/useInventoryStore";
import { useTransactionStore } from "@/stores/useTransactionStore";
import { Transaction } from "@/types";

export const processTransaction = (transaction: any) => {
  const { addTransaction } = useTransactionStore.getState();
  const { increaseInventory, decreaseInventory } = useInventoryStore.getState();

  // Check Inventory for Item condition
  const category = transaction.category;
  const status = transaction.status;
  const action = checkInventoryItem({ category, status });

  if (!action) {
    addTransaction(transaction);
    return;
  }

// Get productid and quantity
  const { productId, quantity } = transaction;
  
  //Update inventory
if (action === "increase") {
  console.log("INCREASE TRIGGERED");
  increaseInventory({ productId, quantity });
}

if (action === "decrease") {
  console.log("DECREASE TRIGGERED");
  decreaseInventory({ productId, quantity });
}


  addTransaction(transaction);
};
