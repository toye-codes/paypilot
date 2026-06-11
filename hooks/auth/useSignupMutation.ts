import { useMutation } from "@tanstack/react-query";
import { signupService } from "@/services/authService";


export const useSignupMutation = () => {
   return useMutation({
        mutationFn: signupService
    })
};