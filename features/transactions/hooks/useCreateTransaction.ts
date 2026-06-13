import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext";
import { createTransactionService } from "@/services/transactionService";
import { CreateTransactionPayload } from "@/types";

export const useCreateTransaction = () => {
  const { account } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (transactionPayload: CreateTransactionPayload) =>
      createTransactionService(account!, transactionPayload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactions", account],
      });

      queryClient.invalidateQueries({
        queryKey: ["overview", account],
      });

      queryClient.invalidateQueries({
        queryKey: ["alerts", account],
      });
    },

    onError: (error: any) => {
      console.error(
        "Failed to create transaction:",
        error.response?.data || error,
      );
    },

    onSettled: () => {
      console.log("Transaction request completed.");
    },
  });
};
