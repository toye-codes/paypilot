"use client";

import { useState } from "react";
import AppLayout from "@/components/global/AppLayout";

import BusinessProfileSection from "@/components/settings/BusinessProfileSection"
import AccountSecuritySection from "@/components/settings/AccountSecuritySection";
import TeamAccessSection from "@/components/settings/TeamAccessSection";
import FinancialPreferencesSection from "@/components/settings/FinancialPreferencesSection";
import NotificationsSection from "@/components/settings/NotifiicationsSection";

export default function SettingsPage() {
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
