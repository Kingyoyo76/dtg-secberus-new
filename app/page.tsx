'use client'

import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ResultsSection } from '@/components/results-section'
import { WhatYouGetSection } from '@/components/what-you-get-section'
import { WhyWeStandOut } from '@/components/why-we-stand-out'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { PainPointsSection } from '@/components/pain-points-section'
import { TakeControlSection } from '@/components/take-control-section'
import { BackToTop } from '@/components/back-to-top'
import { FAQSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { InfoFooter } from '@/components/info-footer'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <ResultsSection />
        <HowItWorksSection />
        <WhatYouGetSection />
        <WhyWeStandOut />
        <PainPointsSection />
        <FAQSection />
        <TakeControlSection />
        <BackToTop />
        <Footer />
        <InfoFooter />
      </main>
    </div>
  )
}
