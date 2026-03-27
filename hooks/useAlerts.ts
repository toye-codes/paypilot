"use client";

import { useState, useEffect } from "react";
import { alerts } from "@/data/alerts";
import type { Alert } from "@/types";

interface AlertsData {
  groups: Alert[];
  totalCount: number;
}

export function useAlerts() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<AlertsData | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (alerts.length > 0) {
        const totalCount = alerts.reduce((sum, a) => sum + a.count, 0);
        setData({ groups: alerts, totalCount });
      }
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return {
    data,
    loading,
    empty: !loading && data === null,
  };
}
