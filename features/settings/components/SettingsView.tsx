"use client";

import { useState } from "react";
import AppLayout from "@/shared/components/global/AppLayout";

import BusinessProfileSection from "@/features/settings/components/BusinessProfileSection";
import AccountSecuritySection from "@/features/settings/components/AccountSecuritySection";
import TeamAccessSection from "@/features/settings/components/TeamAccessSection";
import FinancialPreferencesSection from "@/features/settings/components/FinancialPreferencesSection";
import NotificationsSection from "@/features/settings/components/NotifiicationsSection";

export function SettingsView() {
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [insightsEnabled, setInsightsEnabled] = useState(true);

  return (
    <AppLayout>
      <div className="p-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-7">
          <h1
            className="text-xl font-bold"
            style={{ color: "var(--text-primary)" }}>
            Settings
          </h1>
          <p
            className="text-sm mt-0.5"
            style={{ color: "var(--text-secondary)" }}>
            Manage your account preferences and team access
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <BusinessProfileSection />
          <AccountSecuritySection />
          <TeamAccessSection />
          <FinancialPreferencesSection />
          <NotificationsSection
            alertsEnabled={alertsEnabled}
            setAlertsEnabled={setAlertsEnabled}
            insightsEnabled={insightsEnabled}
            setInsightsEnabled={setInsightsEnabled}
          />
        </div>
      </div>
    </AppLayout>
  );
}
