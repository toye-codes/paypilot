type CheckInventoryProps = {
  category: string;
  status: string;
};

export const checkInventoryItem = ({ category, status }: CheckInventoryProps) => {
    console.log("inventory was checked")
  if (status !== "success") return null;

  if (category === "sales") return "decrease";
  if (category === "inventory") return "increase";

  return null;
};
