import { CheckCircle, Rocket, Lock } from 'lucide-react'

export function WhyChooseDTG() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
          Why Organizations Choose DTG
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-16 h-16 mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Deep Expertise</h3>
            <p className="text-gray-600">We combine decades of experience with leading technology to deliver practical security and compliance solutions.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Rocket className="w-16 h-16 mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Technology That Works</h3>
            <p className="text-gray-600">We help you turn complex platforms into real results, tailored to your needs.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Lock className="w-16 h-16 mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Fast ROI</h3>
            <p className="text-gray-600">Automate time-consuming compliance tasks and focus on protecting your business.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

