import { useMutation } from "@tanstack/react-query";
import { loginService } from "@/services/authService";


export const useLoginMutation = () => {
    return useMutation({
        mutationFn: loginService
    })
};