import { useQuery, useMutation, useQueryClient } from "react-query";
import type { APITypes } from "../index";

// Type-safe API client
class TypesafeAPIClient {
  private baseURL: string;

  constructor(baseURL: string = "") {
    this.baseURL = baseURL;
  }

  // Generic type-safe GET request
  async get<T extends keyof APITypes>(
    endpoint: T,
    params?: Record<string, string>
  ): Promise<APITypes[T]> {
    let url = `${this.baseURL}${endpoint}`;

    // Replace path parameters
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url = url.replace(`:${key}`, value);
      });
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.text() as Promise<APITypes[T]>;
  }

  // Generic type-safe POST request
  async post<T extends keyof APITypes>(
    endpoint: T,
    data?: any,
    params?: Record<string, string>
  ): Promise<APITypes[T]> {
    let url = `${this.baseURL}${endpoint}`;

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url = url.replace(`:${key}`, value);
      });
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.text() as Promise<APITypes[T]>;
  }
}

// Create a singleton API client instance
const apiClient = new TypesafeAPIClient();

// Hook for making type-safe API calls
export default function useAPI() {
  const queryClient = useQueryClient();

  // Type-safe GET hook
  const useGet = <T extends keyof APITypes>(
    endpoint: T,
    params?: Record<string, string>,
    options?: {
      enabled?: boolean;
      refetchOnWindowFocus?: boolean;
      staleTime?: number;
    }
  ) => {
    const queryKey = [endpoint, params];

    return useQuery({
      queryKey,
      queryFn: () => apiClient.get(endpoint, params),
      enabled: options?.enabled ?? true,
      refetchOnWindowFocus: options?.refetchOnWindowFocus ?? true,
      staleTime: options?.staleTime ?? 5 * 60 * 1000, // 5 minutes default
    });
  };

  // Type-safe POST hook
  const usePost = <T extends keyof APITypes>(
    endpoint: T,
    options?: {
      onSuccess?: (data: APITypes[T]) => void;
      onError?: (error: Error) => void;
    }
  ) => {
    return useMutation({
      mutationFn: (variables: {
        data?: any;
        params?: Record<string, string>;
      }) => apiClient.post(endpoint, variables.data, variables.params),
      onSuccess: options?.onSuccess,
      onError: options?.onError,
    });
  };

  // Utility function for manual API calls
  const callAPI = {
    get: apiClient.get.bind(apiClient),
    post: apiClient.post.bind(apiClient),
  };

  // Invalidate and refetch queries
  const invalidateQuery = (
    endpoint: keyof APITypes,
    params?: Record<string, string>
  ) => {
    return queryClient.invalidateQueries({ queryKey: [endpoint, params] });
  };

  return {
    useGet,
    usePost,
    callAPI,
    invalidateQuery,
  };
}

// Export types for external use
export type { APITypes };
export { apiClient };
