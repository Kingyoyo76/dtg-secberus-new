'use client'

import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield, Clock } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function PainPointsSection() {
  return (
    <section className="bg-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Don't Let Hidden Gaps Derail Your Compliance Efforts
        </h2>
        <div className="mt-12 md:mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <AlertTriangle className="h-12 w-12 text-white mb-2" />
            <h3 className="text-2xl font-bold mb-3">
              Costly Misconfigurations
            </h3>
            <p className="text-lg lg:text-xl text-purple-100">
              Basic misconfigurations can cost millions in penalties.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="h-12 w-12 text-white mb-2" />
            <h3 className="text-2xl font-bold mb-3">
              Overlooked Compliance Issues
            </h3>
            <p className="text-lg lg:text-xl text-purple-100">
              Security tools check everything—but they miss what matters to compliance.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Clock className="h-12 w-12 text-white mb-2" />
            <h3 className="text-2xl font-bold mb-3">
              Time-Consuming Manual Checks
            </h3>
            <p className="text-lg lg:text-xl text-purple-100">
              Manual verification wastes time and creates gaps auditors will find.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
