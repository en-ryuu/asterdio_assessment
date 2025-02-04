import { toaster } from "@/components/ui/toaster";
import { IWithChildrenProps } from "@/types/commonTypes";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export default function QueryProviderWrapper({ children }: IWithChildrenProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        staleTime: 30 * 1000,
      },
    },
    queryCache: new QueryCache({
      onError: async (error) => {
        const err = error as AxiosError<{ message: string }>;

        if (err.request?.status === 500) {
          // Handle internal server error
          toaster.error({
            title: "Server Error",
            description:
              "Something went wrong on our end. Please try again later.",
          });
        } else {
          // Generic error handling
          toaster.error({
            title: "Uh oh! Something went wrong.",
            description:
              err.response?.data?.message ||
              "There was a problem with your request.",
          });
        }
      },
    }),
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
