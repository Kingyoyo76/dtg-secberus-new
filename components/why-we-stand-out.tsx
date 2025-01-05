'use client'

import { Button } from "@/components/ui/button"
import { FileText, BarChart2, Sliders } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"

export function WhyWeStandOut() {
  const { openHubspotMeeting } = useCTAForm()

  const features = [
    {
      name: 'Custom Policies, Not Templates',
      description: 'Write, adapt, and automate policies tailored to your organization\'s needs—no more generic, out-of-the-box templates.',
      icon: FileText
    },
    {
      name: 'Real-Time Insights',
      description: 'Securely analyze, query, and verify configurations across your entire ecosystem.',
      icon: BarChart2
    },
    {
      name: 'Flexible Management',
      description: 'Designed for teams that need both simplicity and scalability to navigate highly regulated environments.',
      icon: Sliders
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
          Why Our Solution Stands Out
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center">
              <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
