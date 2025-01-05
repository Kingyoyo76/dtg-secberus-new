'use client'

import { Button } from "@/components/ui/button"
import { Clock, ShieldCheck, LineChart } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function ResultsSection() {
  const { openHubspotMeeting } = useCTAForm()

  return (
    <section id="results" className="bg-white h-[900px] md:h-[500px] flex items-start md:items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-start md:justify-center pt-8 md:pt-0 md:translate-y-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-16">
          360° Visibility, Zero Surprises!
        </h2>
        <div className="grid grid-cols-1 gap-12 md:gap-8 md:grid-cols-3 mb-12 md:mb-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <Clock className="h-12 w-12 text-blue-600" />
            <h3 className="text-2xl font-semibold text-gray-900">Cut Audit Preparation Time</h3>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">Cut audit preparation time by 50% with automated verification.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <ShieldCheck className="h-12 w-12 text-red-600" />
            <h3 className="text-2xl font-semibold text-gray-900">Eliminate Costly Gaps</h3>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">Eliminate costly compliance gaps caused by missed misconfigurations.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <LineChart className="h-12 w-12 text-green-600" />
            <h3 className="text-2xl font-semibold text-gray-900">Real-Time Insights</h3>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">Know exactly where you stand with real-time compliance insights.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
