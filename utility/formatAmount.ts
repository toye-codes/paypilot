

export function formatAmount(amount: number, type: "credit" | "debit") {
  const formatted = `₦${amount.toLocaleString()}`;
  return type === "credit" ? `+${formatted}` : `-${formatted}`;
}
