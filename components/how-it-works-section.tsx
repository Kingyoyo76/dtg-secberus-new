'use client'

import { Button } from "@/components/ui/button"
import { Users, Cloud, Shield } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function HowItWorksSection() {
  const { openHubspotMeeting } = useCTAForm()

  return (
    <section id="how-it-works" className="bg-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12">
          How It Works—Simple, Flexible, Powerful
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Users className="h-12 w-12 text-white mb-4" />
            <h3 className="text-2xl font-bold mb-3">For Compliance Teams</h3>
            <p className="text-lg lg:text-xl text-gray-300">
              Designed as a system of record for compliance & risk management. Perfect for Compliance Managers and Business Owners.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Cloud className="h-12 w-12 text-white mb-4" />
            <h3 className="text-2xl font-bold mb-3">For Cloud Teams</h3>
            <p className="text-lg lg:text-xl text-gray-300">
              Built for CTO/CIO, Portfolio Teams, and Cloud Architects. Replace multiple CSP native & custom tools with one solution.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="h-12 w-12 text-white mb-4" />
            <h3 className="text-2xl font-bold mb-3">Critical Risk Management</h3>
            <p className="text-lg lg:text-xl text-gray-300">
              Enable culture change with 360° visibility. Reduce security tool noise by &gt;90% while ensuring compliance.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-white text-purple-700 hover:bg-purple-50 transition-all duration-300 text-lg px-6 py-4 sm:px-8 sm:py-6 font-semibold rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] w-full sm:w-auto"
            onClick={openHubspotMeeting}
          >
            See How It Works—Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
