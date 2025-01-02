import { Button } from '@/components/ui/button'

export function RealWorldUseCases() {
  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
          Imagine This...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Streamlined Compliance Audit</h3>
            <p className="mb-4">Your cloud compliance audit is due, but manual checks have slowed your team. DTG automates the process, uncovering 12 critical gaps and reducing audit prep by 70%.</p>
            <Button variant="outline" className="w-full">Learn More</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Multi-Cloud Risk Management</h3>
            <p className="mb-4">Misconfigurations across AWS, Azure, and GCP are creating unknown risks. DTG's platform reveals blind spots instantly, saving you from costly fines and potential breaches.</p>
            <Button variant="outline" className="w-full">Learn More</Button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="default" size="lg" className="bg-purple-500 hover:bg-purple-600 text-white text-lg py-6 px-8">
            Schedule Your Free Risk Assessment Today
          </Button>
        </div>
      </div>
    </section>
  )
}

