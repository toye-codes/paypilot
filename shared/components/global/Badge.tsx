interface BadgeProps {
  label: string;
  variant?: "green" | "red" | "yellow" | "blue" | "gray";
}

const variantStyles: Record<string, React.CSSProperties> = {
  green: { background: "var(--success-bg)", color: "var(--success)" },
  red: { background: "var(--danger-bg)", color: "var(--danger)" },
  yellow: { background: "var(--warning-bg)", color: "var(--warning)" },
  blue: { background: "var(--blue-bg)", color: "var(--blue)" },
  gray: { background: "var(--muted-bg)", color: "var(--text-secondary)" },
};

export default function Badge({ label, variant = "gray" }: BadgeProps) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
      style={variantStyles[variant]}>
      {label}
    </span>
  );
}
