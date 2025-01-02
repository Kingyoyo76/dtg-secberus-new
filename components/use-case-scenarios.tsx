import { Button } from '@/components/ui/button'

export function UseCaseScenarios() {
  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
          Real-World Impact Across Industries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Healthcare: $1.2M in Fines Avoided</h3>
            <p className="mb-4">A Fortune 500 healthcare company used DTG to uncover critical HIPAA compliance gaps, avoiding potential fines and strengthening patient data protection.</p>
            <Button variant="outline" className="w-full">Read Case Study</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Finance: 70% Faster Audit Prep</h3>
            <p className="mb-4">A global bank streamlined their compliance processes with DTG, reducing audit preparation time by 70% and enhancing overall security posture.</p>
            <Button variant="outline" className="w-full">Read Case Study</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Retail: 99.9% Uptime Achieved</h3>
            <p className="mb-4">A major e-commerce platform leveraged DTG to ensure PCI DSS compliance, resulting in enhanced security and 99.9% uptime for their payment systems.</p>
            <Button variant="outline" className="w-full">Read Case Study</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

