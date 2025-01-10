'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"
import Image from 'next/image'
import { useState, useEffect } from 'react'

export function HeroSection() {
  const { openHubspotForm, openHubspotMeeting } = useCTAForm()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)

  const images = [
    {
      src: "/images/secberus-governance-diagram.png?v=2",
      alt: "Secberus Governance vs Risk vs Compliance Diagram"
    },
    {
      src: "/images/SECBERUS-COVERAGE-POSITIONING.png",
      alt: "Secberus Coverage Positioning"
    },
    {
      src: "/images/tools.png",
      alt: "Secberus Tools and Integrations"
    }
  ]

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [isPaused, images.length])

  const handleImageClick = () => {
    setIsPaused(true)
    setIsZoomed(true)
  }

  const handleImageClose = () => {
    setIsPaused(false)
    setIsZoomed(false)
  }

  const handleStartTrial = () => {
    openHubspotForm()
  }

  return (
    <section id="hero" className="bg-white text-purple-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-1/2 h-1/2 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-1/2 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headlines */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="block mb-4 opacity-0 animate-title-1">
              <span className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 bg-clip-text text-transparent">
                Eliminate Compliance Gaps.
              </span>
            </span>
            <span className="block mb-4 opacity-0 animate-title-2">
              <span className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 bg-clip-text text-transparent">
                Minimize Audit Risks.
              </span>
            </span>
            <span className="block opacity-0 animate-title-3">
              <span className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 bg-clip-text text-transparent">
                Trust. But Verify!
              </span>
            </span>
          </h1>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full max-w-6xl mx-auto mb-12">
          <div className="relative aspect-[16/9] bg-white rounded-lg shadow-lg overflow-hidden">
            {images.map((image, index) => (
              <div
                key={image.src}
                className="absolute inset-0 w-full h-full transition-opacity duration-1000"
                style={{
                  opacity: currentImageIndex === index ? 1 : 0,
                  zIndex: currentImageIndex === index ? 20 : 10,
                  pointerEvents: currentImageIndex === index ? 'auto' : 'none'
                }}
                onClick={handleImageClick}
              >
                <div className="relative w-full h-full p-8">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col space-y-4 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Button 
            size="lg" 
            className="group bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 text-lg px-6 py-4 sm:px-8 sm:py-6 font-semibold rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transform hover:-translate-y-0.5"
            onClick={handleStartTrial}
          >
            <span>Start Your Free Trial</span>
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition-all duration-300 text-lg px-6 py-4 sm:px-8 sm:py-6 font-semibold rounded-full shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transform hover:-translate-y-0.5"
            onClick={openHubspotMeeting}
          >
            Schedule a Demo
          </Button>
        </div>
      </div>

      {/* Zoomed Image Modal */}
      {isZoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={handleImageClose}>
          <div className="relative w-full max-w-7xl aspect-[16/9]">
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
