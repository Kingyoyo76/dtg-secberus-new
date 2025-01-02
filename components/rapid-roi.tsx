import { Zap, DollarSign, TrendingUp, BotIcon as Robot } from 'lucide-react'

export function RapidROI() {
  return (
    <div className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Rapid ROI: Quick Results, Fraction of the Cost
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <Zap className="w-16 h-16 mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Lightning-Fast Implementation</h3>
            <p className="text-sm text-gray-600">Days, not months</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <DollarSign className="w-16 h-16 mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Significant Cost Savings</h3>
            <p className="text-sm text-gray-600">Up to 70% reduction</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <TrendingUp className="w-16 h-16 mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Measurable Impact</h3>
            <p className="text-sm text-gray-600">Visible improvements in weeks</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Robot className="w-16 h-16 mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Eliminate Manual Processing</h3>
            <p className="text-sm text-gray-600">Automate compliance tasks</p>
          </div>
        </div>
      </div>
    </div>
  )
}

