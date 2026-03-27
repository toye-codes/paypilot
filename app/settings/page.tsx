"use client";

import { useState } from "react";
import AppLayout from "@/components/global/AppLayout";
import SectionHeader from "@/components/global/SectionHeader";
import ToggleSwitch from "@/components/global/ToggleSwitch";
import Badge from "@/components/global/Badge";

export default function SettingsPage() {
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [insightsEnabled, setInsightsEnabled] = useState(true);

  return (
    <AppLayout>
      <div className="p-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-7">
          <h1 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Settings</h1>
          <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>
            Manage your account preferences and team access
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* 1. Business Profile */}
          <section className="rounded-2xl p-5 md:p-6"
            style={{ background: "var(--card-bg)", border: "1px solid var(--border)", boxShadow: "0 1px 3px rgba(0,0,0,0.02)" }}>
            <SectionHeader title="Business Profile" subtitle="Update your company details" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>Business Name</label>
                <input type="text" defaultValue="Acme Electronics" className="w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none bg-gray-50" readOnly />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>Owner Name</label>
                <input type="text" defaultValue="Jane Doe" className="w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none bg-gray-50" readOnly />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>Email Address</label>
                <input type="email" defaultValue="admin@acme.ng" className="w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none bg-gray-50" readOnly />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>Phone Number</label>
                <input type="tel" defaultValue="+234 801 234 5678" className="w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none bg-gray-50" readOnly />
              </div>
            </div>
          </section>

          {/* 2. Financial Preferences */}
          <section className="rounded-2xl p-5 md:p-6"
            style={{ background: "var(--card-bg)", border: "1px solid var(--border)", boxShadow: "0 1px 3px rgba(0,0,0,0.02)" }}>
            <SectionHeader title="Financial Preferences" subtitle="Set your default currency and display options" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>Default Currency</label>
                <select className="w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none focus:ring-2 bg-white transition-all">
                  <option value="NGN">Nigerian Naira (₦)</option>
                  <option value="USD">US Dollar ($)</option>
                  <option value="GBP">British Pound (£)</option>
                </select>
              </div>
            </div>
          </section>

          {/* 3. Notifications */}
          <section className="rounded-2xl p-5 md:p-6"
            style={{ background: "var(--card-bg)", border: "1px solid var(--border)", boxShadow: "0 1px 3px rgba(0,0,0,0.02)" }}>
            <SectionHeader title="Notifications" subtitle="Control what alerts you receive" />
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "var(--border)" }}>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Smart Alerts</p>
                  <p className="text-xs mt-0.5 max-w-sm" style={{ color: "var(--text-secondary)" }}>
                    Receive notifications for duplicate transactions, unusual spending, and failed payments.
                  </p>
                </div>
                <ToggleSwitch checked={alertsEnabled} onChange={setAlertsEnabled} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>AI Insights</p>
                  <p className="text-xs mt-0.5 max-w-sm" style={{ color: "var(--text-secondary)" }}>
                    Get weekly AI-generated summaries of your financial health and cash flow trends.
                  </p>
                </div>
                <ToggleSwitch checked={insightsEnabled} onChange={setInsightsEnabled} />
              </div>
            </div>
          </section>

          {/* 4. Team Access */}
          <section className="rounded-2xl p-5 md:p-6"
            style={{ background: "var(--card-bg)", border: "1px solid var(--border)", boxShadow: "0 1px 3px rgba(0,0,0,0.02)" }}>
            <SectionHeader title="Team Access" subtitle="Manage who has access to your dashboard"
              action={
                <button className="text-sm font-medium px-3 py-1.5 rounded-lg border transition-colors hover:bg-gray-50"
                  style={{ color: "var(--text-primary)", borderColor: "var(--border)" }}>
                  Invite Member
                </button>
              }
            />
            <div className="flex flex-col mt-4">
              <div className="flex items-center justify-between py-3 border-b" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}>JD</div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Jane Doe</p>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>admin@acme.ng</p>
                  </div>
                </div>
                <Badge label="Admin" variant="blue" />
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{ background: "var(--green)" }}>MA</div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Mark Attah</p>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>mark@acme.ng</p>
                  </div>
                </div>
                <Badge label="Viewer" variant="gray" />
              </div>
            </div>
          </section>

          {/* 5. Account Actions */}
          <section className="rounded-2xl p-5 md:p-6"
            style={{ background: "var(--card-bg)", border: "1px solid var(--border)", boxShadow: "0 1px 3px rgba(0,0,0,0.02)" }}>
            <SectionHeader title="Account Security" subtitle="Update your password and manage sessions" />
            <div className="flex items-center gap-3 mt-4">
              <button className="px-4 py-2.5 rounded-xl text-sm font-medium border transition-colors hover:bg-gray-50"
                style={{ background: "var(--card-bg)", borderColor: "var(--border)", color: "var(--text-primary)" }}>
                Change Password
              </button>
              <button className="px-4 py-2.5 rounded-xl text-sm font-medium border transition-colors hover:bg-red-50 text-red-600 border-red-200 bg-red-50/50">
                Sign Out Everywhere
              </button>
            </div>
          </section>

        </div>
      </div>
    </AppLayout>
  );
}
