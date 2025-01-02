'use client'

import { Button } from "@/components/ui/button"
import { Search, Clock, Zap } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function WhyChooseUsSection() {
  const { openHubspotMeeting } = useCTAForm()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Why Compliance Professionals Choose Us
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Search className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Uncover Hidden Risks</h3>
            <p className="text-gray-600">Uncover what other tools miss—focus on configurations critical to compliance.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Clock className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Save Time</h3>
            <p className="text-gray-600">Save time with automated verification and audit-ready insights.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Zap className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enhance Existing Tools</h3>
            <p className="text-gray-600">Seamlessly enhance your existing tools and workflows.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
            onClick={openHubspotMeeting}
          >
            See How We Simplify Compliance—Get Started Today
          </Button>
        </div>
      </div>
    </section>
  )
}
