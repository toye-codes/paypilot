"use client";

import {
  AlertTriangle,
  Package,
  TrendingUp,
  Flag,
  Settings,
  Copy,
} from "lucide-react";
import { Notification } from "../data/notifications";
import { formatNotificationDate } from "../utils/formatDate";
import Badge from "@/shared/components/global/Badge";

interface NotificationCardProps {
  notification: Notification;
}

const typeIcons = {
  duplicate_transaction: Copy,
  low_inventory: Package,
  out_of_stock: AlertTriangle,
  unusual_spending: TrendingUp,
  flagged_transaction: Flag,
  system: Settings,
};

const severityColors = {
  low: "gray",
  medium: "yellow",
  high: "red",
  critical: "red",
} as const;

export default function NotificationCard({ notification }: NotificationCardProps) {
  const Icon = typeIcons[notification.type];
  const color = severityColors[notification.severity];

  return (
    <div
      className={`p-4 rounded-xl border transition-colors ${
        notification.isRead
          ? "bg-white border-gray-200"
          : "bg-blue-50 border-blue-200"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`p-2 rounded-lg flex-shrink-0 ${
            notification.severity === "critical" || notification.severity === "high"
              ? "bg-red-100"
              : "bg-gray-100"
          }`}
        >
          <Icon
            size={16}
            style={{
              color:
                notification.severity === "critical" || notification.severity === "high"
                  ? "var(--red)"
                  : "var(--text-secondary)",
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3
              className="text-sm font-semibold truncate"
              style={{ color: "var(--text-primary)" }}
            >
              {notification.title}
            </h3>
            <Badge label={notification.severity} variant={color} />
          </div>
          <p
            className="text-sm mt-1 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {notification.message}
          </p>
          <p
            className="text-xs mt-2"
            style={{ color: "var(--text-muted)" }}
          >
            {formatNotificationDate(notification.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
}