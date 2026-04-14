import { TransactionFilters, Transaction } from "@/types";

type FilterFn<T> = (item: T, value: any) => boolean;

export const transactionFilterConfig: Record< keyof TransactionFilters, FilterFn<Transaction> > = {
  status: (item, value) => item.status === value,
  type: (item, value) => item.type === value,
  channel: (item, value) => item.channel === value,
  category: (item, value) => item.category === value,
};


