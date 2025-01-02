'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const screenshots = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Wayv0eaO8dG6vEj9hJvT6eSRP1OhdT.png",
    alt: "Frameworks management interface showing various security frameworks",
    title: "Comprehensive Framework Management"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-v6Jfs0YbHoVBje8LSxObtQSjzUHogJ.png",
    alt: "Policy management dashboard showing security policies and their status",
    title: "Policy Control Center"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K62aIRQYMo9trdDAaCqRKPntZzaVRv.png",
    alt: "Data explorer interface with SQL query capabilities",
    title: "Advanced Data Explorer"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FI62EFlRqEwkBbJlaIFX1000jKOicO.png",
    alt: "Policy browser showing AWS security policies",
    title: "Intelligent Policy Browser"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Uhfg9VkAkbkqVPuwtGwd78v0PnnAY.png",
    alt: "Security categories overview page",
    title: "Security Categories Dashboard"
  }
]

export function PlatformCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
  }

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg bg-white">
      {screenshots.map((screenshot, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
            <h3 className="text-xl font-semibold">{screenshot.title}</h3>
          </div>
        </div>
      ))}
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 z-10"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 z-10"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next</span>
      </Button>
      <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-2 z-10">
        {screenshots.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

