'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { useCTAForm } from '@/contexts/cta-form-context'
import { Button } from '@/components/ui/button'

const messages = [
  {
    headline: "100% of Trial Users Found Gaps Other Tools Missed!",
    className: "text-yellow-400"
  },
  {
    headline: "Why Risk Fines When We Can Help You Prevent Them?",
    className: "text-white"
  },
  {
    headline: "Use Secberus As Your Last Line of Defense!",
    className: "text-yellow-400"
  },
  {
    headline: "Cover All Your Bases with Secberus",
    className: "text-white"
  }
]

const INITIAL_DELAY = 15000 // 15 seconds before showing popup

const ConversionPopup = () => {
  const [shouldShow, setShouldShow] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { openHubspotForm } = useCTAForm()

  useEffect(() => {
    // Clear localStorage for testing
    localStorage.removeItem('hasSeenPopup')
    
    const timer = setTimeout(() => {
      setShouldShow(true)
    }, INITIAL_DELAY)

    return () => clearTimeout(timer)
  }, [])

  // Message rotation
  useEffect(() => {
    if (!shouldShow) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [shouldShow])

  const handleClose = () => {
    setShouldShow(false)
    localStorage.setItem('hasSeenPopup', 'true')
  }

  const handleStartTrial = () => {
    handleClose()
    openHubspotForm()
  }

  if (!shouldShow) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70">
      <div className="relative w-full max-w-lg bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 rounded-xl shadow-2xl p-6 md:p-8 text-white">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center space-y-6">
          <div className="h-32 flex items-center justify-center">
            <h2 
              key={currentIndex}
              className={`text-3xl md:text-4xl font-extrabold leading-tight transition-all duration-1000 ${messages[currentIndex].className}`}
              style={{ 
                opacity: 1,
                transform: 'translateY(0)',
                animation: 'fadeInUp 1s ease-out'
              }}
            >
              {messages[currentIndex].headline}
            </h2>
          </div>

          <Button
            onClick={handleStartTrial}
            className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ConversionPopup
