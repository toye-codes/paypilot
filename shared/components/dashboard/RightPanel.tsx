import SlideOver from "../global/SlideOver";

import { useAlerts } from "@/hooks/dashboard/useAlerts";
import { useBusinessInsights } from "@/hooks/dashboard/useBusinessInsights";

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

const RightPanel = ({
  txOpen,
  invOpen,
  onCloseTransaction,
  onCloseProduct,
}: RightPanelProps) => {
  const {
    data: alertsData,
    isPending: alertsLoading,
    isError: alertsError,
  } = useAlerts();

  const {
    data: summary,
    isPending: insightsLoading,
    isError: insightsError,
  } = useBusinessInsights();

  console.log("businessInsights:", summary);

  console.log(
    "Alerts Data:",
    alertsData,
    "Loading:",
    alertsLoading,
    "Error:",
    alertsError,
  );

  // Only show latest 10 alerts
  const limitedAlerts = alertsData?.data?.slice(0, 10) ?? [];

  // Group alerts by type
  const groupedAlerts = limitedAlerts.reduce((acc: any[], alert: any) => {
    const existingGroup = acc.find((group) => group.type === alert.type);

    if (existingGroup) {
      existingGroup.count += 1;

      existingGroup.items.push({
        id: alert._id,
        message: alert.message,
        date: alert.createdAt,
      });
    } else {
      acc.push({
        type: alert.type,
        label: alert.type
          .split("_")
          .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        count: 1,
        items: [
          {
            id: alert._id,
            message: alert.message,
            date: alert.createdAt,
          },
        ],
      });
    }

    return acc;
  }, []);

  const totalCount = limitedAlerts.length;

  return (
    <div className="p-2 flex flex-col gap-6">
      {/* Alerts */}
      {alertsLoading ? (
        <div className="flex flex-col gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton h-11 w-full rounded-xl" />
          ))}
        </div>
      ) : alertsError ? (
        <EmptyState
          title="Unable to load alerts"
          description="Please try again later."
        />
      ) : groupedAlerts.length > 0 ? (
        <AlertsPanel groups={groupedAlerts} totalCount={totalCount} />
      ) : (
        <EmptyState title="No alerts" description="Everything looks good!" />
      )}

      <div style={{ borderTop: "1px solid var(--border)" }} />

      {/* Business Insights */}
      {insightsLoading ? (
        <div className="skeleton h-32 w-full rounded-xl" />
      ) : insightsError ? (
        <EmptyState
          title="Unable to load insights"
          description="Please try again later."
        />
      ) : summary ? (
        <AISummaryCard summary={summary} />
      ) : (
        <EmptyState
          title="No insights"
          description="No business insights available."
        />
      )}

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
