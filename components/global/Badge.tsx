interface BadgeProps {
  label: string;
  variant?: "green" | "red" | "yellow" | "blue" | "gray";
}

const variantStyles: Record<string, React.CSSProperties> = {
  green: { background: "var(--green-bg)", color: "var(--green)" },
  red: { background: "var(--red-bg)", color: "var(--red)" },
  yellow: { background: "var(--yellow-bg)", color: "var(--yellow)" },
  blue: { background: "var(--blue-bg)", color: "var(--blue)" },
  gray: { background: "#f3f4f6", color: "#6b7280" },
};

export default function Badge({ label, variant = "gray" }: BadgeProps) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
      style={variantStyles[variant]}
    >
      {label}
    </span>
  );
}
