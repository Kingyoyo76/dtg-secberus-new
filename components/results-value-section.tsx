import { Button } from "@/components/ui/button"
import { DollarSign, Zap, CheckCircle } from 'lucide-react'

export function ResultsValueSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Proven Outcomes for Compliance Teams
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <DollarSign className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">$500K Saved</h3>
            <p className="text-gray-600">Catch 15+ misconfigurations before your next audit—saving $500K in penalties.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Zap className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Simplified Compliance</h3>
            <p className="text-gray-600">Simplify compliance with automated insights tailored to your needs.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">100% Audit Readiness</h3>
            <p className="text-gray-600">Stay prepared for audits with continuous compliance monitoring.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
          >
            Achieve These Results—Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  )
}

