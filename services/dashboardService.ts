import { api } from "@/lib/api";


export const overview = async(accountId: string) => {
    const response = await api.get("/api/v1/dashboard/overview", {
        headers: {
            "x-account-id": accountId,
        }
    });
    const data = response?.data;

    return data;
}


export const alerts = async (accountId: string) => {
    const response = await api.get("/api/v1/alerts", {
        headers: {
            "x-account-id": accountId,
        }
    });
    const data = response?.data;

    return data;
}

export const businessInsights = async (accountId: string) => {
    const response = await api.get("/api/v1/ai/business-insights", {
        headers: {
            "x-account-id": accountId,
        }
    });
    const data = response?.data;

    return data;
}
