import { Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface AISummaryCardProps {
  summary: {
    success: boolean;
    insights: string;
  };
}

export default function AISummaryCard({ summary }: AISummaryCardProps) {
  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: "var(--blue-bg)",
        border: "1px solid var(--blue-border)",
      }}>
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-6 h-6 rounded-lg flex items-center justify-center"
          style={{ background: "var(--blue)" }}>
          <Bot size={13} className="text-white" />
        </div>

        <span
          className="text-xs font-semibold"
          style={{ color: "var(--blue)" }}>
          Business Insights
        </span>
      </div>

      <div
        className="prose prose-sm max-w-none text-xs leading-relaxed"
        style={{ color: "var(--text-secondary)" }}>
        <ReactMarkdown>{summary.insights}</ReactMarkdown>
      </div>
    </div>
  );
}
