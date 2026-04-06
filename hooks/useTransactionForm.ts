import { useState } from "react";
import { useTransactionStore } from "@/stores/useTransactionStore";
import { Transaction, FormState } from "@/types";

export const useTransactionForm = () => {
  const addTransaction = useTransactionStore((state) => state.addTransaction);

  const [formData, setFormData] = useState<FormState>({
    description: "",
    category: "",
    date: "",
    amount: "",
    type: "",
    channel: "",
    status: "",
  });

  // Handle input + select changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) || "" : value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      // !formData.amount ||
      !formData.type ||
      !formData.category ||
      !formData.channel ||
      !formData.status ||
      !formData.description
    ) {
      return;
    }

    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      description: formData.description,
      category: formData.category,
      date: formData.date || new Date().toISOString(),
      amount: Number(formData.amount),
      type: formData.type,
      channel: formData.channel,
      status: formData.status,
    };

    console.log(formData, "Button clicked");
    

    addTransaction(newTransaction);

    // Reset form
    setFormData({
      description: "",
      category: "",
      date: "",
      amount: "",
      type: "",
      channel: "",
      status: "",
    });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};
