"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import type { ChartDataPoint } from "@/types";

interface InflowOutflowChartProps {
  data: ChartDataPoint[];
  summary: string;
}

function formatYAxis(value: number) {
  if (value >= 1000000) return `₦${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `₦${(value / 1000).toFixed(0)}K`;
  return `₦${value}`;
}

function formatTooltip(value: any) {
  return [`₦${Number(value).toLocaleString()}`, ""];
}

export default function InflowOutflowChart({ data, summary }: InflowOutflowChartProps) {
  return (
    <div>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={formatYAxis}
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            width={55}
          />
          <Tooltip
            formatter={formatTooltip}
            contentStyle={{
              background: "white",
              border: "1px solid #e8eaf0",
              borderRadius: "10px",
              fontSize: "12px",
            }}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
          />
          <Line
            type="monotone"
            dataKey="inflow"
            name="Inflow"
            stroke="#10b981"
            strokeWidth={2.5}
            dot={{ r: 4, fill: "#10b981" }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="outflow"
            name="Outflow"
            stroke="#ef4444"
            strokeWidth={2.5}
            dot={{ r: 4, fill: "#ef4444" }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-xs mt-3 leading-relaxed px-1" style={{ color: "var(--text-secondary)" }}>
        {summary}
      </p>
    </div>
  );
}
