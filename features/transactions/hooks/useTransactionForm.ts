import { useState } from "react";
import { CreateTransactionPayload, FormState, CreateTransactionCategory } from "@/types";
import { useCreateTransaction } from "./useCreateTransaction";

export const useTransactionForm = () => {
  const createTransaction = useCreateTransaction();

  const [formData, setFormData] = useState<FormState>({
    description: "",
    category: "",
    quantity: "",
    productName: "",
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
      ...prev, [name]:
        name === "amount" || name === "quantity" ? Number(value) || "" : value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const needsProduct =
      formData.category === "sales" || formData.category === "inventory";

    if (
      !formData.amount ||
      !formData.type ||
      !formData.category ||
      !formData.channel ||
      !formData.status ||
      !formData.description ||
      (needsProduct && (!formData.productName || !formData.quantity))
    ) {
      return;
    }

    const newTransaction: CreateTransactionPayload = {
      amount: Number(formData.amount),
      type: formData.type,
      category: formData.category.toLocaleLowerCase() as CreateTransactionCategory,
      channel: formData.channel,
      product: needsProduct ? formData.productName : "",
      quantity: needsProduct ? Number(formData.quantity) : 0,
      description: formData.description,
      date: formData.date || new Date().toISOString().slice(0, 10),
      status: formData.status,
    };

    createTransaction.mutate(newTransaction, {
      onSuccess: () => {
        setFormData({
          description: "",
          category: "",
          productName: "",
          quantity: "",
          date: "",
          amount: "",
          type: "",
          channel: "",
          status: "",
        });
      },
    });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting: createTransaction.isPending,
    error: createTransaction.error,
  };
};
