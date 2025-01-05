'use client'

import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield, Clock } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function PainPointsSection() {
  const { openHubspotMeeting } = useCTAForm()

  return (
    <section className="bg-purple-700 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            Don't Let Hidden Gaps Derail Your Compliance Efforts
          </h2>
          <div className="mt-12 md:mt-24 lg:mt-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="flex flex-col items-center text-center">
                <AlertTriangle className="h-12 w-12 text-white mb-3" />
                <h3 className="text-2xl md:text-2xl font-bold mb-3">Costly Misconfigurations</h3>
                <p className="text-lg md:text-xl text-purple-100">Basic misconfigurations can cost millions in penalties.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-white mb-3" />
                <h3 className="text-2xl md:text-2xl font-bold mb-3">Overlooked Compliance Issues</h3>
                <p className="text-lg md:text-xl text-purple-100">Security tools check everything—but they miss what matters to compliance.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-white mb-3" />
                <h3 className="text-2xl md:text-2xl font-bold mb-3">Time-Consuming Manual Checks</h3>
                <p className="text-lg md:text-xl text-purple-100">Manual verification wastes time and creates gaps auditors will find.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
