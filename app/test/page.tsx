import SearchParamsWrapper from '@/components/search-params-wrapper';
import { InteractiveCTAButton } from '@/components/interactive-cta-button';

export default function TestPage() {
  return (
    <SearchParamsWrapper>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Test Page Working</h1>
        <InteractiveCTAButton
          onClick={() => {/* Your click handler */}}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2"
        >
          Go to Home
        </InteractiveCTAButton>
      </div>
    </SearchParamsWrapper>
  );
}