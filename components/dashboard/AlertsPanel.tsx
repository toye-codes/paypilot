"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, AlertTriangle, Copy, TrendingDown, XCircle } from "lucide-react";
import type { Alert, AlertType } from "@/types";

interface AlertsPanelProps {
  groups: Alert[];
  totalCount: number;
}

const alertIcon: Record<AlertType, React.ReactNode> = {
  duplicate: <Copy size={14} />,
  unusual_spending: <TrendingDown size={14} />,
  low_stock: <AlertTriangle size={14} />,
  failed_transaction: <XCircle size={14} />,
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", { day: "2-digit", month: "short" });
}

export default function AlertsPanel({ groups, totalCount }: AlertsPanelProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <AlertTriangle size={15} style={{ color: "var(--yellow)" }} />
          <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Alerts</span>
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{ background: "var(--yellow-bg)", color: "var(--yellow)" }}>
          {totalCount}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {groups.map((group) => {
          const isOpen = expanded === group.type;
          return (
            <div key={group.type} className="rounded-xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}>
              {/* Group Header */}
              <button
                onClick={() => setExpanded(isOpen ? null : group.type)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-left transition-colors hover:bg-gray-50">
                <div className="flex items-center gap-2">
                  <span style={{ color: "var(--yellow)" }}>{alertIcon[group.type]}</span>
                  <span className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>
                    {group.label}
                  </span>
                  <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold"
                    style={{ background: "var(--yellow-bg)", color: "var(--yellow)" }}>
                    {group.count}
                  </span>
                </div>
                {isOpen ? <ChevronUp size={14} style={{ color: "var(--text-muted)" }} /> : <ChevronDown size={14} style={{ color: "var(--text-muted)" }} />}
              </button>

              {/* Expanded Items */}
              {isOpen && (
                <div style={{ borderTop: "1px solid var(--border)" }}>
                  {group.items.map((item) => (
                    <div key={item.id} className="px-3 py-2.5 flex gap-2"
                      style={{ borderBottom: "1px solid var(--border)" }}>
                      <div className="flex-1">
                        <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          {item.message}
                        </p>
                        <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                          {formatDate(item.date)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
