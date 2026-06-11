import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext";
import { alerts } from "@/services/dashboardService";


export const useAlerts = () => {
    const { account } = useAuth();

    return useQuery({
        queryKey: ["alerts"],
        queryFn: () => alerts(account!),
        enabled: !!account,
    })
}