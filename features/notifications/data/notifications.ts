export interface Notification {
  _id: string;
  type: "duplicate_transaction" | "low_inventory" | "out_of_stock" | "unusual_spending" | "flagged_transaction" | "system";
  severity: "low" | "medium" | "high" | "critical";
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export const notifications: Notification[] = [
  {
    _id: "notif_001",
    type: "duplicate_transaction",
    severity: "high",
    title: "Duplicate transaction detected",
    message: "Two similar transactions were detected for the same amount and vendor. Please review to avoid double-counting.",
    isRead: false,
    createdAt: "2026-05-13T09:00:00.000Z"
  },
  {
    _id: "notif_002",
    type: "low_inventory",
    severity: "medium",
    title: "Low inventory alert",
    message: "Stock for 'Wireless Headphones' is below the minimum threshold. Consider restocking soon.",
    isRead: false,
    createdAt: "2026-05-12T14:30:00.000Z"
  },
  {
    _id: "notif_003",
    type: "out_of_stock",
    severity: "critical",
    title: "Out of stock",
    message: "The product 'USB Cable' is now out of stock. Immediate action required to restock.",
    isRead: true,
    createdAt: "2026-05-11T10:15:00.000Z"
  },
  {
    _id: "notif_004",
    type: "unusual_spending",
    severity: "high",
    title: "Unusual spending pattern",
    message: "Spending on office supplies has increased by 40% this month compared to last month.",
    isRead: false,
    createdAt: "2026-05-10T16:45:00.000Z"
  },
  {
    _id: "notif_005",
    type: "flagged_transaction",
    severity: "medium",
    title: "Flagged transaction",
    message: "A transaction has been flagged for review due to unusual amount.",
    isRead: true,
    createdAt: "2026-05-09T08:20:00.000Z"
  },
  {
    _id: "notif_006",
    type: "system",
    severity: "low",
    title: "System maintenance",
    message: "Scheduled maintenance will occur tonight from 2 AM to 4 AM. No disruptions expected.",
    isRead: false,
    createdAt: "2026-05-08T12:00:00.000Z"
  },
  {
    _id: "notif_007",
    type: "duplicate_transaction",
    severity: "medium",
    title: "Potential duplicate",
    message: "Another potential duplicate transaction found. Review recommended.",
    isRead: false,
    createdAt: "2026-05-07T11:10:00.000Z"
  },
  {
    _id: "notif_008",
    type: "low_inventory",
    severity: "low",
    title: "Inventory check",
    message: "Inventory levels are approaching minimum for several items.",
    isRead: true,
    createdAt: "2026-05-06T09:30:00.000Z"
  }
];