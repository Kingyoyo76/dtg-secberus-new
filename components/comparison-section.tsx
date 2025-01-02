import { Button } from "@/components/ui/button"
import { Check, Zap, DollarSign, UserCheck } from 'lucide-react'

export function ComparisonSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          Why Our Solution Stands Out
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Purpose-built for compliance teams, our platform delivers immediate value without the complexity of traditional security tools.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
            <div className="flex flex-col items-center text-center">
              <Check className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Purpose-Built for Compliance</h3>
              <p className="text-gray-600">Designed specifically for highly contextual compliance data and GRC requirements in regulated industries.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
            <div className="flex flex-col items-center text-center">
              <Zap className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Immediate Time-to-Value</h3>
              <p className="text-gray-600">Get started quickly with minimal setup. Built-in cloud resource knowledge means faster implementation.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
            <div className="flex flex-col items-center text-center">
              <DollarSign className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Consumption-based model that's cost-effective and easy to understand. Only pay for what you use.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
            <div className="flex flex-col items-center text-center">
              <UserCheck className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">User-Friendly Design</h3>
              <p className="text-gray-600">Intuitive interface designed for compliance teams, not engineers. Minimal learning curve required.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-purple-50 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Built Different: A True Compliance-First Solution
            </h3>
            <p className="text-gray-600 mb-6">
              While others focus on general security or data analytics, our solution is specifically engineered for compliance and GRC professionals. Get the contextual insights you need without the complexity of traditional tools.
            </p>
            <Button 
              size="lg" 
              className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
            >
              See How We Compare - Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

