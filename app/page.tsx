'use client'

import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { PainPointsSection } from '@/components/pain-points-section'
import { WhatYouGetSection } from '@/components/what-you-get-section'
import { WhyWeStandOut } from '@/components/why-we-stand-out'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { ResultsSection } from '@/components/results-section'
import { CTASection } from '@/components/cta-section'
import { TakeControlSection } from '@/components/take-control-section'
import { BackToTop } from '@/components/back-to-top'
import { Footer } from '@/components/footer'
import { FAQSection } from '@/components/faq-section'
import { InfoFooter } from '@/components/info-footer'
import SearchParamsWrapper from '@/components/search-params-wrapper'

export default function Home() {
  return (
    <SearchParamsWrapper>
      <>
        <Header />
        <main>
          <HeroSection />
          <PainPointsSection />
          <WhatYouGetSection />
          <WhyWeStandOut />
          <HowItWorksSection />
          <ResultsSection />
          <CTASection />
          <TakeControlSection />
          <BackToTop />
          <Footer />
          <FAQSection />
          <InfoFooter />
        </main>
      </>
    </SearchParamsWrapper>
  )
}
