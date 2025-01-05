'use client'

import { Button } from "@/components/ui/button"
import { useCTAForm } from "@/contexts/cta-form-context"

export function ScheduleDemoSection() {
  const { openHubspotMeeting } = useCTAForm()

  return (
    <section className="bg-purple-700 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to See Secberus in Action?
        </h2>
        <p className="mt-4 text-lg text-purple-100 font-normal sm:font-light">
          Schedule a personalized demo with our team and discover how Secberus can transform your compliance process.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            className="bg-white text-purple-700 hover:bg-purple-50 transition-all duration-300 text-lg px-8 py-4 font-semibold sm:font-bold shadow-lg hover:shadow-xl rounded-full w-full sm:w-auto"
            onClick={openHubspotMeeting}
          >
            Schedule Your Demo Today
          </Button>
        </div>
      </div>
    </section>
  )
}
