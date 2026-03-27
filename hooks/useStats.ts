"use client";

import { useState, useEffect } from "react";
import { stats, chartData, aiSummary } from "@/data/stats";
import type { Stat, ChartDataPoint, AISummary } from "@/types";

interface StatsData {
  stats: Stat[];
  chartData: ChartDataPoint[];
  aiSummary: AISummary;
}

export function useStats() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<StatsData | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasData = stats.length > 0;
      setData(
        hasData
          ? { stats, chartData, aiSummary }
          : null
      );
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return {
    data,
    loading,
    empty: !loading && data === null,
  };
}
