const inputClass = `w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none transition-colors focus:ring-2`;
const inputStyle = {
  background: "var(--content-bg)",
  border: "1px solid var(--border)",
  color: "var(--text-primary)",
};

interface FieldProps {
  label: string;
  children: React.ReactNode;
}

function Field({ label, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wide"
        style={{ color: "var(--text-muted)" }}>{label}</label>
      {children}
    </div>
  );
}

export function TransactionForm() {
  return (
    <div className="flex flex-col gap-5">
      <Field label="Amount">
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium"
            style={{ color: "var(--text-muted)" }}>₦</span>
          <input type="number" placeholder="0.00" className={inputClass}
            style={{ ...inputStyle, paddingLeft: "2rem" }} />
        </div>
      </Field>

      <Field label="Type">
        <select className={inputClass} style={inputStyle}>
          <option value="">Select type</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </Field>

      <Field label="Category">
        <select className={inputClass} style={inputStyle}>
          <option value="">Select category</option>
          {["Sales", "Inventory", "Utilities", "Operations", "Salary", "Fees"].map((c) => (
            <option key={c} value={c.toLowerCase()}>{c}</option>
          ))}
        </select>
      </Field>

      <Field label="Channel">
        <select className={inputClass} style={inputStyle}>
          <option value="">Select channel</option>
          <option value="transfer">Transfer</option>
          <option value="POS">POS</option>
          <option value="cash">Cash</option>
        </select>
      </Field>

      <Field label="Description">
        <input type="text" placeholder="e.g. Product sale – Smart Watch" className={inputClass} style={inputStyle} />
      </Field>

      <Field label="Date">
        <input type="date" className={inputClass} style={inputStyle} />
      </Field>

      <Field label="Status">
        <select className={inputClass} style={inputStyle}>
          <option value="">Select status</option>
          <option value="success">Success</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>
      </Field>

      <button className="w-full py-3 rounded-xl text-sm font-semibold text-white mt-2 transition-opacity hover:opacity-90"
        style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}>
        Add Transaction
      </button>
    </div>
  );
}

export function InventoryForm() {
  return (
    <div className="flex flex-col gap-5">
      <Field label="Product Name">
        <input type="text" placeholder="e.g. Wireless Headphones" className={inputClass} style={inputStyle} />
      </Field>

      <Field label="Cost Price (₦)">
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium"
            style={{ color: "var(--text-muted)" }}>₦</span>
          <input type="number" placeholder="0.00" className={inputClass}
            style={{ ...inputStyle, paddingLeft: "2rem" }} />
        </div>
      </Field>

      <Field label="Selling Price (₦)">
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium"
            style={{ color: "var(--text-muted)" }}>₦</span>
          <input type="number" placeholder="0.00" className={inputClass}
            style={{ ...inputStyle, paddingLeft: "2rem" }} />
        </div>
      </Field>

      <Field label="Stock Quantity">
        <input type="number" placeholder="0" className={inputClass} style={inputStyle} />
      </Field>

      <Field label="Category (Optional)">
        <select className={inputClass} style={inputStyle}>
          <option value="">Select category</option>
          {["Electronics", "Clothing", "Food", "Furniture", "Beauty", "Other"].map((c) => (
            <option key={c} value={c.toLowerCase()}>{c}</option>
          ))}
        </select>
      </Field>

      <button className="w-full py-3 rounded-xl text-sm font-semibold text-white mt-2 transition-opacity hover:opacity-90"
        style={{ background: "linear-gradient(135deg, #10b981, #3b82f6)" }}>
        Add Product
      </button>
    </div>
  );
}
