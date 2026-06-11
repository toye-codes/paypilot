// Auth Data

export type AuthData = {
  email: string;
  phone: string;
  password: string;
  businessName?: string;
  name?: string;
};

export type LoginPayload = {
  identifier: string,
  password: string
}

//  Transaction

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
  date: string;
  amount: number;
  type: TransactionType;
  channel: TransactionChannel;
  status: TransactionStatus;
  anomaly?: boolean;
  productId?: string;
  quantity?: number;
  flag?: {
    reason: string;
    additionalDetails?: string;
    flaggedAt: string;

    resolved?: boolean;
    resolvedAt?: string;
  };
}

// Form State
export type FormState = {
  amount: number | "";
  type: TransactionType | "";
  category: TransactionCategory | "";
  productId: "";
  quantity: number;
  channel: TransactionChannel | "";
  status: TransactionStatus | "";
  description: string;
  date: string;
};

// Alert

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
  productId: string;
  name: string;
  category: InventoryCategory;
  costPrice: number;
  sellingPrice: number;
  stockQuantity: number;
  lowStockThreshold: number;
  lastActivity?: string; // ISO string
}

export type TransactionFilters = {
  status?: Transaction["status"];
  type?: Transaction["type"];
  channel?: Transaction["channel"];
  category?: string;
};

export type InventoryFilters = {
  stockStatus?: "in_stock" | "low_stock" | "out_of_stock";
  priceRange?: [number, number];
  category?: string;
};

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
