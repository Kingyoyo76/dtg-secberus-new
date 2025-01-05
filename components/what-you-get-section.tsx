'use client'

import { Button } from "@/components/ui/button"
import { Sliders, PenTool, Target, LayoutDashboard, FileCheck, GitBranch } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function WhatYouGetSection() {
  const { openHubspotForm } = useCTAForm()

  return (
    <section id="what-you-get" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
          What You Get with Our Solution
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Sliders className="h-12 w-12 text-purple-600 mb-4" aria-label="Custom compliance baselines icon" />
            <h2 className="text-2xl font-semibold mb-2">Custom Compliance Baselines</h2>
            <p className="text-xl text-gray-600 font-medium">Define the policies that matter to you and automate checks against your specific compliance standards.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <PenTool className="h-12 w-12 text-purple-600 mb-4" aria-label="Custom policy creation icon" />
            <h2 className="text-2xl font-semibold mb-2">Custom Policy Creation</h2>
            <p className="text-xl text-gray-600 font-medium">Easily write, adapt, and automate policies specific to your organization's needs—no more relying on generic, out-of-the-box templates.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Target className="h-12 w-12 text-purple-600 mb-4" aria-label="Targeted verification icon" />
            <h2 className="text-2xl font-semibold mb-2">Targeted Verification</h2>
            <p className="text-xl text-gray-600 font-medium">Catch specific misconfigurations security tools might overlook, ensuring critical gaps are addressed with real-time compliance insights.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <LayoutDashboard className="h-12 w-12 text-purple-600 mb-4" aria-label="Unified visibility dashboard icon" />
            <h2 className="text-2xl font-semibold mb-2">Unified Visibility</h2>
            <p className="text-xl text-gray-600 font-medium">See your entire compliance posture across AWS, Azure, GCP, and more—all in one centralized cloud compliance solution.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FileCheck className="h-12 w-12 text-purple-600 mb-4" aria-label="Real-time audit readiness icon" />
            <h2 className="text-2xl font-semibold mb-2">Real-Time Audit Readiness</h2>
            <p className="text-xl text-gray-600 font-medium">Prepare for audits faster with automated verification and up-to-the-minute reporting for continuous compliance.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <GitBranch className="h-12 w-12 text-purple-600 mb-4" aria-label="Flexible policy mapping icon" />
            <h2 className="text-2xl font-semibold mb-2">Flexible Policy Mapping</h2>
            <p className="text-xl text-gray-600 font-medium">Align your policies with the latest regulatory changes effortlessly, ensuring ongoing compliance automation.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 text-lg px-8 py-4 font-semibold rounded-full w-full sm:w-auto shadow-md"
            onClick={openHubspotForm}
          >
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  )
}
