import { Plus, Package, Receipt } from "lucide-react";

interface QuickActionsProps {
  onAddTransaction: () => void;
  onAddProduct: () => void;
  onLogExpense: () => void;
}

const actions = [
  { label: "Add Transaction", icon: Plus, key: "transaction" },
  { label: "Add Product", icon: Package, key: "product" },
  { label: "Log Expense", icon: Receipt, key: "expense" },
];

export default function QuickActions({ onAddTransaction, onAddProduct, onLogExpense }: QuickActionsProps) {
  const handlers: Record<string, () => void> = {
    transaction: onAddTransaction,
    product: onAddProduct,
    expense: onLogExpense,
  };

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-3"
        style={{ color: "var(--text-muted)" }}>Quick Actions</p>
      <div className="flex flex-col gap-2">
        {actions.map(({ label, icon: Icon, key }) => (
          <button
            key={key}
            onClick={handlers[key]}
            className="flex items-center gap-2.5 w-full px-3.5 py-2.5 rounded-xl text-sm font-medium text-left transition-all hover:scale-[1.01] active:scale-[0.99]"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}>
            <div className="w-6 h-6 rounded-lg flex items-center justify-center"
              style={{ background: "var(--blue-bg)" }}>
              <Icon size={13} style={{ color: "var(--blue)" }} />
            </div>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
