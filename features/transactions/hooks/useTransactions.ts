"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "@/services/transactionService";

import { useAuth } from "@/context/AuthContext";
import { useTransactionStore } from "@/stores/useTransactionStore";

import type { Transaction } from "@/types";

interface TransactionsData {
  all: Transaction[];
  recent: Transaction[];
}

export const useTransactions = () => {
  const { account } = useAuth();

  const transactions = useTransactionStore((state) => state.transactions);

  const setTransactions = useTransactionStore((state) => state.setTransactions);

  const query = useQuery({
    queryKey: ["transactions", account],
    queryFn: () => getTransactions(account!),
    enabled: !!account,
  });

  useEffect(() => {
    if (!query.data) return;

    const fetchedTransactions: Transaction[] = (query.data.data ?? []).map(
      (tx: any) => ({
        ...tx,
        id: tx._id,
        flag: tx.isFlagged
          ? {
              reason: "Flagged",
              flaggedAt: tx.updatedAt,
            }
          : undefined,
      }),
    );

    setTransactions(fetchedTransactions);
  }, [query.data, setTransactions]);

  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const data: TransactionsData = {
    all: sortedTransactions,
    recent: sortedTransactions.slice(0, 5),
  };

  return {
    ...query,
    data,
    loading: query.isLoading,
  };
};
