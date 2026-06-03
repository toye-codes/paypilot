"use client";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (val: boolean) => void;
  label?: string;
}

export default function ToggleSwitch({
  checked,
  onChange,
  label,
}: ToggleSwitchProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      {label && (
        <span className="text-sm" style={{ color: "var(--text-primary)" }}>
          {label}
        </span>
      )}
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className="relative w-10 h-5.5 rounded-full transition-colors duration-200 focus:outline-none flex-shrink-0"
        style={{
          background: checked ? "var(--primary)" : "var(--border)",
          height: "22px",
          width: "40px",
        }}>
        <span
          className="absolute top-0.5 left-0.5 w-4.5 h-4.5 bg-white rounded-full shadow transition-transform duration-200"
          style={{
            width: "18px",
            height: "18px",
            transform: checked ? "translateX(18px)" : "translateX(0)",
          }}
        />
      </button>
    </label>
  );
}
