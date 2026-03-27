interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export default function SectionHeader({ title, subtitle, action }: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-5">
      <div>
        <h2 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>{title}</h2>
        {subtitle && (
          <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>{subtitle}</p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
