import { create } from "zustand";
import { transactions as initialTransactions } from "@/data/transactions";

type Transaction = (typeof initialTransactions)[number]

type TransactionStore = {
    transactions: Transaction[]; 
    addTransaction: (txn: Transaction) => void;
}



export const useTransactionStore = create<TransactionStore>((set) => ({
    transactions: initialTransactions,

    addTransaction: (newTransaction) => {
        set((state) => ({
            transactions: [...state.transactions, newTransaction]
        }))
    }
}))
