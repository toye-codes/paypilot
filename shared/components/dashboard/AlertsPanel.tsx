"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Copy,
  TrendingDown,
  XCircle,
} from "lucide-react";
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
  return new Date(iso).toLocaleDateString("en-NG", {
    day: "2-digit",
    month: "short",
  });
}

export default function AlertsPanel({ groups, totalCount }: AlertsPanelProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="bg-white shadow-xs py-2 px-4 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <AlertTriangle size={15} className="text-red-500" />
          <span className="text-sm font-semibold text-gray-900">Alerts</span>
        </div>

        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-600">
          {totalCount}
        </span>
      </div>

      {/* Groups */}
      <div className="flex flex-col gap-2">
        {groups.map((group) => {
          const isOpen = expanded === group.type;

          return (
            <div
              key={group.type}
              className="rounded-xl overflow-hidden border border-gray-200">
              {/* Group Header */}
              <button
                onClick={() => setExpanded(isOpen ? null : group.type)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-left transition-colors hover:bg-gray-50">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">
                    {alertIcon[group.type]}
                  </span>

                  <span className="text-xs font-medium text-gray-900">
                    {group.label}
                  </span>

                  <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold bg-yellow-100 text-yellow-600">
                    {group.count}
                  </span>
                </div>

                {isOpen ? (
                  <ChevronUp size={14} className="text-gray-400" />
                ) : (
                  <ChevronDown size={14} className="text-gray-400" />
                )}
              </button>

              {/* Expanded Items */}
              {isOpen && (
                <div className="border-t border-gray-200">
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      className="px-3 py-2.5 flex gap-2 border-b border-gray-200 last:border-b-0">
                      <div className="flex-1">
                        <p className="text-xs leading-relaxed text-gray-700">
                          {item.message}
                        </p>

                        <p className="text-xs mt-1 text-gray-400">
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