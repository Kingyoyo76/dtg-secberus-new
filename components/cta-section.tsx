'use client'

import { Button } from "@/components/ui/button"
import { useCTAForm } from "@/contexts/cta-form-context"

export function CTASection() {
  const { openHubspotMeeting } = useCTAForm()

  return (
    <section className="bg-purple-600 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Take Control of Your Compliance?
        </h2>
        <p className="text-xl md:text-2xl text-white mb-12 opacity-90">
          Start your journey to automated compliance verification today.
        </p>
        <Button 
          size="lg" 
          className="bg-purple-500/30 hover:bg-purple-500/40 text-white text-lg px-12 py-6 rounded-full font-semibold transition-all duration-300 border-2 border-transparent hover:border-white/20"
          onClick={openHubspotMeeting}
        >
          Take Control—Schedule a Demo
        </Button>
      </div>
    </section>
  )
}
