import { useState, useEffect } from "react";
import { Notification, notifications } from "../data/notifications";

export function useNotifications() {
  const [data, setData] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setData(notifications);
      setLoading(false);
    }, 1000); // 1 second delay for loading state

    return () => clearTimeout(timer);
  }, []);

  return { notifications: data, loading };
}