import { Button } from "@/shared/components/global/Button";
import { useInventoryForm } from "../hooks/useInventoryForm";

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

const InventoryForm = () => {
  const { formData, handleChange, handleSubmit } = useInventoryForm();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Product Name */}
      <Field label="Product Name">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Wireless Headphones"
          className={baseInputClass}
        />
      </Field>

      {/* Cost Price */}
      <Field label="Cost Price">
        <div className="relative">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium text-text-muted">
            ₦
          </span>
          <input
            type="number"
            name="costPrice"
            value={formData.costPrice}
            onChange={handleChange}
            placeholder="0.00"
            className={`${baseInputClass} pl-8`}
          />
        </div>
      </Field>

      {/* Selling Price */}
      <Field label="Selling Price">
        <div className="relative">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium text-text-muted">
            ₦
          </span>
          <input
            type="number"
            name="sellingPrice"
            value={formData.sellingPrice}
            onChange={handleChange}
            placeholder="0.00"
            className={`${baseInputClass} pl-8`}
          />
        </div>
      </Field>

      {/* Stock */}
      <Field label="Stock Quantity">
        <input
          type="number"
          name="stockQuantity"
          value={formData.stockQuantity}
          onChange={handleChange}
          placeholder="0"
          className={baseInputClass}
        />
      </Field>

      {/* Low Stock Threshold */}
      <Field label="Low Stock Threshold">
        <input
          type="number"
          name="lowStockThreshold"
          value={formData.lowStockThreshold}
          onChange={handleChange}
          placeholder="e.g. 5"
          className={baseInputClass}
        />
      </Field>

      {/* Category */}
      <Field label="Category">
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className={baseInputClass}>
          <option value="">Select category</option>
          {[
            "Electronics",
            "Clothing",
            "Food",
            "Furniture",
            "Beauty",
            "Other",
          ].map((c) => (
            <option key={c} value={c.toLowerCase()}>
              {c}
            </option>
          ))}
        </select>
      </Field>

      {/* Submit */}
      <Button type="submit">Add Product</Button>
    </form>
  );
};

export default InventoryForm;
