interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function EmptyState({
  title,
  description,
  icon,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      {icon && (
        <div
          className="mb-4 w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: "var(--muted-bg)" }}>
          {icon}
        </div>
      )}
      <p
        className="text-base font-semibold"
        style={{ color: "var(--text-primary)" }}>
        {title}
      </p>
      {description && (
        <p
          className="text-sm mt-1.5 max-w-xs"
          style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>
      )}
    </div>
  );
}
