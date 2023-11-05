import { QueryOptions } from "@tanstack/query-core";
import { useQuery } from "@tanstack/react-query";

export function useReactQuery<T>(
  queryKey: [string],
  fetchFn: () => Promise<T>,
  options?: QueryOptions
): {
  data: any;
  isLoading: boolean;
  error: Error | undefined | unknown;
} {
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () => fetchFn(),
  });
  return { data, isLoading, error };
}
