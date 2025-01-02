import { Button } from "@/components/ui/button"
import { Eye, Zap, FileCheck, Layers } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          How It Works for You
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <Eye className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Unified Visibility</h3>
            <p className="text-gray-600">See your entire compliance posture across all cloud platforms—AWS, Azure, GCP, and more.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Zap className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automated Verification</h3>
            <p className="text-gray-600">Instantly identify and resolve misconfigurations that can derail compliance.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FileCheck className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Reporting</h3>
            <p className="text-gray-600">Track your progress and prepare for audits with up-to-the-minute insights.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Layers className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
            <p className="text-gray-600">Works with your existing tools and processes, making compliance verification easier than ever.</p>
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

