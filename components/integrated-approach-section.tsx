import { Button } from "@/components/ui/button"
import { KeyIcon as Strategy, Shield, Search, Eye, Zap, FileCheck, Layers } from 'lucide-react'

export function IntegratedApproachSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          Complete Cloud Governance
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Our integrated approach seamlessly combines strategy, security, and insights to provide a comprehensive solution for your cloud governance needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Strategy className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Strategy & Governance</h3>
            <p className="text-gray-600">Define and adapt configuration baselines across your cloud ecosystem with continuous monitoring and real-time orchestration.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
            <p className="text-gray-600">Create custom security policies and map to any regulatory or industry compliance requirements across your tech ecosystem.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Search className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Audit & Insights</h3>
            <p className="text-gray-600">Securely query your entire tech ecosystem and gain comprehensive insights with actionable recommendations.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Eye className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Unified Visibility</h3>
            <p className="text-gray-600">See your entire compliance posture across all cloud platforms—AWS, Azure, GCP, and more—in one centralized view.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Zap className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automated Verification</h3>
            <p className="text-gray-600">Instantly identify and resolve misconfigurations that can derail compliance, saving time and reducing human error.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FileCheck className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Reporting</h3>
            <p className="text-gray-600">Track your progress and prepare for audits with up-to-the-minute insights, ensuring you're always audit-ready.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
          >
            Experience the Integrated Approach - Schedule a Demo Today
          </Button>
        </div>
      </div>
    </section>
  )
}

