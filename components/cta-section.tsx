'use client'

import { Button } from "@/components/ui/button"
import { useCTAForm } from "@/contexts/cta-form-context"

export function CTASection() {
  const { openHubspotForm } = useCTAForm()

  return (
    <section className="bg-purple-700 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Button 
          size="cta" 
          variant="primary"
          className="w-full sm:w-auto mx-auto"
          onClick={openHubspotForm}
        >
          Schedule a Demo
        </Button>
      </div>
    </section>
  )
}
