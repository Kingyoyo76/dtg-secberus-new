'use client'

import { Button } from "@/components/ui/button"
import { Shield, FileText } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function SecurityComplianceSection() {
  const { openHubspotMeeting } = useCTAForm()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          Compliance Doesn't Wait. DTG Finds What Others Miss.
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Existing tools overlook basic misconfigurations. DTG helps compliance teams uncover risks, verify security findings, and avoid costly penalties.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center text-center">
            <Shield className="h-16 w-16 text-purple-600 mb-4" />
            <p className="text-xl text-gray-600">
              Security tools identify threats—but often miss critical compliance risks that matter to you.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FileText className="h-16 w-16 text-purple-600 mb-4" />
            <p className="text-xl text-gray-600">
              DTG ensures compliance gaps are found and fixed—before they become costly audit failures.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
            onClick={openHubspotMeeting}
          >
            Uncover Hidden Risks—Start Your Free Trial Today
          </Button>
        </div>
      </div>
    </section>
  )
}
