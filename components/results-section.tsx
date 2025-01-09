'use client'

import { Button } from "@/components/ui/button"
import { Clock, ShieldCheck, LineChart, FileCheck, Settings, Eye } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function ResultsSection() {
  const { openHubspotMeeting } = useCTAForm()

  return (
    <section id="results" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900">
          360° Visibility, Zero Surprises!
        </h2>
        <div className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Settings className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Automated Verification
            </h3>
            <p className="text-lg lg:text-xl text-gray-600">
              Streamline compliance checks with automated verification processes.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FileCheck className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Custom Policy Management
            </h3>
            <p className="text-lg lg:text-xl text-gray-600">
              Write and manage custom policies that align with your standards.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Gap Detection
            </h3>
            <p className="text-lg lg:text-xl text-gray-600">
              Catch what security tools miss and close compliance gaps.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Eye className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Configuration Monitoring
            </h3>
            <p className="text-lg lg:text-xl text-gray-600">
              Ensure every critical configuration meets your standards.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Clock className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Audit Readiness
            </h3>
            <p className="text-lg lg:text-xl text-gray-600">
              Walk into every audit with confidence and preparation.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <LineChart className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Real-Time Insights
            </h3>
            <p className="text-lg lg:text-xl text-gray-600">
              Monitor compliance status with real-time visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
