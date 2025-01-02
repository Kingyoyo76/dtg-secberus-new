import Image from 'next/image'

export function TrustedBy() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Trusted By Industry Leaders</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Replace these with actual client logos */}
          <Image src="/placeholder.svg?height=50&width=150&text=Client+1" alt="Client 1" width={150} height={50} />
          <Image src="/placeholder.svg?height=50&width=150&text=Client+2" alt="Client 2" width={150} height={50} />
          <Image src="/placeholder.svg?height=50&width=150&text=Client+3" alt="Client 3" width={150} height={50} />
          <Image src="/placeholder.svg?height=50&width=150&text=Client+4" alt="Client 4" width={150} height={50} />
          <Image src="/placeholder.svg?height=50&width=150&text=Client+5" alt="Client 5" width={150} height={50} />
        </div>
      </div>
    </section>
  )
}

