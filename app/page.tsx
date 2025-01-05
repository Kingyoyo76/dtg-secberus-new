'use client'

import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { PainPointsSection } from '@/components/pain-points-section'
import { WhatYouGetSection } from '@/components/what-you-get-section'
import { WhyWeStandOut } from '@/components/why-we-stand-out'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { ResultsSection } from '@/components/results-section'
import { TakeControlSection } from '@/components/take-control-section'
import { BackToTop } from '@/components/back-to-top'
import { Footer } from '@/components/footer'
import { FAQSection } from '@/components/faq-section'
import { InfoFooter } from '@/components/info-footer'
import SearchParamsWrapper from '@/components/search-params-wrapper'
import { InteractiveCTAButton } from '@/components/interactive-cta-button'

export default function Home() {
  return (
    <SearchParamsWrapper>
      <div>
        <Header />
        <main>
          <HeroSection />
          <PainPointsSection />
          <WhatYouGetSection />
          <WhyWeStandOut />
          <HowItWorksSection />
          <ResultsSection />
          <InteractiveCTAButton
            onClick={() => {/* Your click handler */}}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2"
          >
            Start Your Free Trial
          </InteractiveCTAButton>
          <TakeControlSection />
          <BackToTop />
          <Footer />
          <FAQSection />
          <InfoFooter />
        </main>
      </div>
    </SearchParamsWrapper>
  )
}
