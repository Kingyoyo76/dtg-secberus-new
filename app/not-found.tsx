import SearchParamsWrapper from '@/components/search-params-wrapper';

export default function NotFound() {
  return (
    <SearchParamsWrapper>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">404 - Page Not Found</h1>
        <button className="mt-4 p-2 bg-blue-500 text-white rounded" onClick={() => window.location.href = '/'}>
          Return Home
        </button>
      </div>
    </SearchParamsWrapper>
  );
}