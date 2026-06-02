"use client";

import { useNotifications } from "../hooks/useNotifications";
import NotificationCard from "./NotificationCard";
import EmptyState from "@/shared/components/global/EmptyState";

export default function NotificationList() {
  const { notifications, loading } = useNotifications();

  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="skeleton h-24 rounded-xl" />
        ))}
      </div>
    );
  }

  if (notifications.length === 0) {
    return (
      <EmptyState
        title="No notifications"
        description="You're all caught up! Check back later for updates."
      />
    );
  }

  return (
    <div className="space-y-3">
      {notifications.map((notification) => (
        <NotificationCard key={notification._id} notification={notification} />
      ))}
    </div>
  );
}