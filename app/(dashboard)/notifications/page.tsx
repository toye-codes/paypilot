"use client";

import AppLayout from "@/shared/components/global/AppLayout";
import SectionHeader from "@/shared/components/global/SectionHeader";
import NotificationList from "@/features/notifications/components/NotificationList";

export default function NotificationsPage() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Notifications"
          subtitle="Stay updated on important alerts and system events"
        />
        <div className="mt-6">
          <NotificationList />
        </div>
      </div>
    </AppLayout>
  );
}