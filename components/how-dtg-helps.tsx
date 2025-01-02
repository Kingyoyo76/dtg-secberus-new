import { Eye, Zap, Shield } from 'lucide-react'

export function HowDTGHelps() {
  return (
    <section id="how-dtg-helps" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
          Turn Compliance Chaos Into Control
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Eye className="w-16 h-16 mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Visibility That Matters</h3>
            <p className="text-gray-600">Get a unified view of security gaps, risks, and compliance across your entire IT landscape.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Zap className="w-16 h-16 mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Automate What's Tedious</h3>
            <p className="text-gray-600">Eliminate manual checks and reduce errors with automated monitoring and reporting.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="w-16 h-16 mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Reduce Risk Proactively</h3>
            <p className="text-gray-600">Find and fix misconfigurations before they become costly problems.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

