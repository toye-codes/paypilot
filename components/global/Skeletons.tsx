export function SkeletonCard() {
  return (
    <div className="rounded-2xl p-5 flex flex-col gap-3"
      style={{ background: "var(--card-bg)", border: "1px solid var(--border)" }}>
      <div className="flex items-center justify-between">
        <div className="skeleton h-4 w-28" />
        <div className="skeleton w-8 h-8 rounded-xl" />
      </div>
      <div className="skeleton h-7 w-36" />
      <div className="skeleton h-3.5 w-24" />
    </div>
  );
}

export function SkeletonRow() {
  return (
    <tr>
      <td className="px-4 py-3"><div className="skeleton h-4 w-40" /></td>
      <td className="px-4 py-3"><div className="skeleton h-5 w-20 rounded-full" /></td>
      <td className="px-4 py-3"><div className="skeleton h-4 w-24" /></td>
      <td className="px-4 py-3 text-right"><div className="skeleton h-4 w-20 ml-auto" /></td>
    </tr>
  );
}

export function SkeletonText({ width = "100%", height = "1rem" }: { width?: string; height?: string }) {
  return <div className="skeleton" style={{ width, height }} />;
}

export function SkeletonInventoryCard() {
  return (
    <div className="rounded-2xl p-5 flex flex-col gap-3"
      style={{ background: "var(--card-bg)", border: "1px solid var(--border)" }}>
      <div className="flex justify-between">
        <div className="skeleton h-4 w-32" />
        <div className="skeleton h-5 w-16 rounded-full" />
      </div>
      <div className="skeleton h-3.5 w-20 mt-1" />
      <div className="flex gap-4 mt-2">
        <div className="skeleton h-3.5 w-24" />
        <div className="skeleton h-3.5 w-24" />
      </div>
      <div className="skeleton h-3.5 w-16 mt-1" />
    </div>
  );
}
