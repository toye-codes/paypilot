// Auth Data

export type AuthData = {
    email: string;
    password: string;
    businessName?: string;
    ownerName?: string;
}



// ─── Transaction ─────────────────────────────────────────────────────────────

export type TransactionType = "credit" | "debit";
export type TransactionCategory =
  | "sales"
  | "inventory"
  | "utilities"
  | "operations"
  | "salary"
  | "fees";
export type TransactionChannel = "transfer" | "POS" | "cash";
export type TransactionStatus = "success" | "pending" | "failed";

export interface Transaction {
  id: string;
  description: string;
  category: TransactionCategory;
  date: string; // ISO string
  amount: number;
  type: TransactionType;
  channel: TransactionChannel;
  status: TransactionStatus;
  anomaly?: boolean;
}

export type FormState = {
  amount: number | "";
  type: TransactionType | "";
  category: TransactionCategory | "";
  channel: TransactionChannel | "";
  status: TransactionStatus | "";
  description: string;
  date: string;
};

// ─── Alert ────────────────────────────────────────────────────────────────────

export type AlertType =
  | "duplicate"
  | "unusual_spending"
  | "low_stock"
  | "failed_transaction";

export interface AlertItem {
  id: string;
  message: string;
  date: string;
}

export interface Alert {
  type: AlertType;
  label: string;
  count: number;
  items: AlertItem[];
}

// ─── Stats ────────────────────────────────────────────────────────────────────

export interface Stat {
  id: string;
  label: string;
  value: number;
  trend: "up" | "down" | "neutral";
  trendPercent: number;
  color: "green" | "red" | "blue" | "yellow";
}

export interface ChartDataPoint {
  month: string;
  inflow: number;
  outflow: number;
}

// ─── Inventory ────────────────────────────────────────────────────────────────

export type InventoryCategory =
  | "electronics"
  | "clothing"
  | "food"
  | "furniture"
  | "beauty"
  | "other";

export interface InventoryItem {
  id: string;
  name: string;
  category: InventoryCategory;
  costPrice: number;
  sellingPrice: number;
  stockQuantity: number;
  lowStockThreshold: number;
  lastActivity?: string; // ISO string
}

// ─── AI Summary ──────────────────────────────────────────────────────────────

export interface AISummary {
  headline: string;
  body: string;
  generatedAt: string;
}

// ─── Team ─────────────────────────────────────────────────────────────────────

export type TeamRole = "Admin" | "Viewer";

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: TeamRole;
  avatarInitials: string;
}

// ─── Hook Return ──────────────────────────────────────────────────────────────

export interface HookState<T> {
  data: T | null;
  loading: boolean;
  empty: boolean;
  error?: string;
}
