'use client'

import { Button } from "@/components/ui/button"
import { EyeOff, AlertCircle, Database } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function ProblemSolutionSection() {
  const { openHubspotMeeting } = useCTAForm()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Are You Struggling to Secure Your Cloud Environments?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <EyeOff className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Blind Spots</h3>
            <p className="text-gray-600">Lack visibility into misconfigurations across multi-cloud environments.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <AlertCircle className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Manual Compliance</h3>
            <p className="text-gray-600">Audit prep and security checks are slow, manual, and error-prone.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Database className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Siloed Data</h3>
            <p className="text-gray-600">Fragmented tools make security reporting complex and overwhelming.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-purple-600 text-white hover:bg-purple-700"
            onClick={openHubspotMeeting}
          >
            See Secberus in Action—Schedule a Call with DTG
          </Button>
        </div>
      </div>
    </section>
  )
}
