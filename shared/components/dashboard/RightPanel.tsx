import SlideOver from "../global/SlideOver";

import { useStats } from "@/hooks/useStats";
import { useAlerts } from "@/hooks/useAlerts";

import EmptyState from "../global/EmptyState";
import AlertsPanel from "./AlertsPanel";
import AISummaryCard from "./AISummaryCard";

import TransactionForm from "@/features/transactions/components/TransactionForm";
import InventoryForm from "@/features/inventory/components/InventoryForm";


type RightPanelProps = {
  txOpen: boolean;
  invOpen: boolean;
  onCloseTransaction: () => void;
  onCloseProduct: () => void;
};

function AISummaryCardWrapper() {
  const { data, loading } = useStats();

  if (loading) {
    return <div className="skeleton h-32 w-full rounded-xl" />;
  }

  if (!data) return null;

  return <AISummaryCard summary={data.aiSummary} />;
}



const RightPanel = ({
  txOpen,
  invOpen,
  onCloseTransaction,
  onCloseProduct,
}: RightPanelProps) => {
  const { data: alertData, loading: alertLoading } = useAlerts();

  return (
    <div className="p-2 flex flex-col gap-6">
      {/* Alerts */}
      {alertLoading ? (
        <div className="flex flex-col gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton h-11 w-full rounded-xl" />
          ))}
        </div>
      ) : alertData ? (
        <AlertsPanel
          groups={alertData.groups}
          totalCount={alertData.totalCount}
        />
      ) : (
        <EmptyState title="No alerts" description="Everything looks good!" />
      )}

      <div style={{ borderTop: "1px solid var(--border)" }} />

      {/* AI Summary */}
      {alertLoading ? (
        <div className="skeleton h-32 w-full rounded-xl" />
      ) : alertData ? (
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wide mb-3"
            style={{ color: "var(--text-muted)" }}>
            AI Summary
          </p>
        </div>
      ) : null}

      <AISummaryCardWrapper />

      {/* Transaction SlideOver */}
      <SlideOver
        open={txOpen}
        onClose={onCloseTransaction}
        title="Add Transaction">
        <TransactionForm />
      </SlideOver>

      {/* Inventory SlideOver */}
      <SlideOver open={invOpen} onClose={onCloseProduct} title="Add Product">
        <InventoryForm />
      </SlideOver>
    </div>
  );
};

export default RightPanel;
