import { create } from "zustand";
import { Transaction } from "@/types";



type FlagPayload = {
  reason: string;
  additionalDetails?: string;
};

type TransactionStore = {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
  addTransaction: (txn: Transaction) => void;
  deleteTransaction: (id: string) => void;
  flagTransaction: (id: string, payload: FlagPayload) => void;
};

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: [],

  setTransactions: (transactions) => {
    set({ transactions });
  },

  addTransaction: (newTransaction) => {
    set((state) => ({
      transactions: [...state.transactions, newTransaction],
    }));
  },

  deleteTransaction: (id) => {
    set((state) => ({
      transactions: state.transactions.filter((txn) => txn.id !== id),
    }));
  },

  flagTransaction: (id, payload) => {
    set((state) => ({
      transactions: state.transactions.map((txn) =>
        txn.id === id
          ? {
              ...txn,
              flag: {
                reason: payload.reason,
                additionalDetails: payload.additionalDetails,
                flaggedAt: new Date().toISOString(),
              },
            }
          : txn,
      ),
    }));
  },
}));
