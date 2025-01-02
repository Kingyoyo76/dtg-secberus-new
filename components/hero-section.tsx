'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function HeroSection() {
  const { openHubspotForm, openHubspotMeeting } = useCTAForm()

  const handleStartTrial = () => {
    openHubspotForm()
  }

  return (
    <section id="hero" className="bg-purple-700 text-white">
      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-8">
          <span className="block mb-2">Eliminate Compliance Gaps</span>
          <span className="block mb-2">with Real-Time Insights</span>
          <span className="block">Trust. But Verify!</span>
        </h1>
        <p className="mt-6 mb-12 text-lg sm:text-xl font-light max-w-3xl mx-auto leading-relaxed">
          <strong>Automate compliance verification, write custom policies, and ensure every critical configuration meets your standards. Achieve audit readiness with cloud compliance solutions that catch what security tools miss.</strong>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            size="lg" 
            className="bg-white text-purple-700 hover:bg-purple-100 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-bold shadow-lg hover:shadow-xl rounded-full flex items-center justify-center space-x-2"
            onClick={handleStartTrial}
          >
            <span>Start Your Free Trial</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-full"
            onClick={openHubspotMeeting}
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
