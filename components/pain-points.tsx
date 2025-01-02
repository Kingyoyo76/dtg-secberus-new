import { AlertTriangle, Database, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PainPoints() {
  return (
    <section id="pain-points" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          Visibility, Compliance, and Risk—Everywhere You Operate
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center mb-4">
              <AlertTriangle className="w-12 h-12 mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold text-center">Blind Spots Create Risk</h3>
            </div>
            <p className="text-gray-600 text-center">Blind spots across cloud, on-prem, and hybrid systems create unnecessary risk.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center mb-4">
              <Clock className="w-12 h-12 mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold text-center">Manual Checks Overwhelm Teams</h3>
            </div>
            <p className="text-gray-600 text-center">Manual compliance checks are prone to errors and overwhelm your teams.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center mb-4">
              <Database className="w-12 h-12 mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold text-center">Fragmented Tools Obscure Visibility</h3>
            </div>
            <p className="text-gray-600 text-center">Fragmented tools make it hard to get a clear picture of your security posture.</p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="default" size="lg" className="bg-purple-500 hover:bg-purple-600 text-white text-lg py-6 px-8">
            See How DTG Eliminates Security Gaps
          </Button>
        </div>
      </div>
    </section>
  )
}

