import Badge from "@/components/global/Badge";
import { AlertTriangle } from "lucide-react";
import type { Transaction, TransactionCategory, TransactionStatus } from "@/types";

interface TransactionsTableProps {
  transactions: Transaction[];
}

const categoryVariant: Record<TransactionCategory, "green" | "blue" | "yellow" | "red" | "gray"> = {
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

function formatAmount(amount: number, type: "credit" | "debit") {
  const formatted = `₦${amount.toLocaleString()}`;
  return type === "credit" ? `+${formatted}` : `-${formatted}`;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr style={{ borderBottom: "1px solid var(--border)" }}>
            {["Description", "Category", "Date", "Status", "Amount"].map((h) => (
              <th key={h} className={`px-4 py-3 text-xs font-semibold uppercase tracking-wide text-left ${h === "Amount" ? "text-right" : ""}`}
                style={{ color: "var(--text-muted)" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="transition-colors hover:bg-gray-50"
              style={{ borderBottom: "1px solid var(--border)" }}>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  {tx.anomaly && (
                    <AlertTriangle size={13} style={{ color: "var(--yellow)", flexShrink: 0 }} />
                  )}
                  <span className="font-medium truncate max-w-[200px]" style={{ color: "var(--text-primary)" }}>
                    {tx.description}
                  </span>
                </div>
              </td>
              <td className="px-4 py-3">
                <Badge label={tx.category} variant={categoryVariant[tx.category]} />
              </td>
              <td className="px-4 py-3" style={{ color: "var(--text-secondary)" }}>
                {formatDate(tx.date)}
              </td>
              <td className="px-4 py-3">
                <Badge label={tx.status} variant={statusVariant[tx.status]} />
              </td>
              <td className={`px-4 py-3 text-right font-semibold`}
                style={{ color: tx.type === "credit" ? "var(--green)" : "var(--red)" }}>
                {formatAmount(tx.amount, tx.type)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
