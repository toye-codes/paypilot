import SectionHeader from "@/shared/components/global/SectionHeader";
import ToggleSwitch from "@/shared/components/global/ToggleSwitch";

export default function NotificationsSection({
  alertsEnabled,
  setAlertsEnabled,
  insightsEnabled,
  setInsightsEnabled,
}: any) {
  return (
    <section
      className="rounded-2xl p-5 md:p-6 border"
      style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
      <SectionHeader title="Notifications" subtitle="Control alerts" />

      <div className="mt-4 space-y-4">
        <div className="flex justify-between">
          <span>Smart Alerts</span>
          <ToggleSwitch checked={alertsEnabled} onChange={setAlertsEnabled} />
        </div>

        <div className="flex justify-between">
          <span>AI Insights</span>
          <ToggleSwitch
            checked={insightsEnabled}
            onChange={setInsightsEnabled}
          />
        </div>
      </div>
    </section>
  );
}
