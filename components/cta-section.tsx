'use client'

import { Button } from "@/components/ui/button"
import { useCTAForm } from "@/contexts/cta-form-context"

export function CTASection() {
  const { openHubspotForm } = useCTAForm()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Audit Readiness Starts with Precision
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Don't let overlooked configurations put your compliance at risk. Our solution helps you catch every gap and confidently verify your security findings.
        </p>
        <Button 
          size="lg" 
          className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto rounded-full"
          onClick={openHubspotForm}
        >
          Start Your Free Trial
        </Button>
      </div>
    </section>
  )
}
