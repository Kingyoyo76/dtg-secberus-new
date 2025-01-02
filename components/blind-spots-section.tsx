import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield, Eye } from 'lucide-react'

export function BlindSpotsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Eliminate Hidden Risks Before They Become Costly Problems
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <AlertTriangle className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">What Could Go Wrong?</h3>
            <p className="text-gray-600">Missed misconfigurations—like an unsecured cloud storage bucket—have led to millions in penalties.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Why It Happens</h3>
            <p className="text-gray-600">Security tools focus on threats, not the fine details compliance demands. That's where our solution comes in—finding what others miss.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Eye className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">What You Get</h3>
            <p className="text-gray-600">Complete visibility, actionable insights, and a safety net for your compliance requirements.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
          >
            See What You've Been Missing—Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  )
}

