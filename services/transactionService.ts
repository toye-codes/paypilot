import { api } from "@/lib/api";
import { CreateTransactionPayload } from "@/types";

export const getTransactions = async (accountId: string) => {
    const response = await api.get("/api/v1/transaction/all", {
        headers: {
            "x-account-id": accountId
        }
    })

    const data = response?.data;

    console.log(data)
    return data;
}

export const createTransactionService = async (accountId: string, transactionPayload: CreateTransactionPayload) => {
    console.log("transaction Payload",transactionPayload)

    const response = await api.post("/api/v1/transaction/create", transactionPayload, {
        headers: {
            "x-account-id": accountId
        }
    })

    const data = response?.data
    return data;
}
