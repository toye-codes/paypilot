import { Button } from "../global/Button";
import { useTransactionForm } from "@/hooks/useTransactionForm";

const baseInputClass =
  "w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none transition focus:ring-2 focus:ring-primary/40 bg-content border-border text-text-primary placeholder:text-text-muted";

interface FieldProps {
  label: string;
  children: React.ReactNode;
}

function Field({ label, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wide text-text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}

const TransactionForm = () => {
  const { handleChange, handleSubmit, formData } = useTransactionForm();


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Amount */}
      <Field label="Amount">
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium text-text-muted">
            ₦
          </span>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="0.00"
            className={`${baseInputClass} pl-8`}
          />
        </div>
      </Field>

      {/* Type */}
      <Field label="Type">
        <select name="type" value={formData.type} onChange={handleChange} className={baseInputClass}>
          <option value="">Select type</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </Field>

      {/* Category */}
      <Field label="Category">
        <select name="category" value={formData.category} onChange={handleChange} className={baseInputClass}>
          <option value="">Select category</option>
          {[
            "Sales",
            "Inventory",
            "Utilities",
            "Operations",
            "Salary",
            "Fees",
          ].map((c) => (
            <option key={c} value={c.toLowerCase()}>
              {c}
            </option>
          ))} 
        </select>
      </Field>

      {/* Channel */}
      <Field label="Channel">
        <select name="channel" value={formData.channel} onChange={handleChange} className={baseInputClass}>
          <option value="">Select channel</option>
          <option value="transfer">Transfer</option>
          <option value="pos">POS</option>
          <option value="cash">Cash</option>
        </select>
      </Field>

      {/* Description */}
      <Field label="Description">
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="e.g. Product sale – Smart Watch"
          className={baseInputClass}
        />
      </Field>

      {/* Date */}
      <Field label="Date">
        <input type="date" name="date" value={formData.date} onChange={handleChange} className={baseInputClass} />
      </Field>

      {/* Status */}
      <Field label="Status">
        <select name="status" value={formData.status} onChange={handleChange} className={baseInputClass}>
          <option value="">Select status</option>
          <option value="success">Success</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>
      </Field>

      {/* Submit */}
      <Button type="submit">Add Transaction</Button>
    </form>
  );
};

export default TransactionForm;
