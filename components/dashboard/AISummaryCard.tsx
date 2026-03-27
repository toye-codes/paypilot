import { Bot } from "lucide-react";
import type { AISummary } from "@/types";

interface AISummaryCardProps {
  summary: AISummary;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-NG", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AISummaryCard({ summary }: AISummaryCardProps) {
  return (
    <div className="rounded-xl p-4" style={{ background: "var(--blue-bg)", border: "1px solid #bfdbfe" }}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-lg flex items-center justify-center"
          style={{ background: "var(--blue)" }}>
          <Bot size={13} className="text-white" />
        </div>
        <span className="text-xs font-semibold" style={{ color: "var(--blue)" }}>AI Insight</span>
      </div>
      <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
        {summary.headline}
      </p>
      <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {summary.body}
      </p>
      <p className="text-xs mt-3" style={{ color: "var(--text-muted)" }}>
        Generated {formatDate(summary.generatedAt)}
      </p>
    </div>
  );
}
