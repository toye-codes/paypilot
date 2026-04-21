import Badge from "@/shared/components/global/Badge";
import { AlertTriangle, Pencil, Trash2, Flag } from "lucide-react";

import { formatAmount } from "@/utility/formatAmount";
import { formatDate } from "@/utility/formatDate";

import { useState } from "react";

import type { Transaction, TransactionCategory, TransactionStatus, } from "@/types";
import type { Payload } from "recharts/types/component/DefaultTooltipContent";

import FlagModal, { PayloadProps } from "./FlagModal";


interface TransactionsTableProps {
  transactions: Transaction[];
}

const categoryVariant: Record< TransactionCategory, "green" | "blue" | "yellow" | "red" | "gray"> = {
  sales: "green",
  inventory: "blue",
  utilities: "yellow",
  operations: "gray",
  salary: "blue",
  fees: "gray",
};

const statusVariant: Record<TransactionStatus, "green" | "yellow" | "red"> = {
  success: "green",
  pending: "yellow",
  failed: "red",
};


export default function TransactionsTable({ transactions, }: TransactionsTableProps) {
const [isFlagOpen, setIsFlagOpen] = useState(false);
const [selectedTransaction, setSelectedTransaction] =
  useState<Transaction | null>(null);

const handleOpenFlag = (tx: Transaction) => {
  setSelectedTransaction(tx);
  setIsFlagOpen(true);
};

const handleFlagSubmit = (payload: PayloadProps) => {
  console.log(payload);
};

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        {/* Header */}
        <thead>
          <tr className="border-b bg-white border-gray-200">
            {[
              "Description",
              "Category",
              "Date",
              "Status",
              "Amount",
              "Actions",
            ].map((h) => (
              <th
                key={h}
                className={`px-4 py-3 text-xs font-semibold uppercase tracking-wide text-left text-gray-900 ${
                  h === "Amount" || h === "Actions" ? "text-right" : ""
                }`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {transactions.map((tx) => (
            <tr
              key={tx.id}
              className="border-b border-gray-200 transition-colors hover:bg-gray-50">
              {/* Description */}
              <td className="px-4 py-3">
                <div className="flex items-center gap-2 min-w-0">
                  {tx.anomaly && (
                    <AlertTriangle
                      size={13}
                      className="text-yellow-500 shrink-0"
                    />
                  )}

                  <span className="font-medium text-gray-900 truncate max-w-55">
                    {tx.description}
                  </span>
                </div>
              </td>

              {/* Category */}
              <td className="px-4 py-3">
                <Badge
                  label={tx.category}
                  variant={categoryVariant[tx.category]}
                />
              </td>

              {/* Date */}
              <td className="px-4 py-3 text-gray-500">{formatDate(tx.date)}</td>

              {/* Status */}
              <td className="px-4 py-3">
                <Badge label={tx.status} variant={statusVariant[tx.status]} />
              </td>

              {/* Amount */}
              <td
                className={`px-4 py-3 text-right font-semibold ${
                  tx.type === "credit" ? "text-green-600" : "text-red-600"
                }`}>
                {formatAmount(tx.amount, tx.type)}
              </td>

              {/* Actions */}
              <td className="px-4 py-3">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition">
                    <Pencil size={16} className="text-gray-500" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-50 transition">
                    <Trash2 size={16} className="text-red-500" />
                  </button>
                  <button
                    className="p-2 rounded-lg hover:bg-blue-50 transition"
                    onClick={() => setIsFlagOpen(true)}>
                    <Flag size={16} className={` text-blue-500`} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isFlagOpen && (
        <FlagModal
          isOpen={isFlagOpen}
          onClose={() => setIsFlagOpen(false)}
          onSubmit={handleFlagSubmit}
          transaction={selectedTransaction}
        />
      )}
    </div>
  );
}
