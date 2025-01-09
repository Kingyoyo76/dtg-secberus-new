import { Button } from "@/components/ui/button"
import { Cloud, Workflow, Wrench, Cog } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          How We Deliver
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <Cloud className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud Integration</h3>
            <p className="text-gray-600">Direct integration with your cloud infrastructure for comprehensive coverage.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Workflow className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Continuous Assessment</h3>
            <p className="text-gray-600">24/7 monitoring and assessment of your compliance status.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Wrench className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Policy Engine</h3>
            <p className="text-gray-600">Advanced policy engine that translates compliance requirements into actionable rules.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Cog className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automated Remediation</h3>
            <p className="text-gray-600">Built-in remediation workflows to fix issues automatically.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
          >
            Simplify Compliance—Get Started Today
          </Button>
        </div>
      </div>
    </section>
  )
}
