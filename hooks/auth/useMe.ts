import { useQuery } from "@tanstack/react-query";
import { me } from "@/services/authService";

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: me,
    retry: false,
  });
};
