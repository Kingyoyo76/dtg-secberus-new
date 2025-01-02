import { Button } from "@/components/ui/button"
import { Eye, Zap, Settings, BarChart } from 'lucide-react'

export function SecberusFeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          What Makes Secberus the Right Choice?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <Eye className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Full Visibility</h3>
            <p className="text-gray-600">Unified visibility across AWS, Azure, and GCP.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Zap className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automated Compliance</h3>
            <p className="text-gray-600">Track compliance status and misconfigurations in real-time.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Settings className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Policy Customization</h3>
            <p className="text-gray-600">Easily tailor compliance policies to your organization's needs.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <BarChart className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Actionable Insights</h3>
            <p className="text-gray-600">Identify and fix vulnerabilities before they impact your business.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
            Explore Secberus with DTG—Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

