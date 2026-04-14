import { useMemo } from "react";
import { Transaction, TransactionFilters } from "@/types";
import { transactionFilterConfig } from "@/features/transactions/utils/transactionFilterConfig";
type UseTransactionFilterParams = {
  data: Transaction[];
  filters: TransactionFilters;
  search: string;
};

export function useTransactionFilter({ data, filters, search }: UseTransactionFilterParams) {
    
  return useMemo(() => {
    if (!data) return [];

    const normalizedSearch = search.trim().toLowerCase();

    return data.filter((item) => {
      // Apply dynamic filters
      for (const key in filters) {
        const value = filters[key as keyof TransactionFilters];

        if (!value) continue;

        const fn = transactionFilterConfig[key as keyof TransactionFilters];

        if (fn && !fn(item, value)) return false;
      }

      // Search 
      if (normalizedSearch && !item.description.toLowerCase().includes(normalizedSearch)) {
        return false;
      }

      return true;
    });
  }, [data, filters, search]);
}
