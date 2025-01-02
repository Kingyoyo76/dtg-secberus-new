import { Button } from "@/components/ui/button"
import { Handshake, Zap, Headphones, Search, CheckSquare, DollarSign } from 'lucide-react'

export function DTGValueSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          DTG Gives Compliance Teams the Clarity They Need
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Search className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Catch What Security Misses</h3>
            <p className="text-gray-600">We find misconfigurations security teams overlook—before they cost you.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckSquare className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Simplify Compliance Audits</h3>
            <p className="text-gray-600">Automate reporting, track configurations, and stay audit-ready.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <DollarSign className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reduce Financial Risk</h3>
            <p className="text-gray-600">Avoid fines and penalties with real-time insights into compliance gaps.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
            See How DTG Solves Compliance Challenges
          </Button>
        </div>
      </div>
    </section>
  )
}

