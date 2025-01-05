'use client'

import { Button } from "@/components/ui/button"
import { useCTAForm } from "@/contexts/cta-form-context"

export function TakeControlSection() {
  const { openHubspotForm } = useCTAForm()

  return (
    <div className="bg-purple-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 sm:py-24 lg:py-32">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to Take Control of Your Compliance?</span>
          </h2>
          <p className="mt-4 text-xl leading-6 text-purple-100 font-medium">
            Start your journey to automated compliance verification today.
          </p>
          <div className="mt-8">
            <Button
              size="cta"
              variant="primary"
              className="w-full sm:w-auto mx-auto"
              onClick={openHubspotForm}
            >
              Take Control—Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
