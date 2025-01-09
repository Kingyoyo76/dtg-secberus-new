'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

export function HeroSection() {
  const { openHubspotForm, openHubspotMeeting } = useCTAForm()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)

  const nextImage = useCallback(() => {
    if (!isPaused) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
  }, [isPaused])

  useEffect(() => {
    const timer = setInterval(nextImage, 8000)
    return () => clearInterval(timer)
  }, [nextImage])

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

  const handleStartTrial = () => {
    openHubspotForm()
  }

  const handleImageClick = () => {
    setIsPaused(true)
    setIsZoomed(true)
  }

  const handleImageClose = () => {
    setIsPaused(false)
    setIsZoomed(false)
  }

  return (
    <section id="hero" className="bg-purple-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-1/2 h-1/2 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-1/2 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headlines */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="block mb-4 opacity-0 animate-title-1">
              <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                Eliminate Compliance Gaps.
              </span>
            </span>
            <span className="block mb-4 opacity-0 animate-title-2">
              <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                Minimize Audit Risks.
              </span>
            </span>
            <span className="block opacity-0 animate-title-3">
              <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                Trust. But Verify!
              </span>
            </span>
          </h1>
        </div>

        {/* Image Carousel */}
        <div className="mb-8 md:mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="relative w-full max-w-5xl h-[280px] sm:h-[350px] md:h-[450px] mx-auto bg-white rounded-lg shadow-lg">
            {images.map((image, index) => (
              <div
                key={image.src}
                className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out"
                style={{
                  opacity: currentImageIndex === index ? 1 : 0,
                  transform: `translateY(${(index - currentImageIndex) * 20}px)`,
                  zIndex: currentImageIndex === index ? 20 : 10,
                }}
                onClick={handleImageClick}
              >
                <div className="relative w-full h-full p-4">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ 
                      objectFit: 'contain',
                    }}
                    className="transition-all duration-300"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col space-y-4 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Button 
            size="lg" 
            className="group bg-white text-purple-700 hover:bg-purple-50 transition-all duration-300 text-lg px-6 py-4 sm:px-8 sm:py-6 font-semibold rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transform hover:-translate-y-0.5"
            onClick={handleStartTrial}
          >
            <span>Start Your Free Trial</span>
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 transition-all duration-300 text-lg px-6 py-4 sm:px-8 sm:py-6 font-semibold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transform hover:-translate-y-0.5"
            onClick={openHubspotMeeting}
          >
            Schedule a Demo
          </Button>
        </div>
      </div>

      {/* Zoomed Image Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={handleImageClose}
        >
          <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg p-4">
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              fill
              style={{ objectFit: 'contain' }}
              className="transition-all duration-300"
              priority
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 30px) scale(0.95); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animate-title-1 {
          animation: fade-in-up 0.6s ease-out forwards;
          animation-delay: 0.2s;
        }
        .animate-title-2 {
          animation: fade-in-up 0.6s ease-out forwards;
          animation-delay: 0.4s;
        }
        .animate-title-3 {
          animation: fade-in-up 0.6s ease-out forwards;
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  )
}
