import { Button } from "@/components/ui/button"
import { Clock, Target, CheckCircle } from 'lucide-react'

export function RapidROISection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Deliver Results That Matter—Fast
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Clock className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">40% Time Saved</h3>
            <p className="text-gray-600">Reduce manual compliance verification time by 40%.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Target className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">12+ Misconfigurations</h3>
            <p className="text-gray-600">Identify 12+ critical misconfigurations within 30 days.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">99% Accuracy</h3>
            <p className="text-gray-600">Ensure audit readiness with 99% configuration accuracy.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
          >
            Discover Your ROI—Schedule a Free Assessment
          </Button>
        </div>
      </div>
    </section>
  )
}

