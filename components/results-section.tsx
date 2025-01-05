'use client'

import { Button } from "@/components/ui/button"
import { Clock, ShieldCheck, LineChart } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function ResultsSection() {
  const { openHubspotMeeting } = useCTAForm()

  return (
    <section id="results" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900">
          360° Visibility, Zero Surprises!
        </h2>
        <div className="mt-12 md:mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Clock className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Cut Audit Preparation Time
            </h3>
            <p className="text-lg lg:text-xl text-gray-600">
              Cut audit preparation time by 50% with automated verification.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Eliminate Costly Gaps
            </h3>
            <p className="text-lg lg:text-xl text-gray-600">
              Eliminate costly compliance gaps caused by missed misconfigurations.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <LineChart className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Real-Time Insights
            </h3>
            <p className="text-lg lg:text-xl text-gray-600">
              Know exactly where you stand with real-time compliance insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
