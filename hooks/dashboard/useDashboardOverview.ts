import { overview } from "@/services/dashboardService";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext";

export const useDashboardOverview = () => {
  const { account } = useAuth();

  return useQuery({
    queryKey: ["dashboard-overview"],
    queryFn: () => overview(account!),
    enabled: !!account,
  });
};
