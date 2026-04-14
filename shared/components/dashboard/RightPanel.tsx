import SlideOver from "../global/SlideOver";
import { useState } from "react";
import { useStats } from "@/hooks/useStats";
import { useAlerts } from "@/hooks/useAlerts";

import EmptyState from "../global/EmptyState";
import AlertsPanel from "./AlertsPanel";
import AISummaryCard from "./AISummaryCard";
import QuickActions from "./QuickActions";
import TransactionForm from "@/features/transactions/components/TransactionForm";
import InventoryForm from "@/features/inventory/components/InventoryForm";

function AISummaryCardWrapper() {
  const { data, loading } = useStats();
  if (loading) return <div className="skeleton h-32 w-full rounded-xl" />;
  if (!data) return null;
  return <AISummaryCard summary={data.aiSummary} />;
}

const RightPanel = () => {
  const [txOpen, setTxOpen] = useState(false);
  const [invOpen, setInvOpen] = useState(false);
  const { data: alertData, loading: alertLoading } = useAlerts();

  return (
    <div className="p-2 flex  flex-col-reverse gap-6">
      {/* 1. Alerts */}
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

      {/* 2. AI Summary */}
      {alertLoading ? (
        <div className="skeleton h-32 w-full rounded-xl" />
      ) : alertData ? (
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wide mb-3"
            style={{ color: "var(--text-muted)" }}>
            AI Summary
          </p>
          {/* We'll use stats hook for summary */}
        </div>
      ) : null}
      <AISummaryCardWrapper />

      {/* <div style={{ borderTop: "1px solid var(--border)" }} /> */}

      {/* 3. Quick Actions */}
      <QuickActions
        onAddTransaction={() => setTxOpen(true)}
        onAddProduct={() => setInvOpen(true)}
      />

      {/* Slide-Overs */}
      <SlideOver
        open={txOpen}
        onClose={() => setTxOpen(false)}
        title="Add Transaction">
        <TransactionForm />
      </SlideOver>

      <SlideOver
        open={invOpen}
        onClose={() => setInvOpen(false)}
        title="Add Product">
        <InventoryForm />
      </SlideOver>
    </div>
  );
}

export default RightPanel;