// Helper functions for API calls and other utilities

export const getReferrer = (searchParams: URLSearchParams | null) => {
  return searchParams ? searchParams.get('from') || '/' : '/';
};
