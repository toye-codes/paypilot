import { useAuth } from "@/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { businessInsights } from "@/services/dashboardService";


export const useBusinessInsights = () => {
    const { account } = useAuth();

    return useQuery({
        queryKey: ["business-insights"],
        queryFn: () => businessInsights(account!),
        enabled: !!account
    })
}