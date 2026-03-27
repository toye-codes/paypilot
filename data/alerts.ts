import type { Alert } from "@/types";

export const alerts: Alert[] = [
  {
    type: "duplicate",
    label: "Duplicate Transactions",
    count: 2,
    items: [
      {
        id: "alert-001",
        message: "₦85,000 sale for 'Wireless Headphones' appears twice (Mar 21 & Mar 25)",
        date: "2026-03-25T10:30:00Z",
      },
      {
        id: "alert-002",
        message: "₦45,000 transfer to same account detected within 24 hours",
        date: "2026-03-24T09:00:00Z",
      },
    ],
  },
  {
    type: "unusual_spending",
    label: "Unusual Spending",
    count: 2,
    items: [
      {
        id: "alert-003",
        message: "Supplier payment of ₦320,000 is 3× your monthly average",
        date: "2026-03-25T09:00:00Z",
      },
      {
        id: "alert-004",
        message: "Smart Watch sale of ₦120,000 flagged — no matching inventory deduction",
        date: "2026-03-24T11:15:00Z",
      },
    ],
  },
  {
    type: "failed_transaction",
    label: "Failed Transactions",
    count: 1,
    items: [
      {
        id: "alert-005",
        message: "Supplier refund of ₦40,000 failed — follow up with Gadget Wholesale Ltd",
        date: "2026-03-18T11:00:00Z",
      },
    ],
  },
];
