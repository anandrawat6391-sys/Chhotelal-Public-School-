import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { apiRequest } from "@/lib/queryClient";

export function useCreateComplaint() {
  return useMutation({
    mutationFn: async (data: typeof api.complaints.create.input) => {
      return apiRequest(api.complaints.create.path, {
        method: "POST",
        body: data,
      });
    },
  });
}
