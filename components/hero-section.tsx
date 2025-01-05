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
    <section id="hero" className="bg-purple-900 text-white">
      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-8">
          <span className="block mb-2">Eliminate Compliance Gaps.</span>
          <span className="block mb-2">Minimize Audit Risks.</span>
          <span className="block">Trust. But Verify!</span>
        </h1>
        <p className="mt-6 mb-12 text-xl sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
          Automate compliance verification, write custom policies, and ensure every critical configuration meets your standards. Catch what security tools miss, close gaps, and walk into every audit with confidence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            size="lg" 
            className="bg-white text-purple-700 hover:bg-purple-100 transition-all duration-300 text-lg px-8 py-4 font-semibold rounded-full w-full sm:w-auto flex items-center justify-center space-x-2"
            onClick={handleStartTrial}
          >
            <span>Start Your Free Trial</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 transition-all duration-300 text-lg px-8 py-4 font-semibold rounded-full w-full sm:w-auto"
            onClick={openHubspotMeeting}
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
