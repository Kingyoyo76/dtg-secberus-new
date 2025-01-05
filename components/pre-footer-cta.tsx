'use client'

import Image from 'next/image'
import { Plus } from 'lucide-react'

export function PreFooterCTA() {
  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Eliminate Gaps. Minimize Risks. Verify with Confidence.
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          Ready to transform your compliance process? Get in touch with our experts today.
        </p>
        <div className="flex justify-center items-center space-x-8">
          <div className="h-8">
            <svg width="200" height="50" viewBox="0 0 200 50" className="h-full w-auto">
              <text x="0" y="35" fill="white" className="text-2xl font-bold">DTG</text>
            </svg>
          </div>
          <Plus className="h-6 w-6 text-purple-400" />
          <div className="h-8">
            <svg width="200" height="50" viewBox="0 0 200 50" className="h-full w-auto">
              <text x="0" y="35" fill="white" className="text-2xl font-bold">secberus</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
