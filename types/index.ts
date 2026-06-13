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

// export type TransactionType = "credit" | "debit";
export type CreateTransactionType = "credit" | "debit" | "pending";

export type TransactionCategory =
  | "sales"
  | "inventory"
  | "utilities"
  | "operations"
  | "salary"
  | "fees";

export type CreateTransactionCategory =
  | "sales"
  | "inventory"
  | "utilities"
  | "operations"
  | "salary"
  | "fees";
export type TransactionChannel = string;
export type TransactionStatus = "success" | "pending" | "failed";

export interface Transaction {
  id: string;
  description: string;
  category: TransactionCategory;
  date: string;
  amount: number;
  type: CreateTransactionType;
  channel: TransactionChannel;
  status: TransactionStatus;
  anomaly?: boolean;
  productId?: string;
  productName?: string;
  product?: string;
  quantity?: number;
  flag?: {
    reason: string;
    additionalDetails?: string;
    flaggedAt: string;

    resolved?: boolean;
    resolvedAt?: string;
  };
}


export type CreateTransactionPayload = {
  amount: number;
  type: CreateTransactionType;
  category: CreateTransactionCategory;
  channel: string;
  product: string;
  quantity: number;
  description: string;
  date: string;
  status: TransactionStatus;
};

// Form State
export type FormState = {
  amount: number | "";
  type: CreateTransactionType | "";
  category: CreateTransactionCategory | "";
  productName: string;
  quantity: number | "";
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
