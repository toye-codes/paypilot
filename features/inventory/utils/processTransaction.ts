import { checkInventoryItem } from "@/lib/checkInventoryItem";
import { useInventoryStore } from "@/stores/useInventoryStore";
import { useTransactionStore } from "@/stores/useTransactionStore";


export const processTransaction = (transaction: any) => {
  const { addTransaction } = useTransactionStore.getState();
  const { increaseInventory, decreaseInventory } = useInventoryStore.getState();
  const { inventory } = useInventoryStore.getState();

  // Check Inventory for Item condition
  const category = transaction.category?.toLowerCase();
  const status = transaction.status;
  const action = checkInventoryItem({ category, status });

  if (!action) {
    addTransaction(transaction);
    return;
  }

// Get productid and quantity
  const productName = transaction.productName ?? transaction.product;
  const productId =
    transaction.productId ??
    inventory.find((item) => item.name === productName)?.productId;
  const { quantity } = transaction;

  if (!productId || !quantity) {
    addTransaction(transaction);
    return;
  }
  
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
