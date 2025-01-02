import Image from 'next/image'

export function DashboardShowcase() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="relative aspect-[16/9]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FlJjXI2ThnP1qLeAAQCZAWJs1IlUpZ.png"
            alt="Secberus Overview Dashboard showing comprehensive compliance and security metrics"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Comprehensive Overview Dashboard</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get a bird's-eye view of your entire compliance and security posture. 
          Monitor violations, exceptions, policies, and resources all in one place.
        </p>
      </div>
    </div>
  )
}

