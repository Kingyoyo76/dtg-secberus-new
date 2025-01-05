import SearchParamsWrapper from '@/components/search-params-wrapper';

export default function TestPage() {
  return (
    <SearchParamsWrapper>
      <SearchParamsWrapper>
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl">Test Page Working</h1>
        </div>
      </SearchParamsWrapper>
    </SearchParamsWrapper>
  );
}