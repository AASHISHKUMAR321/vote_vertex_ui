import { getAllUsers } from "@/api/admin.api";
import { GetAllUserAPIResponse } from "@/types/user.type";
import { useQuery } from "react-query";

export const useGetAllUsers = (onComplete: (data: GetAllUserAPIResponse) => void, handleError?: () => void) => {
  return useQuery({
    queryKey: ["getAllUsers"],
    queryFn: async () => await getAllUsers(),
    staleTime: 0,
    refetchOnMount: true,
    onSuccess(data) {
      onComplete && onComplete(data);
    },
    onError() {
      handleError && handleError();
    },
  });
};
