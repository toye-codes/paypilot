"use client";

import { useState, useEffect } from "react";
import { transactions } from "@/data/transactions";
import type { Transaction } from "@/types";

interface TransactionsData {
  all: Transaction[];
  recent: Transaction[];
}

export function useTransactions() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TransactionsData | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (transactions.length > 0) {
        const sorted = [...transactions].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setData({
          all: sorted,
          recent: sorted.slice(0, 5),
        });
      }
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return {
    data,
    loading,
    empty: !loading && data === null,
  };
}
