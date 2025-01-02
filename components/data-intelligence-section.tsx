import { Database, Cog } from 'lucide-react'

export function DataIntelligenceSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Powered by Comprehensive Data Intelligence
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Database className="h-8 w-8 text-purple-600 mr-4" />
              <h3 className="text-xl font-semibold">Data Lakehouse</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Connect your data stack for continuous observability</li>
              <li>Agentless data ingestion from multiple sources</li>
              <li>Real-time updates on configuration changes</li>
              <li>Normalized data for cross-cloud query capability</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Cog className="h-8 w-8 text-purple-600 mr-4" />
              <h3 className="text-xl font-semibold">Policy Engine</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Leverage 500+ policy templates</li>
              <li>Create custom frameworks for your specific needs</li>
              <li>One-click mapping to regulatory requirements</li>
              <li>Guided remediation steps across cloud services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

