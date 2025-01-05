import { Button } from "@/components/ui/button"
import { Shield, Zap, Headphones, Search, CheckSquare, DollarSign } from 'lucide-react'

export function DTGValueSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose DTG?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Partner with DTG for unmatched expertise and service in compliance solutions
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-purple-500 rounded-md shadow-lg">
                    <Shield className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Trusted Partner</h3>
                <p className="mt-5 text-base text-gray-500">
                  Over a decade of experience delivering reliable compliance solutions to enterprises
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-purple-500 rounded-md shadow-lg">
                    <Zap className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Fast Implementation</h3>
                <p className="mt-5 text-base text-gray-500">
                  Quick deployment and seamless integration with your existing infrastructure
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-purple-500 rounded-md shadow-lg">
                    <Headphones className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">24/7 Support</h3>
                <p className="mt-5 text-base text-gray-500">
                  Round-the-clock expert support to ensure your compliance success
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-purple-500 rounded-md shadow-lg">
                    <Search className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Deep Insights</h3>
                <p className="mt-5 text-base text-gray-500">
                  Advanced analytics and reporting for comprehensive compliance visibility
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-purple-500 rounded-md shadow-lg">
                    <CheckSquare className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Compliance Assurance</h3>
                <p className="mt-5 text-base text-gray-500">
                  Stay compliant with automated checks and continuous monitoring
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-purple-500 rounded-md shadow-lg">
                    <DollarSign className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Cost Effective</h3>
                <p className="mt-5 text-base text-gray-500">
                  Maximize ROI with our efficient and scalable compliance solution
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Button
            size="lg"
            className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-3 text-lg font-semibold rounded-md shadow"
            onClick={() => {}}
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  )
}
