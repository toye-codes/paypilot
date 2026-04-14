import { useState } from "react";
import { useInventoryStore } from "@/stores/useInventoryStore";
import { InventoryItem, InventoryCategory } from "@/types";

type FormState = {
  name: string;
  category: InventoryCategory | "";
  costPrice: string;
  sellingPrice: string;
  stockQuantity: string;
  lowStockThreshold: string;
  lastActivity?: string;
};

export const useInventoryForm = () => {
  const addInventory = useInventoryStore((state)=> state.addInventory)
  const [formData, setFormData] = useState<FormState>({
    name: "",
    category: "",
    costPrice: "",
    sellingPrice: "",
    stockQuantity: "",
    lowStockThreshold: "",
    lastActivity: "",
  });

  // Track changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
    if (
      !formData.category ||
      !formData.costPrice ||
      !formData.lowStockThreshold ||
      !formData.name ||
      !formData.sellingPrice ||
      !formData.stockQuantity
    )
      return;
      
      const newInventory: InventoryItem = {
        productId: crypto.randomUUID(),
        name: formData.name,
        category: formData.category,
        costPrice: Number(formData.costPrice),
        sellingPrice: Number(formData.sellingPrice),
        stockQuantity: Number(formData.stockQuantity),
        lowStockThreshold: Number(formData.lowStockThreshold),
        lastActivity: formData.lastActivity
        
      };
    
      addInventory(newInventory);
      console.log(newInventory);

      setFormData({
        name: "",
        category: "",
        costPrice: "",
        sellingPrice: "",
        stockQuantity: "",
        lowStockThreshold: "",
        lastActivity: "",
      });
      
  };
  

    return { formData, handleChange, handleSubmit };
};
