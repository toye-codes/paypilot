import { create } from "zustand";
import {
  transactions as initialTransactions,
  transactions,
} from "@/data/transactions";

type Transaction = (typeof initialTransactions)[number];

type FlagPayload = {
    reason: string;
    additionalDetails?: string;
}

type TransactionStore = {
  transactions: Transaction[];
  addTransaction: (txn: Transaction) => void;
  deleteTransaction: (id: string) => void;
//editTransaction: (id: string, updates: Partial<Transaction>) => void;
  flagTransaction: (id: string, payload: FlagPayload) => void
};

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: initialTransactions,

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
        const isFlagged = false;

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
        : txn
        ),
    }))
  }

//   editTransaction: (id, updates) => {
//     set((state) => ({
//       transactions: state.transactions.filter((txn) =>
//         txn.id === id ? { ...txn, updates } : txn,
//       ),
//     }));
//   },
}));
