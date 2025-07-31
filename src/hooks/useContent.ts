import useAPI from './useAPI';

export default function useContent(page: string) {
  const { useGet } = useAPI();

  const {
    data: content,
    isLoading,
    error,
    refetch
  } = useGet('/content/:page', { page }, {
    enabled: !!page,
    refetchOnWindowFocus: false,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  return {
    content,
    isLoading,
    error,
    refetch,
  };
}