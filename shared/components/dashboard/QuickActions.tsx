import { Plus, Package, Receipt } from "lucide-react";



interface QuickActionsProps {
  onAddTransaction: () => void;
  onAddProduct: () => void;
  // onLogExpense: () => void;
}

const actions = [
  { label: "Add Transaction", icon: Plus, key: "transaction" },
  { label: "Add Product", icon: Package, key: "product" },
];

export default function QuickActions({
  onAddTransaction,
  onAddProduct,
}: QuickActionsProps) {
  const handlers: Record<string, () => void> = {
    transaction: onAddTransaction,
    product: onAddProduct,
  };

  return (
    <div className=" bg-white shadow-md p-4 my-4 rounded-lg">
      {/* Title */}
      <p className="text-xs font-semibold uppercase tracking-wide mb-3 text-gray-400">
        Quick Actions
      </p>

      {/* Actions */}
      <div className="flex gap-2">
        {actions.map(({ label, icon: Icon, key }) => (
          <button
            key={key}
            onClick={handlers[key]}
            className="flex items-center gap-2.5 w-full px-3.5 py-2.5 rounded-xl text-sm font-medium text-left bg-white border border-gray-200 text-gray-900 shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99]">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-blue-100">
              <Icon size={13} className="text-blue-600" />
            </div>

            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
