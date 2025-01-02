import Image from 'next/image'

interface TestimonialProps {
  quote: string
  author: string
  image: string
}

export function Testimonial({ quote, author, image }: TestimonialProps) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-purple-200 text-center">
      <div className="flex flex-col items-center mb-4">
        <Image src={image} alt={author} width={64} height={64} className="rounded-full mb-2" />
        <p className="font-semibold text-purple-700">{author}</p>
      </div>
      <p className="text-gray-700 italic">{quote}</p>
    </div>
  )
}

